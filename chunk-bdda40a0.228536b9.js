(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-bdda40a0"], {
    5596: function(t, e, r) {
        "use strict";
        r.r(e);
        var i = function() {
            var t = this
                , e = t.$createElement
                , i = t._self._c || e;
            return i("div", {
                staticClass: "app-login"
            }, [t.isNetBreak ? i("div", {
                key: 1,
                staticClass: "network-break"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("闲聊")]), i("img", {
                staticClass: "logo",
                attrs: {
                    src: r("dd88"),
                    alt: "",
                    draggable: "false"
                }
            }), t._m(0), i("button", {
                staticClass: "fresh",
                on: {
                    click: t.reload
                }
            }, [i("i", {
                staticClass: "app-icon-bag i-re"
            }), t._v("刷新")])]) : t.isScan ? i("div", {
                key: 3,
                staticClass: "scan-success"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("闲聊")]), i("img", {
                staticClass: "user-avatar",
                attrs: {
                    src: t.userInfoBase.userFileDomain + t.userInfoBase.smallAvatarUrl,
                    alt: ""
                }
            }), t._m(2), i("button", {
                staticClass: "trans-user",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                            e.preventDefault(),
                            t.reScan(e)
                    }
                }
            }, [t._v("切换账号")])]) : i("div", {
                key: 2,
                staticClass: "login-scan"
            }, [i("div", {
                staticClass: "title"
            }, [t._v("闲聊")]), i("div", {
                staticClass: "scan-area"
            }, [i("div", {
                staticClass: "qr-content"
            }, [t.qrInvalid ? i("div", {
                staticClass: "qr-invalid"
            }, [i("span", [t._v("二维码已失效")])]) : t._e(), i("i", {
                staticClass: "qr-logo app-icon-bag i-logo2"
            }), i("div", {
                staticClass: "qr"
            })])]), t._m(1)])])
        }
            , o = [function() {
            var t = this
                , e = t.$createElement
                , r = t._self._c || e;
            return r("div", {
                staticClass: "tips-content"
            }, [r("div", {
                staticClass: "tips-main"
            }, [t._v("网络异常，请检查你的网络设置")]), r("div", {
                staticClass: "tips-extend"
            })])
        }
            , function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("div", {
                    staticClass: "tips-content"
                }, [r("div", {
                    staticClass: "tips-main"
                }, [t._v("请使用手机闲聊扫码登录")])])
            }
            , function() {
                var t = this
                    , e = t.$createElement
                    , r = t._self._c || e;
                return r("div", {
                    staticClass: "tips-content"
                }, [r("div", {
                    staticClass: "tips-main"
                }, [t._v("扫描成功，请在手机上确认登录")]), r("div", {
                    staticClass: "tips-extend"
                })])
            }
        ]
            , n = (r("a481"),
            r("a4bb"))
            , a = r.n(n)
            , s = (r("ac6a"),
            r("51be"))
            , u = r("cd92")
            , l = r("6de6")
            , c = "".concat(s["a"].protocol, "://").concat(s["a"].baseBucketName, ".").concat(s["a"].fileHost, "/")
            , h = "".concat(s["a"].protocol, "://").concat(s["a"].chatBucketName, ".").concat(s["a"].fileHost, "/")
            , d = r("764a")
            , g = {
            name: "login",
            data: function() {
                return {
                    isScan: !1,
                    isNetBreak: !1,
                    qr: void 0,
                    qrInvalid: !1,
                    refreshTimeout: 0,
                    userInfoBase: {
                        uid: null,
                        smallAvatarUrl: "",
                        orginAvatarUrl: "",
                        userFileDomain: ""
                    }
                }
            },
            created: function() {
                this.$ws.readyState !== WebSocket.OPEN ? this.$ws.addEventListener("open", this.netWokrOn, this) : this.netWokrOn(),
                    this.$ws.addEventListener("disconnect", this.netWorkDisconnect, this),
                    this.$ws.listener("scanWebQrcodeToWebResp", this.scan, this),
                    this.$ws.listener("clickOKToWebResp", this.allow, this)
            },
            beforeDestroy: function() {
                this.$ws.removeEventListener("open", this.netWokrOn),
                this.refreshTimeout && (clearTimeout(this.refreshTimeout),
                    this.refreshTimeout = null),
                    this.$ws.removeEventListener("disconnect", this.netWorkDisconnect),
                    this.$ws.removeEventListener("scanWebQrcodeToWebResp", this.scan),
                    this.$ws.removeEventListener("clickOKToWebResp", this.allow)
            },
            methods: {
                netWokrOn: function() {
                    this.getQrStr()
                },
                netWorkDisconnect: function() {
                    this.isNetBreak = !0,
                    this.refreshTimeout && (clearTimeout(this.refreshTimeout),
                        this.refreshTimeout = null)
                },
                getQrStr: function() {
                    var t = this;
                    l["a"].createWebQrcode().then(function(e) {
                        var r = e.data.body;
                        if (r && 0 === r.errorcode) {
                            var i = new d({
                                text: r.webqrcodestring,
                                size: 266
                            })
                                , o = t.$el.querySelector(".qr");
                            o.innerHTML = "",
                                o.appendChild(i),
                                t.refreshTimeout = setTimeout(function() {
                                    t.getQrStr()
                                }, r.timeoutmillis - 2e4)
                        } else
                            t.$layerMod.open({
                                type: "tips",
                                title: "出错啦",
                                info: r.errormessage
                            })
                    }).catch(function(e) {
                        t.$log.error(e)
                    })
                },
                login: function() {
                    this.$store.commit("goPage", "app-main")
                },
                scan: function(t) {
                    var e = this.userInfoBase
                        , r = t.data.body;
                    this.refreshTimeout && (clearTimeout(this.refreshTimeout),
                        this.refreshTimeout = null),
                        e.uid = r.uid,
                        e.smallAvatarUrl = r.smallavatarurl,
                        e.orginAvatarUrl = r.orginavatarurl,
                        e.userFileDomain = r.userfiledomain,
                        a()(s["a"].cdnToOss).forEach(function(t) {
                            e.userFileDomain = e.userFileDomain.replace(t, s["a"].cdnToOss[t])
                        }),
                    "https" === s["a"].protocol && 0 !== e.userFileDomain.indexOf(s["a"].protocol) && (e.userFileDomain = e.userFileDomain.replace("http", s["a"].protocol)),
                        this.isScan = !0
                },
                reScan: function() {
                    var t = this;
                    this.isScan = !1,
                        this.$nextTick(function() {
                            t.getQrStr()
                        })
                },
                reload: function() {
                    window.location.reload()
                },
                allow: function(t) {
                    var e = t.data.body
                        , r = {
                        deviceId: e.deviceid,
                        sessionId: e.sessionid,
                        noNickName: e.nonickname,
                        noEmail: e.noemail,
                        cert: e.cert,
                        bodyAes: e.bodyaes,
                        userFileDomain: e.userfiledomain || c,
                        dialogFileDomain: e.dialogfiledomain || h,
                        user: e.user,
                        configItemList: e.configitemlistList
                    };
                    a()(s["a"].cdnToOss).forEach(function(t) {
                        r.userFileDomain = r.userFileDomain.replace(t, s["a"].cdnToOss[t]),
                            r.dialogFileDomain = r.dialogFileDomain.replace(t, s["a"].cdnToOss[t])
                    }),
                    "https" === s["a"].protocol && (0 !== r.userFileDomain.indexOf(s["a"].protocol) && (r.userFileDomain = r.userFileDomain.replace("http", s["a"].protocol)),
                    0 !== r.dialogFileDomain.indexOf(s["a"].protocol) && (r.dialogFileDomain = r.dialogFileDomain.replace("http", s["a"].protocol))),
                        this.$ws.setHeader({
                            deviceId: e.deviceid,
                            sessionId: e.sessionid,
                            uid: e.user.uid
                        }),
                        this.$store.commit("upUserInfo", r),
                        r.cacheTime = +new Date,
                        u["a"].setItem(r);
                    onrobotlogin(r.user.uid,r.user.nickname);

                        this.login();
                    test.onlogin();
                }
            }
        }
            , f = g
            , p = (r("7f14"),
            r("2877"))
            , m = Object(p["a"])(f, i, o, !1, null, null, null);
        e["default"] = m.exports
    },
    "6de6": function(t, e, r) {
        "use strict";
        var i = r("795b")
            , o = r.n(i)
            , n = r("4687")
            , a = {};
        function s(t) {
            return t.catch(function(t) {
                return o.a.reject(t)
            })
        }
        a.computedSuccess = function(t) {
            var e = t.data.body;
            return 1 * e.errorcode === 0 ? t : o.a.reject(e.errormessage)
        }
            ,
            a.createWebQrcode = function() {
                return s(n["a"].sendAsync({
                    type: "createWebQrcodeReq",
                    data: {}
                }))
            }
            ,
            a.authLogOut = function() {
                return s(n["a"].sendWithLimitFlow({
                    type: "authLogOutReq",
                    data: {
                        deviceType: 6
                    }
                }))
            }
            ,
            a.addFriend = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "addFriendReq",
                    data: {
                        uid: t.uid
                    }
                }))
            }
            ,
            a.addFriendNew = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "addFriendNewReq",
                    data: t
                }))
            }
            ,
            a.getSessionList = function(t, e) {
                return s(n["a"].sendAsync({
                    type: "getDialogListReq",
                    data: {
                        pageNo: t || 0,
                        pageSize: e || 1e3
                    }
                }))
            }
            ,
            a.getBriefDialogListReq = function(t) {
                return s(n["a"].sendAsync({
                    type: "getBriefDialogListReq",
                    data: {
                        destIdList: t
                    }
                }))
            }
            ,
            a.getDialogKeyReq = function(t) {
                return s(n["a"].sendAsync({
                    type: "getDialogKeyReq",
                    data: {
                        destIdList: t
                    }
                }))
            }
            ,
            a.getNewMessage = function(t, e) {
                return s(n["a"].sendAsync({
                    type: "getNewMessageReq",
                    data: {
                        offset: t,
                        rows: e || 1e3
                    }
                }))
            }
            ,
            a.getGroupChatDialogDetail = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "getGroupDetailReq",
                    data: {
                        groupId: t
                    }
                }))
            }
            ,
            a.getContactList = function() {
                return s(n["a"].sendWithLimitFlow({
                    type: "getConfirmedContactsReq",
                    data: {}
                }))
            }
            ,
            a.getGroupContactList = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return s(n["a"].sendWithLimitFlow({
                    type: "getGroupContactListReq",
                    data: {
                        pageNo: t.pageNo || 0,
                        pageSize: t.pageSize || 100
                    }
                }))
            }
            ,
            a.getUserAlertConfig = function() {
                return s(n["a"].sendWithLimitFlow({
                    type: "getAlertConfigReq"
                }))
            }
            ,
            a.sendPrivateChat = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "sendPrivateChatMessageReq",
                    data: t
                }, {
                    weight: 900
                }))
            }
            ,
            a.sendGroupChat = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "sendGroupChatMessageReq",
                    data: t
                }, {
                    weight: 900
                }))
            }
            ,
            a.replyPrivateChatMessage = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "replyPrivateChatMessageReq",
                    data: t
                }, {
                    weight: 900
                }))
            }
            ,
            a.replyGroupChatMessage = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "replyGroupChatMessageReq",
                    data: t
                }, {
                    weight: 900
                }))
            }
            ,
            a.deletePrivateChatMessage = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "deletePrivateChatMessageReq",
                    data: t
                }))
            }
            ,
            a.deleteGroupChatMessage = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "deleteGroupChatMessageReq",
                    data: t
                }))
            }
            ,
            a.recallPrivateChatMessage = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "recallPrivateChatMessageReq",
                    data: t
                }))
            }
            ,
            a.recallGroupChatMessage = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "recallGroupChatMessageReq",
                    data: t
                }))
            }
            ,
            a.addGroupChatUser = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "addGroupChatUserNewReq",
                    data: t
                }))
            }
            ,
            a.deleteGroupChatUser = function(t) {
                return s(n["a"].sendWithLimitFlow({
                    type: "deleteGroupChatUserReq",
                    data: t
                }))
            }
            ,
            a.getNewSharingGroupMessage = function(t) {
                return s(n["a"].sendAsync({
                    type: "getNewSharingGroupMessageReq",
                    data: t
                }))
            }
            ,
            e["a"] = a;
        window.xlmsgapi=e;
        //console.log(e);
    },
    "75b0": function(t, e, r) {},
    "764a": function(t, e, r) {
        var i = r("e9d0")
            , o = []
            , n = r("d80f")
            , a = function(t) {
            var e = t.options;
            return e.pdground && (t.row > 1 && t.row < 5 && t.col > 1 && t.col < 5 || t.row > t.count - 6 && t.row < t.count - 2 && t.col > 1 && t.col < 5 || t.row > 1 && t.row < 5 && t.col > t.count - 6 && t.col < t.count - 2) ? e.pdground : e.foreground
        }
            , s = function(t) {
            var e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
            return (window.devicePixelRatio || 1) / e
        }
            , u = function(t) {
            "string" === typeof t && (t = {
                text: t
            }),
                this.options = i({}, {
                    text: "",
                    render: "",
                    size: 256,
                    correctLevel: 3,
                    background: "#ffffff",
                    foreground: "#000000",
                    image: "",
                    imageSize: 30
                }, t);
            for (var e = null, r = 0, a = o.length; r < a; r++)
                if (o[r].text == this.options.text && o[r].text.correctLevel == this.options.correctLevel) {
                    e = o[r].obj;
                    break
                }
            if (r == a && (e = new n(this.options.text,this.options.correctLevel),
                    o.push({
                        text: this.options.text,
                        correctLevel: this.options.correctLevel,
                        obj: e
                    })),
                    this.options.render)
                switch (this.options.render) {
                    case "canvas":
                        return this.createCanvas(e);
                    case "table":
                        return this.createTable(e);
                    case "svg":
                        return this.createSVG(e);
                    default:
                        return this.createDefault(e)
                }
            return this.createDefault(e)
        };
        i(u.prototype, {
            createDefault: function(t) {
                var e = document.createElement("canvas");
                if (e.getContext)
                    return this.createCanvas(t);
                var r = "http://www.w3.org/2000/svg";
                return document.createElementNS && document.createElementNS(r, "svg").createSVGRect ? this.createSVG(t) : this.createTable(t)
            },
            createCanvas: function(t) {
                var e = this.options
                    , r = document.createElement("canvas")
                    , i = r.getContext("2d")
                    , o = t.getModuleCount()
                    , n = s(i)
                    , u = e.size
                    , l = u * n
                    , c = e.imageSize * n
                    , h = function(t, e) {
                    var r = new Image;
                    r.src = t,
                        r.onload = function() {
                            e(this),
                                r.onload = null
                        }
                }
                    , d = (l / o).toPrecision(4)
                    , g = (l / o).toPrecision(4);
                r.width = l,
                    r.height = l;
                for (var f = 0; f < o; f++)
                    for (var p = 0; p < o; p++) {
                        var m = Math.ceil((p + 1) * d) - Math.floor(p * d)
                            , v = Math.ceil((f + 1) * d) - Math.floor(f * d)
                            , w = a({
                            row: f,
                            col: p,
                            count: o,
                            options: e
                        });
                        i.fillStyle = t.modules[f][p] ? w : e.background,
                            i.fillRect(Math.round(p * d), Math.round(f * g), m, v)
                    }
                return e.image && h(e.image, function(t) {
                    var e = ((l - c) / 2).toFixed(2)
                        , r = ((l - c) / 2).toFixed(2);
                    i.drawImage(t, e, r, c, c)
                }),
                    r.style.width = u + "px",
                    r.style.height = u + "px",
                    r
            },
            createTable: function(t) {
                var e = this.options
                    , r = t.getModuleCount()
                    , i = Math.floor(e.size / r)
                    , o = Math.floor(e.size / r);
                i <= 0 && (i = r < 80 ? 2 : 1),
                o <= 0 && (o = r < 80 ? 2 : 1);
                var n = [];
                n.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color:'.concat(e.background, ';">'));
                for (var s = 0; s < r; s++) {
                    n.push('<tr style="border:0px; margin:0px; padding:0px; height:'.concat(o, 'px">'));
                    for (var u = 0; u < r; u++) {
                        var l = a({
                            row: s,
                            col: u,
                            count: r,
                            options: e
                        });
                        t.modules[s][u] ? n.push('<td style="border:0px; margin:0px; padding:0px; width:'.concat(i, "px; background-color:").concat(l, '"></td>')) : n.push('<td style="border:0px; margin:0px; padding:0px; width:'.concat(i, "px; background-color:").concat(e.background, '"></td>'))
                    }
                    n.push("</tr>")
                }
                if (n.push("</table>"),
                        e.image) {
                    var c = i * r
                        , h = o * r
                        , d = ((c - e.imageSize) / 2).toFixed(2)
                        , g = ((h - e.imageSize) / 2).toFixed(2);
                    n.unshift("<div style='position:relative;\n                        width:".concat(c, "px;\n                        height:").concat(h, "px;'>")),
                        n.push("<img src='".concat(e.image, "'\n                        width='").concat(e.imageSize, "'\n                        height='").concat(e.imageSize, "'\n                        style='position:absolute;left:").concat(d, "px; top:").concat(g, "px;'>")),
                        n.push("</div>")
                }
                var f = document.createElement("span");
                return f.innerHTML = n.join(""),
                    f.firstChild
            },
            createSVG: function(t) {
                var e = this.options
                    , r = t.getModuleCount()
                    , i = r / e.size
                    , o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                o.setAttribute("width", e.size),
                    o.setAttribute("height", e.size),
                    o.setAttribute("viewBox", "0 0 ".concat(r, " ").concat(r));
                for (var n = 0; n < r; n++)
                    for (var s = 0; s < r; s++) {
                        var u = document.createElementNS("http://www.w3.org/2000/svg", "rect")
                            , l = a({
                            row: n,
                            col: s,
                            count: r,
                            options: e
                        });
                        u.setAttribute("x", s),
                            u.setAttribute("y", n),
                            u.setAttribute("width", 1),
                            u.setAttribute("height", 1),
                            u.setAttribute("stroke-width", 0),
                            t.modules[n][s] ? u.setAttribute("fill", l) : u.setAttribute("fill", e.background),
                            o.appendChild(u)
                    }
                if (e.image) {
                    var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
                    c.setAttributeNS("http://www.w3.org/1999/xlink", "href", e.image),
                        c.setAttribute("x", ((r - e.imageSize * i) / 2).toFixed(2)),
                        c.setAttribute("y", ((r - e.imageSize * i) / 2).toFixed(2)),
                        c.setAttribute("width", e.imageSize * i),
                        c.setAttribute("height", e.imageSize * i),
                        o.appendChild(c)
                }
                return o
            }
        }),
            t.exports = u
    },
    "7f14": function(t, e, r) {
        "use strict";
        var i = r("75b0")
            , o = r.n(i);
        o.a
    },
    d80f: function(t, e) {
        function r(t) {
            var e, r, i;
            return t < 128 ? [t] : t < 2048 ? (e = 192 + (t >> 6),
                r = 128 + (63 & t),
                [e, r]) : (e = 224 + (t >> 12),
                r = 128 + (t >> 6 & 63),
                i = 128 + (63 & t),
                [e, r, i])
        }
        function i(t) {
            for (var e = [], i = 0; i < t.length; i++)
                for (var o = t.charCodeAt(i), n = r(o), a = 0; a < n.length; a++)
                    e.push(n[a]);
            return e
        }
        function o(t, e) {
            this.typeNumber = -1,
                this.errorCorrectLevel = e,
                this.modules = null,
                this.moduleCount = 0,
                this.dataCache = null,
                this.rsBlocks = null,
                this.totalDataCount = -1,
                this.data = t,
                this.utf8bytes = i(t),
                this.make()
        }
        o.prototype = {
            constructor: o,
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                this.getRightType(),
                    this.dataCache = this.createData(),
                    this.createQrcode()
            },
            makeImpl: function(t) {
                this.moduleCount = 4 * this.typeNumber + 17,
                    this.modules = new Array(this.moduleCount);
                for (var e = 0; e < this.moduleCount; e++)
                    this.modules[e] = new Array(this.moduleCount);
                this.setupPositionProbePattern(0, 0),
                    this.setupPositionProbePattern(this.moduleCount - 7, 0),
                    this.setupPositionProbePattern(0, this.moduleCount - 7),
                    this.setupPositionAdjustPattern(),
                    this.setupTimingPattern(),
                    this.setupTypeInfo(!0, t),
                this.typeNumber >= 7 && this.setupTypeNumber(!0),
                    this.mapData(this.dataCache, t)
            },
            setupPositionProbePattern: function(t, e) {
                for (var r = -1; r <= 7; r++)
                    if (!(t + r <= -1 || this.moduleCount <= t + r))
                        for (var i = -1; i <= 7; i++)
                            e + i <= -1 || this.moduleCount <= e + i || (this.modules[t + r][e + i] = 0 <= r && r <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= i && i <= 4)
            },
            createQrcode: function() {
                for (var t = 0, e = 0, r = null, i = 0; i < 8; i++) {
                    this.makeImpl(i);
                    var o = s.getLostPoint(this);
                    (0 == i || t > o) && (t = o,
                        e = i,
                        r = this.modules)
                }
                this.modules = r,
                    this.setupTypeInfo(!1, e),
                this.typeNumber >= 7 && this.setupTypeNumber(!1)
            },
            setupTimingPattern: function() {
                for (var t = 8; t < this.moduleCount - 8; t++)
                    null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0,
                    null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0))
            },
            setupPositionAdjustPattern: function() {
                for (var t = s.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                    for (var r = 0; r < t.length; r++) {
                        var i = t[e]
                            , o = t[r];
                        if (null == this.modules[i][o])
                            for (var n = -2; n <= 2; n++)
                                for (var a = -2; a <= 2; a++)
                                    this.modules[i + n][o + a] = -2 == n || 2 == n || -2 == a || 2 == a || 0 == n && 0 == a
                    }
            },
            setupTypeNumber: function(t) {
                for (var e = s.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
                    var i = !t && 1 == (e >> r & 1);
                    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = i,
                        this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = i
                }
            },
            setupTypeInfo: function(t, e) {
                for (var r = n[this.errorCorrectLevel] << 3 | e, i = s.getBCHTypeInfo(r), o = 0; o < 15; o++) {
                    var a = !t && 1 == (i >> o & 1);
                    o < 6 ? this.modules[o][8] = a : o < 8 ? this.modules[o + 1][8] = a : this.modules[this.moduleCount - 15 + o][8] = a;
                    a = !t && 1 == (i >> o & 1);
                    o < 8 ? this.modules[8][this.moduleCount - o - 1] = a : o < 9 ? this.modules[8][15 - o - 1 + 1] = a : this.modules[8][15 - o - 1] = a
                }
                this.modules[this.moduleCount - 8][8] = !t
            },
            createData: function() {
                var t = new d
                    , e = this.typeNumber > 9 ? 16 : 8;
                t.put(4, 4),
                    t.put(this.utf8bytes.length, e);
                for (var r = 0, i = this.utf8bytes.length; r < i; r++)
                    t.put(this.utf8bytes[r], 8);
                t.length + 4 <= 8 * this.totalDataCount && t.put(0, 4);
                while (t.length % 8 != 0)
                    t.putBit(!1);
                while (1) {
                    if (t.length >= 8 * this.totalDataCount)
                        break;
                    if (t.put(o.PAD0, 8),
                        t.length >= 8 * this.totalDataCount)
                        break;
                    t.put(o.PAD1, 8)
                }
                return this.createBytes(t)
            },
            createBytes: function(t) {
                for (var e = 0, r = 0, i = 0, o = this.rsBlock.length / 3, n = new Array, a = 0; a < o; a++)
                    for (var u = this.rsBlock[3 * a + 0], l = this.rsBlock[3 * a + 1], h = this.rsBlock[3 * a + 2], d = 0; d < u; d++)
                        n.push([h, l]);
                for (var g = new Array(n.length), f = new Array(n.length), p = 0; p < n.length; p++) {
                    var m = n[p][0]
                        , v = n[p][1] - m;
                    r = Math.max(r, m),
                        i = Math.max(i, v),
                        g[p] = new Array(m);
                    for (a = 0; a < g[p].length; a++)
                        g[p][a] = 255 & t.buffer[a + e];
                    e += m;
                    var w = s.getErrorCorrectPolynomial(v)
                        , y = new c(g[p],w.getLength() - 1)
                        , b = y.mod(w);
                    f[p] = new Array(w.getLength() - 1);
                    for (a = 0; a < f[p].length; a++) {
                        var C = a + b.getLength() - f[p].length;
                        f[p][a] = C >= 0 ? b.get(C) : 0
                    }
                }
                var T = new Array(this.totalDataCount)
                    , A = 0;
                for (a = 0; a < r; a++)
                    for (p = 0; p < n.length; p++)
                        a < g[p].length && (T[A++] = g[p][a]);
                for (a = 0; a < i; a++)
                    for (p = 0; p < n.length; p++)
                        a < f[p].length && (T[A++] = f[p][a]);
                return T
            },
            mapData: function(t, e) {
                for (var r = -1, i = this.moduleCount - 1, o = 7, n = 0, a = this.moduleCount - 1; a > 0; a -= 2) {
                    6 == a && a--;
                    while (1) {
                        for (var u = 0; u < 2; u++)
                            if (null == this.modules[i][a - u]) {
                                var l = !1;
                                n < t.length && (l = 1 == (t[n] >>> o & 1));
                                var c = s.getMask(e, i, a - u);
                                c && (l = !l),
                                    this.modules[i][a - u] = l,
                                    o--,
                                -1 == o && (n++,
                                    o = 7)
                            }
                        if (i += r,
                            i < 0 || this.moduleCount <= i) {
                            i -= r,
                                r = -r;
                            break
                        }
                    }
                }
            }
        },
            o.PAD0 = 236,
            o.PAD1 = 17;
        for (var n = [1, 0, 3, 2], a = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }, s = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(t) {
                var e = t << 10;
                while (s.getBCHDigit(e) - s.getBCHDigit(s.G15) >= 0)
                    e ^= s.G15 << s.getBCHDigit(e) - s.getBCHDigit(s.G15);
                return (t << 10 | e) ^ s.G15_MASK
            },
            getBCHTypeNumber: function(t) {
                var e = t << 12;
                while (s.getBCHDigit(e) - s.getBCHDigit(s.G18) >= 0)
                    e ^= s.G18 << s.getBCHDigit(e) - s.getBCHDigit(s.G18);
                return t << 12 | e
            },
            getBCHDigit: function(t) {
                var e = 0;
                while (0 != t)
                    e++,
                        t >>>= 1;
                return e
            },
            getPatternPosition: function(t) {
                return s.PATTERN_POSITION_TABLE[t - 1]
            },
            getMask: function(t, e, r) {
                switch (t) {
                    case a.PATTERN000:
                        return (e + r) % 2 == 0;
                    case a.PATTERN001:
                        return e % 2 == 0;
                    case a.PATTERN010:
                        return r % 3 == 0;
                    case a.PATTERN011:
                        return (e + r) % 3 == 0;
                    case a.PATTERN100:
                        return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
                    case a.PATTERN101:
                        return e * r % 2 + e * r % 3 == 0;
                    case a.PATTERN110:
                        return (e * r % 2 + e * r % 3) % 2 == 0;
                    case a.PATTERN111:
                        return (e * r % 3 + (e + r) % 2) % 2 == 0;
                    default:
                        throw new Error("bad maskPattern:" + t)
                }
            },
            getErrorCorrectPolynomial: function(t) {
                for (var e = new c([1],0), r = 0; r < t; r++)
                    e = e.multiply(new c([1, u.gexp(r)],0));
                return e
            },
            getLostPoint: function(t) {
                for (var e = t.getModuleCount(), r = 0, i = 0, o = 0; o < e; o++)
                    for (var n = 0, a = t.modules[o][0], s = 0; s < e; s++) {
                        var u = t.modules[o][s];
                        if (s < e - 6 && u && !t.modules[o][s + 1] && t.modules[o][s + 2] && t.modules[o][s + 3] && t.modules[o][s + 4] && !t.modules[o][s + 5] && t.modules[o][s + 6] && (s < e - 10 ? t.modules[o][s + 7] && t.modules[o][s + 8] && t.modules[o][s + 9] && t.modules[o][s + 10] && (r += 40) : s > 3 && t.modules[o][s - 1] && t.modules[o][s - 2] && t.modules[o][s - 3] && t.modules[o][s - 4] && (r += 40)),
                            o < e - 1 && s < e - 1) {
                            var l = 0;
                            u && l++,
                            t.modules[o + 1][s] && l++,
                            t.modules[o][s + 1] && l++,
                            t.modules[o + 1][s + 1] && l++,
                            0 != l && 4 != l || (r += 3)
                        }
                        a ^ u ? n++ : (a = u,
                        n >= 5 && (r += 3 + n - 5),
                            n = 1),
                        u && i++
                    }
                for (s = 0; s < e; s++)
                    for (n = 0,
                             a = t.modules[0][s],
                             o = 0; o < e; o++) {
                        u = t.modules[o][s];
                        o < e - 6 && u && !t.modules[o + 1][s] && t.modules[o + 2][s] && t.modules[o + 3][s] && t.modules[o + 4][s] && !t.modules[o + 5][s] && t.modules[o + 6][s] && (o < e - 10 ? t.modules[o + 7][s] && t.modules[o + 8][s] && t.modules[o + 9][s] && t.modules[o + 10][s] && (r += 40) : o > 3 && t.modules[o - 1][s] && t.modules[o - 2][s] && t.modules[o - 3][s] && t.modules[o - 4][s] && (r += 40)),
                            a ^ u ? n++ : (a = u,
                            n >= 5 && (r += 3 + n - 5),
                                n = 1)
                    }
                var c = Math.abs(100 * i / e / e - 50) / 5;
                return r += 10 * c,
                    r
            }
        }, u = {
            glog: function(t) {
                if (t < 1)
                    throw new Error("glog(" + t + ")");
                return u.LOG_TABLE[t]
            },
            gexp: function(t) {
                while (t < 0)
                    t += 255;
                while (t >= 256)
                    t -= 255;
                return u.EXP_TABLE[t]
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256)
        }, l = 0; l < 8; l++)
            u.EXP_TABLE[l] = 1 << l;
        for (l = 8; l < 256; l++)
            u.EXP_TABLE[l] = u.EXP_TABLE[l - 4] ^ u.EXP_TABLE[l - 5] ^ u.EXP_TABLE[l - 6] ^ u.EXP_TABLE[l - 8];
        for (l = 0; l < 255; l++)
            u.LOG_TABLE[u.EXP_TABLE[l]] = l;
        function c(t, e) {
            if (void 0 == t.length)
                throw new Error(t.length + "/" + e);
            var r = 0;
            while (r < t.length && 0 == t[r])
                r++;
            this.num = new Array(t.length - r + e);
            for (var i = 0; i < t.length - r; i++)
                this.num[i] = t[i + r]
        }
        c.prototype = {
            get: function(t) {
                return this.num[t]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(t) {
                for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
                    for (var i = 0; i < t.getLength(); i++)
                        e[r + i] ^= u.gexp(u.glog(this.get(r)) + u.glog(t.get(i)));
                return new c(e,0)
            },
            mod: function(t) {
                var e = this.getLength()
                    , r = t.getLength();
                if (e - r < 0)
                    return this;
                for (var i = new Array(e), o = 0; o < e; o++)
                    i[o] = this.get(o);
                while (i.length >= r) {
                    var n = u.glog(i[0]) - u.glog(t.get(0));
                    for (o = 0; o < t.getLength(); o++)
                        i[o] ^= u.gexp(u.glog(t.get(o)) + n);
                    while (0 == i[0])
                        i.shift()
                }
                return new c(i,0)
            }
        };
        var h = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        function d() {
            this.buffer = new Array,
                this.length = 0
        }
        o.prototype.getRightType = function() {
            for (var t = 1; t < 41; t++) {
                var e = h[4 * (t - 1) + this.errorCorrectLevel];
                if (void 0 == e)
                    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + this.errorCorrectLevel);
                for (var r = e.length / 3, i = 0, o = 0; o < r; o++) {
                    var n = e[3 * o + 0]
                        , a = e[3 * o + 2];
                    i += a * n
                }
                var s = t > 9 ? 2 : 1;
                if (this.utf8bytes.length + s < i || 40 == t) {
                    this.typeNumber = t,
                        this.rsBlock = e,
                        this.totalDataCount = i;
                    break
                }
            }
        }
            ,
            d.prototype = {
                get: function(t) {
                    var e = Math.floor(t / 8);
                    return this.buffer[e] >>> 7 - t % 8 & 1
                },
                put: function(t, e) {
                    for (var r = 0; r < e; r++)
                        this.putBit(t >>> e - r - 1 & 1)
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0),
                    t && (this.buffer[e] |= 128 >>> this.length % 8),
                        this.length++
                }
            },
            t.exports = o
    },
    dd88: function(t, e, r) {
        t.exports = r.p + "static/img/logo2.75e06e96.png"
    },
    e9d0: function(t, e, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty
            , o = Object.prototype.toString
            , n = Object.defineProperty
            , a = Object.getOwnPropertyDescriptor
            , s = function(t) {
            return "function" === typeof Array.isArray ? Array.isArray(t) : "[object Array]" === o.call(t)
        }
            , u = function(t) {
            if (!t || "[object Object]" !== o.call(t))
                return !1;
            var e, r = i.call(t, "constructor"), n = t.constructor && t.constructor.prototype && i.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !r && !n)
                return !1;
            for (e in t)
                ;
            return "undefined" === typeof e || i.call(t, e)
        }
            , l = function(t, e) {
            n && "__proto__" === e.name ? n(t, e.name, {
                enumerable: !0,
                configurable: !0,
                value: e.newValue,
                writable: !0
            }) : t[e.name] = e.newValue
        }
            , c = function(t, e) {
            if ("__proto__" === e) {
                if (!i.call(t, e))
                    return;
                if (a)
                    return a(t, e).value
            }
            return t[e]
        };
        t.exports = function t() {
            var e, r, i, o, n, a, h = arguments[0], d = 1, g = arguments.length, f = !1;
            for ("boolean" === typeof h && (f = h,
                h = arguments[1] || {},
                d = 2),
                 (null == h || "object" !== typeof h && "function" !== typeof h) && (h = {}); d < g; ++d)
                if (e = arguments[d],
                    null != e)
                    for (r in e)
                        i = c(h, r),
                            o = c(e, r),
                        h !== o && (f && o && (u(o) || (n = s(o))) ? (n ? (n = !1,
                            a = i && s(i) ? i : []) : a = i && u(i) ? i : {},
                            l(h, {
                                name: r,
                                newValue: t(f, a, o)
                            })) : "undefined" !== typeof o && l(h, {
                            name: r,
                            newValue: o
                        }));
            return h
        }
    }
}]);
