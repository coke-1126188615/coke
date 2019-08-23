(function(e) {
        function t(t) {
            for (var o, i, n = t[0], p = t[1], l = t[2], g = 0, u = []; g < n.length; g++)
                i = n[g],
                s[i] && u.push(s[i][0]),
                    s[i] = 0;
            for (o in p)
                Object.prototype.hasOwnProperty.call(p, o) && (e[o] = p[o]);
            d && d(t);
            while (u.length)
                u.shift()();
            return a.push.apply(a, l || []),
                r()
        }
        function r() {
            for (var e, t = 0; t < a.length; t++) {
                for (var r = a[t], o = !0, i = 1; i < r.length; i++) {
                    var n = r[i];
                    0 !== s[n] && (o = !1)
                }
                o && (a.splice(t--, 1),
                    e = p(p.s = r[0]))
            }
            return e
        }
        var o = {}
            , i = {
            app: 0
        }
            , s = {
            app: 0
        }
            , a = [];
        function n(e) {
            return p.p + "static/js/" + ({}[e] || e) + "." + {
                    "chunk-bdda40a0": "228536b9",
                    "chunk-c34909f4": "ebb67efa",
                    "chunk-f4dafb40": "b2f0e90e"
                }[e] + ".js"
        }
        function p(t) {
            if (o[t])
                return o[t].exports;
            var r = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, p),
                r.l = !0,
                r.exports
        }
        p.e = function(e) {
            var t = []
                , r = {
                "chunk-bdda40a0": 1,
                "chunk-c34909f4": 1,
                "chunk-f4dafb40": 1
            };
            i[e] ? t.push(i[e]) : 0 !== i[e] && r[e] && t.push(i[e] = new Promise(function(t, r) {
                    for (var o = "static/css/" + ({}[e] || e) + "." + {
                            "chunk-bdda40a0": "0f89ccdf",
                            "chunk-c34909f4": "b81bacb3",
                            "chunk-f4dafb40": "18c3e4f4"
                        }[e] + ".css", s = p.p + o, a = document.getElementsByTagName("link"), n = 0; n < a.length; n++) {
                        var l = a[n]
                            , g = l.getAttribute("data-href") || l.getAttribute("href");
                        if ("stylesheet" === l.rel && (g === o || g === s))
                            return t()
                    }
                    var u = document.getElementsByTagName("style");
                    for (n = 0; n < u.length; n++) {
                        l = u[n],
                            g = l.getAttribute("data-href");
                        if (g === o || g === s)
                            return t()
                    }
                    var d = document.createElement("link");
                    d.rel = "stylesheet",
                        d.type = "text/css",
                        d.onload = t,
                        d.onerror = function(t) {
                            var o = t && t.target && t.target.src || s
                                , a = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                            a.request = o,
                                delete i[e],
                                d.parentNode.removeChild(d),
                                r(a)
                        }
                        ,
                        d.href = s;
                    var c = document.getElementsByTagName("head")[0];
                    c.appendChild(d)
                }
            ).then(function() {
                i[e] = 0
            }));
            var o = s[e];
            if (0 !== o)
                if (o)
                    t.push(o[2]);
                else {
                    var a = new Promise(function(t, r) {
                            o = s[e] = [t, r]
                        }
                    );
                    t.push(o[2] = a);
                    var l, g = document.createElement("script");
                    g.charset = "utf-8",
                        g.timeout = 120,
                    p.nc && g.setAttribute("nonce", p.nc),
                        g.src = n(e),
                        l = function(t) {
                            g.onerror = g.onload = null,
                                clearTimeout(u);
                            var r = s[e];
                            if (0 !== r) {
                                if (r) {
                                    var o = t && ("load" === t.type ? "missing" : t.type)
                                        , i = t && t.target && t.target.src
                                        , a = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                                    a.type = o,
                                        a.request = i,
                                        r[1](a)
                                }
                                s[e] = void 0
                            }
                        }
                    ;
                    var u = setTimeout(function() {
                        l({
                            type: "timeout",
                            target: g
                        })
                    }, 12e4);
                    g.onerror = g.onload = l,
                        document.head.appendChild(g)
                }
            return Promise.all(t)
        }
            ,
            p.m = e,
            p.c = o,
            p.d = function(e, t, r) {
                p.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }
            ,
            p.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            p.t = function(e, t) {
                if (1 & t && (e = p(e)),
                    8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (p.r(r),
                        Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }),
                    2 & t && "string" != typeof e)
                    for (var o in e)
                        p.d(r, o, function(t) {
                            return e[t]
                        }
                            .bind(null, o));
                return r
            }
            ,
            p.n = function(e) {
                var t = e && e.__esModule ? function() {
                        return e["default"]
                    }
                        : function() {
                        return e
                    }
                    ;
                return p.d(t, "a", t),
                    t
            }
            ,
            p.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            p.p = "/",
            p.oe = function(e) {
                throw console.error(e),
                    e
            }
        ;
        var l = window["webpackJsonp"] = window["webpackJsonp"] || []
            , g = l.push.bind(l);
        l.push = t,
            l = l.slice();
        for (var u = 0; u < l.length; u++)
            t(l[u]);
        var d = g;
        a.push([0, "chunk-vendors"]),
            r()
    }
)({
    0: function(e, t, r) {
        e.exports = r("56d7");
        e.exports = r("test");
    },
    "test":function(e,t,r){
        window.xlroot=r;
    },
    "017e": function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")()
            , a = r("8d32");
        i.exportSymbol("proto.AddGroupChatUserNewReq", null, s),
            i.exportSymbol("proto.AddGroupChatUserNewResp", null, s),
            i.exportSymbol("proto.CreateGroupChatDialogReq", null, s),
            i.exportSymbol("proto.CreateGroupChatDialogResp", null, s),
            i.exportSymbol("proto.DeleteGroupChatUserReq", null, s),
            i.exportSymbol("proto.DeleteGroupChatUserResp", null, s),
            i.exportSymbol("proto.ForwardMessageToGroupChatReq", null, s),
            i.exportSymbol("proto.ForwardMessageToGroupChatResp", null, s),
            i.exportSymbol("proto.GetGroupChatDialogDetailNewReq", null, s),
            i.exportSymbol("proto.GetGroupChatDialogDetailNewResp", null, s),
            i.exportSymbol("proto.GetGroupDetailReq", null, s),
            i.exportSymbol("proto.GetGroupDetailResp", null, s),
            i.exportSymbol("proto.GetGroupDetailResp.GroupMemberBriefInfo", null, s),
            i.exportSymbol("proto.GetNewSharingGroupMessageReq", null, s),
            i.exportSymbol("proto.GetNewSharingGroupMessageResp", null, s),
            i.exportSymbol("proto.GroupMember", null, s),
            i.exportSymbol("proto.GroupMemberSilenceInfo", null, s),
            i.exportSymbol("proto.RecallGroupChatMessageReq", null, s),
            i.exportSymbol("proto.RecallGroupChatMessageResp", null, s),
            i.exportSymbol("proto.ReplyGroupChatMessageReq", null, s),
            i.exportSymbol("proto.ReplyGroupChatMessageResp", null, s),
            i.exportSymbol("proto.SendGroupChatMessageReq", null, s),
            i.exportSymbol("proto.SendGroupChatMessageResp", null, s),
            proto.GroupMember = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.GroupMember, o.Message),
        i.DEBUG && !COMPILED && (proto.GroupMember.displayName = "proto.GroupMember"),
        o.Message.GENERATE_TO_OBJECT && (proto.GroupMember.prototype.toObject = function(e) {
                return proto.GroupMember.toObject(e, this)
            }
                ,
                proto.GroupMember.toObject = function(e, t) {
                    var r = {
                        memberuid: o.Message.getFieldWithDefault(t, 1, 0),
                        membername: o.Message.getFieldWithDefault(t, 2, ""),
                        memberalias: o.Message.getFieldWithDefault(t, 3, ""),
                        membersmallavatarurl: o.Message.getFieldWithDefault(t, 4, ""),
                        referenceuid: o.Message.getFieldWithDefault(t, 5, 0),
                        jointime: o.Message.getFieldWithDefault(t, 6, 0),
                        admin: o.Message.getFieldWithDefault(t, 7, !1),
                        referencenickname: o.Message.getFieldWithDefault(t, 8, ""),
                        joinchannel: o.Message.getFieldWithDefault(t, 9, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GroupMember.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GroupMember;
                return proto.GroupMember.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GroupMember.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setMemberuid(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setMembername(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setMemberalias(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setMembersmallavatarurl(o);
                            break;
                        case 5:
                            o = t.readInt64String();
                            e.setReferenceuid(o);
                            break;
                        case 6:
                            o = t.readInt64String();
                            e.setJointime(o);
                            break;
                        case 7:
                            o = t.readBool();
                            e.setAdmin(o);
                            break;
                        case 8:
                            o = t.readString();
                            e.setReferencenickname(o);
                            break;
                        case 9:
                            o = t.readInt32();
                            e.setJoinchannel(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GroupMember.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GroupMember.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GroupMember.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getMemberuid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getMembername(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getMemberalias(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getMembersmallavatarurl(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getReferenceuid(),
                0 !== r && t.writeInt64String(5, r),
                    r = e.getJointime(),
                0 !== r && t.writeInt64String(6, r),
                    r = e.getAdmin(),
                r && t.writeBool(7, r),
                    r = e.getReferencenickname(),
                r.length > 0 && t.writeString(8, r),
                    r = e.getJoinchannel(),
                0 !== r && t.writeInt32(9, r)
            }
            ,
            proto.GroupMember.prototype.getMemberuid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.GroupMember.prototype.setMemberuid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.GroupMember.prototype.getMembername = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.GroupMember.prototype.setMembername = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.GroupMember.prototype.getMemberalias = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.GroupMember.prototype.setMemberalias = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.GroupMember.prototype.getMembersmallavatarurl = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.GroupMember.prototype.setMembersmallavatarurl = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.GroupMember.prototype.getReferenceuid = function() {
                return o.Message.getFieldWithDefault(this, 5, 0)
            }
            ,
            proto.GroupMember.prototype.setReferenceuid = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.GroupMember.prototype.getJointime = function() {
                return o.Message.getFieldWithDefault(this, 6, 0)
            }
            ,
            proto.GroupMember.prototype.setJointime = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.GroupMember.prototype.getAdmin = function() {
                return o.Message.getFieldWithDefault(this, 7, !1)
            }
            ,
            proto.GroupMember.prototype.setAdmin = function(e) {
                o.Message.setField(this, 7, e)
            }
            ,
            proto.GroupMember.prototype.getReferencenickname = function() {
                return o.Message.getFieldWithDefault(this, 8, "")
            }
            ,
            proto.GroupMember.prototype.setReferencenickname = function(e) {
                o.Message.setField(this, 8, e)
            }
            ,
            proto.GroupMember.prototype.getJoinchannel = function() {
                return o.Message.getFieldWithDefault(this, 9, 0)
            }
            ,
            proto.GroupMember.prototype.setJoinchannel = function(e) {
                o.Message.setField(this, 9, e)
            }
            ,
            proto.CreateGroupChatDialogReq = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.CreateGroupChatDialogReq.repeatedFields_, null)
            }
            ,
            i.inherits(proto.CreateGroupChatDialogReq, o.Message),
        i.DEBUG && !COMPILED && (proto.CreateGroupChatDialogReq.displayName = "proto.CreateGroupChatDialogReq"),
            proto.CreateGroupChatDialogReq.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.CreateGroupChatDialogReq.prototype.toObject = function(e) {
                return proto.CreateGroupChatDialogReq.toObject(e, this)
            }
                ,
                proto.CreateGroupChatDialogReq.toObject = function(e, t) {
                    var r = {
                        memberuidList: o.Message.getField(t, 1)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.CreateGroupChatDialogReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.CreateGroupChatDialogReq;
                return proto.CreateGroupChatDialogReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.CreateGroupChatDialogReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readPackedInt64();
                            e.setMemberuidList(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.CreateGroupChatDialogReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.CreateGroupChatDialogReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.CreateGroupChatDialogReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getMemberuidList(),
                r.length > 0 && t.writePackedInt64(1, r)
            }
            ,
            proto.CreateGroupChatDialogReq.prototype.getMemberuidList = function() {
                return o.Message.getField(this, 1)
            }
            ,
            proto.CreateGroupChatDialogReq.prototype.setMemberuidList = function(e) {
                o.Message.setField(this, 1, e || [])
            }
            ,
            proto.CreateGroupChatDialogReq.prototype.addMemberuid = function(e, t) {
                o.Message.addToRepeatedField(this, 1, e, t)
            }
            ,
            proto.CreateGroupChatDialogReq.prototype.clearMemberuidList = function() {
                this.setMemberuidList([])
            }
            ,
            proto.CreateGroupChatDialogResp = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.CreateGroupChatDialogResp.repeatedFields_, null)
            }
            ,
            i.inherits(proto.CreateGroupChatDialogResp, o.Message),
        i.DEBUG && !COMPILED && (proto.CreateGroupChatDialogResp.displayName = "proto.CreateGroupChatDialogResp"),
            proto.CreateGroupChatDialogResp.repeatedFields_ = [5],
        o.Message.GENERATE_TO_OBJECT && (proto.CreateGroupChatDialogResp.prototype.toObject = function(e) {
                return proto.CreateGroupChatDialogResp.toObject(e, this)
            }
                ,
                proto.CreateGroupChatDialogResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        groupid: o.Message.getFieldWithDefault(t, 3, 0),
                        grouptitle: o.Message.getFieldWithDefault(t, 4, ""),
                        groupmemberList: o.Message.toObjectList(t.getGroupmemberList(), proto.GroupMember.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.CreateGroupChatDialogResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.CreateGroupChatDialogResp;
                return proto.CreateGroupChatDialogResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.CreateGroupChatDialogResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setGroupid(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setGrouptitle(o);
                            break;
                        case 5:
                            o = new proto.GroupMember;
                            t.readMessage(o, proto.GroupMember.deserializeBinaryFromReader),
                                e.addGroupmember(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.CreateGroupChatDialogResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.CreateGroupChatDialogResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getGroupid(),
                0 !== r && t.writeInt64String(3, r),
                    r = e.getGrouptitle(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getGroupmemberList(),
                r.length > 0 && t.writeRepeatedMessage(5, r, proto.GroupMember.serializeBinaryToWriter)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.getGroupid = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.setGroupid = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.getGrouptitle = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.setGrouptitle = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.getGroupmemberList = function() {
                return o.Message.getRepeatedWrapperField(this, proto.GroupMember, 5)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.setGroupmemberList = function(e) {
                o.Message.setRepeatedWrapperField(this, 5, e)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.addGroupmember = function(e, t) {
                return o.Message.addToRepeatedWrapperField(this, 5, e, proto.GroupMember, t)
            }
            ,
            proto.CreateGroupChatDialogResp.prototype.clearGroupmemberList = function() {
                this.setGroupmemberList([])
            }
            ,
            proto.DeleteGroupChatUserReq = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.DeleteGroupChatUserReq.repeatedFields_, null)
            }
            ,
            i.inherits(proto.DeleteGroupChatUserReq, o.Message),
        i.DEBUG && !COMPILED && (proto.DeleteGroupChatUserReq.displayName = "proto.DeleteGroupChatUserReq"),
            proto.DeleteGroupChatUserReq.repeatedFields_ = [2],
        o.Message.GENERATE_TO_OBJECT && (proto.DeleteGroupChatUserReq.prototype.toObject = function(e) {
                return proto.DeleteGroupChatUserReq.toObject(e, this)
            }
                ,
                proto.DeleteGroupChatUserReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        memberuidList: o.Message.getField(t, 2)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.DeleteGroupChatUserReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.DeleteGroupChatUserReq;
                return proto.DeleteGroupChatUserReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.DeleteGroupChatUserReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setGroupid(o);
                            break;
                        case 2:
                            o = t.readPackedInt64();
                            e.setMemberuidList(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.DeleteGroupChatUserReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.DeleteGroupChatUserReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.DeleteGroupChatUserReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getGroupid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getMemberuidList(),
                r.length > 0 && t.writePackedInt64(2, r)
            }
            ,
            proto.DeleteGroupChatUserReq.prototype.getGroupid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.DeleteGroupChatUserReq.prototype.setGroupid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.DeleteGroupChatUserReq.prototype.getMemberuidList = function() {
                return o.Message.getField(this, 2)
            }
            ,
            proto.DeleteGroupChatUserReq.prototype.setMemberuidList = function(e) {
                o.Message.setField(this, 2, e || [])
            }
            ,
            proto.DeleteGroupChatUserReq.prototype.addMemberuid = function(e, t) {
                o.Message.addToRepeatedField(this, 2, e, t)
            }
            ,
            proto.DeleteGroupChatUserReq.prototype.clearMemberuidList = function() {
                this.setMemberuidList([])
            }
            ,
            proto.DeleteGroupChatUserResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.DeleteGroupChatUserResp, o.Message),
        i.DEBUG && !COMPILED && (proto.DeleteGroupChatUserResp.displayName = "proto.DeleteGroupChatUserResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.DeleteGroupChatUserResp.prototype.toObject = function(e) {
                return proto.DeleteGroupChatUserResp.toObject(e, this)
            }
                ,
                proto.DeleteGroupChatUserResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        notification: o.Message.getFieldWithDefault(t, 3, ""),
                        grouptitle: o.Message.getFieldWithDefault(t, 4, ""),
                        successnum: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.DeleteGroupChatUserResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.DeleteGroupChatUserResp;
            return proto.DeleteGroupChatUserResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.DeleteGroupChatUserResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setNotification(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setGrouptitle(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setSuccessnum(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.DeleteGroupChatUserResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.DeleteGroupChatUserResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getNotification(),
            r.length > 0 && t.writeString(3, r),
                r = e.getGrouptitle(),
            r.length > 0 && t.writeString(4, r),
                r = e.getSuccessnum(),
            0 !== r && t.writeInt32(5, r)
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.getNotification = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.setNotification = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.getGrouptitle = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.setGrouptitle = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.getSuccessnum = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.DeleteGroupChatUserResp.prototype.setSuccessnum = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.AddGroupChatUserNewReq = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.AddGroupChatUserNewReq.repeatedFields_, null)
        }
        ,
        i.inherits(proto.AddGroupChatUserNewReq, o.Message),
        i.DEBUG && !COMPILED && (proto.AddGroupChatUserNewReq.displayName = "proto.AddGroupChatUserNewReq"),
        proto.AddGroupChatUserNewReq.repeatedFields_ = [2],
        o.Message.GENERATE_TO_OBJECT && (proto.AddGroupChatUserNewReq.prototype.toObject = function(e) {
                return proto.AddGroupChatUserNewReq.toObject(e, this)
            }
                ,
                proto.AddGroupChatUserNewReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        memberuidList: o.Message.getField(t, 2)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.AddGroupChatUserNewReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AddGroupChatUserNewReq;
            return proto.AddGroupChatUserNewReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AddGroupChatUserNewReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 2:
                        o = t.readPackedInt64();
                        e.setMemberuidList(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AddGroupChatUserNewReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AddGroupChatUserNewReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AddGroupChatUserNewReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getMemberuidList(),
            r.length > 0 && t.writePackedInt64(2, r)
        }
        ,
        proto.AddGroupChatUserNewReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.AddGroupChatUserNewReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AddGroupChatUserNewReq.prototype.getMemberuidList = function() {
            return o.Message.getField(this, 2)
        }
        ,
        proto.AddGroupChatUserNewReq.prototype.setMemberuidList = function(e) {
            o.Message.setField(this, 2, e || [])
        }
        ,
        proto.AddGroupChatUserNewReq.prototype.addMemberuid = function(e, t) {
            o.Message.addToRepeatedField(this, 2, e, t)
        }
        ,
        proto.AddGroupChatUserNewReq.prototype.clearMemberuidList = function() {
            this.setMemberuidList([])
        }
        ,
        proto.AddGroupChatUserNewResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.AddGroupChatUserNewResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.AddGroupChatUserNewResp, o.Message),
        i.DEBUG && !COMPILED && (proto.AddGroupChatUserNewResp.displayName = "proto.AddGroupChatUserNewResp"),
        proto.AddGroupChatUserNewResp.repeatedFields_ = [7],
        o.Message.GENERATE_TO_OBJECT && (proto.AddGroupChatUserNewResp.prototype.toObject = function(e) {
                return proto.AddGroupChatUserNewResp.toObject(e, this)
            }
                ,
                proto.AddGroupChatUserNewResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        groupauthflag: o.Message.getFieldWithDefault(t, 3, !1),
                        notification: o.Message.getFieldWithDefault(t, 4, ""),
                        grouptitle: o.Message.getFieldWithDefault(t, 5, ""),
                        successnum: o.Message.getFieldWithDefault(t, 6, 0),
                        groupmemberList: o.Message.toObjectList(t.getGroupmemberList(), proto.GroupMember.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.AddGroupChatUserNewResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AddGroupChatUserNewResp;
            return proto.AddGroupChatUserNewResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AddGroupChatUserNewResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readBool();
                        e.setGroupauthflag(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setNotification(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setGrouptitle(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setSuccessnum(o);
                        break;
                    case 7:
                        o = new proto.GroupMember;
                        t.readMessage(o, proto.GroupMember.deserializeBinaryFromReader),
                            e.addGroupmember(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AddGroupChatUserNewResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AddGroupChatUserNewResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getGroupauthflag(),
            r && t.writeBool(3, r),
                r = e.getNotification(),
            r.length > 0 && t.writeString(4, r),
                r = e.getGrouptitle(),
            r.length > 0 && t.writeString(5, r),
                r = e.getSuccessnum(),
            0 !== r && t.writeInt32(6, r),
                r = e.getGroupmemberList(),
            r.length > 0 && t.writeRepeatedMessage(7, r, proto.GroupMember.serializeBinaryToWriter)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.getGroupauthflag = function() {
            return o.Message.getFieldWithDefault(this, 3, !1)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.setGroupauthflag = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.getNotification = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.setNotification = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.getGrouptitle = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.setGrouptitle = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.getSuccessnum = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.setSuccessnum = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.getGroupmemberList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.GroupMember, 7)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.setGroupmemberList = function(e) {
            o.Message.setRepeatedWrapperField(this, 7, e)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.addGroupmember = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 7, e, proto.GroupMember, t)
        }
        ,
        proto.AddGroupChatUserNewResp.prototype.clearGroupmemberList = function() {
            this.setGroupmemberList([])
        }
        ,
        proto.SendGroupChatMessageReq = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.SendGroupChatMessageReq.repeatedFields_, null)
        }
        ,
        i.inherits(proto.SendGroupChatMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.SendGroupChatMessageReq.displayName = "proto.SendGroupChatMessageReq"),
        proto.SendGroupChatMessageReq.repeatedFields_ = [8],
        o.Message.GENERATE_TO_OBJECT && (proto.SendGroupChatMessageReq.prototype.toObject = function(e) {
                return proto.SendGroupChatMessageReq.toObject(e, this)
            }
                ,
                proto.SendGroupChatMessageReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        localid: o.Message.getFieldWithDefault(t, 2, 0),
                        msgprecontent: o.Message.getFieldWithDefault(t, 3, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 4, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 5, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 6, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 7, ""),
                        atList: o.Message.getField(t, 8)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.SendGroupChatMessageReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.SendGroupChatMessageReq;
            return proto.SendGroupChatMessageReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.SendGroupChatMessageReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setLocalid(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setMsgprecontent(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setMsgpostcontent(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setMediaflag(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setMediaconstructor(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setMediaattribute(o);
                        break;
                    case 8:
                        o = t.readPackedInt64();
                        e.setAtList(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.SendGroupChatMessageReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.SendGroupChatMessageReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.SendGroupChatMessageReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getLocalid(),
            0 !== r && t.writeInt64String(2, r),
                r = e.getMsgprecontent(),
            r.length > 0 && t.writeString(3, r),
                r = e.getMsgpostcontent(),
            r.length > 0 && t.writeString(4, r),
                r = e.getMediaflag(),
            r && t.writeBool(5, r),
                r = e.getMediaconstructor(),
            0 !== r && t.writeInt32(6, r),
                r = e.getMediaattribute(),
            r.length > 0 && t.writeString(7, r),
                r = e.getAtList(),
            r.length > 0 && t.writePackedInt64(8, r)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getLocalid = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setLocalid = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getMsgprecontent = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setMsgprecontent = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getMsgpostcontent = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setMsgpostcontent = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getMediaflag = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setMediaflag = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getMediaconstructor = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setMediaconstructor = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getMediaattribute = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setMediaattribute = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.getAtList = function() {
            return o.Message.getField(this, 8)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.setAtList = function(e) {
            o.Message.setField(this, 8, e || [])
        }
        ,
        proto.SendGroupChatMessageReq.prototype.addAt = function(e, t) {
            o.Message.addToRepeatedField(this, 8, e, t)
        }
        ,
        proto.SendGroupChatMessageReq.prototype.clearAtList = function() {
            this.setAtList([])
        }
        ,
        proto.SendGroupChatMessageResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.SendGroupChatMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.SendGroupChatMessageResp.displayName = "proto.SendGroupChatMessageResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.SendGroupChatMessageResp.prototype.toObject = function(e) {
                return proto.SendGroupChatMessageResp.toObject(e, this)
            }
                ,
                proto.SendGroupChatMessageResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        localid: o.Message.getFieldWithDefault(t, 3, 0),
                        msgid: o.Message.getFieldWithDefault(t, 4, 0),
                        msgsendtime: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.SendGroupChatMessageResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.SendGroupChatMessageResp;
            return proto.SendGroupChatMessageResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.SendGroupChatMessageResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setLocalid(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setMsgid(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setMsgsendtime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.SendGroupChatMessageResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.SendGroupChatMessageResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.SendGroupChatMessageResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getLocalid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getMsgid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getMsgsendtime(),
            0 !== r && t.writeInt64String(5, r)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.SendGroupChatMessageResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.getLocalid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.setLocalid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.setMsgid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.SendGroupChatMessageResp.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ReplyGroupChatMessageReq = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.ReplyGroupChatMessageReq.repeatedFields_, null)
        }
        ,
        i.inherits(proto.ReplyGroupChatMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.ReplyGroupChatMessageReq.displayName = "proto.ReplyGroupChatMessageReq"),
        proto.ReplyGroupChatMessageReq.repeatedFields_ = [8],
        o.Message.GENERATE_TO_OBJECT && (proto.ReplyGroupChatMessageReq.prototype.toObject = function(e) {
                return proto.ReplyGroupChatMessageReq.toObject(e, this)
            }
                ,
                proto.ReplyGroupChatMessageReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        localid: o.Message.getFieldWithDefault(t, 2, 0),
                        msgprecontent: o.Message.getFieldWithDefault(t, 3, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 4, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 5, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 6, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 7, ""),
                        atlistList: o.Message.getField(t, 8),
                        msgidreferenced: o.Message.getFieldWithDefault(t, 9, 0),
                        msgsrcidreferenced: o.Message.getFieldWithDefault(t, 10, 0),
                        msgdestidreferenced: o.Message.getFieldWithDefault(t, 11, 0),
                        msgprecontentreferenced: o.Message.getFieldWithDefault(t, 12, ""),
                        msgpostcontentreferenced: o.Message.getFieldWithDefault(t, 13, ""),
                        mediaflagreferenced: o.Message.getFieldWithDefault(t, 14, !1),
                        mediaconstructorreferenced: o.Message.getFieldWithDefault(t, 15, 0),
                        mediaattributereferenced: o.Message.getFieldWithDefault(t, 16, ""),
                        msgsendtimereferenced: o.Message.getFieldWithDefault(t, 17, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ReplyGroupChatMessageReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ReplyGroupChatMessageReq;
            return proto.ReplyGroupChatMessageReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ReplyGroupChatMessageReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setLocalid(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setMsgprecontent(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setMsgpostcontent(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setMediaflag(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setMediaconstructor(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setMediaattribute(o);
                        break;
                    case 8:
                        o = t.readPackedInt64();
                        e.setAtlistList(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setMsgidreferenced(o);
                        break;
                    case 10:
                        o = t.readInt64String();
                        e.setMsgsrcidreferenced(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setMsgdestidreferenced(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setMsgprecontentreferenced(o);
                        break;
                    case 13:
                        o = t.readString();
                        e.setMsgpostcontentreferenced(o);
                        break;
                    case 14:
                        o = t.readBool();
                        e.setMediaflagreferenced(o);
                        break;
                    case 15:
                        o = t.readInt32();
                        e.setMediaconstructorreferenced(o);
                        break;
                    case 16:
                        o = t.readString();
                        e.setMediaattributereferenced(o);
                        break;
                    case 17:
                        o = t.readInt64String();
                        e.setMsgsendtimereferenced(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ReplyGroupChatMessageReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ReplyGroupChatMessageReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getLocalid(),
            0 !== r && t.writeInt64String(2, r),
                r = e.getMsgprecontent(),
            r.length > 0 && t.writeString(3, r),
                r = e.getMsgpostcontent(),
            r.length > 0 && t.writeString(4, r),
                r = e.getMediaflag(),
            r && t.writeBool(5, r),
                r = e.getMediaconstructor(),
            0 !== r && t.writeInt32(6, r),
                r = e.getMediaattribute(),
            r.length > 0 && t.writeString(7, r),
                r = e.getAtlistList(),
            r.length > 0 && t.writePackedInt64(8, r),
                r = e.getMsgidreferenced(),
            0 !== r && t.writeInt64String(9, r),
                r = e.getMsgsrcidreferenced(),
            0 !== r && t.writeInt64String(10, r),
                r = e.getMsgdestidreferenced(),
            0 !== r && t.writeInt64String(11, r),
                r = e.getMsgprecontentreferenced(),
            r.length > 0 && t.writeString(12, r),
                r = e.getMsgpostcontentreferenced(),
            r.length > 0 && t.writeString(13, r),
                r = e.getMediaflagreferenced(),
            r && t.writeBool(14, r),
                r = e.getMediaconstructorreferenced(),
            0 !== r && t.writeInt32(15, r),
                r = e.getMediaattributereferenced(),
            r.length > 0 && t.writeString(16, r),
                r = e.getMsgsendtimereferenced(),
            0 !== r && t.writeInt64String(17, r)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getLocalid = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setLocalid = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgprecontent = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgprecontent = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgpostcontent = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgpostcontent = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMediaflag = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMediaflag = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMediaconstructor = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMediaconstructor = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMediaattribute = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMediaattribute = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getAtlistList = function() {
            return o.Message.getField(this, 8)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setAtlistList = function(e) {
            o.Message.setField(this, 8, e || [])
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.addAtlist = function(e, t) {
            o.Message.addToRepeatedField(this, 8, e, t)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.clearAtlistList = function() {
            this.setAtlistList([])
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 9, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgidreferenced = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgsrcidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 10, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgsrcidreferenced = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgdestidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 11, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgdestidreferenced = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgprecontentreferenced = function() {
            return o.Message.getFieldWithDefault(this, 12, "")
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgprecontentreferenced = function(e) {
            o.Message.setField(this, 12, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgpostcontentreferenced = function() {
            return o.Message.getFieldWithDefault(this, 13, "")
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgpostcontentreferenced = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMediaflagreferenced = function() {
            return o.Message.getFieldWithDefault(this, 14, !1)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMediaflagreferenced = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMediaconstructorreferenced = function() {
            return o.Message.getFieldWithDefault(this, 15, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMediaconstructorreferenced = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMediaattributereferenced = function() {
            return o.Message.getFieldWithDefault(this, 16, "")
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMediaattributereferenced = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.getMsgsendtimereferenced = function() {
            return o.Message.getFieldWithDefault(this, 17, 0)
        }
        ,
        proto.ReplyGroupChatMessageReq.prototype.setMsgsendtimereferenced = function(e) {
            o.Message.setField(this, 17, e)
        }
        ,
        proto.ReplyGroupChatMessageResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ReplyGroupChatMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ReplyGroupChatMessageResp.displayName = "proto.ReplyGroupChatMessageResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.ReplyGroupChatMessageResp.prototype.toObject = function(e) {
                return proto.ReplyGroupChatMessageResp.toObject(e, this)
            }
                ,
                proto.ReplyGroupChatMessageResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        localid: o.Message.getFieldWithDefault(t, 3, 0),
                        msgid: o.Message.getFieldWithDefault(t, 4, 0),
                        msgsendtime: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ReplyGroupChatMessageResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ReplyGroupChatMessageResp;
            return proto.ReplyGroupChatMessageResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ReplyGroupChatMessageResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setLocalid(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setMsgid(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setMsgsendtime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ReplyGroupChatMessageResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ReplyGroupChatMessageResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getLocalid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getMsgid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getMsgsendtime(),
            0 !== r && t.writeInt64String(5, r)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.getLocalid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.setLocalid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.setMsgid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.ReplyGroupChatMessageResp.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.ForwardMessageToGroupChatReq.repeatedFields_, null)
        }
        ,
        i.inherits(proto.ForwardMessageToGroupChatReq, o.Message),
        i.DEBUG && !COMPILED && (proto.ForwardMessageToGroupChatReq.displayName = "proto.ForwardMessageToGroupChatReq"),
        proto.ForwardMessageToGroupChatReq.repeatedFields_ = [8],
        o.Message.GENERATE_TO_OBJECT && (proto.ForwardMessageToGroupChatReq.prototype.toObject = function(e) {
                return proto.ForwardMessageToGroupChatReq.toObject(e, this)
            }
                ,
                proto.ForwardMessageToGroupChatReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        localid: o.Message.getFieldWithDefault(t, 2, 0),
                        msgprecontent: o.Message.getFieldWithDefault(t, 3, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 4, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 5, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 6, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 7, ""),
                        atList: o.Message.getField(t, 8),
                        msgidreferenced: o.Message.getFieldWithDefault(t, 9, 0),
                        msgsrcidreferenced: o.Message.getFieldWithDefault(t, 10, 0),
                        msgdestidreferenced: o.Message.getFieldWithDefault(t, 11, 0),
                        msgprecontentreferenced: o.Message.getFieldWithDefault(t, 12, ""),
                        msgpostcontentreferenced: o.Message.getFieldWithDefault(t, 13, ""),
                        mediaflagreferenced: o.Message.getFieldWithDefault(t, 14, !1),
                        mediaconstructorreferenced: o.Message.getFieldWithDefault(t, 15, 0),
                        mediaattributereferenced: o.Message.getFieldWithDefault(t, 16, ""),
                        msgsendtimereferenced: o.Message.getFieldWithDefault(t, 17, 0),
                        msggroupflagreferenced: o.Message.getFieldWithDefault(t, 18, !1),
                        msggroupidreferenced: o.Message.getFieldWithDefault(t, 19, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ForwardMessageToGroupChatReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ForwardMessageToGroupChatReq;
            return proto.ForwardMessageToGroupChatReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ForwardMessageToGroupChatReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setLocalid(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setMsgprecontent(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setMsgpostcontent(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setMediaflag(o);
                        break;
                    case 6:
                        o = t.readInt32();
                        e.setMediaconstructor(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setMediaattribute(o);
                        break;
                    case 8:
                        o = t.readPackedInt64();
                        e.setAtList(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setMsgidreferenced(o);
                        break;
                    case 10:
                        o = t.readInt64String();
                        e.setMsgsrcidreferenced(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setMsgdestidreferenced(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setMsgprecontentreferenced(o);
                        break;
                    case 13:
                        o = t.readString();
                        e.setMsgpostcontentreferenced(o);
                        break;
                    case 14:
                        o = t.readBool();
                        e.setMediaflagreferenced(o);
                        break;
                    case 15:
                        o = t.readInt32();
                        e.setMediaconstructorreferenced(o);
                        break;
                    case 16:
                        o = t.readString();
                        e.setMediaattributereferenced(o);
                        break;
                    case 17:
                        o = t.readInt64String();
                        e.setMsgsendtimereferenced(o);
                        break;
                    case 18:
                        o = t.readBool();
                        e.setMsggroupflagreferenced(o);
                        break;
                    case 19:
                        o = t.readInt64String();
                        e.setMsggroupidreferenced(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ForwardMessageToGroupChatReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ForwardMessageToGroupChatReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getLocalid(),
            0 !== r && t.writeInt64String(2, r),
                r = e.getMsgprecontent(),
            r.length > 0 && t.writeString(3, r),
                r = e.getMsgpostcontent(),
            r.length > 0 && t.writeString(4, r),
                r = e.getMediaflag(),
            r && t.writeBool(5, r),
                r = e.getMediaconstructor(),
            0 !== r && t.writeInt32(6, r),
                r = e.getMediaattribute(),
            r.length > 0 && t.writeString(7, r),
                r = e.getAtList(),
            r.length > 0 && t.writePackedInt64(8, r),
                r = e.getMsgidreferenced(),
            0 !== r && t.writeInt64String(9, r),
                r = e.getMsgsrcidreferenced(),
            0 !== r && t.writeInt64String(10, r),
                r = e.getMsgdestidreferenced(),
            0 !== r && t.writeInt64String(11, r),
                r = e.getMsgprecontentreferenced(),
            r.length > 0 && t.writeString(12, r),
                r = e.getMsgpostcontentreferenced(),
            r.length > 0 && t.writeString(13, r),
                r = e.getMediaflagreferenced(),
            r && t.writeBool(14, r),
                r = e.getMediaconstructorreferenced(),
            0 !== r && t.writeInt32(15, r),
                r = e.getMediaattributereferenced(),
            r.length > 0 && t.writeString(16, r),
                r = e.getMsgsendtimereferenced(),
            0 !== r && t.writeInt64String(17, r),
                r = e.getMsggroupflagreferenced(),
            r && t.writeBool(18, r),
                r = e.getMsggroupidreferenced(),
            0 !== r && t.writeInt64String(19, r)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getLocalid = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setLocalid = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgprecontent = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgprecontent = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgpostcontent = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgpostcontent = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMediaflag = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMediaflag = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMediaconstructor = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMediaconstructor = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMediaattribute = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMediaattribute = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getAtList = function() {
            return o.Message.getField(this, 8)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setAtList = function(e) {
            o.Message.setField(this, 8, e || [])
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.addAt = function(e, t) {
            o.Message.addToRepeatedField(this, 8, e, t)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.clearAtList = function() {
            this.setAtList([])
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 9, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgidreferenced = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgsrcidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 10, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgsrcidreferenced = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgdestidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 11, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgdestidreferenced = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgprecontentreferenced = function() {
            return o.Message.getFieldWithDefault(this, 12, "")
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgprecontentreferenced = function(e) {
            o.Message.setField(this, 12, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgpostcontentreferenced = function() {
            return o.Message.getFieldWithDefault(this, 13, "")
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgpostcontentreferenced = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMediaflagreferenced = function() {
            return o.Message.getFieldWithDefault(this, 14, !1)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMediaflagreferenced = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMediaconstructorreferenced = function() {
            return o.Message.getFieldWithDefault(this, 15, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMediaconstructorreferenced = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMediaattributereferenced = function() {
            return o.Message.getFieldWithDefault(this, 16, "")
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMediaattributereferenced = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsgsendtimereferenced = function() {
            return o.Message.getFieldWithDefault(this, 17, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsgsendtimereferenced = function(e) {
            o.Message.setField(this, 17, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsggroupflagreferenced = function() {
            return o.Message.getFieldWithDefault(this, 18, !1)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsggroupflagreferenced = function(e) {
            o.Message.setField(this, 18, e)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.getMsggroupidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 19, 0)
        }
        ,
        proto.ForwardMessageToGroupChatReq.prototype.setMsggroupidreferenced = function(e) {
            o.Message.setField(this, 19, e)
        }
        ,
        proto.ForwardMessageToGroupChatResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ForwardMessageToGroupChatResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ForwardMessageToGroupChatResp.displayName = "proto.ForwardMessageToGroupChatResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.ForwardMessageToGroupChatResp.prototype.toObject = function(e) {
                return proto.ForwardMessageToGroupChatResp.toObject(e, this)
            }
                ,
                proto.ForwardMessageToGroupChatResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        localid: o.Message.getFieldWithDefault(t, 3, 0),
                        msgid: o.Message.getFieldWithDefault(t, 4, 0),
                        msgsendtime: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ForwardMessageToGroupChatResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ForwardMessageToGroupChatResp;
            return proto.ForwardMessageToGroupChatResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ForwardMessageToGroupChatResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setLocalid(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setMsgid(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setMsgsendtime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ForwardMessageToGroupChatResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ForwardMessageToGroupChatResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getLocalid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getMsgid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getMsgsendtime(),
            0 !== r && t.writeInt64String(5, r)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.getLocalid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.setLocalid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.setMsgid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.ForwardMessageToGroupChatResp.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetGroupChatDialogDetailNewReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetGroupChatDialogDetailNewReq.displayName = "proto.GetGroupChatDialogDetailNewReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetGroupChatDialogDetailNewReq.prototype.toObject = function(e) {
                return proto.GetGroupChatDialogDetailNewReq.toObject(e, this)
            }
                ,
                proto.GetGroupChatDialogDetailNewReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetGroupChatDialogDetailNewReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetGroupChatDialogDetailNewReq;
            return proto.GetGroupChatDialogDetailNewReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetGroupChatDialogDetailNewReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetGroupChatDialogDetailNewReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetGroupChatDialogDetailNewReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetGroupChatDialogDetailNewReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r)
        }
        ,
        proto.GetGroupChatDialogDetailNewReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetGroupChatDialogDetailNewResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetGroupChatDialogDetailNewResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetGroupChatDialogDetailNewResp.displayName = "proto.GetGroupChatDialogDetailNewResp"),
        proto.GetGroupChatDialogDetailNewResp.repeatedFields_ = [21],
        o.Message.GENERATE_TO_OBJECT && (proto.GetGroupChatDialogDetailNewResp.prototype.toObject = function(e) {
                return proto.GetGroupChatDialogDetailNewResp.toObject(e, this)
            }
                ,
                proto.GetGroupChatDialogDetailNewResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        groupid: o.Message.getFieldWithDefault(t, 3, 0),
                        adminid: o.Message.getFieldWithDefault(t, 4, ""),
                        isuntitled: o.Message.getFieldWithDefault(t, 5, !1),
                        grouptitle: o.Message.getFieldWithDefault(t, 6, ""),
                        announcementcontent: o.Message.getFieldWithDefault(t, 7, ""),
                        announcementposttime: o.Message.getFieldWithDefault(t, 8, 0),
                        announcementpostid: o.Message.getFieldWithDefault(t, 9, 0),
                        announcementpostusersmallavatarurl: o.Message.getFieldWithDefault(t, 10, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 11, ""),
                        originalavatarurl: o.Message.getFieldWithDefault(t, 12, ""),
                        qrcodestring: o.Message.getFieldWithDefault(t, 13, ""),
                        stickyflag: o.Message.getFieldWithDefault(t, 14, !1),
                        muteflag: o.Message.getFieldWithDefault(t, 15, !1),
                        blockflag: o.Message.getFieldWithDefault(t, 16, !1),
                        burnafterreadingflag: o.Message.getFieldWithDefault(t, 17, !1),
                        groupauthflag: o.Message.getFieldWithDefault(t, 18, !1),
                        groupcontactflag: o.Message.getFieldWithDefault(t, 19, !1),
                        totalmembernumber: o.Message.getFieldWithDefault(t, 20, 0),
                        groupmemberList: o.Message.toObjectList(t.getGroupmemberList(), proto.GroupMember.toObject, e),
                        takescreenshotflag: o.Message.getFieldWithDefault(t, 22, !1),
                        ownerid: o.Message.getFieldWithDefault(t, 23, 0),
                        groupprivilegeflag: o.Message.getFieldWithDefault(t, 24, !1),
                        groupmemberlimit: o.Message.getFieldWithDefault(t, 25, 0),
                        openflag: o.Message.getFieldWithDefault(t, 26, !1),
                        interesttribetypeid: o.Message.getFieldWithDefault(t, 27, 0),
                        interesttribetypename: o.Message.getFieldWithDefault(t, 28, ""),
                        interesttribetypesmallavatarurl: o.Message.getFieldWithDefault(t, 29, ""),
                        interesttribetypeoriginalavatarurl: o.Message.getFieldWithDefault(t, 30, ""),
                        interesttribeintroduction: o.Message.getFieldWithDefault(t, 31, ""),
                        groupmembermutualaddfriendfromgroupflag: o.Message.getFieldWithDefault(t, 32, !1),
                        xlgroupid: o.Message.getFieldWithDefault(t, 33, ""),
                        groupmessagelifetimeflag: o.Message.getFieldWithDefault(t, 34, !1),
                        groupmessagelifetime: o.Message.getFieldWithDefault(t, 35, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetGroupChatDialogDetailNewResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetGroupChatDialogDetailNewResp;
            return proto.GetGroupChatDialogDetailNewResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setAdminid(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setIsuntitled(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setGrouptitle(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setAnnouncementcontent(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setAnnouncementposttime(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setAnnouncementpostid(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setAnnouncementpostusersmallavatarurl(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setOriginalavatarurl(o);
                        break;
                    case 13:
                        o = t.readString();
                        e.setQrcodestring(o);
                        break;
                    case 14:
                        o = t.readBool();
                        e.setStickyflag(o);
                        break;
                    case 15:
                        o = t.readBool();
                        e.setMuteflag(o);
                        break;
                    case 16:
                        o = t.readBool();
                        e.setBlockflag(o);
                        break;
                    case 17:
                        o = t.readBool();
                        e.setBurnafterreadingflag(o);
                        break;
                    case 18:
                        o = t.readBool();
                        e.setGroupauthflag(o);
                        break;
                    case 19:
                        o = t.readBool();
                        e.setGroupcontactflag(o);
                        break;
                    case 20:
                        o = t.readInt32();
                        e.setTotalmembernumber(o);
                        break;
                    case 21:
                        o = new proto.GroupMember;
                        t.readMessage(o, proto.GroupMember.deserializeBinaryFromReader),
                            e.addGroupmember(o);
                        break;
                    case 22:
                        o = t.readBool();
                        e.setTakescreenshotflag(o);
                        break;
                    case 23:
                        o = t.readInt64String();
                        e.setOwnerid(o);
                        break;
                    case 24:
                        o = t.readBool();
                        e.setGroupprivilegeflag(o);
                        break;
                    case 25:
                        o = t.readInt32();
                        e.setGroupmemberlimit(o);
                        break;
                    case 26:
                        o = t.readBool();
                        e.setOpenflag(o);
                        break;
                    case 27:
                        o = t.readInt64String();
                        e.setInteresttribetypeid(o);
                        break;
                    case 28:
                        o = t.readString();
                        e.setInteresttribetypename(o);
                        break;
                    case 29:
                        o = t.readString();
                        e.setInteresttribetypesmallavatarurl(o);
                        break;
                    case 30:
                        o = t.readString();
                        e.setInteresttribetypeoriginalavatarurl(o);
                        break;
                    case 31:
                        o = t.readString();
                        e.setInteresttribeintroduction(o);
                        break;
                    case 32:
                        o = t.readBool();
                        e.setGroupmembermutualaddfriendfromgroupflag(o);
                        break;
                    case 33:
                        o = t.readString();
                        e.setXlgroupid(o);
                        break;
                    case 34:
                        o = t.readBool();
                        e.setGroupmessagelifetimeflag(o);
                        break;
                    case 35:
                        o = t.readInt64String();
                        e.setGroupmessagelifetime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetGroupChatDialogDetailNewResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getGroupid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getAdminid(),
            r.length > 0 && t.writeString(4, r),
                r = e.getIsuntitled(),
            r && t.writeBool(5, r),
                r = e.getGrouptitle(),
            r.length > 0 && t.writeString(6, r),
                r = e.getAnnouncementcontent(),
            r.length > 0 && t.writeString(7, r),
                r = e.getAnnouncementposttime(),
            0 !== r && t.writeInt64String(8, r),
                r = e.getAnnouncementpostid(),
            0 !== r && t.writeInt64String(9, r),
                r = e.getAnnouncementpostusersmallavatarurl(),
            r.length > 0 && t.writeString(10, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(11, r),
                r = e.getOriginalavatarurl(),
            r.length > 0 && t.writeString(12, r),
                r = e.getQrcodestring(),
            r.length > 0 && t.writeString(13, r),
                r = e.getStickyflag(),
            r && t.writeBool(14, r),
                r = e.getMuteflag(),
            r && t.writeBool(15, r),
                r = e.getBlockflag(),
            r && t.writeBool(16, r),
                r = e.getBurnafterreadingflag(),
            r && t.writeBool(17, r),
                r = e.getGroupauthflag(),
            r && t.writeBool(18, r),
                r = e.getGroupcontactflag(),
            r && t.writeBool(19, r),
                r = e.getTotalmembernumber(),
            0 !== r && t.writeInt32(20, r),
                r = e.getGroupmemberList(),
            r.length > 0 && t.writeRepeatedMessage(21, r, proto.GroupMember.serializeBinaryToWriter),
                r = e.getTakescreenshotflag(),
            r && t.writeBool(22, r),
                r = e.getOwnerid(),
            0 !== r && t.writeInt64String(23, r),
                r = e.getGroupprivilegeflag(),
            r && t.writeBool(24, r),
                r = e.getGroupmemberlimit(),
            0 !== r && t.writeInt32(25, r),
                r = e.getOpenflag(),
            r && t.writeBool(26, r),
                r = e.getInteresttribetypeid(),
            0 !== r && t.writeInt64String(27, r),
                r = e.getInteresttribetypename(),
            r.length > 0 && t.writeString(28, r),
                r = e.getInteresttribetypesmallavatarurl(),
            r.length > 0 && t.writeString(29, r),
                r = e.getInteresttribetypeoriginalavatarurl(),
            r.length > 0 && t.writeString(30, r),
                r = e.getInteresttribeintroduction(),
            r.length > 0 && t.writeString(31, r),
                r = e.getGroupmembermutualaddfriendfromgroupflag(),
            r && t.writeBool(32, r),
                r = e.getXlgroupid(),
            r.length > 0 && t.writeString(33, r),
                r = e.getGroupmessagelifetimeflag(),
            r && t.writeBool(34, r),
                r = e.getGroupmessagelifetime(),
            0 !== r && t.writeInt64String(35, r)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getAdminid = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setAdminid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getIsuntitled = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setIsuntitled = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGrouptitle = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGrouptitle = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getAnnouncementcontent = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setAnnouncementcontent = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getAnnouncementposttime = function() {
            return o.Message.getFieldWithDefault(this, 8, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setAnnouncementposttime = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getAnnouncementpostid = function() {
            return o.Message.getFieldWithDefault(this, 9, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setAnnouncementpostid = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getAnnouncementpostusersmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setAnnouncementpostusersmallavatarurl = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getOriginalavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 12, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setOriginalavatarurl = function(e) {
            o.Message.setField(this, 12, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getQrcodestring = function() {
            return o.Message.getFieldWithDefault(this, 13, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setQrcodestring = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getStickyflag = function() {
            return o.Message.getFieldWithDefault(this, 14, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setStickyflag = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getMuteflag = function() {
            return o.Message.getFieldWithDefault(this, 15, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setMuteflag = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getBlockflag = function() {
            return o.Message.getFieldWithDefault(this, 16, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setBlockflag = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getBurnafterreadingflag = function() {
            return o.Message.getFieldWithDefault(this, 17, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setBurnafterreadingflag = function(e) {
            o.Message.setField(this, 17, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupauthflag = function() {
            return o.Message.getFieldWithDefault(this, 18, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupauthflag = function(e) {
            o.Message.setField(this, 18, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupcontactflag = function() {
            return o.Message.getFieldWithDefault(this, 19, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupcontactflag = function(e) {
            o.Message.setField(this, 19, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getTotalmembernumber = function() {
            return o.Message.getFieldWithDefault(this, 20, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setTotalmembernumber = function(e) {
            o.Message.setField(this, 20, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupmemberList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.GroupMember, 21)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupmemberList = function(e) {
            o.Message.setRepeatedWrapperField(this, 21, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.addGroupmember = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 21, e, proto.GroupMember, t)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.clearGroupmemberList = function() {
            this.setGroupmemberList([])
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getTakescreenshotflag = function() {
            return o.Message.getFieldWithDefault(this, 22, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setTakescreenshotflag = function(e) {
            o.Message.setField(this, 22, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getOwnerid = function() {
            return o.Message.getFieldWithDefault(this, 23, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setOwnerid = function(e) {
            o.Message.setField(this, 23, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupprivilegeflag = function() {
            return o.Message.getFieldWithDefault(this, 24, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupprivilegeflag = function(e) {
            o.Message.setField(this, 24, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupmemberlimit = function() {
            return o.Message.getFieldWithDefault(this, 25, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupmemberlimit = function(e) {
            o.Message.setField(this, 25, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getOpenflag = function() {
            return o.Message.getFieldWithDefault(this, 26, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setOpenflag = function(e) {
            o.Message.setField(this, 26, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getInteresttribetypeid = function() {
            return o.Message.getFieldWithDefault(this, 27, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setInteresttribetypeid = function(e) {
            o.Message.setField(this, 27, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getInteresttribetypename = function() {
            return o.Message.getFieldWithDefault(this, 28, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setInteresttribetypename = function(e) {
            o.Message.setField(this, 28, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getInteresttribetypesmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 29, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setInteresttribetypesmallavatarurl = function(e) {
            o.Message.setField(this, 29, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getInteresttribetypeoriginalavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 30, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setInteresttribetypeoriginalavatarurl = function(e) {
            o.Message.setField(this, 30, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getInteresttribeintroduction = function() {
            return o.Message.getFieldWithDefault(this, 31, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setInteresttribeintroduction = function(e) {
            o.Message.setField(this, 31, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupmembermutualaddfriendfromgroupflag = function() {
            return o.Message.getFieldWithDefault(this, 32, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupmembermutualaddfriendfromgroupflag = function(e) {
            o.Message.setField(this, 32, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getXlgroupid = function() {
            return o.Message.getFieldWithDefault(this, 33, "")
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setXlgroupid = function(e) {
            o.Message.setField(this, 33, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupmessagelifetimeflag = function() {
            return o.Message.getFieldWithDefault(this, 34, !1)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupmessagelifetimeflag = function(e) {
            o.Message.setField(this, 34, e)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.getGroupmessagelifetime = function() {
            return o.Message.getFieldWithDefault(this, 35, 0)
        }
        ,
        proto.GetGroupChatDialogDetailNewResp.prototype.setGroupmessagelifetime = function(e) {
            o.Message.setField(this, 35, e)
        }
        ,
        proto.GetGroupDetailReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetGroupDetailReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetGroupDetailReq.displayName = "proto.GetGroupDetailReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetGroupDetailReq.prototype.toObject = function(e) {
                return proto.GetGroupDetailReq.toObject(e, this)
            }
                ,
                proto.GetGroupDetailReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetGroupDetailReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetGroupDetailReq;
            return proto.GetGroupDetailReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetGroupDetailReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetGroupDetailReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetGroupDetailReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetGroupDetailReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r)
        }
        ,
        proto.GetGroupDetailReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetGroupDetailReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetGroupDetailResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetGroupDetailResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetGroupDetailResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetGroupDetailResp.displayName = "proto.GetGroupDetailResp"),
        proto.GetGroupDetailResp.repeatedFields_ = [21, 42, 44],
        o.Message.GENERATE_TO_OBJECT && (proto.GetGroupDetailResp.prototype.toObject = function(e) {
                return proto.GetGroupDetailResp.toObject(e, this)
            }
                ,
                proto.GetGroupDetailResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        groupid: o.Message.getFieldWithDefault(t, 3, 0),
                        adminid: o.Message.getFieldWithDefault(t, 4, ""),
                        isuntitled: o.Message.getFieldWithDefault(t, 5, !1),
                        grouptitle: o.Message.getFieldWithDefault(t, 6, ""),
                        announcementcontent: o.Message.getFieldWithDefault(t, 7, ""),
                        announcementposttime: o.Message.getFieldWithDefault(t, 8, 0),
                        announcementpostid: o.Message.getFieldWithDefault(t, 9, 0),
                        announcementpostusersmallavatarurl: o.Message.getFieldWithDefault(t, 10, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 11, ""),
                        originalavatarurl: o.Message.getFieldWithDefault(t, 12, ""),
                        qrcodestring: o.Message.getFieldWithDefault(t, 13, ""),
                        stickyflag: o.Message.getFieldWithDefault(t, 14, !1),
                        muteflag: o.Message.getFieldWithDefault(t, 15, !1),
                        blockflag: o.Message.getFieldWithDefault(t, 16, !1),
                        burnafterreadingflag: o.Message.getFieldWithDefault(t, 17, !1),
                        groupauthflag: o.Message.getFieldWithDefault(t, 18, !1),
                        groupcontactflag: o.Message.getFieldWithDefault(t, 19, !1),
                        totalmembernumber: o.Message.getFieldWithDefault(t, 20, 0),
                        groupmemberbriefinfoList: o.Message.toObjectList(t.getGroupmemberbriefinfoList(), proto.GetGroupDetailResp.GroupMemberBriefInfo.toObject, e),
                        takescreenshotflag: o.Message.getFieldWithDefault(t, 22, !1),
                        ownerid: o.Message.getFieldWithDefault(t, 23, 0),
                        groupprivilegeflag: o.Message.getFieldWithDefault(t, 24, !1),
                        groupmemberlimit: o.Message.getFieldWithDefault(t, 25, 0),
                        openflag: o.Message.getFieldWithDefault(t, 26, !1),
                        interesttribetypeid: o.Message.getFieldWithDefault(t, 27, 0),
                        interesttribetypename: o.Message.getFieldWithDefault(t, 28, ""),
                        interesttribetypesmallavatarurl: o.Message.getFieldWithDefault(t, 29, ""),
                        interesttribetypeoriginalavatarurl: o.Message.getFieldWithDefault(t, 30, ""),
                        interesttribeintroduction: o.Message.getFieldWithDefault(t, 31, ""),
                        groupmembermutualaddfriendfromgroupflag: o.Message.getFieldWithDefault(t, 32, !1),
                        xlgroupid: o.Message.getFieldWithDefault(t, 33, ""),
                        groupmessagelifetimeflag: o.Message.getFieldWithDefault(t, 34, !1),
                        groupmessagelifetime: o.Message.getFieldWithDefault(t, 35, 0),
                        qrcodeexpiretime: o.Message.getFieldWithDefault(t, 36, 0),
                        groupshopflag: o.Message.getFieldWithDefault(t, 37, !1),
                        createtime: o.Message.getFieldWithDefault(t, 38, 0),
                        xmallshopflag: o.Message.getFieldWithDefault(t, 39, !1),
                        goldenbeanrewardflag: o.Message.getFieldWithDefault(t, 40, !1),
                        groupsilenceflag: o.Message.getFieldWithDefault(t, 41, !1),
                        groupmembersilenceinfoList: o.Message.toObjectList(t.getGroupmembersilenceinfoList(), proto.GroupMemberSilenceInfo.toObject, e),
                        xmallshoplevel: o.Message.getFieldWithDefault(t, 43, 0),
                        forbiddenreceivegroupchatredpacketmemberuidList: o.Message.getField(t, 44)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetGroupDetailResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetGroupDetailResp;
            return proto.GetGroupDetailResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetGroupDetailResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setAdminid(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setIsuntitled(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setGrouptitle(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setAnnouncementcontent(o);
                        break;
                    case 8:
                        o = t.readInt64String();
                        e.setAnnouncementposttime(o);
                        break;
                    case 9:
                        o = t.readInt64String();
                        e.setAnnouncementpostid(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setAnnouncementpostusersmallavatarurl(o);
                        break;
                    case 11:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.setOriginalavatarurl(o);
                        break;
                    case 13:
                        o = t.readString();
                        e.setQrcodestring(o);
                        break;
                    case 14:
                        o = t.readBool();
                        e.setStickyflag(o);
                        break;
                    case 15:
                        o = t.readBool();
                        e.setMuteflag(o);
                        break;
                    case 16:
                        o = t.readBool();
                        e.setBlockflag(o);
                        break;
                    case 17:
                        o = t.readBool();
                        e.setBurnafterreadingflag(o);
                        break;
                    case 18:
                        o = t.readBool();
                        e.setGroupauthflag(o);
                        break;
                    case 19:
                        o = t.readBool();
                        e.setGroupcontactflag(o);
                        break;
                    case 20:
                        o = t.readInt32();
                        e.setTotalmembernumber(o);
                        break;
                    case 21:
                        o = new proto.GetGroupDetailResp.GroupMemberBriefInfo;
                        t.readMessage(o, proto.GetGroupDetailResp.GroupMemberBriefInfo.deserializeBinaryFromReader),
                            e.addGroupmemberbriefinfo(o);
                        break;
                    case 22:
                        o = t.readBool();
                        e.setTakescreenshotflag(o);
                        break;
                    case 23:
                        o = t.readInt64String();
                        e.setOwnerid(o);
                        break;
                    case 24:
                        o = t.readBool();
                        e.setGroupprivilegeflag(o);
                        break;
                    case 25:
                        o = t.readInt32();
                        e.setGroupmemberlimit(o);
                        break;
                    case 26:
                        o = t.readBool();
                        e.setOpenflag(o);
                        break;
                    case 27:
                        o = t.readInt64String();
                        e.setInteresttribetypeid(o);
                        break;
                    case 28:
                        o = t.readString();
                        e.setInteresttribetypename(o);
                        break;
                    case 29:
                        o = t.readString();
                        e.setInteresttribetypesmallavatarurl(o);
                        break;
                    case 30:
                        o = t.readString();
                        e.setInteresttribetypeoriginalavatarurl(o);
                        break;
                    case 31:
                        o = t.readString();
                        e.setInteresttribeintroduction(o);
                        break;
                    case 32:
                        o = t.readBool();
                        e.setGroupmembermutualaddfriendfromgroupflag(o);
                        break;
                    case 33:
                        o = t.readString();
                        e.setXlgroupid(o);
                        break;
                    case 34:
                        o = t.readBool();
                        e.setGroupmessagelifetimeflag(o);
                        break;
                    case 35:
                        o = t.readInt64String();
                        e.setGroupmessagelifetime(o);
                        break;
                    case 36:
                        o = t.readInt64String();
                        e.setQrcodeexpiretime(o);
                        break;
                    case 37:
                        o = t.readBool();
                        e.setGroupshopflag(o);
                        break;
                    case 38:
                        o = t.readInt64String();
                        e.setCreatetime(o);
                        break;
                    case 39:
                        o = t.readBool();
                        e.setXmallshopflag(o);
                        break;
                    case 40:
                        o = t.readBool();
                        e.setGoldenbeanrewardflag(o);
                        break;
                    case 41:
                        o = t.readBool();
                        e.setGroupsilenceflag(o);
                        break;
                    case 42:
                        o = new proto.GroupMemberSilenceInfo;
                        t.readMessage(o, proto.GroupMemberSilenceInfo.deserializeBinaryFromReader),
                            e.addGroupmembersilenceinfo(o);
                        break;
                    case 43:
                        o = t.readInt32();
                        e.setXmallshoplevel(o);
                        break;
                    case 44:
                        o = t.readPackedInt64();
                        e.setForbiddenreceivegroupchatredpacketmemberuidList(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetGroupDetailResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetGroupDetailResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetGroupDetailResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getGroupid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getAdminid(),
            r.length > 0 && t.writeString(4, r),
                r = e.getIsuntitled(),
            r && t.writeBool(5, r),
                r = e.getGrouptitle(),
            r.length > 0 && t.writeString(6, r),
                r = e.getAnnouncementcontent(),
            r.length > 0 && t.writeString(7, r),
                r = e.getAnnouncementposttime(),
            0 !== r && t.writeInt64String(8, r),
                r = e.getAnnouncementpostid(),
            0 !== r && t.writeInt64String(9, r),
                r = e.getAnnouncementpostusersmallavatarurl(),
            r.length > 0 && t.writeString(10, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(11, r),
                r = e.getOriginalavatarurl(),
            r.length > 0 && t.writeString(12, r),
                r = e.getQrcodestring(),
            r.length > 0 && t.writeString(13, r),
                r = e.getStickyflag(),
            r && t.writeBool(14, r),
                r = e.getMuteflag(),
            r && t.writeBool(15, r),
                r = e.getBlockflag(),
            r && t.writeBool(16, r),
                r = e.getBurnafterreadingflag(),
            r && t.writeBool(17, r),
                r = e.getGroupauthflag(),
            r && t.writeBool(18, r),
                r = e.getGroupcontactflag(),
            r && t.writeBool(19, r),
                r = e.getTotalmembernumber(),
            0 !== r && t.writeInt32(20, r),
                r = e.getGroupmemberbriefinfoList(),
            r.length > 0 && t.writeRepeatedMessage(21, r, proto.GetGroupDetailResp.GroupMemberBriefInfo.serializeBinaryToWriter),
                r = e.getTakescreenshotflag(),
            r && t.writeBool(22, r),
                r = e.getOwnerid(),
            0 !== r && t.writeInt64String(23, r),
                r = e.getGroupprivilegeflag(),
            r && t.writeBool(24, r),
                r = e.getGroupmemberlimit(),
            0 !== r && t.writeInt32(25, r),
                r = e.getOpenflag(),
            r && t.writeBool(26, r),
                r = e.getInteresttribetypeid(),
            0 !== r && t.writeInt64String(27, r),
                r = e.getInteresttribetypename(),
            r.length > 0 && t.writeString(28, r),
                r = e.getInteresttribetypesmallavatarurl(),
            r.length > 0 && t.writeString(29, r),
                r = e.getInteresttribetypeoriginalavatarurl(),
            r.length > 0 && t.writeString(30, r),
                r = e.getInteresttribeintroduction(),
            r.length > 0 && t.writeString(31, r),
                r = e.getGroupmembermutualaddfriendfromgroupflag(),
            r && t.writeBool(32, r),
                r = e.getXlgroupid(),
            r.length > 0 && t.writeString(33, r),
                r = e.getGroupmessagelifetimeflag(),
            r && t.writeBool(34, r),
                r = e.getGroupmessagelifetime(),
            0 !== r && t.writeInt64String(35, r),
                r = e.getQrcodeexpiretime(),
            0 !== r && t.writeInt64String(36, r),
                r = e.getGroupshopflag(),
            r && t.writeBool(37, r),
                r = e.getCreatetime(),
            0 !== r && t.writeInt64String(38, r),
                r = e.getXmallshopflag(),
            r && t.writeBool(39, r),
                r = e.getGoldenbeanrewardflag(),
            r && t.writeBool(40, r),
                r = e.getGroupsilenceflag(),
            r && t.writeBool(41, r),
                r = e.getGroupmembersilenceinfoList(),
            r.length > 0 && t.writeRepeatedMessage(42, r, proto.GroupMemberSilenceInfo.serializeBinaryToWriter),
                r = e.getXmallshoplevel(),
            0 !== r && t.writeInt32(43, r),
                r = e.getForbiddenreceivegroupchatredpacketmemberuidList(),
            r.length > 0 && t.writePackedInt64(44, r)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetGroupDetailResp.GroupMemberBriefInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.GetGroupDetailResp.GroupMemberBriefInfo.displayName = "proto.GetGroupDetailResp.GroupMemberBriefInfo"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.toObject = function(e) {
                return proto.GetGroupDetailResp.GroupMemberBriefInfo.toObject(e, this)
            }
                ,
                proto.GetGroupDetailResp.GroupMemberBriefInfo.toObject = function(e, t) {
                    var r = {
                        memberuid: o.Message.getFieldWithDefault(t, 1, 0),
                        membername: o.Message.getFieldWithDefault(t, 2, ""),
                        memberalias: o.Message.getFieldWithDefault(t, 3, ""),
                        membersmallavatarurl: o.Message.getFieldWithDefault(t, 4, ""),
                        referenceuid: o.Message.getFieldWithDefault(t, 5, 0),
                        jointime: o.Message.getFieldWithDefault(t, 6, 0),
                        admin: o.Message.getFieldWithDefault(t, 7, !1),
                        joinchannel: o.Message.getFieldWithDefault(t, 8, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetGroupDetailResp.GroupMemberBriefInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetGroupDetailResp.GroupMemberBriefInfo;
            return proto.GetGroupDetailResp.GroupMemberBriefInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setMemberuid(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMembername(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setMemberalias(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setMembersmallavatarurl(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setReferenceuid(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setJointime(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setAdmin(o);
                        break;
                    case 8:
                        o = t.readInt32();
                        e.setJoinchannel(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetGroupDetailResp.GroupMemberBriefInfo.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getMemberuid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getMembername(),
            r.length > 0 && t.writeString(2, r),
                r = e.getMemberalias(),
            r.length > 0 && t.writeString(3, r),
                r = e.getMembersmallavatarurl(),
            r.length > 0 && t.writeString(4, r),
                r = e.getReferenceuid(),
            0 !== r && t.writeInt64String(5, r),
                r = e.getJointime(),
            0 !== r && t.writeInt64String(6, r),
                r = e.getAdmin(),
            r && t.writeBool(7, r),
                r = e.getJoinchannel(),
            0 !== r && t.writeInt32(8, r)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getMemberuid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setMemberuid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getMembername = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setMembername = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getMemberalias = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setMemberalias = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getMembersmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setMembersmallavatarurl = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getReferenceuid = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setReferenceuid = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getJointime = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setJointime = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getAdmin = function() {
            return o.Message.getFieldWithDefault(this, 7, !1)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setAdmin = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.getJoinchannel = function() {
            return o.Message.getFieldWithDefault(this, 8, 0)
        }
        ,
        proto.GetGroupDetailResp.GroupMemberBriefInfo.prototype.setJoinchannel = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getAdminid = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setAdminid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getIsuntitled = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setIsuntitled = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGrouptitle = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setGrouptitle = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getAnnouncementcontent = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setAnnouncementcontent = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getAnnouncementposttime = function() {
            return o.Message.getFieldWithDefault(this, 8, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setAnnouncementposttime = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getAnnouncementpostid = function() {
            return o.Message.getFieldWithDefault(this, 9, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setAnnouncementpostid = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getAnnouncementpostusersmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setAnnouncementpostusersmallavatarurl = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 11, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getOriginalavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 12, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setOriginalavatarurl = function(e) {
            o.Message.setField(this, 12, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getQrcodestring = function() {
            return o.Message.getFieldWithDefault(this, 13, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setQrcodestring = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getStickyflag = function() {
            return o.Message.getFieldWithDefault(this, 14, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setStickyflag = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getMuteflag = function() {
            return o.Message.getFieldWithDefault(this, 15, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setMuteflag = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getBlockflag = function() {
            return o.Message.getFieldWithDefault(this, 16, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setBlockflag = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getBurnafterreadingflag = function() {
            return o.Message.getFieldWithDefault(this, 17, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setBurnafterreadingflag = function(e) {
            o.Message.setField(this, 17, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupauthflag = function() {
            return o.Message.getFieldWithDefault(this, 18, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupauthflag = function(e) {
            o.Message.setField(this, 18, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupcontactflag = function() {
            return o.Message.getFieldWithDefault(this, 19, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupcontactflag = function(e) {
            o.Message.setField(this, 19, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getTotalmembernumber = function() {
            return o.Message.getFieldWithDefault(this, 20, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setTotalmembernumber = function(e) {
            o.Message.setField(this, 20, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupmemberbriefinfoList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.GetGroupDetailResp.GroupMemberBriefInfo, 21)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupmemberbriefinfoList = function(e) {
            o.Message.setRepeatedWrapperField(this, 21, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.addGroupmemberbriefinfo = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 21, e, proto.GetGroupDetailResp.GroupMemberBriefInfo, t)
        }
        ,
        proto.GetGroupDetailResp.prototype.clearGroupmemberbriefinfoList = function() {
            this.setGroupmemberbriefinfoList([])
        }
        ,
        proto.GetGroupDetailResp.prototype.getTakescreenshotflag = function() {
            return o.Message.getFieldWithDefault(this, 22, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setTakescreenshotflag = function(e) {
            o.Message.setField(this, 22, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getOwnerid = function() {
            return o.Message.getFieldWithDefault(this, 23, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setOwnerid = function(e) {
            o.Message.setField(this, 23, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupprivilegeflag = function() {
            return o.Message.getFieldWithDefault(this, 24, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupprivilegeflag = function(e) {
            o.Message.setField(this, 24, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupmemberlimit = function() {
            return o.Message.getFieldWithDefault(this, 25, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupmemberlimit = function(e) {
            o.Message.setField(this, 25, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getOpenflag = function() {
            return o.Message.getFieldWithDefault(this, 26, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setOpenflag = function(e) {
            o.Message.setField(this, 26, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getInteresttribetypeid = function() {
            return o.Message.getFieldWithDefault(this, 27, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setInteresttribetypeid = function(e) {
            o.Message.setField(this, 27, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getInteresttribetypename = function() {
            return o.Message.getFieldWithDefault(this, 28, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setInteresttribetypename = function(e) {
            o.Message.setField(this, 28, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getInteresttribetypesmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 29, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setInteresttribetypesmallavatarurl = function(e) {
            o.Message.setField(this, 29, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getInteresttribetypeoriginalavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 30, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setInteresttribetypeoriginalavatarurl = function(e) {
            o.Message.setField(this, 30, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getInteresttribeintroduction = function() {
            return o.Message.getFieldWithDefault(this, 31, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setInteresttribeintroduction = function(e) {
            o.Message.setField(this, 31, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupmembermutualaddfriendfromgroupflag = function() {
            return o.Message.getFieldWithDefault(this, 32, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupmembermutualaddfriendfromgroupflag = function(e) {
            o.Message.setField(this, 32, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getXlgroupid = function() {
            return o.Message.getFieldWithDefault(this, 33, "")
        }
        ,
        proto.GetGroupDetailResp.prototype.setXlgroupid = function(e) {
            o.Message.setField(this, 33, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupmessagelifetimeflag = function() {
            return o.Message.getFieldWithDefault(this, 34, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupmessagelifetimeflag = function(e) {
            o.Message.setField(this, 34, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupmessagelifetime = function() {
            return o.Message.getFieldWithDefault(this, 35, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupmessagelifetime = function(e) {
            o.Message.setField(this, 35, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getQrcodeexpiretime = function() {
            return o.Message.getFieldWithDefault(this, 36, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setQrcodeexpiretime = function(e) {
            o.Message.setField(this, 36, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupshopflag = function() {
            return o.Message.getFieldWithDefault(this, 37, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupshopflag = function(e) {
            o.Message.setField(this, 37, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getCreatetime = function() {
            return o.Message.getFieldWithDefault(this, 38, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setCreatetime = function(e) {
            o.Message.setField(this, 38, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getXmallshopflag = function() {
            return o.Message.getFieldWithDefault(this, 39, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setXmallshopflag = function(e) {
            o.Message.setField(this, 39, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGoldenbeanrewardflag = function() {
            return o.Message.getFieldWithDefault(this, 40, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGoldenbeanrewardflag = function(e) {
            o.Message.setField(this, 40, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupsilenceflag = function() {
            return o.Message.getFieldWithDefault(this, 41, !1)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupsilenceflag = function(e) {
            o.Message.setField(this, 41, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getGroupmembersilenceinfoList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.GroupMemberSilenceInfo, 42)
        }
        ,
        proto.GetGroupDetailResp.prototype.setGroupmembersilenceinfoList = function(e) {
            o.Message.setRepeatedWrapperField(this, 42, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.addGroupmembersilenceinfo = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 42, e, proto.GroupMemberSilenceInfo, t)
        }
        ,
        proto.GetGroupDetailResp.prototype.clearGroupmembersilenceinfoList = function() {
            this.setGroupmembersilenceinfoList([])
        }
        ,
        proto.GetGroupDetailResp.prototype.getXmallshoplevel = function() {
            return o.Message.getFieldWithDefault(this, 43, 0)
        }
        ,
        proto.GetGroupDetailResp.prototype.setXmallshoplevel = function(e) {
            o.Message.setField(this, 43, e)
        }
        ,
        proto.GetGroupDetailResp.prototype.getForbiddenreceivegroupchatredpacketmemberuidList = function() {
            return o.Message.getField(this, 44)
        }
        ,
        proto.GetGroupDetailResp.prototype.setForbiddenreceivegroupchatredpacketmemberuidList = function(e) {
            o.Message.setField(this, 44, e || [])
        }
        ,
        proto.GetGroupDetailResp.prototype.addForbiddenreceivegroupchatredpacketmemberuid = function(e, t) {
            o.Message.addToRepeatedField(this, 44, e, t)
        }
        ,
        proto.GetGroupDetailResp.prototype.clearForbiddenreceivegroupchatredpacketmemberuidList = function() {
            this.setForbiddenreceivegroupchatredpacketmemberuidList([])
        }
        ,
        proto.GroupMemberSilenceInfo = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GroupMemberSilenceInfo, o.Message),
        i.DEBUG && !COMPILED && (proto.GroupMemberSilenceInfo.displayName = "proto.GroupMemberSilenceInfo"),
        o.Message.GENERATE_TO_OBJECT && (proto.GroupMemberSilenceInfo.prototype.toObject = function(e) {
                return proto.GroupMemberSilenceInfo.toObject(e, this)
            }
                ,
                proto.GroupMemberSilenceInfo.toObject = function(e, t) {
                    var r = {
                        memberuid: o.Message.getFieldWithDefault(t, 1, 0),
                        membername: o.Message.getFieldWithDefault(t, 2, ""),
                        memberalias: o.Message.getFieldWithDefault(t, 3, ""),
                        membersmallavatarurl: o.Message.getFieldWithDefault(t, 4, ""),
                        endtime: o.Message.getFieldWithDefault(t, 5, 0),
                        silencetime: o.Message.getFieldWithDefault(t, 6, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GroupMemberSilenceInfo.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GroupMemberSilenceInfo;
            return proto.GroupMemberSilenceInfo.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GroupMemberSilenceInfo.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setMemberuid(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMembername(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setMemberalias(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setMembersmallavatarurl(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setEndtime(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setSilencetime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GroupMemberSilenceInfo.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GroupMemberSilenceInfo.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getMemberuid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getMembername(),
            r.length > 0 && t.writeString(2, r),
                r = e.getMemberalias(),
            r.length > 0 && t.writeString(3, r),
                r = e.getMembersmallavatarurl(),
            r.length > 0 && t.writeString(4, r),
                r = e.getEndtime(),
            0 !== r && t.writeInt64String(5, r),
                r = e.getSilencetime(),
            0 !== r && t.writeInt64String(6, r)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.getMemberuid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.setMemberuid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.getMembername = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.setMembername = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.getMemberalias = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.setMemberalias = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.getMembersmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.setMembersmallavatarurl = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.getEndtime = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.setEndtime = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.getSilencetime = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.GroupMemberSilenceInfo.prototype.setSilencetime = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.RecallGroupChatMessageReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.RecallGroupChatMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.RecallGroupChatMessageReq.displayName = "proto.RecallGroupChatMessageReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.RecallGroupChatMessageReq.prototype.toObject = function(e) {
                return proto.RecallGroupChatMessageReq.toObject(e, this)
            }
                ,
                proto.RecallGroupChatMessageReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        msgid: o.Message.getFieldWithDefault(t, 2, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.RecallGroupChatMessageReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.RecallGroupChatMessageReq;
            return proto.RecallGroupChatMessageReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.RecallGroupChatMessageReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMsgid(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.RecallGroupChatMessageReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.RecallGroupChatMessageReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.RecallGroupChatMessageReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getMsgid(),
            0 !== r && t.writeInt64String(2, r)
        }
        ,
        proto.RecallGroupChatMessageReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.RecallGroupChatMessageReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.RecallGroupChatMessageReq.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.RecallGroupChatMessageReq.prototype.setMsgid = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.RecallGroupChatMessageResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.RecallGroupChatMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.RecallGroupChatMessageResp.displayName = "proto.RecallGroupChatMessageResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.RecallGroupChatMessageResp.prototype.toObject = function(e) {
                return proto.RecallGroupChatMessageResp.toObject(e, this)
            }
                ,
                proto.RecallGroupChatMessageResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.RecallGroupChatMessageResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.RecallGroupChatMessageResp;
            return proto.RecallGroupChatMessageResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.RecallGroupChatMessageResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.RecallGroupChatMessageResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.RecallGroupChatMessageResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.RecallGroupChatMessageResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.RecallGroupChatMessageResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.RecallGroupChatMessageResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.RecallGroupChatMessageResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.RecallGroupChatMessageResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetNewSharingGroupMessageReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetNewSharingGroupMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetNewSharingGroupMessageReq.displayName = "proto.GetNewSharingGroupMessageReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetNewSharingGroupMessageReq.prototype.toObject = function(e) {
                return proto.GetNewSharingGroupMessageReq.toObject(e, this)
            }
                ,
                proto.GetNewSharingGroupMessageReq.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        offset: o.Message.getFieldWithDefault(t, 2, 0),
                        rows: o.Message.getFieldWithDefault(t, 3, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetNewSharingGroupMessageReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetNewSharingGroupMessageReq;
            return proto.GetNewSharingGroupMessageReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetNewSharingGroupMessageReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setOffset(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setRows(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetNewSharingGroupMessageReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetNewSharingGroupMessageReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetNewSharingGroupMessageReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getGroupid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getOffset(),
            0 !== r && t.writeInt64String(2, r),
                r = e.getRows(),
            0 !== r && t.writeInt32(3, r)
        }
        ,
        proto.GetNewSharingGroupMessageReq.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetNewSharingGroupMessageReq.prototype.setGroupid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetNewSharingGroupMessageReq.prototype.getOffset = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.GetNewSharingGroupMessageReq.prototype.setOffset = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetNewSharingGroupMessageReq.prototype.getRows = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetNewSharingGroupMessageReq.prototype.setRows = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetNewSharingGroupMessageResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetNewSharingGroupMessageResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetNewSharingGroupMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetNewSharingGroupMessageResp.displayName = "proto.GetNewSharingGroupMessageResp"),
        proto.GetNewSharingGroupMessageResp.repeatedFields_ = [4],
        o.Message.GENERATE_TO_OBJECT && (proto.GetNewSharingGroupMessageResp.prototype.toObject = function(e) {
                return proto.GetNewSharingGroupMessageResp.toObject(e, this)
            }
                ,
                proto.GetNewSharingGroupMessageResp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        seqno: o.Message.getFieldWithDefault(t, 3, 0),
                        dialogmessageList: o.Message.toObjectList(t.getDialogmessageList(), a.DialogMessage.toObject, e),
                        referenceMap: (r = t.getReferenceMap()) ? r.toObject(e, proto.ReferenceDialogMessage.toObject) : [],
                        endoffset: o.Message.getFieldWithDefault(t, 6, 0)
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
        proto.GetNewSharingGroupMessageResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetNewSharingGroupMessageResp;
            return proto.GetNewSharingGroupMessageResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetNewSharingGroupMessageResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var i = t.readInt32();
                        e.setErrorcode(i);
                        break;
                    case 2:
                        i = t.readString();
                        e.setErrormessage(i);
                        break;
                    case 3:
                        i = t.readInt64String();
                        e.setSeqno(i);
                        break;
                    case 4:
                        i = new a.DialogMessage;
                        t.readMessage(i, a.DialogMessage.deserializeBinaryFromReader),
                            e.addDialogmessage(i);
                        break;
                    case 5:
                        i = e.getReferenceMap();
                        t.readMessage(i, function(e, t) {
                            o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.ReferenceDialogMessage.deserializeBinaryFromReader)
                        });
                        break;
                    case 6:
                        i = t.readInt64String();
                        e.setEndoffset(i);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetNewSharingGroupMessageResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetNewSharingGroupMessageResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getSeqno(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getDialogmessageList(),
            r.length > 0 && t.writeRepeatedMessage(4, r, a.DialogMessage.serializeBinaryToWriter),
                r = e.getReferenceMap(!0),
            r && r.getLength() > 0 && r.serializeBinary(5, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.ReferenceDialogMessage.serializeBinaryToWriter),
                r = e.getEndoffset(),
            0 !== r && t.writeInt64String(6, r)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.getSeqno = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.setSeqno = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.getDialogmessageList = function() {
            return o.Message.getRepeatedWrapperField(this, a.DialogMessage, 4)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.setDialogmessageList = function(e) {
            o.Message.setRepeatedWrapperField(this, 4, e)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.addDialogmessage = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 4, e, proto.DialogMessage, t)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.clearDialogmessageList = function() {
            this.setDialogmessageList([])
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.getReferenceMap = function(e) {
            return o.Message.getMapField(this, 5, e, proto.ReferenceDialogMessage)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.clearReferenceMap = function() {
            this.getReferenceMap().clear()
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.getEndoffset = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.GetNewSharingGroupMessageResp.prototype.setEndoffset = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        i.object.extend(t, proto)
    },
    "3d41": function(e, t, r) {
        "use strict";
        var o, i, s = r("4aa6"), a = r.n(s), n = r("795b"), p = r.n(n), l = r("e814"), g = r.n(l), u = r("cb5d"), d = u["c"].logCollector, c = "msgDb", f = "xlMsg", h = "xldbv";
        function R(e) {
            return e || (e = g()(1e4 * Math.random(), 10)),
                o = f + e,
                i ? p.a.resolve(i) : D(o)
        }
        var M = {
            getObjStore: function(e, t, r) {
                var o;
                try {
                    o = e.transaction(t, r || "readwrite").objectStore(t)
                } catch (i) {
                    d.error(i)
                }
                return o
            },
            deleteObjStore: function() {
                window.indexedDB.deleteDatabase(o)
            },
            clearVersionCache: function() {
                window.sessionStorage.removeItem(h)
            }
        }
            , y = !1;
        function D(e) {
            return new p.a(function(t, r) {
                    window.indexedDB.deleteDatabase(e);
                    var o = F()
                        , s = window.indexedDB.open(e, o);
                    window.addEventListener("unload", function() {
                        window.indexedDB.deleteDatabase(e)
                    }),
                        s.onerror = function(o) {
                            window.indexedDB.deleteDatabase(e),
                                y ? r(o) : t(D(e))
                        }
                        ,
                        s.onsuccess = function(e) {
                            var r = a()(M);
                            r[c] = e.target.result,
                                i = r,
                                t(r)
                        }
                        ,
                        s.onupgradeneeded = function(e) {
                            var r = e.target.result
                                , o = e.target.transaction
                                , s = r.createObjectStore("msg", {
                                keyPath: "seq",
                                autoIncrement: !0
                            });
                            s.createIndex("localid", "localid"),
                                s.createIndex("msgid", "msgid"),
                                s.createIndex("destid", "destid"),
                                s.createIndex("sessionid", "sessionid");
                            var n = r.createObjectStore("sourceMsg", {
                                keyPath: "seq",
                                autoIncrement: !0
                            });
                            n.createIndex("msgid", "msgid"),
                                n.createIndex("sessionid", "sessionid");
                            var p = r.createObjectStore("groupMsg", {
                                keyPath: "seq",
                                autoIncrement: !0
                            });
                            p.createIndex("msgid", "msgid"),
                                p.createIndex("sessionid", "sessionid"),
                                o.oncomplete = function() {
                                    var r = a()(M);
                                    r[c] = e.target.result,
                                        i = r,
                                        t(r)
                                }
                        }
                }
            )
        }
        function F() {
            var e = 1;
            return e
        }
        t["a"] = {
            initial: R
        }
    },
    "3db4": function(e, t, r) {},
    "42a7": function(e, t, r) {
        "use strict";
        var o = r("9112")
            , i = r.n(o);
        i.a
    },
    4360: function(e, t, r) {
        "use strict";
        var o = r("768b")
            , i = r("2d1f")
            , s = r.n(i)
            , a = (r("ac6a"),
            r("7618"))
            , n = r("2b0e")
            , p = r("2f62");
        n["a"].use(p["a"]);
        var l = {
            userInfo: {
                deviceId: null,
                sessionId: null,
                noNickName: null,
                noEmail: null,
                cert: null,
                bodyAes: null,
                userFileDomain: null,
                dialogFileDomain: null,
                user: null,
                configItemList: null
            },
            page: "app-check"
        }
            , g = {
            goPage: function(e, t) {
                e.page = t
            },
            upUserInfo: function(e, t) {
                if (t && "object" === Object(a["a"])(t)) {
                    var r = e.userInfo;
                    s()(t).forEach(function(e) {
                        var t = Object(o["a"])(e, 2)
                            , i = t[0]
                            , s = t[1];
                        r[i] = s
                    })
                }
            }
        }
            , u = {};
        t["a"] = new p["a"].Store({
            state: l,
            getters: u,
            mutations: g
        })
    },
    4687: function(e, t, r) {
        "use strict";
        r("55dd");
        var o = r("795b")
            , i = r.n(o)
            , s = r("15b8")
            , a = r.n(s)
            , n = r("308d")
            , p = r("6bb5")
            , l = r("4e2b")
            , g = (r("34ef"),
            r("d225"))
            , u = r("b0b4")
            , d = (r("6b54"),
            r("cb5d"))
            , c = (r("7f7f"),
            function() {
                function e() {
                    Object(g["a"])(this, e),
                        this.poll = {}
                }
                return Object(u["a"])(e, [{
                    key: "addEventListener",
                    value: function(e, t, r) {
                        if ("string" === typeof e) {
                            this.poll[e] || (this.poll[e] = []);
                            var o = this.poll[e];
                            "function" === typeof t && o.push({
                                callBack: t,
                                env: r || window
                            })
                        }
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e, t) {
                        var r = this.poll[e];
                        if ("string" !== typeof e || !r)
                            return null;
                        for (var o = 0; o < r.length; o += 1)
                            if (r[o].callBack === t)
                                return r.splice(o, 1);
                        return !1
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e) {
                        var t = this.poll[e];
                        if ("string" !== typeof e || !t)
                            return null;
                        t.length > 100 && d["a"].debug("event poll over 100");
                        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                            o[i - 1] = arguments[i];
                        for (var s = 0; s < t.length; s += 1)
                            if (t[s])
                                try {
                                    t[s].callBack && t[s].callBack.apply(t[s].env || void 0, o)
                                } catch (a) {
                                    d["a"].error(a)
                                }
                        return this
                    }
                }]),
                    e
            }());
        c.prototype.listener = c.prototype.addEventListener,
            c.prototype.emitter = c.prototype.dispatchEvent,
            c.prototype.fired = c.prototype.dispatchEvent;
        var f = c
            , h = new f
            , R = d["c"].logCollector
            , M = 1e4;
        function y(e, t, r) {
            if (!(this instanceof y))
                return new y(r);
            var o = {
                autoConnect: !0,
                timeout: 6e3,
                reConnect: !0,
                connectIntervalMax: 6e4,
                reConnectMaxTimes: null,
                connectInterval: 1e4,
                connectDecay: 1.5,
                heartBeat: "",
                heartBeatBack: "",
                heartBeatTimeout: null,
                heartBeatInterval: 6e4,
                binaryType: "blob"
            };
            for (var i in r || (r = {}),
                o)
                "undefined" !== typeof r[i] ? this[i] = r[i] : this[i] = o[i];
            this.url = e,
                this.readyState = M;
            var s, a, n, p, l = this, g = !1, u = 0, d = 0, c = h;
            c.addEventListener("connecting", function(e) {
                l.onconnecting(e)
            }, l),
                c.addEventListener("open", function(e) {
                    l.onopen(e)
                }, l),
                c.addEventListener("message", function(e) {
                    l.onmessage(e)
                }, l),
                c.addEventListener("close", function(e) {
                    l.onclose(e)
                }, l),
                c.addEventListener("error", function(e) {
                    l.onerror(e)
                }, l),
                c.addEventListener("disconnect", function(e) {
                    l.ondisconnect(e)
                }, l),
                this.addEventListener = c.addEventListener.bind(c),
                this.listener = this.addEventListener,
                this.removeEventListener = c.removeEventListener.bind(c),
                this.dispatchEvent = c.dispatchEvent.bind(c),
                this.open = function() {
                    s && s.readyState === WebSocket.OPEN || (s = new WebSocket(this.url,t || []),
                            s.binaryType = this.binaryType,
                            this.readyState = WebSocket.CONNECTING,
                            c.dispatchEvent("connecting"),
                            g = !1,
                            a = setTimeout(function() {
                                s.close()
                            }, this.timeout),
                            s.onopen = function() {
                                clearTimeout(a),
                                    l.protocol = s.protocol,
                                    l.readyState = WebSocket.OPEN,
                                    u = 0,
                                    d = 0,
                                    R.info("webSocket open"),
                                    c.dispatchEvent("open", {
                                        currentTarget: l,
                                        target: l,
                                        type: "open"
                                    }),
                                l.heartBeat && (n = setInterval(function() {
                                    s.send(l.heartBeat),
                                    l.heartBeatTimeout && (p = setTimeout(function() {
                                        s.close()
                                    }, l.heartBeatTimeout))
                                }, l.heartBeatInterval))
                            }
                            ,
                            s.onclose = function() {
                                n && clearInterval(n),
                                    !g && l.reConnect && l.connectInterval ? l.reConnectMaxTimes && u > l.reConnectMaxTimes ? (l.readyState = WebSocket.CLOSED,
                                        u = 0,
                                        d = 0,
                                        c.dispatchEvent("disconnect", {
                                            currentTarget: l,
                                            target: l,
                                            type: "disconnect"
                                        })) : (l.readyState = WebSocket.CONNECTING,
                                        d = l.connectInterval * Math.pow(l.connectDecay, u),
                                        u += 1,
                                        setTimeout(function() {
                                            l.open()
                                        }, d < l.connectIntervalMax ? d : l.connectIntervalMax)) : (l.readyState = WebSocket.CLOSED,
                                        c.dispatchEvent("close", {
                                            currentTarget: l,
                                            target: l,
                                            type: "close"
                                        }))
                            }
                            ,
                            s.onmessage = function(e) {
                                e.data && (p && (clearTimeout(p),
                                e.data === l.heartBeatBack) || c.dispatchEvent("message", {
                                    data: e.data,
                                    currentTarget: l,
                                    target: l,
                                    type: "message"
                                }))
                            }
                            ,
                            s.onerror = function(e) {
                                c.dispatchEvent("error", e)
                            }
                    )
                }
                ,
            this.autoConnect && this.open(),
                this.send = function(e) {
                    s && s.send(e)
                }
                ,
                this.close = function(e, t) {
                    "undefined" === typeof e && (e = 1e3),
                        g = !0,
                    s && s.close(e, t)
                }
                ,
                this.refresh = function() {
                    s && s.close()
                }
        }
        y.prototype.onopen = function() {}
            ,
            y.prototype.onclose = function() {}
            ,
            y.prototype.onconnecting = function() {}
            ,
            y.prototype.onmessage = function() {}
            ,
            y.prototype.onerror = function() {}
            ,
            y.prototype.ondisconnect = function() {}
        ;
        try {
            y.NOCREATE = M,
                y.CONNECTING = WebSocket.CONNECTING,
                y.OPEN = WebSocket.OPEN,
                y.CLOSING = WebSocket.CLOSING,
                y.CLOSED = WebSocket.CLOSED
        } catch (H) {}
        var D, F = y, b = r("51be"), m = r("bd86"), G = r("6e4c"), C = G.CmdId, w = (D = {},
            Object(m["a"])(D, C.HEARTBEATREQCMDID, "heartBeatReq"),
            Object(m["a"])(D, C.HEARTBEATRESPCMDID, "heartBeatResp"),
            Object(m["a"])(D, C.SESSIONKILLEDNOTIFICATIONRESPCMDID, "sessionKilledNotificationResp"),
            Object(m["a"])(D, C.SIGNOUTNOTIFICATIONRESPCMDID, "signOutNotificationResp"),
            Object(m["a"])(D, C.CREATEWEBQRCODEREQCMDID, "createWebQrcodeReq"),
            Object(m["a"])(D, C.CREATEWEBQRCODERESPCMDID, "createWebQrcodeResp"),
            Object(m["a"])(D, C.GETALERTCONFIGREQCMDID, "getAlertConfigReq"),
            Object(m["a"])(D, C.GETALERTCONFIGRESPCMDID, "getAlertConfigResp"),
            Object(m["a"])(D, C.AUTHLOGOUTTOWEBRESPCMDID, "authLogoutToWebResp"),
            Object(m["a"])(D, C.AUTHLOGOUTREQCMDID, "authLogOutReq"),
            Object(m["a"])(D, C.AUTHLOGOUTRESPCMDID, "authLogOutResp"),
            Object(m["a"])(D, C.APPFORCEWEBLOGOUTTOWEBRESPCMDID, "appForceWebLogoutToWebResp"),
            Object(m["a"])(D, C.ADDFRIENDNEWREQCMDID, "addFriendNewReq"),
            Object(m["a"])(D, C.ADDFRIENDNEWRESPCMDID, "addFriendNewResp"),
            Object(m["a"])(D, C.GETGROUPCONTACTLISTREQCMDID, "getGroupContactListReq"),
            Object(m["a"])(D, C.GETGROUPCONTACTLISTRESPCMDID, "getGroupContactListResp"),
            Object(m["a"])(D, C.GETCONFIRMEDCONTACTSREQCMDID, "getConfirmedContactsReq"),
            Object(m["a"])(D, C.GETCONFIRMEDCONTACTSRESPCMDID, "getConfirmedContactsResp"),
            Object(m["a"])(D, C.CREATEGROUPCHATDIALOGREQCMDID, "createGroupChatDialogReq"),
            Object(m["a"])(D, C.CREATEGROUPCHATDIALOGRESPCMDID, "createGroupChatDialogResp"),
            Object(m["a"])(D, C.SENDGROUPCHATMESSAGEREQCMDID, "sendGroupChatMessageReq"),
            Object(m["a"])(D, C.SENDGROUPCHATMESSAGERESPCMDID, "sendGroupChatMessageResp"),
            Object(m["a"])(D, C.REPLYGROUPCHATMESSAGEREQCMDID, "replyGroupChatMessageReq"),
            Object(m["a"])(D, C.REPLYGROUPCHATMESSAGERESPCMDID, "replyGroupChatMessageResp"),
            Object(m["a"])(D, C.FORWARDMESSAGETOGROUPCHATREQCMDID, "forwardMessageToGroupChatReq"),
            Object(m["a"])(D, C.FORWARDMESSAGETOGROUPCHATRESPCMDID, "forwardMessageToGroupChatResp"),
            Object(m["a"])(D, C.GETGROUPCHATDIALOGDETAILNEWREQCMDID, "getGroupChatDialogDetailNewReq"),
            Object(m["a"])(D, C.GETGROUPCHATDIALOGDETAILNEWRESPCMDID, "getGroupChatDialogDetailNewResp"),
            Object(m["a"])(D, C.RECALLGROUPCHATMESSAGEREQCMDID, "recallGroupChatMessageReq"),
            Object(m["a"])(D, C.RECALLGROUPCHATMESSAGERESPCMDID, "recallGroupChatMessageResp"),
            Object(m["a"])(D, C.ADDGROUPCHATUSERNEWREQCMDID, "addGroupChatUserNewReq"),
            Object(m["a"])(D, C.ADDGROUPCHATUSERNEWRESPCMDID, "addGroupChatUserNewResp"),
            Object(m["a"])(D, C.DELETEGROUPCHATUSERREQCMDID, "deleteGroupChatUserReq"),
            Object(m["a"])(D, C.DELETEGROUPCHATUSERRESPCMDID, "deleteGroupChatUserResp"),
            Object(m["a"])(D, C.GETNEWSHARINGGROUPMESSAGEREQCMDID, "getNewSharingGroupMessageReq"),
            Object(m["a"])(D, C.GETNEWSHARINGGROUPMESSAGERESPCMDID, "getNewSharingGroupMessageResp"),
            Object(m["a"])(D, C.GETGROUPDETAILREQCMDID, "getGroupDetailReq"),
            Object(m["a"])(D, C.GETGROUPDETAILRESPCMDID, "getGroupDetailResp"),
            Object(m["a"])(D, C.NEWMESSAGENOTIFICATIONRESPCMDID, "newMessageNotificationResp"),
            Object(m["a"])(D, C.SENDPRIVATECHATMESSAGEREQCMDID, "sendPrivateChatMessageReq"),
            Object(m["a"])(D, C.SENDPRIVATECHATMESSAGERESPCMDID, "sendPrivateChatMessageResp"),
            Object(m["a"])(D, C.REPLYPRIVATECHATMESSAGEREQCMDID, "replyPrivateChatMessageReq"),
            Object(m["a"])(D, C.REPLYPRIVATECHATMESSAGERESPCMDID, "replyPrivateChatMessageResp"),
            Object(m["a"])(D, C.GETPRIVATECHATDIALOGDETAILREQCMDID, "getPrivateChatDialogDetailReq"),
            Object(m["a"])(D, C.GETPRIVATECHATDIALOGDETAILRESPCMDID, "getPrivateChatDialogDetailResp"),
            Object(m["a"])(D, C.GETDIALOGLISTREQCMDID, "getDialogListReq"),
            Object(m["a"])(D, C.GETDIALOGLISTRESPCMDID, "getDialogListResp"),
            Object(m["a"])(D, C.GETNEWMESSAGEREQCMDID, "getNewMessageReq"),
            Object(m["a"])(D, C.GETNEWMESSAGERESPCMDID, "getNewMessageResp"),
            Object(m["a"])(D, C.GETBRIEFDIALOGLISTREQCMDID, "getBriefDialogListReq"),
            Object(m["a"])(D, C.GETBRIEFDIALOGLISTRESPCMDID, "getBriefDialogListResp"),
            Object(m["a"])(D, C.GETDIALOGKEYREQCMDID, "getDialogKeyReq"),
            Object(m["a"])(D, C.GETDIALOGKEYRESPCMDID, "getDialogKeyResp"),
            Object(m["a"])(D, C.RECALLPRIVATECHATMESSAGEREQCMDID, "recallPrivateChatMessageReq"),
            Object(m["a"])(D, C.RECALLPRIVATECHATMESSAGERESPCMDID, "recallPrivateChatMessageResp"),
            Object(m["a"])(D, C.SCANWEBQRCODETOWEBRESPCMDID, "scanWebQrcodeToWebResp"),
            Object(m["a"])(D, C.CLICKOKRESPCMDID, "clickOKToWebResp"),
            D), S = {
            heartBeatReq: "heartBeatResp",
            systemCurrentTimeMillisReq: "systemCurrentTimeMillisResp",
            createWebQrcodeReq: "createWebQrcodeResp",
            getAlertConfigReq: "getAlertConfigResp",
            authLogOutReq: "authLogOutResp",
            addFriendReq: "addFriendResp",
            addFriendNewReq: "addFriendNewResp",
            getConfirmedContactsReq: "getConfirmedContactsResp",
            getGroupContactListReq: "getGroupContactListResp",
            createGroupChatDialogReq: "createGroupChatDialogResp",
            sendGroupChatMessageReq: "sendGroupChatMessageResp",
            replyGroupChatMessageReq: "replyGroupChatMessageResp",
            forwardMessageToGroupChatReq: "forwardMessageToGroupChatResp",
            getGroupChatDialogDetailNewReq: "getGroupChatDialogDetailNewResp",
            getGroupDetailReq: "getGroupDetailResp",
            getGroupChatHistoryMessageReq: "GetGroupChatHistoryMessageResp",
            enterGroupChatReq: "enterGroupChatResp",
            leaveGroupChatReq: "leaveGroupChatResp",
            sendGroupChatArrivalAckReq: "sendGroupChatArrivalAckResp",
            deleteGroupChatMessageReq: "deleteGroupChatMessageResp",
            recallGroupChatMessageReq: "recallGroupChatMessageResp",
            addGroupChatUserNewReq: "addGroupChatUserNewResp",
            deleteGroupChatUserReq: "deleteGroupChatUserResp",
            getNewSharingGroupMessageReq: "getNewSharingGroupMessageResp",
            sendPrivateChatMessageReq: "sendPrivateChatMessageResp",
            replyPrivateChatMessageReq: "replyPrivateChatMessageResp",
            getPrivateChatDialogDetailReq: "getPrivateChatDialogDetailResp",
            getDialogListReq: "getDialogListResp",
            getNewMessageReq: "getNewMessageResp",
            getNewMessageFromWebReq: "getNewMessageFromWebResp",
            updatePrivateChatDialogStickyConfigReq: "updatePrivateChatDialogStickyConfigResp",
            getBriefDialogListReq: "getBriefDialogListResp",
            enterPrivateChatReq: "enterPrivateChatResp",
            leavePrivateChatReq: "leavePrivateChatResp",
            getDialogKeyReq: "getDialogKeyResp",
            recallPrivateChatMessageReq: "recallPrivateChatMessageResp",
            startTypingPrivateChatReq: "startTypingPrivateChatResp",
            sendPrivateChatArrivalAckReq: "sendPrivateChatArrivalAckResp",
            deletePrivateChatMessageReq: "deletePrivateChatMessageResp"
        }, v = r("6e4c"), W = r("f741"), B = r("7a6c"), E = r("795a"), I = (r("d1d0"),
            r("017e")), k = r("56ac"), O = r("ecc0"), T = v.CmdId, q = 3e4, L = !0, P = L ? function(e) {
            return void 0 !== e && null !== e ? e.toString() : e
        }
            : function(e) {
            return void 0 !== e && null !== e ? 1 * e : e
        }
            , N = {
            heartBeatReq: function(e, t) {
                return e.setCmdid(T.HEARTBEATREQCMDID),
                    e.setBody(A.heartBeatReq(t).serializeBinary()),
                    e
            },
            systemCurrentTimeMillisReq: function(e, t) {
                return e.setCmdid(T.SYSTEMCURRENTTIMEMILLISREQCMDID),
                    e.setBody(A.systemCurrentTimeMillisReq(t).serializeBinary()),
                    e
            },
            createWebQrcodeReq: function(e, t) {
                return e.setCmdid(T.CREATEWEBQRCODEREQCMDID),
                    e.setBody(A.createWebQrcodeReq(t).serializeBinary()),
                    e
            },
            getAlertConfigReq: function(e, t) {
                return e.setCmdid(T.GETALERTCONFIGREQCMDID),
                    e.setBody(A.getAlertConfigReq(t).serializeBinary()),
                    e
            },
            authLogOutReq: function(e, t) {
                return e.setCmdid(T.AUTHLOGOUTREQCMDID),
                    e.setBody(A.authLogOutReq(t).serializeBinary()),
                    e
            },
            addFriendReq: function(e, t) {
                return e.setCmdid(T.ADDFRIENDREQCMDID),
                    e.setBody(A.addFriendReq(t).serializeBinary()),
                    e
            },
            addFriendNewReq: function(e, t) {
                return e.setCmdid(T.ADDFRIENDNEWREQCMDID),
                    e.setBody(A.addFriendNewReq(t).serializeBinary()),
                    e
            },
            getGroupContactListReq: function(e, t) {
                return e.setCmdid(T.GETGROUPCONTACTLISTREQCMDID),
                    e.setBody(A.getGroupContactListReq(t).serializeBinary()),
                    e
            },
            getConfirmedContactsReq: function(e, t) {
                return e.setCmdid(T.GETCONFIRMEDCONTACTSREQCMDID),
                    e.setBody(A.getConfirmedContactsReq(t).serializeBinary()),
                    e
            },
            createGroupChatDialogReq: function(e, t) {
                return e.setCmdid(T.CREATEGROUPCHATDIALOGREQCMDID),
                    e.setBody(A.createGroupChatDialogReq(t).serializeBinary()),
                    e
            },
            sendGroupChatMessageReq: function(e, t) {
                return e.setCmdid(T.SENDGROUPCHATMESSAGEREQCMDID),
                    e.setBody(A.sendGroupChatMessageReq(t).serializeBinary()),
                    e
            },
            replyGroupChatMessageReq: function(e, t) {
                return e.setCmdid(T.REPLYGROUPCHATMESSAGEREQCMDID),
                    e.setBody(A.replyGroupChatMessageReq(t).serializeBinary()),
                    e
            },
            forwardMessageToGroupChatReq: function(e, t) {
                return e.setCmdid(T.FORWARDMESSAGETOGROUPCHATREQCMDID),
                    e.setBody(A.forwardMessageToGroupChatReq(t).serializeBinary()),
                    e
            },
            getGroupChatDialogDetailNewReq: function(e, t) {
                return e.setCmdid(T.GETGROUPCHATDIALOGDETAILNEWREQCMDID),
                    e.setBody(A.getGroupChatDialogDetailNewReq(t).serializeBinary()),
                    e
            },
            getGroupDetailReq: function(e, t) {
                return e.setCmdid(T.GETGROUPDETAILREQCMDID),
                    e.setBody(A.getGroupDetailReq(t).serializeBinary()),
                    e
            },
            getGroupChatHistoryMessageReq: function(e, t) {
                return e.setCmdid(T.GETGROUPCHATHISTORYMESSAGEREQCMDID),
                    e.setBody(A.getGroupChatHistoryMessageReq(t).serializeBinary()),
                    e
            },
            enterGroupChatReq: function(e, t) {
                return e.setCmdid(T.ENTERGROUPCHATREQCMDID),
                    e.setBody(A.enterGroupChatReq(t).serializeBinary()),
                    e
            },
            leaveGroupChatReq: function(e, t) {
                return e.setCmdid(T.LEAVEGROUPCHATREQCMDID),
                    e.setBody(A.leaveGroupChatReq(t).serializeBinary()),
                    e
            },
            sendGroupChatArrivalAckReq: function(e, t) {
                return e.setCmdid(T.SENDGROUPCHATARRIVALACKREQCMDID),
                    e.setBody(A.sendGroupChatArrivalAckReq(t).serializeBinary()),
                    e
            },
            deleteGroupChatMessageReq: function(e, t) {
                return e.setCmdid(T.DELETEGROUPCHATMESSAGEREQCMDID),
                    e.setBody(A.deleteGroupChatMessageReq(t).serializeBinary()),
                    e
            },
            recallGroupChatMessageReq: function(e, t) {
                return e.setCmdid(T.RECALLGROUPCHATMESSAGEREQCMDID),
                    e.setBody(A.recallGroupChatMessageReq(t).serializeBinary()),
                    e
            },
            addGroupChatUserNewReq: function(e, t) {
                return e.setCmdid(T.ADDGROUPCHATUSERNEWREQCMDID),
                    e.setBody(A.addGroupChatUserNewReq(t).serializeBinary()),
                    e
            },
            deleteGroupChatUserReq: function(e, t) {
                return e.setCmdid(T.DELETEGROUPCHATUSERREQCMDID),
                    e.setBody(A.deleteGroupChatUserReq(t).serializeBinary()),
                    e
            },
            getNewSharingGroupMessageReq: function(e, t) {
                return e.setCmdid(T.GETNEWSHARINGGROUPMESSAGEREQCMDID),
                    e.setBody(A.getNewSharingGroupMessageReq(t).serializeBinary()),
                    e
            },
            sendPrivateChatMessageReq: function(e, t) {
                return e.setCmdid(T.SENDPRIVATECHATMESSAGEREQCMDID),
                    e.setBody(A.sendPrivateChatMessageReq(t).serializeBinary()),
                    e
            },
            replyPrivateChatMessageReq: function(e, t) {
                return e.setCmdid(T.REPLYPRIVATECHATMESSAGEREQCMDID),
                    e.setBody(A.replyPrivateChatMessageReq(t).serializeBinary()),
                    e
            },
            getPrivateChatDialogDetailReq: function(e, t) {
                return e.setCmdid(T.GETPRIVATECHATDIALOGDETAILREQCMDID),
                    e.setBody(A.getPrivateChatDialogDetailReq(t).serializeBinary()),
                    e
            },
            getDialogListReq: function(e, t) {
                return e.setCmdid(T.GETDIALOGLISTREQCMDID),
                    e.setBody(A.getDialogListReq(t).serializeBinary()),
                    e
            },
            getNewMessageReq: function(e, t) {
                return e.setCmdid(T.GETNEWMESSAGEREQCMDID),
                    e.setBody(A.getNewMessageReq(t).serializeBinary()),
                    e
            },
            getNewMessageFromWebReq: function(e, t) {
                return e.setCmdid(T.GETNEWMESSAGEFROMWEBREQCMDID),
                    e.setBody(A.getNewMessageFromWebReq(t).serializeBinary()),
                    e
            },
            updatePrivateChatDialogStickyConfigReq: function(e, t) {
                return e.setCmdid(T.UPDATEPRIVATECHATDIALOGSTICKYCONFIGREQCMDID),
                    e.setBody(A.updatePrivateChatDialogStickyConfigReq(t).serializeBinary()),
                    e
            },
            getBriefDialogListReq: function(e, t) {
                return e.setCmdid(T.GETBRIEFDIALOGLISTREQCMDID),
                    e.setBody(A.getBriefDialogListReq(t).serializeBinary()),
                    e
            },
            enterPrivateChatReq: function(e, t) {
                return e.setCmdid(T.ENTERPRIVATECHATREQCMDID),
                    e.setBody(A.enterPrivateChatReq(t).serializeBinary()),
                    e
            },
            leavePrivateChatReq: function(e, t) {
                return e.setCmdid(T.LEAVEPRIVATECHATREQCMDID),
                    e.setBody(A.leavePrivateChatReq(t).serializeBinary()),
                    e
            },
            getDialogKeyReq: function(e, t) {
                return e.setCmdid(T.GETDIALOGKEYREQCMDID),
                    e.setBody(A.getDialogKeyReq(t).serializeBinary()),
                    e
            },
            recallPrivateChatMessageReq: function(e, t) {
                return e.setCmdid(T.RECALLPRIVATECHATMESSAGEREQCMDID),
                    e.setBody(A.recallPrivateChatMessageReq(t).serializeBinary()),
                    e
            },
            startTypingPrivateChatReq: function(e, t) {
                return e.setCmdid(T.STARTTYPINGPRIVATECHATREQCMDID),
                    e.setBody(A.startTypingPrivateChatReq(t).serializeBinary()),
                    e
            },
            sendPrivateChatArrivalAckReq: function(e, t) {
                return e.setCmdid(T.SENDPRIVATECHATARRIVALACKREQCMDID),
                    e.setBody(A.sendPrivateChatArrivalAckReq(t).serializeBinary()),
                    e
            },
            deletePrivateChatMessageReq: function(e, t) {
                return e.setCmdid(T.DELETEPRIVATECHATMESSAGEREQCMDID),
                    e.setBody(A.deletePrivateChatMessageReq(t).serializeBinary()),
                    e
            }
        }, A = {
            heartBeatReq: function(e) {
                var t = new B.HeartbeatReq;
                return t.setPingid(P(e.pingId)),
                    t.setDisconnectdelay(P(e.disconnectDelay)),
                    t
            },
            systemCurrentTimeMillisReq: function() {
                var e = new B.SystemCurrentTimeMillisReq;
                return e
            },
            createWebQrcodeReq: function() {
                var e = new B.CreateWebQrcodeReq;
                return e.setUniqueid(0),
                    e
            },
            getAlertConfigReq: function() {
                var e = new O.GetAlertConfigReq;
                return e
            },
            authLogOutReq: function(e) {
                var t = new O.AuthLogOutReq;
                return t.setAppversioncode(e.appVersionCode),
                    t.setDevicetype(e.deviceType),
                    t.setImei(e.imei),
                    t.setBrand(e.brand),
                    t.setModel(e.setModel),
                    t
            },
            addFriendReq: function(e) {
                var t = new E.AddFriendReq;
                return t.setUid(P(e.uid)),
                    t
            },
            addFriendNewReq: function(e) {
                var t = new E.AddFriendNewReq;
                return t.setUid(P(e.uid)),
                    t.setAddmetype(e.addMeType),
                    t
            },
            getGroupContactListReq: function(e) {
                var t = new E.GetGroupContactListReq;
                return t.setPageno(e.pageNo),
                    t.setPagesize(e.pageSize),
                    t
            },
            getConfirmedContactsReq: function() {
                var e = new E.GetConfirmedContactsReq;
                return e
            },
            groupMember: function(e) {
                var t = new I.GroupMember;
                return t.setMemberuid(P(e.memberUid)),
                    t.setMembername(e.memberName),
                    t.setMemberalias(e.memberAlias),
                    t.setMembersmallavatarurl(e.memberSmallAvatarUrl),
                    t.setReferenceuid(P(e.referenceUid)),
                    t.setJointime(P(e.joinTime)),
                    t.setAdmin(e.admin),
                    t
            },
            createGroupChatDialogReq: function(e) {
                var t = new I.CreateGroupChatDialogReq;
                return e.memberUidList && t.setMemberuidList(e.memberUidList.map(P)),
                    t
            },
            sendGroupChatMessageReq: function(e) {
                var t = new I.SendGroupChatMessageReq;
                return t.setGroupid(P(e.groupId)),
                    t.setLocalid(P(e.localId)),
                    t.setMsgprecontent(e.msgPreContent),
                    t.setMsgpostcontent(e.msgPostContent),
                    t.setMediaflag(e.mediaFlag),
                    t.setMediaconstructor(e.mediaConstructor),
                    t.setMediaattribute(e.mediaAttribute),
                e.atList && t.setAtList(e.atList.map(P)),
                    t
            },
            replyGroupChatMessageReq: function(e) {
                var t = new I.ReplyGroupChatMessageReq;
                return t.setGroupid(P(e.groupId)),
                    t.setLocalid(P(e.localId)),
                    t.setMsgprecontent(e.msgPreContent),
                    t.setMsgpostcontent(e.msgPostContent),
                    t.setMediaflag(e.mediaFlag),
                    t.setMediaconstructor(e.mediaConstructor),
                    t.setMediaattribute(e.mediaAttribute),
                e.atListList && t.setAtlistList(e.atListList.map(P)),
                    t.setMsgidreferenced(P(e.msgIdReferenced)),
                    t.setMsgsrcidreferenced(P(e.msgSrcIdReferenced)),
                    t.setMsgdestidreferenced(P(e.msgDestIdReferenced)),
                    t.setMsgprecontentreferenced(e.msgPreContentReferenced),
                    t.setMsgpostcontentreferenced(e.msgPostContentReferenced),
                    t.setMediaflagreferenced(e.mediaFlagReferenced),
                    t.setMediaconstructorreferenced(e.mediaConstructorReferenced),
                    t.setMediaattributereferenced(e.mediaAttributeReferenced),
                    t.setMsgsendtimereferenced(P(e.msgSendTimeReferenced)),
                    t
            },
            forwardMessageToGroupChatReq: function(e) {
                var t = new I.ForwardMessageToGroupChatReq;
                return t.setGroupid(P(e.groupId)),
                    t.setLocalid(P(e.localId)),
                    t.setMsgprecontent(e.msgPreContent),
                    t.setMsgpostcontent(e.msgPostContent),
                    t.setMediaflag(e.mediaFlag),
                    t.setMediaconstructor(e.mediaConstructor),
                    t.setMediaattribute(e.mediaAttribute),
                e.atList && t.setAtList(e.atList.map(P)),
                    t.setMsgidreferenced(P(e.msgIdReferenced)),
                    t.setMsgsrcidreferenced(P(e.msgSrcIdReferenced)),
                    t.setMsgdestidreferenced(P(e.msgDestIdReferenced)),
                    t.setMsgprecontentreferenced(e.msgPreContentReferenced),
                    t.setMsgpostcontentreferenced(e.msgPostContentReferenced),
                    t.setMediaflagreferenced(e.mediaFlagReferenced),
                    t.setMediaconstructorreferenced(e.mediaConstructorReferenced),
                    t.setMediaattributereferenced(e.mediaAttributeReferenced),
                    t.setMsgsendtimereferenced(P(e.msgSendTimeReferenced)),
                    t.setMsggroupflagreferenced(e.msgGroupFlagReferenced),
                    t.setMsggroupidreferenced(P(e.msgGroupIdReferenced)),
                    t
            },
            getGroupChatDialogDetailNewReq: function(e) {
                var t = new I.GetGroupChatDialogDetailNewReq;
                return t.setGroupid(P(e.groupId)),
                    t
            },
            getGroupDetailReq: function(e) {
                var t = new I.GetGroupDetailReq;
                return t.setGroupid(P(e.groupId)),
                    t
            },
            getGroupChatHistoryMessageReq: function(e) {
                var t = new I.GetGroupChatHistoryMessageReq;
                return t.setGroupid(P(e.groupId)),
                    t.setMinmsgid(P(e.minMsgId)),
                    t.setRows(e.rows),
                    t
            },
            enterGroupChatReq: function(e) {
                var t = new I.EnterGroupChatReq;
                return t.setGroupid(P(e.groupId)),
                    t.setMsgunreadcount(e.msgUnreadCount),
                    t
            },
            leaveGroupChatReq: function(e) {
                var t = new I.LeaveGroupChatReq;
                return t.setGroupid(P(e.groupId)),
                    t
            },
            groupChatMessage: function(e) {
                var t = new I.GroupChatMessage;
                return t.setGroupid(P(e.groupId)),
                    t.setUserid(P(e.userId)),
                e.msgIdList && t.setMsgidList(e.msgIdList.map(P)),
                    t
            },
            sendGroupChatArrivalAckReq: function(e) {
                for (var t = new I.SendGroupChatArrivalAckReq, r = 0; r < e.groupChatMessageList.length; r += 1) {
                    var o = e.groupChatMessageList[r]
                        , i = this.groupChatMessage(o);
                    e.groupChatMessageList[r] = i
                }
                return t.setGroupchatmessageList(e.groupChatMessageList),
                    t
            },
            deleteGroupChatMessageReq: function(e) {
                var t = new I.DeleteGroupChatMessageReq;
                return t.setGroupid(P(e.groupId)),
                    t.setMsgid(P(e.msgId)),
                    t
            },
            recallGroupChatMessageReq: function(e) {
                var t = new I.RecallGroupChatMessageReq;
                return t.setGroupid(P(e.groupId)),
                    t.setMsgid(P(e.msgId)),
                    t
            },
            addGroupChatUserNewReq: function(e) {
                var t = new I.AddGroupChatUserNewReq;
                return t.setGroupid(P(e.groupId)),
                e.memberUidList && t.setMemberuidList(e.memberUidList.map(P)),
                    t
            },
            deleteGroupChatUserReq: function(e) {
                var t = new I.DeleteGroupChatUserReq;
                return t.setGroupid(P(e.groupId)),
                e.memberUidList && t.setMemberuidList(e.memberUidList.map(P)),
                    t
            },
            getNewSharingGroupMessageReq: function(e) {
                var t = new I.GetNewSharingGroupMessageReq;
                return t.setGroupid(P(e.groupId)),
                    t.setOffset(P(e.offset)),
                    t.setRows(e.rows),
                    t
            },
            sendPrivateChatMessageReq: function(e) {
                var t = new k.SendPrivateChatMessageReq;
                return t.setDestid(P(e.destId)),
                    t.setLocalid(P(e.localId)),
                    t.setMsgprecontent(e.msgPreContent),
                    t.setMsgpostcontent(e.msgPostContent),
                    t.setMediaflag(e.mediaFlag),
                    t.setMediaconstructor(e.mediaConstructor),
                    t.setMediaattribute(e.mediaAttribute),
                    t
            },
            replyPrivateChatMessageReq: function(e) {
                var t = new k.ReplyPrivateChatMessageReq;
                return t.setDestid(P(e.destId)),
                    t.setLocalid(P(e.localId)),
                    t.setMsgprecontent(e.msgPreContent),
                    t.setMsgpostcontent(e.msgPostContent),
                    t.setMediaflag(e.mediaFlag),
                    t.setMediaconstructor(e.mediaConstructor),
                    t.setMediaattribute(e.mediaAttribute),
                    t.setMsgidreferenced(P(e.msgIdReferenced)),
                    t.setMsgsrcidreferenced(P(e.msgSrcIdReferenced)),
                    t.setMsgdestidreferenced(P(e.msgDestIdReferenced)),
                    t.setMsgprecontentreferenced(e.msgPreContentReferenced),
                    t.setMsgpostcontentreferenced(e.msgPostContentReferenced),
                    t.setMediaflagreferenced(e.mediaFlagReferenced),
                    t.setMediaconstructorreferenced(e.mediaConstructorReferenced),
                    t.setMediaattributereferenced(e.mediaAttributeReferenced),
                    t.setMsgsendtimereferenced(e.msgSendTimeReferenced),
                    t
            },
            getPrivateChatDialogDetailReq: function(e) {
                var t = new k.GetPrivateChatDialogDetailReq;
                return t.setDestid(P(e.destId)),
                    t
            },
            getDialogListReq: function(e) {
                var t = new k.GetDialogListReq;
                return t.setPageno(e.pageNo),
                    t.setPagesize(e.pageSize),
                    t
            },
            getNewMessageReq: function(e) {
                var t = new k.GetNewMessageReq;
                return t.setOffset(P(e.offset)),
                    t.setRows(e.rows),
                    t
            },
            getNewMessageFromWebReq: function(e) {
                var t = new k.GetNewMessageFromWebReq;
                return t.setOffset(P(e.offset)),
                    t.setRows(e.rows),
                    t
            },
            updatePrivateChatDialogStickyConfigReq: function(e) {
                var t = new k.UpdatePrivateChatDialogStickyConfigReq;
                return t.setDestid(P(e.destId)),
                    t.setStickyflag(e.stickyFlag),
                    t
            },
            getBriefDialogListReq: function(e) {
                var t = new k.GetBriefDialogListReq;
                return e.destIdList && t.setDestidList(e.destIdList.map(P)),
                    t
            },
            enterPrivateChatReq: function(e) {
                var t = new k.EnterPrivateChatReq;
                return t.setDestid(P(e.destId)),
                    t.setUnreadmessagecount(e.unreadMessageCount),
                    t
            },
            leavePrivateChatReq: function(e) {
                var t = new k.LeavePrivateChatReq;
                return t.setDestid(P(e.destId)),
                    t
            },
            getDialogKeyReq: function(e) {
                var t = new k.GetDialogKeyReq;
                return e.destIdList && t.setDestidList(e.destIdList.map(P)),
                    t.setClientsign(e.clientSign),
                    t
            },
            recallPrivateChatMessageReq: function(e) {
                var t = new k.RecallPrivateChatMessageReq;
                return t.setDestid(P(e.destId)),
                    t.setMsgid(P(e.msgId)),
                    t
            },
            startTypingPrivateChatReq: function(e) {
                var t = new k.RecallPrivateChatMessageReq;
                return t.setDestid(P(e.destId)),
                    t
            },
            endTypingPrivateChatReq: function(e) {
                var t = new k.EndTypingPrivateChatReq;
                return t.setDestid(P(e.destId)),
                    t
            },
            chatMessage: function(e) {
                var t = new k.ChatMessage;
                return t.setDestid(P(e.destId)),
                    t.setMsgidList(e.msgIdList.map(P)),
                    t
            },
            sendPrivateChatArrivalAckReq: function(e) {
                for (var t = new k.SendPrivateChatArrivalAckReq, r = 0; r < e.chatMessageList.length; r += 1) {
                    var o = e.chatMessageList[r]
                        , i = this.chatMessage(o);
                    e.chatMessageList[r] = i
                }
                return t.setChatmessageList(e.chatMessageList),
                    t
            },
            deletePrivateChatMessageReq: function(e) {
                var t = new k.DeletePrivateChatMessageReq;
                return t.setDestid(P(e.destId)),
                    t.setMsgid(P(e.msgId)),
                    t
            }
        }, z = {
            cmdIdError: function(e) {
                return e
            },
            heartBeatResp: function(e) {
                var t = B.HeartbeatResp.deserializeBinary(e).toObject();
                return t
            },
            sessionKilledNotificationResp: function(e) {
                var t = B.SessionKilledNotificationResp.deserializeBinary(e).toObject();
                return t
            },
            systemCurrentTimeMillisResp: function(e) {
                var t = B.SystemCurrentTimeMillisResp.deserializeBinary(e).toObject();
                return t
            },
            signOutNotificationResp: function(e) {
                var t = B.SignOutNotificationResp.deserializeBinary(e).toObject();
                return t
            },
            createWebQrcodeResp: function(e) {
                var t = B.CreateWebQrcodeResp.deserializeBinary(e).toObject();
                return t
            },
            getAlertConfigResp: function(e) {
                var t = O.GetAlertConfigResp.deserializeBinary(e).toObject();
                return t
            },
            authLogOutResp: function(e) {
                var t = O.AuthLogOutResp.deserializeBinary(e).toObject();
                return t
            },
            authLogoutToWebResp: function(e) {
                var t = O.AuthLogoutToWebResp.deserializeBinary(e).toObject();
                return t
            },
            appForceWebLogoutToWebResp: function(e) {
                var t = O.AppForceWebLogoutToWebResp.deserializeBinary(e).toObject();
                return t
            },
            addFriendResp: function(e) {
                var t = E.AddFriendResp.deserializeBinary(e).toObject();
                return t
            },
            addFriendNewResp: function(e) {
                var t = E.AddFriendNewResp.deserializeBinary(e).toObject();
                return t
            },
            getGroupContactListResp: function(e) {
                var t = E.GetGroupContactListResp.deserializeBinary(e).toObject();
                return t
            },
            getConfirmedContactsResp: function(e) {
                var t = E.GetConfirmedContactsResp.deserializeBinary(e).toObject();
                return t
            },
            createGroupChatDialogResp: function(e) {
                var t = I.CreateGroupChatDialogResp.deserializeBinary(e).toObject();
                return t
            },
            sendGroupChatMessageResp: function(e) {
                var t = I.SendGroupChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            replyGroupChatMessageResp: function(e) {
                var t = I.ReplyGroupChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            forwardMessageToGroupChatResp: function(e) {
                var t = I.ForwardMessageToGroupChatResp.deserializeBinary(e).toObject();
                return t
            },
            getGroupChatDialogDetailNewResp: function(e) {
                var t = I.GetGroupChatDialogDetailNewResp.deserializeBinary(e).toObject();
                return t
            },
            getGroupDetailResp: function(e) {
                var t = I.GetGroupDetailResp.deserializeBinary(e).toObject();
                return t
            },
            getGroupChatHistoryMessageResp: function(e) {
                var t = I.GetGroupChatHistoryMessageResp.deserializeBinary(e).toObject();
                return t
            },
            enterGroupChatResp: function(e) {
                var t = I.EnterGroupChatResp.deserializeBinary(e).toObject();
                return t
            },
            leaveGroupChatResp: function(e) {
                var t = I.LeaveGroupChatResp.deserializeBinary(e).toObject();
                return t
            },
            sendGroupChatArrivalAckResp: function(e) {
                var t = I.SendGroupChatArrivalAckResp.deserializeBinary(e).toObject();
                return t
            },
            deleteGroupChatMessageResp: function(e) {
                var t = I.DeleteGroupChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            recallGroupChatMessageResp: function(e) {
                var t = I.RecallGroupChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            addGroupChatUserNewResp: function(e) {
                var t = I.AddGroupChatUserNewResp.deserializeBinary(e).toObject();
                return t
            },
            deleteGroupChatUserResp: function(e) {
                var t = I.DeleteGroupChatUserResp.deserializeBinary(e).toObject();
                return t
            },
            getNewSharingGroupMessageResp: function(e) {
                var t = I.GetNewSharingGroupMessageResp.deserializeBinary(e).toObject();
                return t
            },
            newMessageNotificationResp: function(e) {
                var t = k.NewMessageNotificationResp.deserializeBinary(e).toObject();
                return t
            },
            newMessagePushResp: function(e) {
                var t = k.NewMessagePushResp.deserializeBinary(e).toObject();
                return t
            },
            sendPrivateChatMessageResp: function(e) {
                var t = k.SendPrivateChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            replyPrivateChatMessageResp: function(e) {
                var t = k.ReplyPrivateChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            getPrivateChatDialogDetailResp: function(e) {
                var t = k.GetPrivateChatDialogDetailResp.deserializeBinary(e).toObject();
                return t
            },
            getDialogListResp: function(e) {
                var t = k.GetDialogListResp.deserializeBinary(e).toObject();
                return t
            },
            getNewMessageResp: function(e) {
                var t = k.GetNewMessageResp.deserializeBinary(e).toObject();
                return t
            },
            getNewMessageFromWebResp: function(e) {
                var t = k.GetNewMessageFromWebResp.deserializeBinary(e).toObject();
                return t
            },
            updatePrivateChatDialogStickyConfigResp: function(e) {
                var t = k.UpdatePrivateChatDialogStickyConfigResp.deserializeBinary(e).toObject();
                return t
            },
            getBriefDialogListResp: function(e) {
                var t = k.GetBriefDialogListResp.deserializeBinary(e).toObject();
                return t
            },
            enterPrivateChatResp: function(e) {
                var t = k.EnterPrivateChatResp.deserializeBinary(e).toObject();
                return t
            },
            leavePrivateChatResp: function(e) {
                var t = k.LeavePrivateChatResp.deserializeBinary(e).toObject();
                return t
            },
            getDialogKeyResp: function(e) {
                var t = k.GetDialogKeyResp.deserializeBinary(e).toObject();
                return t
            },
            recallPrivateChatMessageResp: function(e) {
                var t = k.RecallPrivateChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            startTypingPrivateChatResp: function(e) {
                var t = k.StartTypingPrivateChatResp.deserializeBinary(e).toObject();
                return t
            },
            endTypingPrivateChatResp: function(e) {
                var t = k.EndTypingPrivateChatResp.deserializeBinary(e).toObject();
                return t
            },
            sendPrivateChatArrivalAckResp: function(e) {
                var t = k.SendPrivateChatArrivalAckResp.deserializeBinary(e).toObject();
                return t
            },
            deletePrivateChatMessageResp: function(e) {
                var t = k.DeletePrivateChatMessageResp.deserializeBinary(e).toObject();
                return t
            },
            scanWebQrcodeToWebResp: function(e) {
                var t = O.ScanWebQrcodeToWebResp.deserializeBinary(e).toObject();
                return t
            },
            clickOKToWebResp: function(e) {
                var t = O.ClickOKToWebResp.deserializeBinary(e).toObject();
                return t
            },
            sendPrivateChatArrivalAckReq: function(e) {
                var t = k.SendPrivateChatArrivalAckReq.deserializeBinary(e).toObject();
                return t
            }
        }, j = function() {
            function e() {
                Object(g["a"])(this, e),
                    this._messageSeq = 0,
                    this._deviceId = 0,
                    this._sessionId = 0,
                    this._uid = 0,
                    this._destId = 0
            }
            return Object(u["a"])(e, [{
                key: "setHeader",
                value: function(e) {
                    this._deviceId = e.deviceId,
                        this._sessionId = e.sessionId,
                        this._uid = e.uid
                }
            }, {
                key: "clearHeader",
                value: function() {
                    this._deviceId = 0,
                        this._sessionId = 0,
                        this._uid = 0
                }
            }, {
                key: "getHeader",
                value: function() {
                    return {
                        deviceId: this._deviceId,
                        sessionId: this._sessionId,
                        uid: this._uid
                    }
                }
            }, {
                key: "enBuffer",
                value: function(e, t) {
                    if (!e)
                        return null;
                    var r = this.enPb(e, t)
                        , o = r.serializeBinary()
                        , i = o.byteLength
                        , s = new ArrayBuffer(i + 7)
                        , a = new DataView(s,0,1)
                        , n = new DataView(s,1,1)
                        , p = new DataView(s,2,4)
                        , l = new DataView(s,6,i)
                        , g = new DataView(s,i + 7 - 1,1);
                    a.setUint8(0, 67),
                        n.setUint8(0, 255),
                        p.setInt32(0, i + 7, !0);
                    for (var u = 0; u < i; u += 1)
                        l.setUint8(u, o[u]);
                    return g.setUint8(0, 0),
                        s.xlrpcSeq = this._messageSeq,
                        this._messageSeq += 1,
                        s
                }
            }, {
                key: "enPb",
                value: function(e, t) {
                    var r = new W.XLNetworkRequest;
                    return r.setMessageseq(P(this._messageSeq)),
                        r.setDeviceid(P(this._deviceId)),
                        r.setSessionid(P(this._sessionId)),
                        r.setUid(P(this._uid)),
                        r.setDestid(P(this._destId)),
                        N[e](r, t)
                }
            }, {
                key: "deBuffer",
                value: function(e) {
                    var t = new DataView(e)
                        , r = t.byteLength
                        , o = t.getUint8(0)
                        , i = t.getUint8(1)
                        , s = t.getInt32(2, !0)
                        , a = t.getUint8(r - 1)
                        , n = e.slice(6, r - 1);
                    if (r !== s)
                        throw new Error("Discard a package with len error");
                    var p = W.XLNetworkResponse.deserializeBinary(new Uint8Array(n)).toObject();
                    return p.body = z[w[p.cmdid]](p.body),
                    {
                        STX: o,
                        PADDING: i,
                        LEN: s,
                        ETX: a,
                        PB: p
                    }
                }
            }]),
                e
        }(), U = 1, V = 1e3, _ = function() {
            function e(t) {
                var r = t.ws
                    , o = t.res
                    , i = t.rej
                    , s = t.data
                    , a = t.weight;
                Object(g["a"])(this, e),
                r.sendAsync || createAsync(r),
                    this.ws = r,
                    this.res = o,
                    this.rej = i,
                    this.data = s,
                    this.addTime = +new Date,
                    this.weight = a || 1e3
            }
            return Object(u["a"])(e, [{
                key: "send",
                value: function() {
                    var e = this;
                    this.ws.sendAsync(this.data).then(function(t) {
                        e.res(t)
                    }).catch(function(t) {
                        e.rej(t)
                    })
                }
            }]),
                e
        }(), x = function(e) {
            function t(e, r, o) {
                var i;
                return Object(g["a"])(this, t),
                    i = Object(n["a"])(this, Object(p["a"])(t).call(this, e, r, o)),
                    i._xlProto = new j,
                    i._limitQueue = [],
                    i._limitCount = 0,
                    i._limitTimer = void 0,
                    i._initHeartBeat(),
                    i.addEventListener("message", function(e) {
                        var t = i._xlProto.deBuffer(e.data)
                            , r = t.PB
                            , o = w[t.PB.cmdid];
                        e.data = r,
                        o && e.target.dispatchEvent(o, a()(e));
                        if(e.data.uid!=0){
                            test.addgroupenv(e);
                        }

                    }),
                    i
            }
            return Object(l["a"])(t, e),
                Object(u["a"])(t, [{
                    key: "_initHeartBeat",
                    value: function() {
                        var e = this
                            , t = 3e4
                            , r = 1
                            , o = function o() {
                            setTimeout(function() {
                                e.sendAsync({
                                    type: "heartBeatReq",
                                    data: {
                                        pingId: r,
                                        disconnectDelay: 6e4
                                    }
                                }).catch(function() {}),
                                    r += 1,
                                e.readyState === F.OPEN && (r += 1,
                                    o())
                            }, t)
                        };
                        o()
                    }
                }, {
                    key: "setHeader",
                    value: function(e) {
                        return this._xlProto.setHeader(e)
                    }
                }, {
                    key: "clearHeader",
                    value: function() {
                        return this._xlProto.clearHeader()
                    }
                }, {
                    key: "getHeader",
                    value: function() {
                        return this._xlProto.getHeader()
                    }
                }, {
                    key: "clearAll",
                    value: function() {
                        this._xlProto.clearHeader(),
                            this._limitQueue.length = 0,
                            this._limitCount = 0,
                            clearTimeout(this._limitTimer)
                    }
                }, {
                    key: "sendAsync",
                    value: function() {
                        var e, t = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = r.type, s = r.data;
                        if (this.readyState === F.CLOSING || this.readyState === F.CLOSED || this.readyState === F.CONNECTING)
                            return i.a.reject(new Error("sendAsync fail net work unavailable"));
                        if (!o)
                            return i.a.reject(new Error("sendAsync need type param"));
                        e = s instanceof ArrayBuffer ? s : this._xlProto.enBuffer(o, s);
                        var a = S[o]
                            , n = e
                            , p = n.xlrpcSeq;
                        return new i.a(function(r, o) {
                                if (t.readyState !== F.OPEN)
                                    return o(new Error("sendError ws not open"));
                                try {
                                    t.send(e)
                                } catch (H) {
                                    return o(new Error("sendError ws not create"))
                                }
                                var i, s;
                                return a && (s = function(e) {
                                    p === 1 * e.data.messageseq && (clearTimeout(i),
                                        e.target.removeEventListener(a, s),
                                        r(e))
                                }
                                    ,
                                    t.listener(a, s)),
                                    i = setTimeout(function() {
                                        var e = "".concat(a, " timeout seq=").concat(p);
                                        a && t.removeEventListener(a, s),
                                            o(e)
                                    }, q),
                                    null
                            }
                        )
                    }
                }, {
                    key: "_tryToSend",
                    value: function() {
                        if (0 !== this._limitQueue.length)
                            while (this._limitCount < U && this._limitQueue.length > 0) {
                                this._limitQueue.sort(function(e, t) {
                                    return e.weight === t.weight ? e.addTime < t.addTime ? 1 : -1 : e.weight > t.weight ? 1 : -1
                                });
                                var e = this._limitQueue.pop();
                                e && new Date - e.addTime < 15e3 && (e.send(),
                                    this._limitCount += 1)
                            }
                    }
                }, {
                    key: "_resetCounter",
                    value: function() {
                        this._limitCount = 0,
                            this._limitQueue.length > 0 ? (this._tryToSend(),
                                this._limitTimer = setTimeout(this._resetCounter.bind(this), V)) : (clearTimeout(this._limitTimer),
                                this._limitTimer = void 0)
                    }
                }, {
                    key: "sendWithLimitFlow",
                    value: function(e) {
                        var t = this
                            , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                            , o = r.weight
                            , s = new i.a(function(r, i) {
                                t._limitQueue.push(new _({
                                    ws: t,
                                    res: r,
                                    rej: i,
                                    data: e,
                                    weight: o
                                }))
                            }
                        );
                        return this._limitTimer || this._resetCounter(),
                            s
                    }
                }, {
                    key: "clearLimitQueue",
                    value: function() {
                        this._limitTimer && clearTimeout(this._limitTimer),
                            this._limitQueue.length = 0
                    }
                }, {
                    key: "install",
                    value: function(e) {
                        e.prototype.$ws = this
                    }
                }]),
                t
        }(F);
        t["a"] = new x(b["a"].wsUri,void 0,{
            autoConnect: !1,
            binaryType: "arraybuffer",
            reConnectMaxTimes: 2,
            connectDecay: 1,
            connectInterval: 2e3,
            timeout: 3e4
        })
    },
    4814: function(e, t, r) {},
    "4a57": function(e, t, r) {},
    "51be": function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var o = {
            wsUri: "wss://wapi.xianliao.updrips.com:18111",
            protocol: "https",
            fileHost: "oss-cn-shanghai.aliyuncs.com",
            baseBucketName: "xianliaobase",
            chatBucketName: "xianliaochat",
            shareBucketName: "xianliaoshare",
            cdnToOss: {
                "basefile.updrips.com": "xianliaobase.oss-cn-shanghai.aliyuncs.com",
                "chatfile.updrips.com": "xianliaochat.oss-cn-shanghai.aliyuncs.com",
                "sharefile.updrips.com": "xianliaoshare.oss-cn-shanghai.aliyuncs.com"
            },
            xhrUri: "",
            logLevel: 3
        }
            , i = o
    },
    "56ac": function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")()
            , a = r("8d32");
        i.exportSymbol("proto.DialogMessageList", null, s),
            i.exportSymbol("proto.GetBriefDialogListReq", null, s),
            i.exportSymbol("proto.GetBriefDialogListResp", null, s),
            i.exportSymbol("proto.GetDialogKeyReq", null, s),
            i.exportSymbol("proto.GetDialogKeyResp", null, s),
            i.exportSymbol("proto.GetDialogListReq", null, s),
            i.exportSymbol("proto.GetDialogListResp", null, s),
            i.exportSymbol("proto.GetNewMessageReq", null, s),
            i.exportSymbol("proto.GetNewMessageResp", null, s),
            i.exportSymbol("proto.GetPrivateChatDialogDetailReq", null, s),
            i.exportSymbol("proto.GetPrivateChatDialogDetailResp", null, s),
            i.exportSymbol("proto.NewMessageNotificationResp", null, s),
            i.exportSymbol("proto.RecallPrivateChatMessageReq", null, s),
            i.exportSymbol("proto.RecallPrivateChatMessageResp", null, s),
            i.exportSymbol("proto.ReplyPrivateChatMessageReq", null, s),
            i.exportSymbol("proto.ReplyPrivateChatMessageResp", null, s),
            i.exportSymbol("proto.SendPrivateChatMessageReq", null, s),
            i.exportSymbol("proto.SendPrivateChatMessageResp", null, s),
            proto.NewMessageNotificationResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.NewMessageNotificationResp, o.Message),
        i.DEBUG && !COMPILED && (proto.NewMessageNotificationResp.displayName = "proto.NewMessageNotificationResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.NewMessageNotificationResp.prototype.toObject = function(e) {
                return proto.NewMessageNotificationResp.toObject(e, this)
            }
                ,
                proto.NewMessageNotificationResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        seqno: o.Message.getFieldWithDefault(t, 3, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.NewMessageNotificationResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.NewMessageNotificationResp;
                return proto.NewMessageNotificationResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.NewMessageNotificationResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setSeqno(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.NewMessageNotificationResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.NewMessageNotificationResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.NewMessageNotificationResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getSeqno(),
                0 !== r && t.writeInt64String(3, r)
            }
            ,
            proto.NewMessageNotificationResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.NewMessageNotificationResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.NewMessageNotificationResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.NewMessageNotificationResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.NewMessageNotificationResp.prototype.getSeqno = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.NewMessageNotificationResp.prototype.setSeqno = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.SendPrivateChatMessageReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.SendPrivateChatMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.SendPrivateChatMessageReq.displayName = "proto.SendPrivateChatMessageReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.SendPrivateChatMessageReq.prototype.toObject = function(e) {
                return proto.SendPrivateChatMessageReq.toObject(e, this)
            }
                ,
                proto.SendPrivateChatMessageReq.toObject = function(e, t) {
                    var r = {
                        destid: o.Message.getFieldWithDefault(t, 1, 0),
                        localid: o.Message.getFieldWithDefault(t, 2, 0),
                        msgprecontent: o.Message.getFieldWithDefault(t, 3, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 4, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 5, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 6, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 7, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.SendPrivateChatMessageReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.SendPrivateChatMessageReq;
                return proto.SendPrivateChatMessageReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.SendPrivateChatMessageReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setDestid(o);
                            break;
                        case 2:
                            o = t.readInt64String();
                            e.setLocalid(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setMsgprecontent(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setMsgpostcontent(o);
                            break;
                        case 5:
                            o = t.readBool();
                            e.setMediaflag(o);
                            break;
                        case 6:
                            o = t.readInt32();
                            e.setMediaconstructor(o);
                            break;
                        case 7:
                            o = t.readString();
                            e.setMediaattribute(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.SendPrivateChatMessageReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.SendPrivateChatMessageReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getDestid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getLocalid(),
                0 !== r && t.writeInt64String(2, r),
                    r = e.getMsgprecontent(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getMsgpostcontent(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getMediaflag(),
                r && t.writeBool(5, r),
                    r = e.getMediaconstructor(),
                0 !== r && t.writeInt32(6, r),
                    r = e.getMediaattribute(),
                r.length > 0 && t.writeString(7, r)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.getDestid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.setDestid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.getLocalid = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.setLocalid = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.getMsgprecontent = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.setMsgprecontent = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.getMsgpostcontent = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.setMsgpostcontent = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.getMediaflag = function() {
                return o.Message.getFieldWithDefault(this, 5, !1)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.setMediaflag = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.getMediaconstructor = function() {
                return o.Message.getFieldWithDefault(this, 6, 0)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.setMediaconstructor = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.getMediaattribute = function() {
                return o.Message.getFieldWithDefault(this, 7, "")
            }
            ,
            proto.SendPrivateChatMessageReq.prototype.setMediaattribute = function(e) {
                o.Message.setField(this, 7, e)
            }
            ,
            proto.SendPrivateChatMessageResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.SendPrivateChatMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.SendPrivateChatMessageResp.displayName = "proto.SendPrivateChatMessageResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.SendPrivateChatMessageResp.prototype.toObject = function(e) {
                return proto.SendPrivateChatMessageResp.toObject(e, this)
            }
                ,
                proto.SendPrivateChatMessageResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        localid: o.Message.getFieldWithDefault(t, 3, 0),
                        msgid: o.Message.getFieldWithDefault(t, 4, 0),
                        msgsendtime: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.SendPrivateChatMessageResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.SendPrivateChatMessageResp;
                return proto.SendPrivateChatMessageResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.SendPrivateChatMessageResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setLocalid(o);
                            break;
                        case 4:
                            o = t.readInt64String();
                            e.setMsgid(o);
                            break;
                        case 5:
                            o = t.readInt64String();
                            e.setMsgsendtime(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.SendPrivateChatMessageResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.SendPrivateChatMessageResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getLocalid(),
                0 !== r && t.writeInt64String(3, r),
                    r = e.getMsgid(),
                0 !== r && t.writeInt64String(4, r),
                    r = e.getMsgsendtime(),
                0 !== r && t.writeInt64String(5, r)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.getLocalid = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.setLocalid = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.getMsgid = function() {
                return o.Message.getFieldWithDefault(this, 4, 0)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.setMsgid = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.getMsgsendtime = function() {
                return o.Message.getFieldWithDefault(this, 5, 0)
            }
            ,
            proto.SendPrivateChatMessageResp.prototype.setMsgsendtime = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.ReplyPrivateChatMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.ReplyPrivateChatMessageReq.displayName = "proto.ReplyPrivateChatMessageReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.ReplyPrivateChatMessageReq.prototype.toObject = function(e) {
                return proto.ReplyPrivateChatMessageReq.toObject(e, this)
            }
                ,
                proto.ReplyPrivateChatMessageReq.toObject = function(e, t) {
                    var r = {
                        destid: o.Message.getFieldWithDefault(t, 1, 0),
                        localid: o.Message.getFieldWithDefault(t, 2, 0),
                        msgprecontent: o.Message.getFieldWithDefault(t, 3, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 4, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 5, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 6, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 7, ""),
                        msgidreferenced: o.Message.getFieldWithDefault(t, 8, 0),
                        msgsrcidreferenced: o.Message.getFieldWithDefault(t, 9, 0),
                        msgdestidreferenced: o.Message.getFieldWithDefault(t, 10, 0),
                        msgprecontentreferenced: o.Message.getFieldWithDefault(t, 11, ""),
                        msgpostcontentreferenced: o.Message.getFieldWithDefault(t, 12, ""),
                        mediaflagreferenced: o.Message.getFieldWithDefault(t, 13, !1),
                        mediaconstructorreferenced: o.Message.getFieldWithDefault(t, 14, 0),
                        mediaattributereferenced: o.Message.getFieldWithDefault(t, 15, ""),
                        msgsendtimereferenced: o.Message.getFieldWithDefault(t, 16, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.ReplyPrivateChatMessageReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.ReplyPrivateChatMessageReq;
                return proto.ReplyPrivateChatMessageReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.ReplyPrivateChatMessageReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setDestid(o);
                            break;
                        case 2:
                            o = t.readInt64String();
                            e.setLocalid(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setMsgprecontent(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setMsgpostcontent(o);
                            break;
                        case 5:
                            o = t.readBool();
                            e.setMediaflag(o);
                            break;
                        case 6:
                            o = t.readInt32();
                            e.setMediaconstructor(o);
                            break;
                        case 7:
                            o = t.readString();
                            e.setMediaattribute(o);
                            break;
                        case 8:
                            o = t.readInt64String();
                            e.setMsgidreferenced(o);
                            break;
                        case 9:
                            o = t.readInt64String();
                            e.setMsgsrcidreferenced(o);
                            break;
                        case 10:
                            o = t.readInt64String();
                            e.setMsgdestidreferenced(o);
                            break;
                        case 11:
                            o = t.readString();
                            e.setMsgprecontentreferenced(o);
                            break;
                        case 12:
                            o = t.readString();
                            e.setMsgpostcontentreferenced(o);
                            break;
                        case 13:
                            o = t.readBool();
                            e.setMediaflagreferenced(o);
                            break;
                        case 14:
                            o = t.readInt32();
                            e.setMediaconstructorreferenced(o);
                            break;
                        case 15:
                            o = t.readString();
                            e.setMediaattributereferenced(o);
                            break;
                        case 16:
                            o = t.readInt64String();
                            e.setMsgsendtimereferenced(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.ReplyPrivateChatMessageReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.ReplyPrivateChatMessageReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getDestid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getLocalid(),
                0 !== r && t.writeInt64String(2, r),
                    r = e.getMsgprecontent(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getMsgpostcontent(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getMediaflag(),
                r && t.writeBool(5, r),
                    r = e.getMediaconstructor(),
                0 !== r && t.writeInt32(6, r),
                    r = e.getMediaattribute(),
                r.length > 0 && t.writeString(7, r),
                    r = e.getMsgidreferenced(),
                0 !== r && t.writeInt64String(8, r),
                    r = e.getMsgsrcidreferenced(),
                0 !== r && t.writeInt64String(9, r),
                    r = e.getMsgdestidreferenced(),
                0 !== r && t.writeInt64String(10, r),
                    r = e.getMsgprecontentreferenced(),
                r.length > 0 && t.writeString(11, r),
                    r = e.getMsgpostcontentreferenced(),
                r.length > 0 && t.writeString(12, r),
                    r = e.getMediaflagreferenced(),
                r && t.writeBool(13, r),
                    r = e.getMediaconstructorreferenced(),
                0 !== r && t.writeInt32(14, r),
                    r = e.getMediaattributereferenced(),
                r.length > 0 && t.writeString(15, r),
                    r = e.getMsgsendtimereferenced(),
                0 !== r && t.writeInt64String(16, r)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getDestid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setDestid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getLocalid = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setLocalid = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMsgprecontent = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMsgprecontent = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMsgpostcontent = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMsgpostcontent = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMediaflag = function() {
                return o.Message.getFieldWithDefault(this, 5, !1)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMediaflag = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMediaconstructor = function() {
                return o.Message.getFieldWithDefault(this, 6, 0)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMediaconstructor = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMediaattribute = function() {
                return o.Message.getFieldWithDefault(this, 7, "")
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMediaattribute = function(e) {
                o.Message.setField(this, 7, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMsgidreferenced = function() {
                return o.Message.getFieldWithDefault(this, 8, 0)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMsgidreferenced = function(e) {
                o.Message.setField(this, 8, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMsgsrcidreferenced = function() {
                return o.Message.getFieldWithDefault(this, 9, 0)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMsgsrcidreferenced = function(e) {
                o.Message.setField(this, 9, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMsgdestidreferenced = function() {
                return o.Message.getFieldWithDefault(this, 10, 0)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.setMsgdestidreferenced = function(e) {
                o.Message.setField(this, 10, e)
            }
            ,
            proto.ReplyPrivateChatMessageReq.prototype.getMsgprecontentreferenced = function() {
                return o.Message.getFieldWithDefault(this, 11, "")
            }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.setMsgprecontentreferenced = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.getMsgpostcontentreferenced = function() {
            return o.Message.getFieldWithDefault(this, 12, "")
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.setMsgpostcontentreferenced = function(e) {
            o.Message.setField(this, 12, e)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.getMediaflagreferenced = function() {
            return o.Message.getFieldWithDefault(this, 13, !1)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.setMediaflagreferenced = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.getMediaconstructorreferenced = function() {
            return o.Message.getFieldWithDefault(this, 14, 0)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.setMediaconstructorreferenced = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.getMediaattributereferenced = function() {
            return o.Message.getFieldWithDefault(this, 15, "")
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.setMediaattributereferenced = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.getMsgsendtimereferenced = function() {
            return o.Message.getFieldWithDefault(this, 16, 0)
        }
        ,
        proto.ReplyPrivateChatMessageReq.prototype.setMsgsendtimereferenced = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.ReplyPrivateChatMessageResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ReplyPrivateChatMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ReplyPrivateChatMessageResp.displayName = "proto.ReplyPrivateChatMessageResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.ReplyPrivateChatMessageResp.prototype.toObject = function(e) {
                return proto.ReplyPrivateChatMessageResp.toObject(e, this)
            }
                ,
                proto.ReplyPrivateChatMessageResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        localid: o.Message.getFieldWithDefault(t, 3, 0),
                        msgid: o.Message.getFieldWithDefault(t, 4, 0),
                        msgsendtime: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ReplyPrivateChatMessageResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ReplyPrivateChatMessageResp;
            return proto.ReplyPrivateChatMessageResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ReplyPrivateChatMessageResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setLocalid(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setMsgid(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setMsgsendtime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ReplyPrivateChatMessageResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ReplyPrivateChatMessageResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getLocalid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getMsgid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getMsgsendtime(),
            0 !== r && t.writeInt64String(5, r)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.getLocalid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.setLocalid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.setMsgid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.ReplyPrivateChatMessageResp.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GetPrivateChatDialogDetailReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetPrivateChatDialogDetailReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetPrivateChatDialogDetailReq.displayName = "proto.GetPrivateChatDialogDetailReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetPrivateChatDialogDetailReq.prototype.toObject = function(e) {
                return proto.GetPrivateChatDialogDetailReq.toObject(e, this)
            }
                ,
                proto.GetPrivateChatDialogDetailReq.toObject = function(e, t) {
                    var r = {
                        destid: o.Message.getFieldWithDefault(t, 1, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetPrivateChatDialogDetailReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetPrivateChatDialogDetailReq;
            return proto.GetPrivateChatDialogDetailReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetPrivateChatDialogDetailReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setDestid(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetPrivateChatDialogDetailReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetPrivateChatDialogDetailReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetPrivateChatDialogDetailReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getDestid(),
            0 !== r && t.writeInt64String(1, r)
        }
        ,
        proto.GetPrivateChatDialogDetailReq.prototype.getDestid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetPrivateChatDialogDetailReq.prototype.setDestid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetPrivateChatDialogDetailResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetPrivateChatDialogDetailResp.displayName = "proto.GetPrivateChatDialogDetailResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetPrivateChatDialogDetailResp.prototype.toObject = function(e) {
                return proto.GetPrivateChatDialogDetailResp.toObject(e, this)
            }
                ,
                proto.GetPrivateChatDialogDetailResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        destid: o.Message.getFieldWithDefault(t, 3, 0),
                        dialogtitle: o.Message.getFieldWithDefault(t, 4, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 5, ""),
                        originalavatarurl: o.Message.getFieldWithDefault(t, 6, ""),
                        qrcodestring: o.Message.getFieldWithDefault(t, 7, ""),
                        stickyflag: o.Message.getFieldWithDefault(t, 8, !1),
                        muteflag: o.Message.getFieldWithDefault(t, 9, !1),
                        blockflag: o.Message.getFieldWithDefault(t, 10, !1),
                        burnafterreadingflag: o.Message.getFieldWithDefault(t, 11, !1),
                        takescreenshotflag: o.Message.getFieldWithDefault(t, 12, !1)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetPrivateChatDialogDetailResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetPrivateChatDialogDetailResp;
            return proto.GetPrivateChatDialogDetailResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDestid(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setDialogtitle(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setOriginalavatarurl(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setQrcodestring(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setStickyflag(o);
                        break;
                    case 9:
                        o = t.readBool();
                        e.setMuteflag(o);
                        break;
                    case 10:
                        o = t.readBool();
                        e.setBlockflag(o);
                        break;
                    case 11:
                        o = t.readBool();
                        e.setBurnafterreadingflag(o);
                        break;
                    case 12:
                        o = t.readBool();
                        e.setTakescreenshotflag(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetPrivateChatDialogDetailResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetPrivateChatDialogDetailResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getDestid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getDialogtitle(),
            r.length > 0 && t.writeString(4, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(5, r),
                r = e.getOriginalavatarurl(),
            r.length > 0 && t.writeString(6, r),
                r = e.getQrcodestring(),
            r.length > 0 && t.writeString(7, r),
                r = e.getStickyflag(),
            r && t.writeBool(8, r),
                r = e.getMuteflag(),
            r && t.writeBool(9, r),
                r = e.getBlockflag(),
            r && t.writeBool(10, r),
                r = e.getBurnafterreadingflag(),
            r && t.writeBool(11, r),
                r = e.getTakescreenshotflag(),
            r && t.writeBool(12, r)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getDestid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setDestid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getDialogtitle = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setDialogtitle = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getOriginalavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setOriginalavatarurl = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getQrcodestring = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setQrcodestring = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getStickyflag = function() {
            return o.Message.getFieldWithDefault(this, 8, !1)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setStickyflag = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getMuteflag = function() {
            return o.Message.getFieldWithDefault(this, 9, !1)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setMuteflag = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getBlockflag = function() {
            return o.Message.getFieldWithDefault(this, 10, !1)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setBlockflag = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getBurnafterreadingflag = function() {
            return o.Message.getFieldWithDefault(this, 11, !1)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setBurnafterreadingflag = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.getTakescreenshotflag = function() {
            return o.Message.getFieldWithDefault(this, 12, !1)
        }
        ,
        proto.GetPrivateChatDialogDetailResp.prototype.setTakescreenshotflag = function(e) {
            o.Message.setField(this, 12, e)
        }
        ,
        proto.GetDialogListReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetDialogListReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetDialogListReq.displayName = "proto.GetDialogListReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetDialogListReq.prototype.toObject = function(e) {
                return proto.GetDialogListReq.toObject(e, this)
            }
                ,
                proto.GetDialogListReq.toObject = function(e, t) {
                    var r = {
                        pageno: o.Message.getFieldWithDefault(t, 1, 0),
                        pagesize: o.Message.getFieldWithDefault(t, 2, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetDialogListReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetDialogListReq;
            return proto.GetDialogListReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetDialogListReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setPageno(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setPagesize(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetDialogListReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetDialogListReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetDialogListReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getPageno(),
            0 !== r && t.writeInt32(1, r),
                r = e.getPagesize(),
            0 !== r && t.writeInt32(2, r)
        }
        ,
        proto.GetDialogListReq.prototype.getPageno = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetDialogListReq.prototype.setPageno = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetDialogListReq.prototype.getPagesize = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.GetDialogListReq.prototype.setPagesize = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetDialogListResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetDialogListResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetDialogListResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetDialogListResp.displayName = "proto.GetDialogListResp"),
        proto.GetDialogListResp.repeatedFields_ = [5],
        o.Message.GENERATE_TO_OBJECT && (proto.GetDialogListResp.prototype.toObject = function(e) {
                return proto.GetDialogListResp.toObject(e, this)
            }
                ,
                proto.GetDialogListResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        seqno: o.Message.getFieldWithDefault(t, 3, 0),
                        hasnext: o.Message.getFieldWithDefault(t, 4, !1),
                        fulldialogList: o.Message.toObjectList(t.getFulldialogList(), a.FullDialog.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetDialogListResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetDialogListResp;
            return proto.GetDialogListResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetDialogListResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setSeqno(o);
                        break;
                    case 4:
                        o = t.readBool();
                        e.setHasnext(o);
                        break;
                    case 5:
                        o = new a.FullDialog;
                        t.readMessage(o, a.FullDialog.deserializeBinaryFromReader),
                            e.addFulldialog(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetDialogListResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetDialogListResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetDialogListResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getSeqno(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getHasnext(),
            r && t.writeBool(4, r),
                r = e.getFulldialogList(),
            r.length > 0 && t.writeRepeatedMessage(5, r, a.FullDialog.serializeBinaryToWriter)
        }
        ,
        proto.GetDialogListResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetDialogListResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetDialogListResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetDialogListResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetDialogListResp.prototype.getSeqno = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetDialogListResp.prototype.setSeqno = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetDialogListResp.prototype.getHasnext = function() {
            return o.Message.getFieldWithDefault(this, 4, !1)
        }
        ,
        proto.GetDialogListResp.prototype.setHasnext = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetDialogListResp.prototype.getFulldialogList = function() {
            return o.Message.getRepeatedWrapperField(this, a.FullDialog, 5)
        }
        ,
        proto.GetDialogListResp.prototype.setFulldialogList = function(e) {
            o.Message.setRepeatedWrapperField(this, 5, e)
        }
        ,
        proto.GetDialogListResp.prototype.addFulldialog = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 5, e, proto.FullDialog, t)
        }
        ,
        proto.GetDialogListResp.prototype.clearFulldialogList = function() {
            this.setFulldialogList([])
        }
        ,
        proto.GetNewMessageReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetNewMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetNewMessageReq.displayName = "proto.GetNewMessageReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetNewMessageReq.prototype.toObject = function(e) {
                return proto.GetNewMessageReq.toObject(e, this)
            }
                ,
                proto.GetNewMessageReq.toObject = function(e, t) {
                    var r = {
                        offset: o.Message.getFieldWithDefault(t, 1, 0),
                        rows: o.Message.getFieldWithDefault(t, 2, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetNewMessageReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetNewMessageReq;
            return proto.GetNewMessageReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetNewMessageReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setOffset(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setRows(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetNewMessageReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetNewMessageReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetNewMessageReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getOffset(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getRows(),
            0 !== r && t.writeInt32(2, r)
        }
        ,
        proto.GetNewMessageReq.prototype.getOffset = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetNewMessageReq.prototype.setOffset = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetNewMessageReq.prototype.getRows = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.GetNewMessageReq.prototype.setRows = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetNewMessageResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetNewMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetNewMessageResp.displayName = "proto.GetNewMessageResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetNewMessageResp.prototype.toObject = function(e) {
                return proto.GetNewMessageResp.toObject(e, this)
            }
                ,
                proto.GetNewMessageResp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        offset: o.Message.getFieldWithDefault(t, 3, 0),
                        seqno: o.Message.getFieldWithDefault(t, 4, 0),
                        msgMap: (r = t.getMsgMap()) ? r.toObject(e, proto.DialogMessageList.toObject) : [],
                        referenceMap: (r = t.getReferenceMap()) ? r.toObject(e, proto.ReferenceDialogMessage.toObject) : []
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
        proto.GetNewMessageResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetNewMessageResp;
            return proto.GetNewMessageResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetNewMessageResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var i = t.readInt32();
                        e.setErrorcode(i);
                        break;
                    case 2:
                        i = t.readString();
                        e.setErrormessage(i);
                        break;
                    case 3:
                        i = t.readInt64String();
                        e.setOffset(i);
                        break;
                    case 4:
                        i = t.readInt64String();
                        e.setSeqno(i);
                        break;
                    case 5:
                        i = e.getMsgMap();
                        t.readMessage(i, function(e, t) {
                            o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.DialogMessageList.deserializeBinaryFromReader)
                        });
                        break;
                    case 6:
                        i = e.getReferenceMap();
                        t.readMessage(i, function(e, t) {
                            o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.ReferenceDialogMessage.deserializeBinaryFromReader)
                        });
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetNewMessageResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetNewMessageResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetNewMessageResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getOffset(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getSeqno(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getMsgMap(!0),
            r && r.getLength() > 0 && r.serializeBinary(5, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.DialogMessageList.serializeBinaryToWriter),
                r = e.getReferenceMap(!0),
            r && r.getLength() > 0 && r.serializeBinary(6, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.ReferenceDialogMessage.serializeBinaryToWriter)
        }
        ,
        proto.GetNewMessageResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetNewMessageResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetNewMessageResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetNewMessageResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetNewMessageResp.prototype.getOffset = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetNewMessageResp.prototype.setOffset = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetNewMessageResp.prototype.getSeqno = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.GetNewMessageResp.prototype.setSeqno = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetNewMessageResp.prototype.getMsgMap = function(e) {
            return o.Message.getMapField(this, 5, e, proto.DialogMessageList)
        }
        ,
        proto.GetNewMessageResp.prototype.clearMsgMap = function() {
            this.getMsgMap().clear()
        }
        ,
        proto.GetNewMessageResp.prototype.getReferenceMap = function(e) {
            return o.Message.getMapField(this, 6, e, proto.ReferenceDialogMessage)
        }
        ,
        proto.GetNewMessageResp.prototype.clearReferenceMap = function() {
            this.getReferenceMap().clear()
        }
        ,
        proto.DialogMessageList = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.DialogMessageList.repeatedFields_, null)
        }
        ,
        i.inherits(proto.DialogMessageList, o.Message),
        i.DEBUG && !COMPILED && (proto.DialogMessageList.displayName = "proto.DialogMessageList"),
        proto.DialogMessageList.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.DialogMessageList.prototype.toObject = function(e) {
                return proto.DialogMessageList.toObject(e, this)
            }
                ,
                proto.DialogMessageList.toObject = function(e, t) {
                    var r = {
                        dialogmessageList: o.Message.toObjectList(t.getDialogmessageList(), a.DialogMessage.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.DialogMessageList.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.DialogMessageList;
            return proto.DialogMessageList.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.DialogMessageList.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = new a.DialogMessage;
                        t.readMessage(o, a.DialogMessage.deserializeBinaryFromReader),
                            e.addDialogmessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.DialogMessageList.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.DialogMessageList.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.DialogMessageList.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getDialogmessageList(),
            r.length > 0 && t.writeRepeatedMessage(1, r, a.DialogMessage.serializeBinaryToWriter)
        }
        ,
        proto.DialogMessageList.prototype.getDialogmessageList = function() {
            return o.Message.getRepeatedWrapperField(this, a.DialogMessage, 1)
        }
        ,
        proto.DialogMessageList.prototype.setDialogmessageList = function(e) {
            o.Message.setRepeatedWrapperField(this, 1, e)
        }
        ,
        proto.DialogMessageList.prototype.addDialogmessage = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 1, e, proto.DialogMessage, t)
        }
        ,
        proto.DialogMessageList.prototype.clearDialogmessageList = function() {
            this.setDialogmessageList([])
        }
        ,
        proto.GetBriefDialogListReq = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetBriefDialogListReq.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetBriefDialogListReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetBriefDialogListReq.displayName = "proto.GetBriefDialogListReq"),
        proto.GetBriefDialogListReq.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.GetBriefDialogListReq.prototype.toObject = function(e) {
                return proto.GetBriefDialogListReq.toObject(e, this)
            }
                ,
                proto.GetBriefDialogListReq.toObject = function(e, t) {
                    var r = {
                        destidList: o.Message.getField(t, 1)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetBriefDialogListReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetBriefDialogListReq;
            return proto.GetBriefDialogListReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetBriefDialogListReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readPackedInt64();
                        e.setDestidList(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetBriefDialogListReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetBriefDialogListReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetBriefDialogListReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getDestidList(),
            r.length > 0 && t.writePackedInt64(1, r)
        }
        ,
        proto.GetBriefDialogListReq.prototype.getDestidList = function() {
            return o.Message.getField(this, 1)
        }
        ,
        proto.GetBriefDialogListReq.prototype.setDestidList = function(e) {
            o.Message.setField(this, 1, e || [])
        }
        ,
        proto.GetBriefDialogListReq.prototype.addDestid = function(e, t) {
            o.Message.addToRepeatedField(this, 1, e, t)
        }
        ,
        proto.GetBriefDialogListReq.prototype.clearDestidList = function() {
            this.setDestidList([])
        }
        ,
        proto.GetBriefDialogListResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetBriefDialogListResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetBriefDialogListResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetBriefDialogListResp.displayName = "proto.GetBriefDialogListResp"),
        proto.GetBriefDialogListResp.repeatedFields_ = [3],
        o.Message.GENERATE_TO_OBJECT && (proto.GetBriefDialogListResp.prototype.toObject = function(e) {
                return proto.GetBriefDialogListResp.toObject(e, this)
            }
                ,
                proto.GetBriefDialogListResp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        notexistdestidList: o.Message.getField(t, 3),
                        seqno: o.Message.getFieldWithDefault(t, 4, 0),
                        briefdialogMap: (r = t.getBriefdialogMap()) ? r.toObject(e, proto.BriefDialog.toObject) : []
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
        proto.GetBriefDialogListResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetBriefDialogListResp;
            return proto.GetBriefDialogListResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetBriefDialogListResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var i = t.readInt32();
                        e.setErrorcode(i);
                        break;
                    case 2:
                        i = t.readString();
                        e.setErrormessage(i);
                        break;
                    case 3:
                        i = t.readPackedInt64();
                        e.setNotexistdestidList(i);
                        break;
                    case 4:
                        i = t.readInt64String();
                        e.setSeqno(i);
                        break;
                    case 5:
                        i = e.getBriefdialogMap();
                        t.readMessage(i, function(e, t) {
                            o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.BriefDialog.deserializeBinaryFromReader)
                        });
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetBriefDialogListResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetBriefDialogListResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetBriefDialogListResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getNotexistdestidList(),
            r.length > 0 && t.writePackedInt64(3, r),
                r = e.getSeqno(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getBriefdialogMap(!0),
            r && r.getLength() > 0 && r.serializeBinary(5, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.BriefDialog.serializeBinaryToWriter)
        }
        ,
        proto.GetBriefDialogListResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetBriefDialogListResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetBriefDialogListResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetBriefDialogListResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetBriefDialogListResp.prototype.getNotexistdestidList = function() {
            return o.Message.getField(this, 3)
        }
        ,
        proto.GetBriefDialogListResp.prototype.setNotexistdestidList = function(e) {
            o.Message.setField(this, 3, e || [])
        }
        ,
        proto.GetBriefDialogListResp.prototype.addNotexistdestid = function(e, t) {
            o.Message.addToRepeatedField(this, 3, e, t)
        }
        ,
        proto.GetBriefDialogListResp.prototype.clearNotexistdestidList = function() {
            this.setNotexistdestidList([])
        }
        ,
        proto.GetBriefDialogListResp.prototype.getSeqno = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.GetBriefDialogListResp.prototype.setSeqno = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetBriefDialogListResp.prototype.getBriefdialogMap = function(e) {
            return o.Message.getMapField(this, 5, e, proto.BriefDialog)
        }
        ,
        proto.GetBriefDialogListResp.prototype.clearBriefdialogMap = function() {
            this.getBriefdialogMap().clear()
        }
        ,
        proto.GetDialogKeyReq = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetDialogKeyReq.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetDialogKeyReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetDialogKeyReq.displayName = "proto.GetDialogKeyReq"),
        proto.GetDialogKeyReq.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.GetDialogKeyReq.prototype.toObject = function(e) {
                return proto.GetDialogKeyReq.toObject(e, this)
            }
                ,
                proto.GetDialogKeyReq.toObject = function(e, t) {
                    var r = {
                        destidList: o.Message.getField(t, 1),
                        clientsign: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetDialogKeyReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetDialogKeyReq;
            return proto.GetDialogKeyReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetDialogKeyReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readPackedInt64();
                        e.setDestidList(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setClientsign(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetDialogKeyReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetDialogKeyReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetDialogKeyReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getDestidList(),
            r.length > 0 && t.writePackedInt64(1, r),
                r = e.getClientsign(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.GetDialogKeyReq.prototype.getDestidList = function() {
            return o.Message.getField(this, 1)
        }
        ,
        proto.GetDialogKeyReq.prototype.setDestidList = function(e) {
            o.Message.setField(this, 1, e || [])
        }
        ,
        proto.GetDialogKeyReq.prototype.addDestid = function(e, t) {
            o.Message.addToRepeatedField(this, 1, e, t)
        }
        ,
        proto.GetDialogKeyReq.prototype.clearDestidList = function() {
            this.setDestidList([])
        }
        ,
        proto.GetDialogKeyReq.prototype.getClientsign = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetDialogKeyReq.prototype.setClientsign = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetDialogKeyResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetDialogKeyResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetDialogKeyResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetDialogKeyResp.displayName = "proto.GetDialogKeyResp"),
        proto.GetDialogKeyResp.repeatedFields_ = [4],
        o.Message.GENERATE_TO_OBJECT && (proto.GetDialogKeyResp.prototype.toObject = function(e) {
                return proto.GetDialogKeyResp.toObject(e, this)
            }
                ,
                proto.GetDialogKeyResp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        dialogkeyversion: o.Message.getFieldWithDefault(t, 3, 0),
                        retryuidList: o.Message.getField(t, 4),
                        entryMap: (r = t.getEntryMap()) ? r.toObject(e, proto.AesKeyAndIV.toObject) : [],
                        serversign: o.Message.getFieldWithDefault(t, 6, "")
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
        proto.GetDialogKeyResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetDialogKeyResp;
            return proto.GetDialogKeyResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetDialogKeyResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var i = t.readInt32();
                        e.setErrorcode(i);
                        break;
                    case 2:
                        i = t.readString();
                        e.setErrormessage(i);
                        break;
                    case 3:
                        i = t.readInt64String();
                        e.setDialogkeyversion(i);
                        break;
                    case 4:
                        i = t.readPackedInt64();
                        e.setRetryuidList(i);
                        break;
                    case 5:
                        i = e.getEntryMap();
                        t.readMessage(i, function(e, t) {
                            o.Map.deserializeBinary(e, t, o.BinaryReader.prototype.readString, o.BinaryReader.prototype.readMessage, proto.AesKeyAndIV.deserializeBinaryFromReader)
                        });
                        break;
                    case 6:
                        i = t.readString();
                        e.setServersign(i);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetDialogKeyResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetDialogKeyResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetDialogKeyResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getDialogkeyversion(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getRetryuidList(),
            r.length > 0 && t.writePackedInt64(4, r),
                r = e.getEntryMap(!0),
            r && r.getLength() > 0 && r.serializeBinary(5, t, o.BinaryWriter.prototype.writeString, o.BinaryWriter.prototype.writeMessage, proto.AesKeyAndIV.serializeBinaryToWriter),
                r = e.getServersign(),
            r.length > 0 && t.writeString(6, r)
        }
        ,
        proto.GetDialogKeyResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetDialogKeyResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetDialogKeyResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetDialogKeyResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetDialogKeyResp.prototype.getDialogkeyversion = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.GetDialogKeyResp.prototype.setDialogkeyversion = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetDialogKeyResp.prototype.getRetryuidList = function() {
            return o.Message.getField(this, 4)
        }
        ,
        proto.GetDialogKeyResp.prototype.setRetryuidList = function(e) {
            o.Message.setField(this, 4, e || [])
        }
        ,
        proto.GetDialogKeyResp.prototype.addRetryuid = function(e, t) {
            o.Message.addToRepeatedField(this, 4, e, t)
        }
        ,
        proto.GetDialogKeyResp.prototype.clearRetryuidList = function() {
            this.setRetryuidList([])
        }
        ,
        proto.GetDialogKeyResp.prototype.getEntryMap = function(e) {
            return o.Message.getMapField(this, 5, e, proto.AesKeyAndIV)
        }
        ,
        proto.GetDialogKeyResp.prototype.clearEntryMap = function() {
            this.getEntryMap().clear()
        }
        ,
        proto.GetDialogKeyResp.prototype.getServersign = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.GetDialogKeyResp.prototype.setServersign = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.RecallPrivateChatMessageReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.RecallPrivateChatMessageReq, o.Message),
        i.DEBUG && !COMPILED && (proto.RecallPrivateChatMessageReq.displayName = "proto.RecallPrivateChatMessageReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.RecallPrivateChatMessageReq.prototype.toObject = function(e) {
                return proto.RecallPrivateChatMessageReq.toObject(e, this)
            }
                ,
                proto.RecallPrivateChatMessageReq.toObject = function(e, t) {
                    var r = {
                        destid: o.Message.getFieldWithDefault(t, 1, 0),
                        msgid: o.Message.getFieldWithDefault(t, 2, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.RecallPrivateChatMessageReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.RecallPrivateChatMessageReq;
            return proto.RecallPrivateChatMessageReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.RecallPrivateChatMessageReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setDestid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setMsgid(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.RecallPrivateChatMessageReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.RecallPrivateChatMessageReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.RecallPrivateChatMessageReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getDestid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getMsgid(),
            0 !== r && t.writeInt64String(2, r)
        }
        ,
        proto.RecallPrivateChatMessageReq.prototype.getDestid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.RecallPrivateChatMessageReq.prototype.setDestid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.RecallPrivateChatMessageReq.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.RecallPrivateChatMessageReq.prototype.setMsgid = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.RecallPrivateChatMessageResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.RecallPrivateChatMessageResp, o.Message),
        i.DEBUG && !COMPILED && (proto.RecallPrivateChatMessageResp.displayName = "proto.RecallPrivateChatMessageResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.RecallPrivateChatMessageResp.prototype.toObject = function(e) {
                return proto.RecallPrivateChatMessageResp.toObject(e, this)
            }
                ,
                proto.RecallPrivateChatMessageResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.RecallPrivateChatMessageResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.RecallPrivateChatMessageResp;
            return proto.RecallPrivateChatMessageResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.RecallPrivateChatMessageResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.RecallPrivateChatMessageResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.RecallPrivateChatMessageResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.RecallPrivateChatMessageResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.RecallPrivateChatMessageResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.RecallPrivateChatMessageResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.RecallPrivateChatMessageResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.RecallPrivateChatMessageResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        i.object.extend(t, proto)
    },
    "56d7": function(e, t, r) {
        "use strict";
        r.r(t);
        r("7f7f");
        var o = r("a4bb")
            , i = r.n(o)
            , s = (r("ac6a"),
            r("cadf"),
            r("551c"),
            r("f751"),
            r("097d"),
            r("2b0e"))
            , a = function() {
            var e = this
                , t = e.$createElement
                , r = e._self._c || t;
            return r("div", {
                attrs: {
                    id: "app"
                }
            }, [r(e.$store.state.page, {
                tag: "component"
            })], 1)
        }
            , n = []
            , p = r("795b")
            , l = r.n(p)
            , g = (r("96cf"),
            r("3b8d"))
            , u = function() {
            var e = this
                , t = e.$createElement
                , r = e._self._c || t;
            return r("div", {
                staticClass: "app-check"
            })
        }
            , d = []
            , c = r("15b8")
            , f = r.n(c)
            , h = (r("a032"),
            r("08d2"))
            , R = r.n(h)
            , M = r("cd92")
            , y = {
            name: "check",
            created: function() {
                for (var e = [window.WebSocket, window.indexedDB, R.a, String.prototype.codePointAt, window.ArrayBuffer, f.a], t = 0; t < e.length; t += 1)
                    if (void 0 === e[t])
                        return void this.$store.commit("goPage", "app-support");
                this.$ws.readyState === this.$ws.constructor.NOCREATE && this.$ws.open();
                var r = M["a"].getItem()
                    , o = +new Date
                    , i = 72e6;
                if (r = r && JSON.parse(r),
                    r && o - r.cacheTime <= i)
                    return this.$ws.setHeader({
                        deviceId: r.deviceId,
                        sessionId: r.sessionId,
                        uid: r.user.uid
                    }),
                        this.$store.commit("upUserInfo", r),
                        void this.$store.commit("goPage", "app-main");
                this.$store.commit("goPage", "app-login")
            }
        }
            , D = y
            , F = r("2877")
            , b = Object(F["a"])(D, u, d, !1, null, null, null)
            , m = b.exports
            , G = r("3d41")
            , C = r("4360")
            , w = void 0
            , S = {
            name: "app",
            components: {
                "app-check": m,
                "app-main": function() {
                    var e = Object(g["a"])(regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                            e.next = 3,
                                            G["a"].initial(C["a"].state.userInfo.user.uid);
                                    case 3:
                                        return t = e.sent,
                                            s["a"].prototype.$db = t,
                                            e.abrupt("return", r.e("chunk-c34909f4").then(r.bind(null, "1999")));
                                    case 8:
                                        return e.prev = 8,
                                            e.t0 = e["catch"](0),
                                            w.$log.error(e.t0),
                                            e.abrupt("return", l.a.reject(e.t0));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                        }, e, null, [[0, 8]])
                    }));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                "app-login": function() {
                    return r.e("chunk-bdda40a0").then(r.bind(null, "5596"))
                },
                "app-support": function() {
                    return r.e("chunk-f4dafb40").then(r.bind(null, "7b4d"))
                }
            }
        }
            , v = S
            , W = (r("7c55"),
            Object(F["a"])(v, a, n, !1, null, null, null))
            , B = W.exports
            , E = r("4687")
            , I = r("85f2")
            , k = r.n(I)
            , O = function() {
            var e = this
                , t = e.$createElement
                , r = e._self._c || t;
            return r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isShow,
                    expression: "isShow"
                }],
                staticClass: "layer-mod"
            }, [r("div", {
                staticClass: "mod-mask",
                style: {
                    backgroundColor: e.backgroundColor
                },
                on: {
                    click: function(t) {
                        return t.target !== t.currentTarget ? null : e.closeOne(t)
                    }
                }
            }, e._l(e.indexList, function(t, o) {
                return r("div", {
                    staticClass: "mod-float"
                }, ["tips" === t.type ? r("mod-tips", {
                    attrs: {
                        title: t.title,
                        info: t.info
                    },
                    on: {
                        close: function(t) {
                            return e.close(o)
                        }
                    }
                }) : e._e(), "confirm" === t.type ? r("mod-confirm", {
                    attrs: {
                        title: t.title,
                        info: t.info,
                        yes: t.yes,
                        no: t.no
                    },
                    on: {
                        close: function(t) {
                            return e.close(o)
                        }
                    }
                }) : e._e(), "photos" === t.type ? r("mod-photos", {
                    attrs: {
                        list: t.list,
                        start: t.start
                    },
                    on: {
                        close: function(t) {
                            return e.close(o)
                        }
                    }
                }) : e._e()], 1)
            }), 0)])
        }
            , T = []
            , q = (r("6b54"),
                function() {
                    var e = this
                        , t = e.$createElement
                        , r = e._self._c || t;
                    return r("div", {
                        staticClass: "mod-tips"
                    }, [r("div", {
                        staticClass: "header"
                    }, [r("div", {
                        staticClass: "title"
                    }, [e._v(e._s(e.title))]), r("i", {
                        staticClass: "app-icon-bag i-cross",
                        on: {
                            click: function(t) {
                                return e.$emit("close")
                            }
                        }
                    })]), r("div", {
                        staticClass: "body"
                    }, [r("div", {
                        staticClass: "info"
                    }, [e._v(e._s(e.info))])])])
                }
        )
            , L = []
            , P = {
            name: "tips",
            props: {
                title: {
                    type: String,
                    required: !0
                },
                info: {
                    type: String,
                    required: !0
                }
            }
        }
            , N = P
            , A = (r("42a7"),
            Object(F["a"])(N, q, L, !1, null, null, null))
            , z = A.exports
            , j = function() {
            var e = this
                , t = e.$createElement
                , r = e._self._c || t;
            return r("div", {
                staticClass: "mod-confirm"
            }, [r("div", {
                staticClass: "header"
            }, [r("div", {
                staticClass: "title"
            }, [e._v(e._s(e.title))]), r("i", {
                staticClass: "app-icon-bag i-cross",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            })]), r("div", {
                staticClass: "body"
            }, [r("div", {
                staticClass: "info"
            }, [e._v(e._s(e.info))])]), r("div", {
                staticClass: "footer"
            }, [r("div", {
                staticClass: "btn-group"
            }, [e.no && e.no.show ? r("button", {
                staticClass: "btn cancel",
                on: {
                    click: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "stip", void 0, t.key, void 0) ? null : e.cancel(t)
                    }
                }
            }, [e._v(e._s(e.no.name))]) : e._e(), e.yes && e.yes.show ? r("button", {
                staticClass: "btn confirm",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                            e.confirm(t)
                    }
                }
            }, [e._v(e._s(e.yes.name))]) : e._e()])])])
        }
            , U = []
            , V = r("7618")
            , _ = {
            name: "confirm",
            props: ["title", "info", "yes", "no"],
            methods: {
                confirm: function() {
                    var e = "object" === Object(V["a"])(this.yes) ? this.yes.callBack : "";
                    e && "function" === typeof e && e(),
                        this.$emit("close")
                },
                cancel: function() {
                    var e = "object" === Object(V["a"])(this.no) ? this.no.callBack : "";
                    e && "function" === typeof e && e(),
                        this.$emit("close")
                }
            }
        }
            , x = _
            , H = (r("8b72"),
            Object(F["a"])(x, j, U, !1, null, null, null))
            , Q = H.exports
            , K = function() {
            var e = this
                , t = e.$createElement
                , r = e._self._c || t;
            return r("div", {
                staticClass: "mod-photos"
            }, [r("div", {
                staticClass: "screen-content"
            }, [r("div", {
                staticClass: "screen"
            }, [r("span", {
                staticClass: "exit",
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [r("i", {
                staticClass: "app-icon-bag i-cross-w"
            })]), r("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoading,
                    expression: "isLoading"
                }],
                staticClass: "pic-loading app-icon-bag i-waiting"
            }), r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoading,
                    expression: "isLoading"
                }],
                staticClass: "content-small"
            }, [r("img", {
                staticClass: "smallPic",
                attrs: {
                    src: e.list[e.current].src,
                    draggable: "false",
                    ondragstart: "return false;"
                }
            })]), r("div", {
                staticClass: "content-big",
                class: {
                    animate: e.useAnimate
                },
                style: e.bigPic,
                on: {
                    wheel: e.resize,
                    mousedown: e.mousedown,
                    mousemove: e.mousemove,
                    mouseup: e.mouseup
                }
            }, [r("img", {
                key: e.current,
                ref: "bigPicImg",
                staticClass: "bigPic",
                attrs: {
                    draggable: "false",
                    ondragstart: "return false;",
                    src: e.bigSrc
                },
                on: {
                    load: e.bigPicLoad,
                    error: e.bigPicLoadError
                }
            })])]), r("div", {
                staticClass: "control"
            }, [r("ul", {
                staticClass: "img-operation clearfix"
            }, [r("li", {
                staticClass: "button-prev",
                class: {
                    disabled: e.current <= 0
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                            e.prevPic(t)
                    }
                }
            }), r("li", {
                staticClass: "button-rotate",
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                            e.rotatePic(t)
                    }
                }
            }), r("li", {
                staticClass: "button-next",
                class: {
                    disabled: e.current >= e.list.length - 1
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                            e.nextPic(t)
                    }
                }
            })])])])])
        }
            , $ = []
            , J = r("59ad")
            , X = r.n(J)
            , Y = (r("c5f6"),
            r("6f45"))
            , Z = r.n(Y)
            , ee = !1
            , te = 0
            , re = 0
            , oe = {
            name: "photos",
            props: {
                list: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                start: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    current: this.start,
                    isLoading: !0,
                    useAnimate: !1,
                    bigSrc: this.list[this.start].srcBig,
                    bigPic: {
                        top: "0px",
                        left: "0px",
                        height: "auto",
                        width: "auto",
                        visibility: "hidden",
                        webkitTransform: "rotate(0deg)"
                    },
                    rotate: 0
                }
            },
            watch: {
                rotate: function(e) {
                    this.bigPic.webkitTransform = "rotate(".concat(e, "deg)")
                },
                current: {
                    handler: function(e) {
                        this.resetBigPic(),
                            this.isLoading = !0,
                            this.useAnimate = !1,
                            this.bigSrc = this.list[e].srcBig,
                            this.rotate = 0
                    },
                    immediate: !0
                }
            },
            methods: {
                nextPic: function() {
                    this.current >= this.list.length - 1 || this.current++
                },
                prevPic: function() {
                    this.current <= 0 || this.current--
                },
                rotatePic: function() {
                    this.rotate -= 90
                },
                resetBigPic: function() {
                    this.bigPic.top = "0px",
                        this.bigPic.left = " 0px",
                        this.bigPic.height = "auto",
                        this.bigPic.width = "auto",
                        this.bigPic.visibility = "hidden",
                        this.bigPic.webkitTransform = "rotate(0deg)"
                },
                bigPicLoad: function() {
                    var e = this.$refs.bigPicImg;
                    if (e) {
                        var t, r, o = e.height, i = e.width, s = document.body.offsetHeight, a = document.body.offsetWidth;
                        o >= i ? o > 600 ? (t = 600,
                            r = 600 / o * i) : (t = o,
                            r = i) : i > 800 ? (r = 800,
                            t = 800 / i * o) : (t = o,
                            r = i);
                        var n = (s - t) / 2
                            , p = (a - r) / 2;
                        this.isLoading = !1,
                            this.bigPic.height = t + "px",
                            this.bigPic.width = r + "px",
                            this.bigPic.top = n + "px",
                            this.bigPic.left = p + "px",
                            this.bigPic.visibility = "visible"
                    }
                },
                fixedIosRotate: function() {
                    var e = this.$refs.bigPicImg
                        , t = this;
                    /\.jpg$/.test(e.src) && Z.a.getData(e, function() {
                        if (t.bigSrc === e.src) {
                            var r = Z.a.getTag(this, "Orientation");
                            switch (r) {
                                case 3:
                                    t.rotate = 180;
                                    break;
                                case 6:
                                    t.rotate = 90;
                                    break;
                                case 8:
                                    t.rotate = -90;
                                    break;
                                default:
                            }
                        }
                    })
                },
                bigPicLoadError: function() {
                    this.isLoading = !1,
                        this.bigSrc = this.list[this.current].src
                },
                resize: function(e) {
                    if (!this.isLoading) {
                        var t, r, o, i, s = e.deltaY, a = X()(this.bigPic.height), n = X()(this.bigPic.width), p = X()(this.bigPic.top), l = X()(this.bigPic.left), g = e.offsetY, u = e.offsetX, d = 1.2;
                        if (s < 0)
                            t = a * d,
                                r = n * d,
                                o = p + g - d * g,
                                i = l + u - d * u;
                        else {
                            if (a < 100 || n < 100)
                                return;
                            t = a / d,
                                r = n / d,
                                o = p + g - g / d,
                                i = l + u - u / d
                        }
                        this.useAnimate = !0,
                            this.bigPic.height = t + "px",
                            this.bigPic.width = r + "px",
                            this.bigPic.top = o + "px",
                            this.bigPic.left = i + "px"
                    }
                },
                mousedown: function(e) {
                    ee = !0,
                        this.useAnimate = !1,
                        te = e.clientX,
                        re = e.clientY
                },
                mousemove: function(e) {
                    if (ee) {
                        var t = X()(this.bigPic.top)
                            , r = X()(this.bigPic.left)
                            , o = e.clientX - te
                            , i = e.clientY - re;
                        te = e.clientX,
                            re = e.clientY;
                        var s = r + o
                            , a = t + i;
                        this.bigPic.top = a + "px",
                            this.bigPic.left = s + "px"
                    }
                },
                mouseup: function(e) {
                    ee = !1,
                        te = 0,
                        re = 0,
                        this.useAnimate = !0
                },
                animate: function(e, t, r) {
                    var o = (t - e) / r
                        , i = window.requestAnimationFrame
                        , s = 0
                        , a = t - e
                        , n = this;
                    function p() {
                        var t = +new Date;
                        i(function() {
                            var i = +new Date - t;
                            s += i,
                                s >= r ? n.listTtrans.left = e + a + "px" : (n.listTtrans.left = e + s * o + "px",
                                    p())
                        })
                    }
                    p()
                }
            }
        }
            , ie = oe
            , se = (r("e199"),
            Object(F["a"])(ie, K, $, !1, null, null, null))
            , ae = se.exports
            , ne = {
            name: "layer-mod",
            components: {
                "mod-tips": z,
                "mod-confirm": Q,
                "mod-photos": ae
            },
            data: function() {
                return {
                    isShow: !1,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    indexList: []
                }
            },
            methods: {
                open: function(e) {
                    var t = {};
                    return "tips" === e.type ? (t = {
                        type: "tips",
                        title: "提示",
                        info: " "
                    },
                        this.indexList.push(this.deepCopy(t, e)),
                        this.isShow = !0,
                        this.indexList.length) : "confirm" === e.type ? (t = {
                        type: "confirm",
                        title: "提示",
                        info: " ",
                        yes: {
                            name: "确认",
                            show: !0,
                            callBack: null
                        },
                        no: {
                            name: "取消",
                            show: !0,
                            callBack: null
                        }
                    },
                        this.indexList.push(this.deepCopy(t, e)),
                        this.isShow = !0,
                        this.indexList.length) : "photos" === e.type ? (t = {
                        type: "photos"
                    },
                        this.indexList.push(this.deepCopy(t, e)),
                        this.isShow = !0,
                        this.indexList.length) : void 0
                },
                close: function(e) {
                    var t = this.indexList.length;
                    if (e > t)
                        throw new Error("nums error");
                    this.indexList.splice(e - 1, 1),
                    this.indexList.length <= 0 && (this.isShow = !1)
                },
                closeByYes: function(e) {
                    var t, r = this.indexList.length;
                    if (e > r)
                        throw new Error("nums error");
                    t = this.indexList[e - 1],
                    "confirm" === t.type && t.yes && t.yes.callBack && "function" === typeof t.yes.callBack && t.yes.callBack(),
                        this.indexList.splice(e - 1, 1),
                    this.indexList.length <= 0 && (this.isShow = !1)
                },
                closeOne: function() {
                    this.indexList.pop(),
                    this.indexList.length <= 0 && (this.isShow = !1)
                },
                closeAll: function() {
                    var e = this.indexList.length;
                    this.indexList.splice(0, e)
                },
                deepCopy: function(e, t) {
                    var r, o = Object.prototype.toString;
                    for (name in t)
                        r = t[name],
                            "[object Object]" === o.call(r) ? (e[name] && "[object Object]" === o.call(e[name]) || (e[name] = {}),
                                this.deepCopy(e[name], r)) : "[object Array]" === o.call(r) ? (e[name] && "[object Array]" === o.call(e[name]) || (e[name] = []),
                                this.deepCopy(e[name], r)) : e[name] = r;
                    return e
                }
            }
        }
            , pe = ne
            , le = (r("e7fe"),
            Object(F["a"])(pe, O, T, !1, null, null, null))
            , ge = le.exports
            , ue = {}
            , de = {}
            , ce = "";
        de.open = function(e) {
            if (!ce)
                throw new Error("layerMod not create");
            return ce.open(e)
        }
            ,
            de.close = function(e) {
                if (!ce)
                    throw new Error("layerMod not create");
                return ce.close(e)
            }
            ,
            de.closeByYes = function(e) {
                if (!ce)
                    throw new Error("layerMod not create");
                return ce.closeByYes(e)
            }
            ,
            de.closeAll = function() {
                if (!ce)
                    throw new Error("layerMod not create");
                ce.closeAll()
            }
            ,
            ue.install = function(e, t) {
                var r = e.extend(ge);
                ce = new r({
                    el: document.createElement("div")
                }),
                    document.body.appendChild(ce.$el),
                    k()(e.prototype, "$layerMod", {
                        value: de
                    })
            }
        ;
        var fe = ue
            , he = r("94f8");
        function Re(e) {
            return he("do re mi".concat(e)).toString()
        }
        function Me(e) {
            return e ? e >= 1048576 ? "".concat((e / 1048576).toFixed(1), "MB") : "".concat((e / 1024).toFixed(1), "KB") : "未知大小"
        }
        var ye = {
            saltSha256: Re,
            formatFileSize: Me
        }
            , De = r("cb5d");
        r("b5c3"),
            r("f701"),
            r("3db4");
        r("c41f"),
            window.__xlversion = "1.0.0",
            s["a"].use(E["a"]),
            s["a"].use(fe),
            i()(ye).forEach(function(e) {
                return s["a"].filter(e, ye[e])
            }),
            s["a"].config.productionTip = !1,
            new s["a"]({
                el: "#app",
                store: C["a"],
                render: function(e) {
                    return e(B)
                }
            }).$mount("#app"),
            s["a"].prototype.$log = De["c"].logCollector,
            window.addEventListener("beforeunload", function() {
                De["b"].forceSubmit()
            })
    },
    "5c48": function(e, t, r) {},
    "6e4c": function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")();
        i.exportSymbol("proto.CmdId", null, s),
            proto.CmdId = {
                SHOULD_NEVER_USED_CMDID: 0,
                HEARTBEATREQCMDID: 268439553,
                HEARTBEATRESPCMDID: 268468225,
                SESSIONKILLEDNOTIFICATIONRESPCMDID: 268468229,
                SIGNOUTNOTIFICATIONRESPCMDID: 268468231,
                CREATEWEBQRCODEREQCMDID: 268439560,
                CREATEWEBQRCODERESPCMDID: 268468232,
                AUTHLOGOUTREQCMDID: 805376004,
                AUTHLOGOUTRESPCMDID: 805404676,
                GETALERTCONFIGREQCMDID: 806424594,
                GETALERTCONFIGRESPCMDID: 806453266,
                SCANWEBQRCODETOWEBRESPCMDID: 806453285,
                CLICKOKRESPCMDID: 806453284,
                CLICKOKTOWEBRESPCMDID: 806453286,
                AUTHLOGOUTTOWEBRESPCMDID: 806453296,
                APPFORCEWEBLOGOUTTOWEBRESPCMDID: 806453297,
                DELCONTACTSREQCMDID: 1073811459,
                DELCONTACTSRESPCMDID: 1073840131,
                ADDFRIENDREQCMDID: 1073811463,
                ADDFRIENDRESPCMDID: 1073840135,
                GETGROUPCONTACTLISTREQCMDID: 1073811467,
                GETGROUPCONTACTLISTRESPCMDID: 1073840139,
                GETCONFIRMEDCONTACTSREQCMDID: 1073811472,
                GETCONFIRMEDCONTACTSRESPCMDID: 1073840144,
                ADDFRIENDNEWREQCMDID: 1073811475,
                ADDFRIENDNEWRESPCMDID: 1073840147,
                NEWMESSAGENOTIFICATIONRESPCMDID: 1610711040,
                SENDPRIVATECHATMESSAGEREQCMDID: 1610682369,
                SENDPRIVATECHATMESSAGERESPCMDID: 1610711041,
                REPLYPRIVATECHATMESSAGEREQCMDID: 1610682370,
                REPLYPRIVATECHATMESSAGERESPCMDID: 1610711042,
                GETPRIVATECHATDIALOGDETAILREQCMDID: 1610682374,
                GETPRIVATECHATDIALOGDETAILRESPCMDID: 1610711046,
                GETDIALOGLISTREQCMDID: 1610682398,
                GETDIALOGLISTRESPCMDID: 1610711070,
                GETNEWMESSAGEREQCMDID: 1610682377,
                GETNEWMESSAGERESPCMDID: 1610711049,
                GETBRIEFDIALOGLISTREQCMDID: 1610682399,
                GETBRIEFDIALOGLISTRESPCMDID: 1610711071,
                GETDIALOGKEYREQCMDID: 1610682389,
                GETDIALOGKEYRESPCMDID: 1610711061,
                RECALLPRIVATECHATMESSAGEREQCMDID: 1610682402,
                RECALLPRIVATECHATMESSAGERESPCMDID: 1610711074,
                CREATEGROUPCHATDIALOGREQCMDID: 1610747909,
                CREATEGROUPCHATDIALOGRESPCMDID: 1610776581,
                DELETEGROUPCHATUSERREQCMDID: 1610747922,
                DELETEGROUPCHATUSERRESPCMDID: 1610776594,
                ADDGROUPCHATUSERNEWREQCMDID: 1610747939,
                ADDGROUPCHATUSERNEWRESPCMDID: 1610776611,
                SENDGROUPCHATMESSAGEREQCMDID: 1610747905,
                SENDGROUPCHATMESSAGERESPCMDID: 1610776577,
                REPLYGROUPCHATMESSAGEREQCMDID: 1610747906,
                REPLYGROUPCHATMESSAGERESPCMDID: 1610776578,
                FORWARDMESSAGETOGROUPCHATREQCMDID: 1610747907,
                FORWARDMESSAGETOGROUPCHATRESPCMDID: 1610776579,
                GETGROUPCHATDIALOGDETAILNEWREQCMDID: 1610747934,
                GETGROUPCHATDIALOGDETAILNEWRESPCMDID: 1610776606,
                GETGROUPDETAILREQCMDID: 1610747988,
                GETGROUPDETAILRESPCMDID: 1610776660,
                RECALLGROUPCHATMESSAGEREQCMDID: 1610747947,
                RECALLGROUPCHATMESSAGERESPCMDID: 1610776619,
                GETNEWSHARINGGROUPMESSAGEREQCMDID: 1610747963,
                GETNEWSHARINGGROUPMESSAGERESPCMDID: 1610776635
            },
            i.object.extend(t, proto)
    },
    "795a": function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")()
            , a = r("8d32");
        i.exportSymbol("proto.AddFriendNewReq", null, s),
            i.exportSymbol("proto.AddFriendNewResp", null, s),
            i.exportSymbol("proto.AddFriendReq", null, s),
            i.exportSymbol("proto.AddFriendResp", null, s),
            i.exportSymbol("proto.DelContactsReq", null, s),
            i.exportSymbol("proto.DelContactsResp", null, s),
            i.exportSymbol("proto.GetConfirmedContactsReq", null, s),
            i.exportSymbol("proto.GetConfirmedContactsResp", null, s),
            i.exportSymbol("proto.GetGroupContactListReq", null, s),
            i.exportSymbol("proto.GetGroupContactListResp", null, s),
            i.exportSymbol("proto.GroupContact", null, s),
            proto.GroupContact = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.GroupContact.repeatedFields_, null)
            }
            ,
            i.inherits(proto.GroupContact, o.Message),
        i.DEBUG && !COMPILED && (proto.GroupContact.displayName = "proto.GroupContact"),
            proto.GroupContact.repeatedFields_ = [4],
        o.Message.GENERATE_TO_OBJECT && (proto.GroupContact.prototype.toObject = function(e) {
                return proto.GroupContact.toObject(e, this)
            }
                ,
                proto.GroupContact.toObject = function(e, t) {
                    var r = {
                        groupid: o.Message.getFieldWithDefault(t, 1, 0),
                        grouptitle: o.Message.getFieldWithDefault(t, 2, ""),
                        totalmembernumber: o.Message.getFieldWithDefault(t, 3, 0),
                        groupmembersmallavatarurlList: o.Message.getField(t, 4)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GroupContact.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GroupContact;
                return proto.GroupContact.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GroupContact.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setGroupid(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setGrouptitle(o);
                            break;
                        case 3:
                            o = t.readInt32();
                            e.setTotalmembernumber(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.addGroupmembersmallavatarurl(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GroupContact.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GroupContact.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GroupContact.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getGroupid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getGrouptitle(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getTotalmembernumber(),
                0 !== r && t.writeInt32(3, r),
                    r = e.getGroupmembersmallavatarurlList(),
                r.length > 0 && t.writeRepeatedString(4, r)
            }
            ,
            proto.GroupContact.prototype.getGroupid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.GroupContact.prototype.setGroupid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.GroupContact.prototype.getGrouptitle = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.GroupContact.prototype.setGrouptitle = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.GroupContact.prototype.getTotalmembernumber = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.GroupContact.prototype.setTotalmembernumber = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.GroupContact.prototype.getGroupmembersmallavatarurlList = function() {
                return o.Message.getField(this, 4)
            }
            ,
            proto.GroupContact.prototype.setGroupmembersmallavatarurlList = function(e) {
                o.Message.setField(this, 4, e || [])
            }
            ,
            proto.GroupContact.prototype.addGroupmembersmallavatarurl = function(e, t) {
                o.Message.addToRepeatedField(this, 4, e, t)
            }
            ,
            proto.GroupContact.prototype.clearGroupmembersmallavatarurlList = function() {
                this.setGroupmembersmallavatarurlList([])
            }
            ,
            proto.DelContactsReq = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.DelContactsReq.repeatedFields_, null)
            }
            ,
            i.inherits(proto.DelContactsReq, o.Message),
        i.DEBUG && !COMPILED && (proto.DelContactsReq.displayName = "proto.DelContactsReq"),
            proto.DelContactsReq.repeatedFields_ = [1],
        o.Message.GENERATE_TO_OBJECT && (proto.DelContactsReq.prototype.toObject = function(e) {
                return proto.DelContactsReq.toObject(e, this)
            }
                ,
                proto.DelContactsReq.toObject = function(e, t) {
                    var r = {
                        uidList: o.Message.getField(t, 1)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.DelContactsReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.DelContactsReq;
                return proto.DelContactsReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.DelContactsReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readPackedInt64();
                            e.setUidList(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.DelContactsReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.DelContactsReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.DelContactsReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getUidList(),
                r.length > 0 && t.writePackedInt64(1, r)
            }
            ,
            proto.DelContactsReq.prototype.getUidList = function() {
                return o.Message.getField(this, 1)
            }
            ,
            proto.DelContactsReq.prototype.setUidList = function(e) {
                o.Message.setField(this, 1, e || [])
            }
            ,
            proto.DelContactsReq.prototype.addUid = function(e, t) {
                o.Message.addToRepeatedField(this, 1, e, t)
            }
            ,
            proto.DelContactsReq.prototype.clearUidList = function() {
                this.setUidList([])
            }
            ,
            proto.DelContactsResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.DelContactsResp, o.Message),
        i.DEBUG && !COMPILED && (proto.DelContactsResp.displayName = "proto.DelContactsResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.DelContactsResp.prototype.toObject = function(e) {
                return proto.DelContactsResp.toObject(e, this)
            }
                ,
                proto.DelContactsResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.DelContactsResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.DelContactsResp;
                return proto.DelContactsResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.DelContactsResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.DelContactsResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.DelContactsResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.DelContactsResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r)
            }
            ,
            proto.DelContactsResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.DelContactsResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.DelContactsResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.DelContactsResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.AddFriendReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.AddFriendReq, o.Message),
        i.DEBUG && !COMPILED && (proto.AddFriendReq.displayName = "proto.AddFriendReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.AddFriendReq.prototype.toObject = function(e) {
                return proto.AddFriendReq.toObject(e, this)
            }
                ,
                proto.AddFriendReq.toObject = function(e, t) {
                    var r = {
                        uid: o.Message.getFieldWithDefault(t, 1, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.AddFriendReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.AddFriendReq;
                return proto.AddFriendReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.AddFriendReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setUid(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.AddFriendReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.AddFriendReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.AddFriendReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getUid(),
                0 !== r && t.writeInt64String(1, r)
            }
            ,
            proto.AddFriendReq.prototype.getUid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.AddFriendReq.prototype.setUid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.AddFriendResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.AddFriendResp, o.Message),
        i.DEBUG && !COMPILED && (proto.AddFriendResp.displayName = "proto.AddFriendResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.AddFriendResp.prototype.toObject = function(e) {
                return proto.AddFriendResp.toObject(e, this)
            }
                ,
                proto.AddFriendResp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        user: (r = t.getUser()) && a.User.toObject(e, r)
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
            proto.AddFriendResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.AddFriendResp;
                return proto.AddFriendResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.AddFriendResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = new a.User;
                            t.readMessage(o, a.User.deserializeBinaryFromReader),
                                e.setUser(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.AddFriendResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.AddFriendResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.AddFriendResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getUser(),
                null != r && t.writeMessage(3, r, a.User.serializeBinaryToWriter)
            }
            ,
            proto.AddFriendResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.AddFriendResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.AddFriendResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.AddFriendResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.AddFriendResp.prototype.getUser = function() {
                return o.Message.getWrapperField(this, a.User, 3)
            }
            ,
            proto.AddFriendResp.prototype.setUser = function(e) {
                o.Message.setWrapperField(this, 3, e)
            }
            ,
            proto.AddFriendResp.prototype.clearUser = function() {
                this.setUser(void 0)
            }
            ,
            proto.AddFriendResp.prototype.hasUser = function() {
                return null != o.Message.getField(this, 3)
            }
            ,
            proto.GetGroupContactListReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.GetGroupContactListReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetGroupContactListReq.displayName = "proto.GetGroupContactListReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetGroupContactListReq.prototype.toObject = function(e) {
                return proto.GetGroupContactListReq.toObject(e, this)
            }
                ,
                proto.GetGroupContactListReq.toObject = function(e, t) {
                    var r = {
                        pageno: o.Message.getFieldWithDefault(t, 1, 0),
                        pagesize: o.Message.getFieldWithDefault(t, 2, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GetGroupContactListReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GetGroupContactListReq;
                return proto.GetGroupContactListReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GetGroupContactListReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setPageno(o);
                            break;
                        case 2:
                            o = t.readInt32();
                            e.setPagesize(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GetGroupContactListReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GetGroupContactListReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GetGroupContactListReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getPageno(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getPagesize(),
                0 !== r && t.writeInt32(2, r)
            }
            ,
            proto.GetGroupContactListReq.prototype.getPageno = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.GetGroupContactListReq.prototype.setPageno = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.GetGroupContactListReq.prototype.getPagesize = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.GetGroupContactListReq.prototype.setPagesize = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.GetGroupContactListResp = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.GetGroupContactListResp.repeatedFields_, null)
            }
            ,
            i.inherits(proto.GetGroupContactListResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetGroupContactListResp.displayName = "proto.GetGroupContactListResp"),
            proto.GetGroupContactListResp.repeatedFields_ = [4],
        o.Message.GENERATE_TO_OBJECT && (proto.GetGroupContactListResp.prototype.toObject = function(e) {
                return proto.GetGroupContactListResp.toObject(e, this)
            }
                ,
                proto.GetGroupContactListResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        hasnext: o.Message.getFieldWithDefault(t, 3, !1),
                        groupcontactList: o.Message.toObjectList(t.getGroupcontactList(), proto.GroupContact.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GetGroupContactListResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GetGroupContactListResp;
                return proto.GetGroupContactListResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GetGroupContactListResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readBool();
                            e.setHasnext(o);
                            break;
                        case 4:
                            o = new proto.GroupContact;
                            t.readMessage(o, proto.GroupContact.deserializeBinaryFromReader),
                                e.addGroupcontact(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GetGroupContactListResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GetGroupContactListResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
        ,
        proto.GetGroupContactListResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getHasnext(),
            r && t.writeBool(3, r),
                r = e.getGroupcontactList(),
            r.length > 0 && t.writeRepeatedMessage(4, r, proto.GroupContact.serializeBinaryToWriter)
        }
        ,
        proto.GetGroupContactListResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetGroupContactListResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetGroupContactListResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetGroupContactListResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetGroupContactListResp.prototype.getHasnext = function() {
            return o.Message.getFieldWithDefault(this, 3, !1)
        }
        ,
        proto.GetGroupContactListResp.prototype.setHasnext = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetGroupContactListResp.prototype.getGroupcontactList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.GroupContact, 4)
        }
        ,
        proto.GetGroupContactListResp.prototype.setGroupcontactList = function(e) {
            o.Message.setRepeatedWrapperField(this, 4, e)
        }
        ,
        proto.GetGroupContactListResp.prototype.addGroupcontact = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 4, e, proto.GroupContact, t)
        }
        ,
        proto.GetGroupContactListResp.prototype.clearGroupcontactList = function() {
            this.setGroupcontactList([])
        }
        ,
        proto.GetConfirmedContactsReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetConfirmedContactsReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetConfirmedContactsReq.displayName = "proto.GetConfirmedContactsReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetConfirmedContactsReq.prototype.toObject = function(e) {
                return proto.GetConfirmedContactsReq.toObject(e, this)
            }
                ,
                proto.GetConfirmedContactsReq.toObject = function(e, t) {
                    var r = {};
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetConfirmedContactsReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetConfirmedContactsReq;
            return proto.GetConfirmedContactsReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetConfirmedContactsReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetConfirmedContactsReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetConfirmedContactsReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetConfirmedContactsReq.serializeBinaryToWriter = function(e, t) {}
        ,
        proto.GetConfirmedContactsResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetConfirmedContactsResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetConfirmedContactsResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetConfirmedContactsResp.displayName = "proto.GetConfirmedContactsResp"),
        proto.GetConfirmedContactsResp.repeatedFields_ = [3],
        o.Message.GENERATE_TO_OBJECT && (proto.GetConfirmedContactsResp.prototype.toObject = function(e) {
                return proto.GetConfirmedContactsResp.toObject(e, this)
            }
                ,
                proto.GetConfirmedContactsResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        userList: o.Message.toObjectList(t.getUserList(), a.User.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetConfirmedContactsResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetConfirmedContactsResp;
            return proto.GetConfirmedContactsResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetConfirmedContactsResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader),
                            e.addUser(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetConfirmedContactsResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetConfirmedContactsResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetConfirmedContactsResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getUserList(),
            r.length > 0 && t.writeRepeatedMessage(3, r, a.User.serializeBinaryToWriter)
        }
        ,
        proto.GetConfirmedContactsResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetConfirmedContactsResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetConfirmedContactsResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetConfirmedContactsResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetConfirmedContactsResp.prototype.getUserList = function() {
            return o.Message.getRepeatedWrapperField(this, a.User, 3)
        }
        ,
        proto.GetConfirmedContactsResp.prototype.setUserList = function(e) {
            o.Message.setRepeatedWrapperField(this, 3, e)
        }
        ,
        proto.GetConfirmedContactsResp.prototype.addUser = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 3, e, proto.User, t)
        }
        ,
        proto.GetConfirmedContactsResp.prototype.clearUserList = function() {
            this.setUserList([])
        }
        ,
        proto.AddFriendNewReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.AddFriendNewReq, o.Message),
        i.DEBUG && !COMPILED && (proto.AddFriendNewReq.displayName = "proto.AddFriendNewReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.AddFriendNewReq.prototype.toObject = function(e) {
                return proto.AddFriendNewReq.toObject(e, this)
            }
                ,
                proto.AddFriendNewReq.toObject = function(e, t) {
                    var r = {
                        uid: o.Message.getFieldWithDefault(t, 1, 0),
                        addmetype: o.Message.getFieldWithDefault(t, 2, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.AddFriendNewReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AddFriendNewReq;
            return proto.AddFriendNewReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AddFriendNewReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setUid(o);
                        break;
                    case 2:
                        o = t.readInt32();
                        e.setAddmetype(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AddFriendNewReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AddFriendNewReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AddFriendNewReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getUid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getAddmetype(),
            0 !== r && t.writeInt32(2, r)
        }
        ,
        proto.AddFriendNewReq.prototype.getUid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.AddFriendNewReq.prototype.setUid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AddFriendNewReq.prototype.getAddmetype = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.AddFriendNewReq.prototype.setAddmetype = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.AddFriendNewResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.AddFriendNewResp, o.Message),
        i.DEBUG && !COMPILED && (proto.AddFriendNewResp.displayName = "proto.AddFriendNewResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.AddFriendNewResp.prototype.toObject = function(e) {
                return proto.AddFriendNewResp.toObject(e, this)
            }
                ,
                proto.AddFriendNewResp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        user: (r = t.getUser()) && a.User.toObject(e, r)
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
        proto.AddFriendNewResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AddFriendNewResp;
            return proto.AddFriendNewResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AddFriendNewResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader),
                            e.setUser(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AddFriendNewResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AddFriendNewResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AddFriendNewResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getUser(),
            null != r && t.writeMessage(3, r, a.User.serializeBinaryToWriter)
        }
        ,
        proto.AddFriendNewResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.AddFriendNewResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AddFriendNewResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.AddFriendNewResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.AddFriendNewResp.prototype.getUser = function() {
            return o.Message.getWrapperField(this, a.User, 3)
        }
        ,
        proto.AddFriendNewResp.prototype.setUser = function(e) {
            o.Message.setWrapperField(this, 3, e)
        }
        ,
        proto.AddFriendNewResp.prototype.clearUser = function() {
            this.setUser(void 0)
        }
        ,
        proto.AddFriendNewResp.prototype.hasUser = function() {
            return null != o.Message.getField(this, 3)
        }
        ,
        i.object.extend(t, proto)
    },
    "7a6c": function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")();
        i.exportSymbol("proto.CreateWebQrcodeReq", null, s),
            i.exportSymbol("proto.CreateWebQrcodeResp", null, s),
            i.exportSymbol("proto.HeartbeatReq", null, s),
            i.exportSymbol("proto.HeartbeatResp", null, s),
            i.exportSymbol("proto.SessionKilledNotificationResp", null, s),
            i.exportSymbol("proto.SignOutNotificationResp", null, s),
            proto.HeartbeatReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.HeartbeatReq, o.Message),
        i.DEBUG && !COMPILED && (proto.HeartbeatReq.displayName = "proto.HeartbeatReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.HeartbeatReq.prototype.toObject = function(e) {
                return proto.HeartbeatReq.toObject(e, this)
            }
                ,
                proto.HeartbeatReq.toObject = function(e, t) {
                    var r = {
                        pingid: o.Message.getFieldWithDefault(t, 1, 0),
                        disconnectdelay: o.Message.getFieldWithDefault(t, 2, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.HeartbeatReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.HeartbeatReq;
                return proto.HeartbeatReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.HeartbeatReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setPingid(o);
                            break;
                        case 2:
                            o = t.readInt64String();
                            e.setDisconnectdelay(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.HeartbeatReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.HeartbeatReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.HeartbeatReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getPingid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getDisconnectdelay(),
                0 !== r && t.writeInt64String(2, r)
            }
            ,
            proto.HeartbeatReq.prototype.getPingid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.HeartbeatReq.prototype.setPingid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.HeartbeatReq.prototype.getDisconnectdelay = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.HeartbeatReq.prototype.setDisconnectdelay = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.HeartbeatResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.HeartbeatResp, o.Message),
        i.DEBUG && !COMPILED && (proto.HeartbeatResp.displayName = "proto.HeartbeatResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.HeartbeatResp.prototype.toObject = function(e) {
                return proto.HeartbeatResp.toObject(e, this)
            }
                ,
                proto.HeartbeatResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        pingid: o.Message.getFieldWithDefault(t, 3, 0),
                        interval: o.Message.getFieldWithDefault(t, 4, 0),
                        disconnectwaittime: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.HeartbeatResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.HeartbeatResp;
                return proto.HeartbeatResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.HeartbeatResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setPingid(o);
                            break;
                        case 4:
                            o = t.readInt32();
                            e.setInterval(o);
                            break;
                        case 5:
                            o = t.readInt32();
                            e.setDisconnectwaittime(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.HeartbeatResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.HeartbeatResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.HeartbeatResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getPingid(),
                0 !== r && t.writeInt64String(3, r),
                    r = e.getInterval(),
                0 !== r && t.writeInt32(4, r),
                    r = e.getDisconnectwaittime(),
                0 !== r && t.writeInt32(5, r)
            }
            ,
            proto.HeartbeatResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.HeartbeatResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.HeartbeatResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.HeartbeatResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.HeartbeatResp.prototype.getPingid = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.HeartbeatResp.prototype.setPingid = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.HeartbeatResp.prototype.getInterval = function() {
                return o.Message.getFieldWithDefault(this, 4, 0)
            }
            ,
            proto.HeartbeatResp.prototype.setInterval = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.HeartbeatResp.prototype.getDisconnectwaittime = function() {
                return o.Message.getFieldWithDefault(this, 5, 0)
            }
            ,
            proto.HeartbeatResp.prototype.setDisconnectwaittime = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.SessionKilledNotificationResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.SessionKilledNotificationResp, o.Message),
        i.DEBUG && !COMPILED && (proto.SessionKilledNotificationResp.displayName = "proto.SessionKilledNotificationResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.SessionKilledNotificationResp.prototype.toObject = function(e) {
                return proto.SessionKilledNotificationResp.toObject(e, this)
            }
                ,
                proto.SessionKilledNotificationResp.toObject = function(e, t) {
                    var r = {
                        newlogindevicetype: o.Message.getFieldWithDefault(t, 1, 0),
                        newloginimei: o.Message.getFieldWithDefault(t, 2, ""),
                        newloginphonebrand: o.Message.getFieldWithDefault(t, 3, ""),
                        newloginphonemodel: o.Message.getFieldWithDefault(t, 4, ""),
                        forcelogoutdeletealllocalmessagesflag: o.Message.getFieldWithDefault(t, 5, !1)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.SessionKilledNotificationResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.SessionKilledNotificationResp;
                return proto.SessionKilledNotificationResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.SessionKilledNotificationResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setNewlogindevicetype(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setNewloginimei(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setNewloginphonebrand(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setNewloginphonemodel(o);
                            break;
                        case 5:
                            o = t.readBool();
                            e.setForcelogoutdeletealllocalmessagesflag(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.SessionKilledNotificationResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.SessionKilledNotificationResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.SessionKilledNotificationResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getNewlogindevicetype(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getNewloginimei(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getNewloginphonebrand(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getNewloginphonemodel(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getForcelogoutdeletealllocalmessagesflag(),
                r && t.writeBool(5, r)
            }
            ,
            proto.SessionKilledNotificationResp.prototype.getNewlogindevicetype = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.SessionKilledNotificationResp.prototype.setNewlogindevicetype = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.SessionKilledNotificationResp.prototype.getNewloginimei = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.SessionKilledNotificationResp.prototype.setNewloginimei = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.SessionKilledNotificationResp.prototype.getNewloginphonebrand = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.SessionKilledNotificationResp.prototype.setNewloginphonebrand = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.SessionKilledNotificationResp.prototype.getNewloginphonemodel = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.SessionKilledNotificationResp.prototype.setNewloginphonemodel = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.SessionKilledNotificationResp.prototype.getForcelogoutdeletealllocalmessagesflag = function() {
                return o.Message.getFieldWithDefault(this, 5, !1)
            }
            ,
            proto.SessionKilledNotificationResp.prototype.setForcelogoutdeletealllocalmessagesflag = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.SignOutNotificationResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.SignOutNotificationResp, o.Message),
        i.DEBUG && !COMPILED && (proto.SignOutNotificationResp.displayName = "proto.SignOutNotificationResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.SignOutNotificationResp.prototype.toObject = function(e) {
                return proto.SignOutNotificationResp.toObject(e, this)
            }
                ,
                proto.SignOutNotificationResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.SignOutNotificationResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.SignOutNotificationResp;
                return proto.SignOutNotificationResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.SignOutNotificationResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setErrorcode(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.SignOutNotificationResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.SignOutNotificationResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.SignOutNotificationResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt64String(1, r)
            }
            ,
            proto.SignOutNotificationResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.SignOutNotificationResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.CreateWebQrcodeReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.CreateWebQrcodeReq, o.Message),
        i.DEBUG && !COMPILED && (proto.CreateWebQrcodeReq.displayName = "proto.CreateWebQrcodeReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.CreateWebQrcodeReq.prototype.toObject = function(e) {
                return proto.CreateWebQrcodeReq.toObject(e, this)
            }
                ,
                proto.CreateWebQrcodeReq.toObject = function(e, t) {
                    var r = {
                        uniqueid: o.Message.getFieldWithDefault(t, 1, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.CreateWebQrcodeReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.CreateWebQrcodeReq;
                return proto.CreateWebQrcodeReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.CreateWebQrcodeReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readString();
                            e.setUniqueid(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.CreateWebQrcodeReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.CreateWebQrcodeReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.CreateWebQrcodeReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getUniqueid(),
                r.length > 0 && t.writeString(1, r)
            }
            ,
            proto.CreateWebQrcodeReq.prototype.getUniqueid = function() {
                return o.Message.getFieldWithDefault(this, 1, "")
            }
            ,
            proto.CreateWebQrcodeReq.prototype.setUniqueid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.CreateWebQrcodeResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.CreateWebQrcodeResp, o.Message),
        i.DEBUG && !COMPILED && (proto.CreateWebQrcodeResp.displayName = "proto.CreateWebQrcodeResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.CreateWebQrcodeResp.prototype.toObject = function(e) {
                return proto.CreateWebQrcodeResp.toObject(e, this)
            }
                ,
                proto.CreateWebQrcodeResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        webqrcodestring: o.Message.getFieldWithDefault(t, 3, ""),
                        timeoutmillis: o.Message.getFieldWithDefault(t, 4, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.CreateWebQrcodeResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.CreateWebQrcodeResp;
                return proto.CreateWebQrcodeResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.CreateWebQrcodeResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setWebqrcodestring(o);
                            break;
                        case 4:
                            o = t.readInt64String();
                            e.setTimeoutmillis(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.CreateWebQrcodeResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.CreateWebQrcodeResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.CreateWebQrcodeResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getWebqrcodestring(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getTimeoutmillis(),
                0 !== r && t.writeInt64String(4, r)
            }
            ,
            proto.CreateWebQrcodeResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.CreateWebQrcodeResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.CreateWebQrcodeResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.CreateWebQrcodeResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.CreateWebQrcodeResp.prototype.getWebqrcodestring = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.CreateWebQrcodeResp.prototype.setWebqrcodestring = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.CreateWebQrcodeResp.prototype.getTimeoutmillis = function() {
                return o.Message.getFieldWithDefault(this, 4, 0)
            }
            ,
            proto.CreateWebQrcodeResp.prototype.setTimeoutmillis = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            i.object.extend(t, proto)
    },
    "7c55": function(e, t, r) {
        "use strict";
        var o = r("5c48")
            , i = r.n(o);
        i.a
    },
    "8b72": function(e, t, r) {
        "use strict";
        var o = r("94d5")
            , i = r.n(o);
        i.a
    },
    "8d32": function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")();
        i.exportSymbol("proto.AesKeyAndIV", null, s),
            i.exportSymbol("proto.BriefDialog", null, s),
            i.exportSymbol("proto.BriefDialogMessage", null, s),
            i.exportSymbol("proto.ConfigItem", null, s),
            i.exportSymbol("proto.DialogMessage", null, s),
            i.exportSymbol("proto.FullDialog", null, s),
            i.exportSymbol("proto.ReferenceDialogMessage", null, s),
            i.exportSymbol("proto.User", null, s),
            i.exportSymbol("proto.WebReferenceDialogMessage", null, s),
            proto.AesKeyAndIV = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.AesKeyAndIV, o.Message),
        i.DEBUG && !COMPILED && (proto.AesKeyAndIV.displayName = "proto.AesKeyAndIV"),
        o.Message.GENERATE_TO_OBJECT && (proto.AesKeyAndIV.prototype.toObject = function(e) {
                return proto.AesKeyAndIV.toObject(e, this)
            }
                ,
                proto.AesKeyAndIV.toObject = function(e, t) {
                    var r = {
                        aeskey: o.Message.getFieldWithDefault(t, 1, ""),
                        aesiv: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.AesKeyAndIV.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.AesKeyAndIV;
                return proto.AesKeyAndIV.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.AesKeyAndIV.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readString();
                            e.setAeskey(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setAesiv(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.AesKeyAndIV.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.AesKeyAndIV.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.AesKeyAndIV.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getAeskey(),
                r.length > 0 && t.writeString(1, r),
                    r = e.getAesiv(),
                r.length > 0 && t.writeString(2, r)
            }
            ,
            proto.AesKeyAndIV.prototype.getAeskey = function() {
                return o.Message.getFieldWithDefault(this, 1, "")
            }
            ,
            proto.AesKeyAndIV.prototype.setAeskey = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.AesKeyAndIV.prototype.getAesiv = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.AesKeyAndIV.prototype.setAesiv = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.ConfigItem = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.ConfigItem, o.Message),
        i.DEBUG && !COMPILED && (proto.ConfigItem.displayName = "proto.ConfigItem"),
        o.Message.GENERATE_TO_OBJECT && (proto.ConfigItem.prototype.toObject = function(e) {
                return proto.ConfigItem.toObject(e, this)
            }
                ,
                proto.ConfigItem.toObject = function(e, t) {
                    var r = {
                        key: o.Message.getFieldWithDefault(t, 1, ""),
                        value: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.ConfigItem.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.ConfigItem;
                return proto.ConfigItem.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.ConfigItem.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readString();
                            e.setKey(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setValue(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.ConfigItem.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.ConfigItem.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.ConfigItem.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getKey(),
                r.length > 0 && t.writeString(1, r),
                    r = e.getValue(),
                r.length > 0 && t.writeString(2, r)
            }
            ,
            proto.ConfigItem.prototype.getKey = function() {
                return o.Message.getFieldWithDefault(this, 1, "")
            }
            ,
            proto.ConfigItem.prototype.setKey = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.ConfigItem.prototype.getValue = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.ConfigItem.prototype.setValue = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.User = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.User.repeatedFields_, null)
            }
            ,
            i.inherits(proto.User, o.Message),
        i.DEBUG && !COMPILED && (proto.User.displayName = "proto.User"),
            proto.User.repeatedFields_ = [15],
        o.Message.GENERATE_TO_OBJECT && (proto.User.prototype.toObject = function(e) {
                return proto.User.toObject(e, this)
            }
                ,
                proto.User.toObject = function(e, t) {
                    var r = {
                        uid: o.Message.getFieldWithDefault(t, 1, 0),
                        nickname: o.Message.getFieldWithDefault(t, 2, ""),
                        langcode: o.Message.getFieldWithDefault(t, 3, ""),
                        phone: o.Message.getFieldWithDefault(t, 4, ""),
                        numberinphonebook: o.Message.getFieldWithDefault(t, 5, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 6, ""),
                        originalavatarurl: o.Message.getFieldWithDefault(t, 7, ""),
                        email: o.Message.getFieldWithDefault(t, 8, ""),
                        qrcodestring: o.Message.getFieldWithDefault(t, 9, ""),
                        gender: o.Message.getFieldWithDefault(t, 10, 0),
                        contactstatus: o.Message.getFieldWithDefault(t, 11, 0),
                        alias: o.Message.getFieldWithDefault(t, 12, ""),
                        viplevel: o.Message.getFieldWithDefault(t, 13, 0),
                        xianliaoid: o.Message.getFieldWithDefault(t, 14, ""),
                        aliasmobileList: o.Message.getField(t, 15),
                        aliasdesp: o.Message.getFieldWithDefault(t, 16, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.User.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.User;
                return proto.User.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.User.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setUid(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setNickname(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setLangcode(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setPhone(o);
                            break;
                        case 5:
                            o = t.readString();
                            e.setNumberinphonebook(o);
                            break;
                        case 6:
                            o = t.readString();
                            e.setSmallavatarurl(o);
                            break;
                        case 7:
                            o = t.readString();
                            e.setOriginalavatarurl(o);
                            break;
                        case 8:
                            o = t.readString();
                            e.setEmail(o);
                            break;
                        case 9:
                            o = t.readString();
                            e.setQrcodestring(o);
                            break;
                        case 10:
                            o = t.readInt32();
                            e.setGender(o);
                            break;
                        case 11:
                            o = t.readInt32();
                            e.setContactstatus(o);
                            break;
                        case 12:
                            o = t.readString();
                            e.setAlias(o);
                            break;
                        case 13:
                            o = t.readInt32();
                            e.setViplevel(o);
                            break;
                        case 14:
                            o = t.readString();
                            e.setXianliaoid(o);
                            break;
                        case 15:
                            o = t.readString();
                            e.addAliasmobile(o);
                            break;
                        case 16:
                            o = t.readString();
                            e.setAliasdesp(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.User.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.User.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.User.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getUid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getNickname(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getLangcode(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getPhone(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getNumberinphonebook(),
                r.length > 0 && t.writeString(5, r),
                    r = e.getSmallavatarurl(),
                r.length > 0 && t.writeString(6, r),
                    r = e.getOriginalavatarurl(),
                r.length > 0 && t.writeString(7, r),
                    r = e.getEmail(),
                r.length > 0 && t.writeString(8, r),
                    r = e.getQrcodestring(),
                r.length > 0 && t.writeString(9, r),
                    r = e.getGender(),
                0 !== r && t.writeInt32(10, r),
                    r = e.getContactstatus(),
                0 !== r && t.writeInt32(11, r),
                    r = e.getAlias(),
                r.length > 0 && t.writeString(12, r),
                    r = e.getViplevel(),
                0 !== r && t.writeInt32(13, r),
                    r = e.getXianliaoid(),
                r.length > 0 && t.writeString(14, r),
                    r = e.getAliasmobileList(),
                r.length > 0 && t.writeRepeatedString(15, r),
                    r = e.getAliasdesp(),
                r.length > 0 && t.writeString(16, r)
            }
            ,
            proto.User.prototype.getUid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.User.prototype.setUid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.User.prototype.getNickname = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.User.prototype.setNickname = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.User.prototype.getLangcode = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.User.prototype.setLangcode = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.User.prototype.getPhone = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.User.prototype.setPhone = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.User.prototype.getNumberinphonebook = function() {
                return o.Message.getFieldWithDefault(this, 5, "")
            }
            ,
            proto.User.prototype.setNumberinphonebook = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.User.prototype.getSmallavatarurl = function() {
                return o.Message.getFieldWithDefault(this, 6, "")
            }
            ,
            proto.User.prototype.setSmallavatarurl = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.User.prototype.getOriginalavatarurl = function() {
                return o.Message.getFieldWithDefault(this, 7, "")
            }
            ,
            proto.User.prototype.setOriginalavatarurl = function(e) {
                o.Message.setField(this, 7, e)
            }
            ,
            proto.User.prototype.getEmail = function() {
                return o.Message.getFieldWithDefault(this, 8, "")
            }
            ,
            proto.User.prototype.setEmail = function(e) {
                o.Message.setField(this, 8, e)
            }
            ,
            proto.User.prototype.getQrcodestring = function() {
                return o.Message.getFieldWithDefault(this, 9, "")
            }
            ,
            proto.User.prototype.setQrcodestring = function(e) {
                o.Message.setField(this, 9, e)
            }
            ,
            proto.User.prototype.getGender = function() {
                return o.Message.getFieldWithDefault(this, 10, 0)
            }
            ,
            proto.User.prototype.setGender = function(e) {
                o.Message.setField(this, 10, e)
            }
            ,
            proto.User.prototype.getContactstatus = function() {
                return o.Message.getFieldWithDefault(this, 11, 0)
            }
            ,
            proto.User.prototype.setContactstatus = function(e) {
                o.Message.setField(this, 11, e)
            }
            ,
            proto.User.prototype.getAlias = function() {
                return o.Message.getFieldWithDefault(this, 12, "")
            }
            ,
            proto.User.prototype.setAlias = function(e) {
                o.Message.setField(this, 12, e)
            }
            ,
            proto.User.prototype.getViplevel = function() {
                return o.Message.getFieldWithDefault(this, 13, 0)
            }
            ,
            proto.User.prototype.setViplevel = function(e) {
                o.Message.setField(this, 13, e)
            }
            ,
            proto.User.prototype.getXianliaoid = function() {
                return o.Message.getFieldWithDefault(this, 14, "")
            }
            ,
            proto.User.prototype.setXianliaoid = function(e) {
                o.Message.setField(this, 14, e)
            }
            ,
            proto.User.prototype.getAliasmobileList = function() {
                return o.Message.getField(this, 15)
            }
            ,
            proto.User.prototype.setAliasmobileList = function(e) {
                o.Message.setField(this, 15, e || [])
            }
            ,
            proto.User.prototype.addAliasmobile = function(e, t) {
                o.Message.addToRepeatedField(this, 15, e, t)
            }
            ,
            proto.User.prototype.clearAliasmobileList = function() {
                this.setAliasmobileList([])
            }
            ,
            proto.User.prototype.getAliasdesp = function() {
                return o.Message.getFieldWithDefault(this, 16, "")
            }
            ,
            proto.User.prototype.setAliasdesp = function(e) {
                o.Message.setField(this, 16, e)
            }
            ,
            proto.DialogMessage = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.DialogMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.DialogMessage.displayName = "proto.DialogMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.DialogMessage.prototype.toObject = function(e) {
                return proto.DialogMessage.toObject(e, this)
            }
                ,
                proto.DialogMessage.toObject = function(e, t) {
                    var r = {
                        msgid: o.Message.getFieldWithDefault(t, 1, 0),
                        localid: o.Message.getFieldWithDefault(t, 2, 0),
                        msgstatus: o.Message.getFieldWithDefault(t, 3, 0),
                        srcid: o.Message.getFieldWithDefault(t, 4, 0),
                        destid: o.Message.getFieldWithDefault(t, 5, 0),
                        isout: o.Message.getFieldWithDefault(t, 6, !1),
                        sendercategory: o.Message.getFieldWithDefault(t, 7, 0),
                        msgcategory: o.Message.getFieldWithDefault(t, 8, 0),
                        msgprecontent: o.Message.getFieldWithDefault(t, 9, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 10, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 11, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 12, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 13, ""),
                        msgsendtime: o.Message.getFieldWithDefault(t, 14, 0),
                        burnafterreadingflag: o.Message.getFieldWithDefault(t, 15, !1),
                        atflag: o.Message.getFieldWithDefault(t, 16, !1),
                        replyflag: o.Message.getFieldWithDefault(t, 17, !1),
                        referenceflag: o.Message.getFieldWithDefault(t, 18, !1),
                        msgidreferenced: o.Message.getFieldWithDefault(t, 19, 0),
                        sharinggroupflag: o.Message.getFieldWithDefault(t, 20, !1),
                        seqno: o.Message.getFieldWithDefault(t, 21, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.DialogMessage.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.DialogMessage;
                return proto.DialogMessage.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.DialogMessage.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setMsgid(o);
                            break;
                        case 2:
                            o = t.readInt64String();
                            e.setLocalid(o);
                            break;
                        case 3:
                            o = t.readInt32();
                            e.setMsgstatus(o);
                            break;
                        case 4:
                            o = t.readInt64String();
                            e.setSrcid(o);
                            break;
                        case 5:
                            o = t.readInt64String();
                            e.setDestid(o);
                            break;
                        case 6:
                            o = t.readBool();
                            e.setIsout(o);
                            break;
                        case 7:
                            o = t.readInt32();
                            e.setSendercategory(o);
                            break;
                        case 8:
                            o = t.readInt32();
                            e.setMsgcategory(o);
                            break;
                        case 9:
                            o = t.readString();
                            e.setMsgprecontent(o);
                            break;
                        case 10:
                            o = t.readString();
                            e.setMsgpostcontent(o);
                            break;
                        case 11:
                            o = t.readBool();
                            e.setMediaflag(o);
                            break;
                        case 12:
                            o = t.readInt32();
                            e.setMediaconstructor(o);
                            break;
                        case 13:
                            o = t.readString();
                            e.setMediaattribute(o);
                            break;
                        case 14:
                            o = t.readInt64String();
                            e.setMsgsendtime(o);
                            break;
                        case 15:
                            o = t.readBool();
                            e.setBurnafterreadingflag(o);
                            break;
                        case 16:
                            o = t.readBool();
                            e.setAtflag(o);
                            break;
                        case 17:
                            o = t.readBool();
                            e.setReplyflag(o);
                            break;
                        case 18:
                            o = t.readBool();
                            e.setReferenceflag(o);
                            break;
                        case 19:
                            o = t.readInt64String();
                            e.setMsgidreferenced(o);
                            break;
                        case 20:
                            o = t.readBool();
                            e.setSharinggroupflag(o);
                            break;
                        case 21:
                            o = t.readInt64String();
                            e.setSeqno(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.DialogMessage.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.DialogMessage.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.DialogMessage.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getMsgid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getLocalid(),
                0 !== r && t.writeInt64String(2, r),
                    r = e.getMsgstatus(),
                0 !== r && t.writeInt32(3, r),
                    r = e.getSrcid(),
                0 !== r && t.writeInt64String(4, r),
                    r = e.getDestid(),
                0 !== r && t.writeInt64String(5, r),
                    r = e.getIsout(),
                r && t.writeBool(6, r),
                    r = e.getSendercategory(),
                0 !== r && t.writeInt32(7, r),
                    r = e.getMsgcategory(),
                0 !== r && t.writeInt32(8, r),
                    r = e.getMsgprecontent(),
                r.length > 0 && t.writeString(9, r),
                    r = e.getMsgpostcontent(),
                r.length > 0 && t.writeString(10, r),
                    r = e.getMediaflag(),
                r && t.writeBool(11, r),
                    r = e.getMediaconstructor(),
                0 !== r && t.writeInt32(12, r),
                    r = e.getMediaattribute(),
                r.length > 0 && t.writeString(13, r),
                    r = e.getMsgsendtime(),
                0 !== r && t.writeInt64String(14, r),
                    r = e.getBurnafterreadingflag(),
                r && t.writeBool(15, r),
                    r = e.getAtflag(),
                r && t.writeBool(16, r),
                    r = e.getReplyflag(),
                r && t.writeBool(17, r),
                    r = e.getReferenceflag(),
                r && t.writeBool(18, r),
                    r = e.getMsgidreferenced(),
                0 !== r && t.writeInt64String(19, r),
                    r = e.getSharinggroupflag(),
                r && t.writeBool(20, r),
                    r = e.getSeqno(),
                0 !== r && t.writeInt64String(21, r)
            }
            ,
            proto.DialogMessage.prototype.getMsgid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.DialogMessage.prototype.setMsgid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.DialogMessage.prototype.getLocalid = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.DialogMessage.prototype.setLocalid = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.DialogMessage.prototype.getMsgstatus = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.DialogMessage.prototype.setMsgstatus = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.DialogMessage.prototype.getSrcid = function() {
                return o.Message.getFieldWithDefault(this, 4, 0)
            }
            ,
            proto.DialogMessage.prototype.setSrcid = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.DialogMessage.prototype.getDestid = function() {
                return o.Message.getFieldWithDefault(this, 5, 0)
            }
            ,
            proto.DialogMessage.prototype.setDestid = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.DialogMessage.prototype.getIsout = function() {
                return o.Message.getFieldWithDefault(this, 6, !1)
            }
            ,
            proto.DialogMessage.prototype.setIsout = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.DialogMessage.prototype.getSendercategory = function() {
                return o.Message.getFieldWithDefault(this, 7, 0)
            }
            ,
            proto.DialogMessage.prototype.setSendercategory = function(e) {
                o.Message.setField(this, 7, e)
            }
            ,
            proto.DialogMessage.prototype.getMsgcategory = function() {
                return o.Message.getFieldWithDefault(this, 8, 0)
            }
            ,
            proto.DialogMessage.prototype.setMsgcategory = function(e) {
                o.Message.setField(this, 8, e)
            }
            ,
            proto.DialogMessage.prototype.getMsgprecontent = function() {
                return o.Message.getFieldWithDefault(this, 9, "")
            }
        ,
        proto.DialogMessage.prototype.setMsgprecontent = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.DialogMessage.prototype.getMsgpostcontent = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.DialogMessage.prototype.setMsgpostcontent = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.DialogMessage.prototype.getMediaflag = function() {
            return o.Message.getFieldWithDefault(this, 11, !1)
        }
        ,
        proto.DialogMessage.prototype.setMediaflag = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.DialogMessage.prototype.getMediaconstructor = function() {
            return o.Message.getFieldWithDefault(this, 12, 0)
        }
        ,
        proto.DialogMessage.prototype.setMediaconstructor = function(e) {
            o.Message.setField(this, 12, e)
        }
        ,
        proto.DialogMessage.prototype.getMediaattribute = function() {
            return o.Message.getFieldWithDefault(this, 13, "")
        }
        ,
        proto.DialogMessage.prototype.setMediaattribute = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.DialogMessage.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 14, 0)
        }
        ,
        proto.DialogMessage.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.DialogMessage.prototype.getBurnafterreadingflag = function() {
            return o.Message.getFieldWithDefault(this, 15, !1)
        }
        ,
        proto.DialogMessage.prototype.setBurnafterreadingflag = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.DialogMessage.prototype.getAtflag = function() {
            return o.Message.getFieldWithDefault(this, 16, !1)
        }
        ,
        proto.DialogMessage.prototype.setAtflag = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.DialogMessage.prototype.getReplyflag = function() {
            return o.Message.getFieldWithDefault(this, 17, !1)
        }
        ,
        proto.DialogMessage.prototype.setReplyflag = function(e) {
            o.Message.setField(this, 17, e)
        }
        ,
        proto.DialogMessage.prototype.getReferenceflag = function() {
            return o.Message.getFieldWithDefault(this, 18, !1)
        }
        ,
        proto.DialogMessage.prototype.setReferenceflag = function(e) {
            o.Message.setField(this, 18, e)
        }
        ,
        proto.DialogMessage.prototype.getMsgidreferenced = function() {
            return o.Message.getFieldWithDefault(this, 19, 0)
        }
        ,
        proto.DialogMessage.prototype.setMsgidreferenced = function(e) {
            o.Message.setField(this, 19, e)
        }
        ,
        proto.DialogMessage.prototype.getSharinggroupflag = function() {
            return o.Message.getFieldWithDefault(this, 20, !1)
        }
        ,
        proto.DialogMessage.prototype.setSharinggroupflag = function(e) {
            o.Message.setField(this, 20, e)
        }
        ,
        proto.DialogMessage.prototype.getSeqno = function() {
            return o.Message.getFieldWithDefault(this, 21, 0)
        }
        ,
        proto.DialogMessage.prototype.setSeqno = function(e) {
            o.Message.setField(this, 21, e)
        }
        ,
        proto.ReferenceDialogMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ReferenceDialogMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.ReferenceDialogMessage.displayName = "proto.ReferenceDialogMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.ReferenceDialogMessage.prototype.toObject = function(e) {
                return proto.ReferenceDialogMessage.toObject(e, this)
            }
                ,
                proto.ReferenceDialogMessage.toObject = function(e, t) {
                    var r = {
                        msgid: o.Message.getFieldWithDefault(t, 1, 0),
                        srcid: o.Message.getFieldWithDefault(t, 2, 0),
                        srcname: o.Message.getFieldWithDefault(t, 3, ""),
                        destid: o.Message.getFieldWithDefault(t, 4, 0),
                        destname: o.Message.getFieldWithDefault(t, 5, ""),
                        msgprecontent: o.Message.getFieldWithDefault(t, 6, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 7, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 8, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 9, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 10, ""),
                        msgsendtime: o.Message.getFieldWithDefault(t, 11, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ReferenceDialogMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ReferenceDialogMessage;
            return proto.ReferenceDialogMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ReferenceDialogMessage.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setMsgid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setSrcid(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSrcname(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDestid(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setDestname(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setMsgprecontent(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setMsgpostcontent(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setMediaflag(o);
                        break;
                    case 9:
                        o = t.readInt32();
                        e.setMediaconstructor(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setMediaattribute(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setMsgsendtime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ReferenceDialogMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ReferenceDialogMessage.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ReferenceDialogMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getMsgid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getSrcid(),
            0 !== r && t.writeInt64String(2, r),
                r = e.getSrcname(),
            r.length > 0 && t.writeString(3, r),
                r = e.getDestid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getDestname(),
            r.length > 0 && t.writeString(5, r),
                r = e.getMsgprecontent(),
            r.length > 0 && t.writeString(6, r),
                r = e.getMsgpostcontent(),
            r.length > 0 && t.writeString(7, r),
                r = e.getMediaflag(),
            r && t.writeBool(8, r),
                r = e.getMediaconstructor(),
            0 !== r && t.writeInt32(9, r),
                r = e.getMediaattribute(),
            r.length > 0 && t.writeString(10, r),
                r = e.getMsgsendtime(),
            0 !== r && t.writeInt64String(11, r)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ReferenceDialogMessage.prototype.setMsgid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getSrcid = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.ReferenceDialogMessage.prototype.setSrcid = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getSrcname = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ReferenceDialogMessage.prototype.setSrcname = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getDestid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.ReferenceDialogMessage.prototype.setDestid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getDestname = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.ReferenceDialogMessage.prototype.setDestname = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getMsgprecontent = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.ReferenceDialogMessage.prototype.setMsgprecontent = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getMsgpostcontent = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.ReferenceDialogMessage.prototype.setMsgpostcontent = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getMediaflag = function() {
            return o.Message.getFieldWithDefault(this, 8, !1)
        }
        ,
        proto.ReferenceDialogMessage.prototype.setMediaflag = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getMediaconstructor = function() {
            return o.Message.getFieldWithDefault(this, 9, 0)
        }
        ,
        proto.ReferenceDialogMessage.prototype.setMediaconstructor = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getMediaattribute = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.ReferenceDialogMessage.prototype.setMediaattribute = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.ReferenceDialogMessage.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 11, 0)
        }
        ,
        proto.ReferenceDialogMessage.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.WebReferenceDialogMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.WebReferenceDialogMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.WebReferenceDialogMessage.displayName = "proto.WebReferenceDialogMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.WebReferenceDialogMessage.prototype.toObject = function(e) {
                return proto.WebReferenceDialogMessage.toObject(e, this)
            }
                ,
                proto.WebReferenceDialogMessage.toObject = function(e, t) {
                    var r = {
                        msgid: o.Message.getFieldWithDefault(t, 1, ""),
                        srcid: o.Message.getFieldWithDefault(t, 2, 0),
                        srcname: o.Message.getFieldWithDefault(t, 3, ""),
                        destid: o.Message.getFieldWithDefault(t, 4, 0),
                        destname: o.Message.getFieldWithDefault(t, 5, ""),
                        msgprecontent: o.Message.getFieldWithDefault(t, 6, ""),
                        msgpostcontent: o.Message.getFieldWithDefault(t, 7, ""),
                        mediaflag: o.Message.getFieldWithDefault(t, 8, !1),
                        mediaconstructor: o.Message.getFieldWithDefault(t, 9, 0),
                        mediaattribute: o.Message.getFieldWithDefault(t, 10, ""),
                        msgsendtime: o.Message.getFieldWithDefault(t, 11, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.WebReferenceDialogMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.WebReferenceDialogMessage;
            return proto.WebReferenceDialogMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.WebReferenceDialogMessage.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setMsgid(o);
                        break;
                    case 2:
                        o = t.readInt64String();
                        e.setSrcid(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSrcname(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setDestid(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setDestname(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setMsgprecontent(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setMsgpostcontent(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setMediaflag(o);
                        break;
                    case 9:
                        o = t.readInt32();
                        e.setMediaconstructor(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setMediaattribute(o);
                        break;
                    case 11:
                        o = t.readInt64String();
                        e.setMsgsendtime(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.WebReferenceDialogMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.WebReferenceDialogMessage.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.WebReferenceDialogMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getMsgid(),
            r.length > 0 && t.writeString(1, r),
                r = e.getSrcid(),
            0 !== r && t.writeInt64String(2, r),
                r = e.getSrcname(),
            r.length > 0 && t.writeString(3, r),
                r = e.getDestid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getDestname(),
            r.length > 0 && t.writeString(5, r),
                r = e.getMsgprecontent(),
            r.length > 0 && t.writeString(6, r),
                r = e.getMsgpostcontent(),
            r.length > 0 && t.writeString(7, r),
                r = e.getMediaflag(),
            r && t.writeBool(8, r),
                r = e.getMediaconstructor(),
            0 !== r && t.writeInt32(9, r),
                r = e.getMediaattribute(),
            r.length > 0 && t.writeString(10, r),
                r = e.getMsgsendtime(),
            0 !== r && t.writeInt64String(11, r)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getMsgid = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setMsgid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getSrcid = function() {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setSrcid = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getSrcname = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setSrcname = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getDestid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setDestid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getDestname = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setDestname = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getMsgprecontent = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setMsgprecontent = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getMsgpostcontent = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setMsgpostcontent = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getMediaflag = function() {
            return o.Message.getFieldWithDefault(this, 8, !1)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setMediaflag = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getMediaconstructor = function() {
            return o.Message.getFieldWithDefault(this, 9, 0)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setMediaconstructor = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getMediaattribute = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setMediaattribute = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 11, 0)
        }
        ,
        proto.WebReferenceDialogMessage.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.BriefDialogMessage = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.BriefDialogMessage, o.Message),
        i.DEBUG && !COMPILED && (proto.BriefDialogMessage.displayName = "proto.BriefDialogMessage"),
        o.Message.GENERATE_TO_OBJECT && (proto.BriefDialogMessage.prototype.toObject = function(e) {
                return proto.BriefDialogMessage.toObject(e, this)
            }
                ,
                proto.BriefDialogMessage.toObject = function(e, t) {
                    var r = {
                        srcid: o.Message.getFieldWithDefault(t, 1, 0),
                        srcname: o.Message.getFieldWithDefault(t, 2, ""),
                        groupflag: o.Message.getFieldWithDefault(t, 3, !1),
                        groupid: o.Message.getFieldWithDefault(t, 4, 0),
                        grouptitle: o.Message.getFieldWithDefault(t, 5, ""),
                        msgsendtime: o.Message.getFieldWithDefault(t, 6, 0),
                        atflag: o.Message.getFieldWithDefault(t, 7, !1)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.BriefDialogMessage.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.BriefDialogMessage;
            return proto.BriefDialogMessage.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.BriefDialogMessage.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setSrcid(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setSrcname(o);
                        break;
                    case 3:
                        o = t.readBool();
                        e.setGroupflag(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setGroupid(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setGrouptitle(o);
                        break;
                    case 6:
                        o = t.readInt64String();
                        e.setMsgsendtime(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setAtflag(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.BriefDialogMessage.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.BriefDialogMessage.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.BriefDialogMessage.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getSrcid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getSrcname(),
            r.length > 0 && t.writeString(2, r),
                r = e.getGroupflag(),
            r && t.writeBool(3, r),
                r = e.getGroupid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getGrouptitle(),
            r.length > 0 && t.writeString(5, r),
                r = e.getMsgsendtime(),
            0 !== r && t.writeInt64String(6, r),
                r = e.getAtflag(),
            r && t.writeBool(7, r)
        }
        ,
        proto.BriefDialogMessage.prototype.getSrcid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.BriefDialogMessage.prototype.setSrcid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.BriefDialogMessage.prototype.getSrcname = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.BriefDialogMessage.prototype.setSrcname = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.BriefDialogMessage.prototype.getGroupflag = function() {
            return o.Message.getFieldWithDefault(this, 3, !1)
        }
        ,
        proto.BriefDialogMessage.prototype.setGroupflag = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.BriefDialogMessage.prototype.getGroupid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.BriefDialogMessage.prototype.setGroupid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.BriefDialogMessage.prototype.getGrouptitle = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.BriefDialogMessage.prototype.setGrouptitle = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.BriefDialogMessage.prototype.getMsgsendtime = function() {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }
        ,
        proto.BriefDialogMessage.prototype.setMsgsendtime = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.BriefDialogMessage.prototype.getAtflag = function() {
            return o.Message.getFieldWithDefault(this, 7, !1)
        }
        ,
        proto.BriefDialogMessage.prototype.setAtflag = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.FullDialog = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.FullDialog.repeatedFields_, null)
        }
        ,
        i.inherits(proto.FullDialog, o.Message),
        i.DEBUG && !COMPILED && (proto.FullDialog.displayName = "proto.FullDialog"),
        proto.FullDialog.repeatedFields_ = [12],
        o.Message.GENERATE_TO_OBJECT && (proto.FullDialog.prototype.toObject = function(e) {
                return proto.FullDialog.toObject(e, this)
            }
                ,
                proto.FullDialog.toObject = function(e, t) {
                    var r = {
                        destid: o.Message.getFieldWithDefault(t, 1, 0),
                        dialogtitle: o.Message.getFieldWithDefault(t, 2, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 3, ""),
                        backgroundimage: o.Message.getFieldWithDefault(t, 4, ""),
                        stickyflag: o.Message.getFieldWithDefault(t, 5, !1),
                        muteflag: o.Message.getFieldWithDefault(t, 6, !1),
                        blockflag: o.Message.getFieldWithDefault(t, 7, !1),
                        burnafterreadingflag: o.Message.getFieldWithDefault(t, 8, !1),
                        takescreenshotflag: o.Message.getFieldWithDefault(t, 9, !1),
                        groupflag: o.Message.getFieldWithDefault(t, 10, !1),
                        totalmembernumber: o.Message.getFieldWithDefault(t, 11, 0),
                        groupmembersmallavatarurlList: o.Message.getField(t, 12),
                        groupprivilegeflag: o.Message.getFieldWithDefault(t, 13, !1),
                        interesttribetypesmallavatarurl: o.Message.getFieldWithDefault(t, 14, ""),
                        interesttribetypevipsmallavatarurl: o.Message.getFieldWithDefault(t, 15, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.FullDialog.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.FullDialog;
            return proto.FullDialog.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.FullDialog.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setDestid(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setDialogtitle(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setBackgroundimage(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setStickyflag(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setMuteflag(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setBlockflag(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setBurnafterreadingflag(o);
                        break;
                    case 9:
                        o = t.readBool();
                        e.setTakescreenshotflag(o);
                        break;
                    case 10:
                        o = t.readBool();
                        e.setGroupflag(o);
                        break;
                    case 11:
                        o = t.readInt32();
                        e.setTotalmembernumber(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.addGroupmembersmallavatarurl(o);
                        break;
                    case 13:
                        o = t.readBool();
                        e.setGroupprivilegeflag(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setInteresttribetypesmallavatarurl(o);
                        break;
                    case 15:
                        o = t.readString();
                        e.setInteresttribetypevipsmallavatarurl(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.FullDialog.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.FullDialog.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.FullDialog.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getDestid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getDialogtitle(),
            r.length > 0 && t.writeString(2, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(3, r),
                r = e.getBackgroundimage(),
            r.length > 0 && t.writeString(4, r),
                r = e.getStickyflag(),
            r && t.writeBool(5, r),
                r = e.getMuteflag(),
            r && t.writeBool(6, r),
                r = e.getBlockflag(),
            r && t.writeBool(7, r),
                r = e.getBurnafterreadingflag(),
            r && t.writeBool(8, r),
                r = e.getTakescreenshotflag(),
            r && t.writeBool(9, r),
                r = e.getGroupflag(),
            r && t.writeBool(10, r),
                r = e.getTotalmembernumber(),
            0 !== r && t.writeInt32(11, r),
                r = e.getGroupmembersmallavatarurlList(),
            r.length > 0 && t.writeRepeatedString(12, r),
                r = e.getGroupprivilegeflag(),
            r && t.writeBool(13, r),
                r = e.getInteresttribetypesmallavatarurl(),
            r.length > 0 && t.writeString(14, r),
                r = e.getInteresttribetypevipsmallavatarurl(),
            r.length > 0 && t.writeString(15, r)
        }
        ,
        proto.FullDialog.prototype.getDestid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.FullDialog.prototype.setDestid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.FullDialog.prototype.getDialogtitle = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.FullDialog.prototype.setDialogtitle = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.FullDialog.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.FullDialog.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.FullDialog.prototype.getBackgroundimage = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.FullDialog.prototype.setBackgroundimage = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.FullDialog.prototype.getStickyflag = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.FullDialog.prototype.setStickyflag = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.FullDialog.prototype.getMuteflag = function() {
            return o.Message.getFieldWithDefault(this, 6, !1)
        }
        ,
        proto.FullDialog.prototype.setMuteflag = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.FullDialog.prototype.getBlockflag = function() {
            return o.Message.getFieldWithDefault(this, 7, !1)
        }
        ,
        proto.FullDialog.prototype.setBlockflag = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.FullDialog.prototype.getBurnafterreadingflag = function() {
            return o.Message.getFieldWithDefault(this, 8, !1)
        }
        ,
        proto.FullDialog.prototype.setBurnafterreadingflag = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.FullDialog.prototype.getTakescreenshotflag = function() {
            return o.Message.getFieldWithDefault(this, 9, !1)
        }
        ,
        proto.FullDialog.prototype.setTakescreenshotflag = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.FullDialog.prototype.getGroupflag = function() {
            return o.Message.getFieldWithDefault(this, 10, !1)
        }
        ,
        proto.FullDialog.prototype.setGroupflag = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.FullDialog.prototype.getTotalmembernumber = function() {
            return o.Message.getFieldWithDefault(this, 11, 0)
        }
        ,
        proto.FullDialog.prototype.setTotalmembernumber = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.FullDialog.prototype.getGroupmembersmallavatarurlList = function() {
            return o.Message.getField(this, 12)
        }
        ,
        proto.FullDialog.prototype.setGroupmembersmallavatarurlList = function(e) {
            o.Message.setField(this, 12, e || [])
        }
        ,
        proto.FullDialog.prototype.addGroupmembersmallavatarurl = function(e, t) {
            o.Message.addToRepeatedField(this, 12, e, t)
        }
        ,
        proto.FullDialog.prototype.clearGroupmembersmallavatarurlList = function() {
            this.setGroupmembersmallavatarurlList([])
        }
        ,
        proto.FullDialog.prototype.getGroupprivilegeflag = function() {
            return o.Message.getFieldWithDefault(this, 13, !1)
        }
        ,
        proto.FullDialog.prototype.setGroupprivilegeflag = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.FullDialog.prototype.getInteresttribetypesmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 14, "")
        }
        ,
        proto.FullDialog.prototype.setInteresttribetypesmallavatarurl = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.FullDialog.prototype.getInteresttribetypevipsmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 15, "")
        }
        ,
        proto.FullDialog.prototype.setInteresttribetypevipsmallavatarurl = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.BriefDialog = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.BriefDialog.repeatedFields_, null)
        }
        ,
        i.inherits(proto.BriefDialog, o.Message),
        i.DEBUG && !COMPILED && (proto.BriefDialog.displayName = "proto.BriefDialog"),
        proto.BriefDialog.repeatedFields_ = [12],
        o.Message.GENERATE_TO_OBJECT && (proto.BriefDialog.prototype.toObject = function(e) {
                return proto.BriefDialog.toObject(e, this)
            }
                ,
                proto.BriefDialog.toObject = function(e, t) {
                    var r = {
                        destid: o.Message.getFieldWithDefault(t, 1, 0),
                        dialogtitle: o.Message.getFieldWithDefault(t, 2, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 3, ""),
                        backgroundimage: o.Message.getFieldWithDefault(t, 4, ""),
                        stickyflag: o.Message.getFieldWithDefault(t, 5, !1),
                        muteflag: o.Message.getFieldWithDefault(t, 6, !1),
                        blockflag: o.Message.getFieldWithDefault(t, 7, !1),
                        burnafterreadingflag: o.Message.getFieldWithDefault(t, 8, !1),
                        takescreenshotflag: o.Message.getFieldWithDefault(t, 9, !1),
                        groupflag: o.Message.getFieldWithDefault(t, 10, !1),
                        totalmembernumber: o.Message.getFieldWithDefault(t, 11, 0),
                        groupmembersmallavatarurlList: o.Message.getField(t, 12),
                        groupprivilegeflag: o.Message.getFieldWithDefault(t, 13, !1),
                        interesttribetypesmallavatarurl: o.Message.getFieldWithDefault(t, 14, ""),
                        interesttribetypevipsmallavatarurl: o.Message.getFieldWithDefault(t, 15, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.BriefDialog.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.BriefDialog;
            return proto.BriefDialog.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.BriefDialog.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setDestid(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setDialogtitle(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setBackgroundimage(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setStickyflag(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setMuteflag(o);
                        break;
                    case 7:
                        o = t.readBool();
                        e.setBlockflag(o);
                        break;
                    case 8:
                        o = t.readBool();
                        e.setBurnafterreadingflag(o);
                        break;
                    case 9:
                        o = t.readBool();
                        e.setTakescreenshotflag(o);
                        break;
                    case 10:
                        o = t.readBool();
                        e.setGroupflag(o);
                        break;
                    case 11:
                        o = t.readInt32();
                        e.setTotalmembernumber(o);
                        break;
                    case 12:
                        o = t.readString();
                        e.addGroupmembersmallavatarurl(o);
                        break;
                    case 13:
                        o = t.readBool();
                        e.setGroupprivilegeflag(o);
                        break;
                    case 14:
                        o = t.readString();
                        e.setInteresttribetypesmallavatarurl(o);
                        break;
                    case 15:
                        o = t.readString();
                        e.setInteresttribetypevipsmallavatarurl(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.BriefDialog.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.BriefDialog.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.BriefDialog.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getDestid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getDialogtitle(),
            r.length > 0 && t.writeString(2, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(3, r),
                r = e.getBackgroundimage(),
            r.length > 0 && t.writeString(4, r),
                r = e.getStickyflag(),
            r && t.writeBool(5, r),
                r = e.getMuteflag(),
            r && t.writeBool(6, r),
                r = e.getBlockflag(),
            r && t.writeBool(7, r),
                r = e.getBurnafterreadingflag(),
            r && t.writeBool(8, r),
                r = e.getTakescreenshotflag(),
            r && t.writeBool(9, r),
                r = e.getGroupflag(),
            r && t.writeBool(10, r),
                r = e.getTotalmembernumber(),
            0 !== r && t.writeInt32(11, r),
                r = e.getGroupmembersmallavatarurlList(),
            r.length > 0 && t.writeRepeatedString(12, r),
                r = e.getGroupprivilegeflag(),
            r && t.writeBool(13, r),
                r = e.getInteresttribetypesmallavatarurl(),
            r.length > 0 && t.writeString(14, r),
                r = e.getInteresttribetypevipsmallavatarurl(),
            r.length > 0 && t.writeString(15, r)
        }
        ,
        proto.BriefDialog.prototype.getDestid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.BriefDialog.prototype.setDestid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.BriefDialog.prototype.getDialogtitle = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.BriefDialog.prototype.setDialogtitle = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.BriefDialog.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.BriefDialog.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.BriefDialog.prototype.getBackgroundimage = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.BriefDialog.prototype.setBackgroundimage = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.BriefDialog.prototype.getStickyflag = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.BriefDialog.prototype.setStickyflag = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.BriefDialog.prototype.getMuteflag = function() {
            return o.Message.getFieldWithDefault(this, 6, !1)
        }
        ,
        proto.BriefDialog.prototype.setMuteflag = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.BriefDialog.prototype.getBlockflag = function() {
            return o.Message.getFieldWithDefault(this, 7, !1)
        }
        ,
        proto.BriefDialog.prototype.setBlockflag = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.BriefDialog.prototype.getBurnafterreadingflag = function() {
            return o.Message.getFieldWithDefault(this, 8, !1)
        }
        ,
        proto.BriefDialog.prototype.setBurnafterreadingflag = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.BriefDialog.prototype.getTakescreenshotflag = function() {
            return o.Message.getFieldWithDefault(this, 9, !1)
        }
        ,
        proto.BriefDialog.prototype.setTakescreenshotflag = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.BriefDialog.prototype.getGroupflag = function() {
            return o.Message.getFieldWithDefault(this, 10, !1)
        }
        ,
        proto.BriefDialog.prototype.setGroupflag = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.BriefDialog.prototype.getTotalmembernumber = function() {
            return o.Message.getFieldWithDefault(this, 11, 0)
        }
        ,
        proto.BriefDialog.prototype.setTotalmembernumber = function(e) {
            o.Message.setField(this, 11, e)
        }
        ,
        proto.BriefDialog.prototype.getGroupmembersmallavatarurlList = function() {
            return o.Message.getField(this, 12)
        }
        ,
        proto.BriefDialog.prototype.setGroupmembersmallavatarurlList = function(e) {
            o.Message.setField(this, 12, e || [])
        }
        ,
        proto.BriefDialog.prototype.addGroupmembersmallavatarurl = function(e, t) {
            o.Message.addToRepeatedField(this, 12, e, t)
        }
        ,
        proto.BriefDialog.prototype.clearGroupmembersmallavatarurlList = function() {
            this.setGroupmembersmallavatarurlList([])
        }
        ,
        proto.BriefDialog.prototype.getGroupprivilegeflag = function() {
            return o.Message.getFieldWithDefault(this, 13, !1)
        }
        ,
        proto.BriefDialog.prototype.setGroupprivilegeflag = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.BriefDialog.prototype.getInteresttribetypesmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 14, "")
        }
        ,
        proto.BriefDialog.prototype.setInteresttribetypesmallavatarurl = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.BriefDialog.prototype.getInteresttribetypevipsmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 15, "")
        }
        ,
        proto.BriefDialog.prototype.setInteresttribetypevipsmallavatarurl = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        i.object.extend(t, proto)
    },
    9112: function(e, t, r) {},
    "94d5": function(e, t, r) {},
    b5c3: function(e, t, r) {},
    b893: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return o
        }),
            r.d(t, "c", function() {
                return i
            }),
            r.d(t, "b", function() {
                return s
            }),
            r.d(t, "e", function() {
                return a
            }),
            r.d(t, "d", function() {
                return n
            });
        r("3b2b"),
            r("a481"),
            r("55dd"),
            r("ac6a"),
            r("7618"),
            r("7f7f"),
            r("6b54"),
            r("28a5"),
            r("4917");
        function o(e, t) {
            var r, i = Object.prototype.toString;
            for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (r = t[s],
                    "[object Object]" === i.call(r) ? (e[s] && "[object Object]" === i.call(e[s]) || (e[s] = {}),
                        o(e[s], r)) : "[object Array]" === i.call(r) ? (e[s] && "[object Array]" === i.call(e[s]) || (e[s] = []),
                        o(e[s], r)) : e[s] = r);
            return e
        }
        function i(e) {
            e = e || 32;
            for (var t = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890_", r = t.length - 1, o = "".concat(+new Date, "_"), i = 0; i < e; i += 1)
                o += t.charAt(Math.floor(Math.random() * r));
            return o
        }
        function s(e, t) {
            if (e && t)
                for (var r = e.currentTarget, o = e.target, i = r.querySelectorAll(t), s = i.length, a = 0; a < s; a += 1) {
                    var n = i[a];
                    if (o === n || 16 & n.compareDocumentPosition(o))
                        return n
                }
        }
        function a(e) {
            if (e) {
                var t = document.createElement("textarea");
                t.style.position = "absolute",
                    t.style.border = "0",
                    t.style.padding = "0",
                    t.style.margin = "0",
                    t.style.top = "0px",
                    t.style.right = "0px",
                    t.style.bottom = "0px",
                    t.style.left = "0px",
                    t.value = e,
                    document.body.appendChild(t),
                    t.select(),
                    t.setSelectionRange(0, t.value.length),
                    document.execCommand("copy"),
                    document.body.removeChild(t)
            }
        }
        function n(e, t) {
            return e && 0 !== e.length ? (e = e.sort(function(e, t) {
                return e.length > t.length ? -1 : 1
            }),
                e.forEach(function(e) {
                    t = t.replace(new RegExp(e,"gi"), "*********************".slice(0, e.length))
                }),
                t) : t
        }
    },
    cb5d: function(e, t, r) {
        "use strict";
        var o = r("4360")
            , i = (r("a032"),
            r("f499"))
            , s = r.n(i)
            , a = (r("20d6"),
            r("a4bb"))
            , n = r.n(a)
            , p = r("061b")
            , l = r.n(p)
            , g = r("4d16")
            , u = r.n(g)
            , d = r("4aa6")
            , c = r.n(d)
            , f = r("85f2")
            , h = r.n(f)
            , R = r("5d58")
            , M = r.n(R)
            , y = r("7618")
            , D = r("67bb")
            , F = r.n(D);
        function b(e) {
            return b = "function" === typeof F.a && "symbol" === Object(y["a"])(M.a) ? function(e) {
                return Object(y["a"])(e)
            }
                : function(e) {
                return e && "function" === typeof F.a && e.constructor === F.a && e !== F.a.prototype ? "symbol" : Object(y["a"])(e)
            }
                ,
                b(e)
        }
        function m(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function G(e, t) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                "value"in o && (o.writable = !0),
                    h()(e, o.key, o)
            }
        }
        function C(e, t, r) {
            return t && G(e.prototype, t),
            r && G(e, r),
                e
        }
        function w(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = c()(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && v(e, t)
        }
        function S(e) {
            return S = u.a ? l.a : function(e) {
                return e.__proto__ || l()(e)
            }
                ,
                S(e)
        }
        function v(e, t) {
            return v = u.a || function(e, t) {
                    return e.__proto__ = t,
                        e
                }
                ,
                v(e, t)
        }
        function W(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function B(e, t) {
            return !t || "object" !== Object(y["a"])(t) && "function" !== typeof t ? W(e) : t
        }
        function E() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function() {
                var e, r = 0, o = t.length;
                o > 0 && "object" === b(t[0]) && (e = t[0],
                    r = 1);
                for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                    s[a] = arguments[a];
                for (; r < o; r++)
                    t[r] && t[r].apply(e, s)
            }
        }
        function I(e, t) {
            if (!e || !e.length)
                return !1;
            for (var r = 0; r < e.length; r++)
                if (e[r] === t)
                    return !0;
            return !1
        }
        function k() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e || !t)
                return e === t;
            var r = n()(e)
                , o = n()(t);
            return r.length === o.length && r.every(function(r) {
                    var o = e[r]
                        , i = t[r];
                    return "object" === b(o) && "object" === b(i) ? k(o, i) : String(o) === String(i)
                })
        }
        var O = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , r = t.submit;
                m(this, e),
                    this.submit = r
            }
            return C(e, [{
                key: "addReport",
                value: function() {}
            }]),
                e
        }()
            , T = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            m(this, e),
                "object" === b(t) ? (this.lineno = t.lineNumber || t.lineno,
                    this.colno = t.columnNumber || t.colno,
                    this.message = t.message,
                    this.fileName = t.fileName || t.filename,
                    this.stack = t.stack || t.error && t.error.stack) : "string" === typeof t && (this.message = t)
        };
        function q(e, t) {
            return k(e, t)
        }
        var L = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , r = t.timeLimit
                    , o = void 0 === r ? 1e4 : r;
                m(this, e),
                    this.timeLimit = o,
                    this.__queue = []
            }
            return C(e, [{
                key: "isDuplicate",
                value: function(e) {
                    var t = this;
                    if (!e)
                        return !1;
                    var r = new T(e)
                        , o = (this.__queue.length,
                        -1);
                    function i(e) {
                        o < 0 && (o = e)
                    }
                    var s = this.__queue.findIndex(function(r, o) {
                        return r ? t.__isTimeout(r) ? (t.__queue[o] = null,
                            i(o),
                            !1) : !!q(r.eei, e) && (r.t = +new Date,
                            !0) : (i(o),
                            !1)
                    });
                    return s < 0 && (o > -1 ? this.__queue[o] = {
                        eei: r,
                        t: +new Date
                    } : this.__queue.push({
                        eei: r,
                        t: +new Date
                    })),
                    s > -1
                }
            }, {
                key: "__isTimeout",
                value: function(e) {
                    return new Date - e.t > this.timeLimit
                }
            }]),
                e
        }()
            , P = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , r = t.reporter
                    , o = t.beforeReport;
                m(this, e),
                    this.reporter = r,
                    this.beforeReport = o,
                    this.__duplicate = new L
            }
            return C(e, [{
                key: "__report",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (t.from = this,
                        this.reporter && !this.__duplicate.isDuplicate(e))
                        try {
                            this.beforeReport && this.beforeReport(e, t),
                                "function" === typeof this.reporter ? this.reporter(e, t) : this.reporter instanceof O && this.reporter.addReport(e, t)
                        } catch (r) {}
                }
            }, {
                key: "createErrorInfo",
                value: function(e) {
                    return new T(e)
                }
            }]),
                e
        }()
            , N = function(e) {
            function t() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return m(this, t),
                    e = B(this, S(t).call(this, r)),
                    e.level = r.level,
                    e
            }
            return w(t, e),
                C(t, [{
                    key: "log",
                    value: function(e) {
                        var r = t.LEVEL_LOG;
                        this.level <= r && this.__report(this.createErrorInfo(e), {
                            level: r
                        })
                    }
                }, {
                    key: "info",
                    value: function(e) {
                        var r = t.LEVEL_INFO;
                        this.level <= r && this.__report(this.createErrorInfo(e), {
                            level: r
                        })
                    }
                }, {
                    key: "warn",
                    value: function(e) {
                        var r = t.LEVEL_WARN;
                        this.level <= r && this.__report(this.createErrorInfo(e), {
                            level: r
                        })
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        var r = t.LEVEL_ERROR;
                        this.level <= r && this.__report(this.createErrorInfo(e), {
                            level: r
                        })
                    }
                }], [{
                    key: "LEVEL_LOG",
                    get: function() {
                        return 1
                    }
                }, {
                    key: "LEVEL_INFO",
                    get: function() {
                        return 2
                    }
                }, {
                    key: "LEVEL_WARN",
                    get: function() {
                        return 3
                    }
                }, {
                    key: "LEVEL_ERROR",
                    get: function() {
                        return 4
                    }
                }]),
                t
        }(P)
            , A = window
            , z = function(e) {
            function t(e) {
                var r;
                return m(this, t),
                    r = B(this, S(t).call(this, e)),
                    r.__addHandler(),
                    r
            }
            return w(t, e),
                C(t, [{
                    key: "__addHandler",
                    value: function() {
                        var e = this
                            , t = function() {
                            e.__report({
                                timing: A.performance.timing,
                                effectiveType: A.navigator.connection && A.navigator.connection.effectiveType,
                                rtt: A.navigator.connection && A.navigator.connection.rtt
                            })
                        };
                        "complete" === document.readyState ? t() : A.addEventListener("load", t)
                    }
                }]),
                t
        }(P)
            , j = window
            , U = function(e) {
            function t() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return m(this, t),
                    e = B(this, S(t).call(this, r)),
                    e.collect = r.collect || ["runtime", "resource", "rejection"],
                    e.__addHandler(),
                    e
            }
            return w(t, e),
                C(t, [{
                    key: "__addHandler",
                    value: function() {
                        var e = this;
                        I(this.collect, "runtime") && (j.onerror = E(function(t, r, o, i, s) {
                            e.__report(e.createErrorInfo({
                                message: t,
                                filename: r,
                                lineNumber: o,
                                columnNumber: i,
                                error: s
                            }), {
                                source: "error"
                            })
                        }, j.onerror && j.onerror.bind(j))),
                        I(this.collect, "resource") && j.addEventListener("error", function(t) {
                            var r = t.srcElement;
                            if (V(r)) {
                                var o = _(r);
                                e.__report(e.createErrorInfo({
                                    message: "source error [".concat(o.url, "] ")
                                }), {
                                    source: "error:source"
                                })
                            }
                        }, !0),
                        I(this.collect, "rejection") && j.addEventListener("unhandledrejection", function(t) {
                            e.__report(e.createErrorInfo(t.reason), {
                                source: "unhandledrejection"
                            })
                        })
                    }
                }]),
                t
        }(P);
        function V(e) {
            return e instanceof HTMLScriptElement || e instanceof HTMLLinkElement
        }
        function _(e) {
            var t = {};
            return e instanceof HTMLScriptElement ? t.url = e.src : e instanceof HTMLLinkElement && (t.url = e.href),
                t
        }
        var x = "File"in window
            , H = function(e) {
            function t() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = r.submit, i = r.maxSize, s = void 0 === i ? 5120 : i, a = r.fileName, n = void 0 === a ? "log" : a;
                return m(this, t),
                    e = B(this, S(t).call(this, {
                        submit: o
                    })),
                    e.fileName = n,
                    e.maxSize = s,
                    e.__currentSize = 0,
                    e.__fileText = "",
                    e
            }
            return w(t, e),
                C(t, [{
                    key: "addReport",
                    value: function(e, t) {
                        var r = "";
                        if (e && x) {
                            if (t.from instanceof N)
                                switch (t.level) {
                                    case N.LEVEL_LOG:
                                        r = "[LOG] ";
                                        break;
                                    case N.LEVEL_INFO:
                                        r = "[LOG] ";
                                        break;
                                    case N.LEVEL_WARN:
                                        r = "[WARN] ";
                                        break;
                                    case N.LEVEL_ERROR:
                                        r = "[ERROR] ";
                                        break
                                }
                            else
                                r = t.from instanceof z ? "[PERFORMANCE] " : t.from instanceof U ? "[ERROR] " : "[UNKNOWN] ";
                            return this.addText(r + s()(e) + "\n"),
                                this
                        }
                    }
                }, {
                    key: "computeSize",
                    value: function(e) {
                        for (var t = 0, r = e.length, o = 0; o < r; o++) {
                            var i = e.codePointAt(o);
                            i <= 127 ? t += 1 : i <= 2047 ? t += 2 : i <= 65535 ? t += 3 : i <= 1114111 && (t += 4)
                        }
                        return t
                    }
                }, {
                    key: "addText",
                    value: function(e) {
                        var t = this.computeSize(e);
                        return this.__currentSize + t > this.maxSize && this.__submit(),
                            this.__fileText += e,
                            this.__currentSize += this.computeSize(e),
                            this
                    }
                }, {
                    key: "clearText",
                    value: function() {
                        return this.__fileText = "",
                            this.__currentSize = 0,
                            this
                    }
                }, {
                    key: "forceSubmit",
                    value: function() {
                        return this.__fileText && this.submit && this.submit(this.__generateFile()),
                            this
                    }
                }, {
                    key: "__submit",
                    value: function() {
                        this.submit && this.submit(this.__generateFile()),
                            this.clearText()
                    }
                }, {
                    key: "__generateFile",
                    value: function(e) {
                        var t = "function" === typeof this.fileName ? this.fileName() : "string" === typeof this.fileName ? this.fileName : "log.".concat(+new Date);
                        return new File([e || this.__fileText],"".concat(t, ".txt"),{
                            type: "text/plain"
                        })
                    }
                }, {
                    key: "currentSize",
                    get: function() {
                        return this.__currentSize
                    }
                }, {
                    key: "currentFileText",
                    get: function() {
                        return this.__fileText
                    }
                }]),
                t
        }(O)
            , Q = "0.0.1";
        function K() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.globalErrorCollector = new U(e.globalError),
                this.logCollector = new N(e.log),
                this.performanceCollector = new z(e.performance)
        }
        K.version = Q,
            K.Reporter = O,
            K.FileReporter = H,
            K.Collector = P,
            K.GlobalErrorCollector = U,
            K.LogCollector = N,
            K.PerformanceCollector = z;
        var $ = K
            , J = r("b893");
        r.d(t, "b", function() {
            return X
        }),
            r.d(t, "c", function() {
                return Z
            }),
            r.d(t, "a", function() {
                return ee
            });
        var X = new $.FileReporter({
            maxSize: 5120,
            fileName: function() {
                var e = o["a"].state.userInfo.user ? o["a"].state.userInfo.user.uid : null
                    , t = Object(J["c"])(6);
                return "log-".concat(e || "", ".").concat(t)
            }
        })
            , Y = $.LogCollector
            , Z = new $({
            globalError: {
                reporter: X
            },
            log: {
                reporter: X,
                level: Y.LEVEL_LOG,
                beforeReport: function(e, t) {
                    t.level
                }
            },
            performance: {
                reporter: X
            }
        })
            , ee = Z.logCollector
    },
    cd92: function(e, t, r) {
        "use strict";
        var o = r("f499")
            , i = r.n(o)
            , s = "xlappUser";
        function a() {
            return sessionStorage.getItem(s)
        }
        function n(e) {
            return sessionStorage.removeItem(s),
                sessionStorage.setItem(s, i()(e))
        }
        function p() {
            return sessionStorage.removeItem(s)
        }
        t["a"] = {
            getItem: a,
            setItem: n,
            removeItem: p
        }
    },
    d1d0: function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")()
            , a = r("8d32");
        i.exportSymbol("proto.AuthSignIn2Req", null, s),
            i.exportSymbol("proto.AuthSignIn2Resp", null, s),
            i.exportSymbol("proto.CheckForNewVersionReq", null, s),
            i.exportSymbol("proto.CheckForNewVersionResp", null, s),
            i.exportSymbol("proto.GetCountryListReq", null, s),
            i.exportSymbol("proto.GetCountryListResp", null, s),
            i.exportSymbol("proto.GetCountryListResp.Country", null, s),
            i.exportSymbol("proto.GetRecoverPasswordVerificationInfoReq", null, s),
            i.exportSymbol("proto.GetRecoverPasswordVerificationInfoResp", null, s),
            i.exportSymbol("proto.GetRecoverPasswordVerificationInfoResp.Helper", null, s),
            i.exportSymbol("proto.GetVerificationCodeToRecoverPasswordReq", null, s),
            i.exportSymbol("proto.GetVerificationCodeToRecoverPasswordResp", null, s),
            i.exportSymbol("proto.LoginBySmsCode2Req", null, s),
            i.exportSymbol("proto.LoginBySmsCode2Resp", null, s),
            i.exportSymbol("proto.OverwritePasswdByTokenWithSignOutStatusReq", null, s),
            i.exportSymbol("proto.OverwritePasswdByTokenWithSignOutStatusResp", null, s),
            i.exportSymbol("proto.OverwritePasswordAfterValidationReq", null, s),
            i.exportSymbol("proto.OverwritePasswordAfterValidationResp", null, s),
            i.exportSymbol("proto.RecoverPasswordReq", null, s),
            i.exportSymbol("proto.RecoverPasswordResp", null, s),
            i.exportSymbol("proto.SendAppLogWithSignOutStatusReq", null, s),
            i.exportSymbol("proto.SendAppLogWithSignOutStatusResp", null, s),
            i.exportSymbol("proto.SendCodeWithSignOutStatusReq", null, s),
            i.exportSymbol("proto.SendCodeWithSignOutStatusResp", null, s),
            i.exportSymbol("proto.ValidateBankCardInfoWithForgetPasswordReq", null, s),
            i.exportSymbol("proto.ValidateBankCardInfoWithForgetPasswordResp", null, s),
            i.exportSymbol("proto.ValidateMobileWithForgetPasswordReq", null, s),
            i.exportSymbol("proto.ValidateMobileWithForgetPasswordResp", null, s),
            i.exportSymbol("proto.ValidatePasscodeWithSignOutStatusReq", null, s),
            i.exportSymbol("proto.ValidatePasscodeWithSignOutStatusResp", null, s),
            proto.CheckForNewVersionReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.CheckForNewVersionReq, o.Message),
        i.DEBUG && !COMPILED && (proto.CheckForNewVersionReq.displayName = "proto.CheckForNewVersionReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.CheckForNewVersionReq.prototype.toObject = function(e) {
                return proto.CheckForNewVersionReq.toObject(e, this)
            }
                ,
                proto.CheckForNewVersionReq.toObject = function(e, t) {
                    var r = {
                        operatingsystem: o.Message.getFieldWithDefault(t, 1, 0),
                        versioncode: o.Message.getFieldWithDefault(t, 2, 0),
                        versionname: o.Message.getFieldWithDefault(t, 3, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.CheckForNewVersionReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.CheckForNewVersionReq;
                return proto.CheckForNewVersionReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.CheckForNewVersionReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setOperatingsystem(o);
                            break;
                        case 2:
                            o = t.readInt32();
                            e.setVersioncode(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setVersionname(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.CheckForNewVersionReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.CheckForNewVersionReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.CheckForNewVersionReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getOperatingsystem(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getVersioncode(),
                0 !== r && t.writeInt32(2, r),
                    r = e.getVersionname(),
                r.length > 0 && t.writeString(3, r)
            }
            ,
            proto.CheckForNewVersionReq.prototype.getOperatingsystem = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.CheckForNewVersionReq.prototype.setOperatingsystem = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.CheckForNewVersionReq.prototype.getVersioncode = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.CheckForNewVersionReq.prototype.setVersioncode = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.CheckForNewVersionReq.prototype.getVersionname = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.CheckForNewVersionReq.prototype.setVersionname = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.CheckForNewVersionResp = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.CheckForNewVersionResp.repeatedFields_, null)
            }
            ,
            i.inherits(proto.CheckForNewVersionResp, o.Message),
        i.DEBUG && !COMPILED && (proto.CheckForNewVersionResp.displayName = "proto.CheckForNewVersionResp"),
            proto.CheckForNewVersionResp.repeatedFields_ = [10],
        o.Message.GENERATE_TO_OBJECT && (proto.CheckForNewVersionResp.prototype.toObject = function(e) {
                return proto.CheckForNewVersionResp.toObject(e, this)
            }
                ,
                proto.CheckForNewVersionResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        hasnewversion: o.Message.getFieldWithDefault(t, 3, !1),
                        updatetype: o.Message.getFieldWithDefault(t, 4, 0),
                        newversionurl: o.Message.getFieldWithDefault(t, 5, ""),
                        newversioncode: o.Message.getFieldWithDefault(t, 6, 0),
                        newversionname: o.Message.getFieldWithDefault(t, 7, ""),
                        newversionfilesize: o.Message.getFieldWithDefault(t, 8, 0),
                        newversionfilemd5: o.Message.getFieldWithDefault(t, 9, ""),
                        newversionfeatureList: o.Message.getField(t, 10)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.CheckForNewVersionResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.CheckForNewVersionResp;
                return proto.CheckForNewVersionResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.CheckForNewVersionResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readBool();
                            e.setHasnewversion(o);
                            break;
                        case 4:
                            o = t.readInt32();
                            e.setUpdatetype(o);
                            break;
                        case 5:
                            o = t.readString();
                            e.setNewversionurl(o);
                            break;
                        case 6:
                            o = t.readInt32();
                            e.setNewversioncode(o);
                            break;
                        case 7:
                            o = t.readString();
                            e.setNewversionname(o);
                            break;
                        case 8:
                            o = t.readInt32();
                            e.setNewversionfilesize(o);
                            break;
                        case 9:
                            o = t.readString();
                            e.setNewversionfilemd5(o);
                            break;
                        case 10:
                            o = t.readString();
                            e.addNewversionfeature(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.CheckForNewVersionResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.CheckForNewVersionResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.CheckForNewVersionResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getHasnewversion(),
                r && t.writeBool(3, r),
                    r = e.getUpdatetype(),
                0 !== r && t.writeInt32(4, r),
                    r = e.getNewversionurl(),
                r.length > 0 && t.writeString(5, r),
                    r = e.getNewversioncode(),
                0 !== r && t.writeInt32(6, r),
                    r = e.getNewversionname(),
                r.length > 0 && t.writeString(7, r),
                    r = e.getNewversionfilesize(),
                0 !== r && t.writeInt32(8, r),
                    r = e.getNewversionfilemd5(),
                r.length > 0 && t.writeString(9, r),
                    r = e.getNewversionfeatureList(),
                r.length > 0 && t.writeRepeatedString(10, r)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.CheckForNewVersionResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.CheckForNewVersionResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getHasnewversion = function() {
                return o.Message.getFieldWithDefault(this, 3, !1)
            }
            ,
            proto.CheckForNewVersionResp.prototype.setHasnewversion = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getUpdatetype = function() {
                return o.Message.getFieldWithDefault(this, 4, 0)
            }
            ,
            proto.CheckForNewVersionResp.prototype.setUpdatetype = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getNewversionurl = function() {
                return o.Message.getFieldWithDefault(this, 5, "")
            }
            ,
            proto.CheckForNewVersionResp.prototype.setNewversionurl = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getNewversioncode = function() {
                return o.Message.getFieldWithDefault(this, 6, 0)
            }
            ,
            proto.CheckForNewVersionResp.prototype.setNewversioncode = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getNewversionname = function() {
                return o.Message.getFieldWithDefault(this, 7, "")
            }
            ,
            proto.CheckForNewVersionResp.prototype.setNewversionname = function(e) {
                o.Message.setField(this, 7, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getNewversionfilesize = function() {
                return o.Message.getFieldWithDefault(this, 8, 0)
            }
            ,
            proto.CheckForNewVersionResp.prototype.setNewversionfilesize = function(e) {
                o.Message.setField(this, 8, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getNewversionfilemd5 = function() {
                return o.Message.getFieldWithDefault(this, 9, "")
            }
            ,
            proto.CheckForNewVersionResp.prototype.setNewversionfilemd5 = function(e) {
                o.Message.setField(this, 9, e)
            }
            ,
            proto.CheckForNewVersionResp.prototype.getNewversionfeatureList = function() {
                return o.Message.getField(this, 10)
            }
            ,
            proto.CheckForNewVersionResp.prototype.setNewversionfeatureList = function(e) {
                o.Message.setField(this, 10, e || [])
            }
            ,
            proto.CheckForNewVersionResp.prototype.addNewversionfeature = function(e, t) {
                o.Message.addToRepeatedField(this, 10, e, t)
            }
            ,
            proto.CheckForNewVersionResp.prototype.clearNewversionfeatureList = function() {
                this.setNewversionfeatureList([])
            }
            ,
            proto.GetCountryListReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.GetCountryListReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetCountryListReq.displayName = "proto.GetCountryListReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetCountryListReq.prototype.toObject = function(e) {
                return proto.GetCountryListReq.toObject(e, this)
            }
                ,
                proto.GetCountryListReq.toObject = function(e, t) {
                    var r = {};
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GetCountryListReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GetCountryListReq;
                return proto.GetCountryListReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GetCountryListReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GetCountryListReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GetCountryListReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GetCountryListReq.serializeBinaryToWriter = function(e, t) {}
            ,
            proto.GetCountryListResp = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.GetCountryListResp.repeatedFields_, null)
            }
            ,
            i.inherits(proto.GetCountryListResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetCountryListResp.displayName = "proto.GetCountryListResp"),
            proto.GetCountryListResp.repeatedFields_ = [3],
        o.Message.GENERATE_TO_OBJECT && (proto.GetCountryListResp.prototype.toObject = function(e) {
                return proto.GetCountryListResp.toObject(e, this)
            }
                ,
                proto.GetCountryListResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        countrylistList: o.Message.toObjectList(t.getCountrylistList(), proto.GetCountryListResp.Country.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GetCountryListResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GetCountryListResp;
                return proto.GetCountryListResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GetCountryListResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = new proto.GetCountryListResp.Country;
                            t.readMessage(o, proto.GetCountryListResp.Country.deserializeBinaryFromReader),
                                e.addCountrylist(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GetCountryListResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GetCountryListResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GetCountryListResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getCountrylistList(),
                r.length > 0 && t.writeRepeatedMessage(3, r, proto.GetCountryListResp.Country.serializeBinaryToWriter)
            }
            ,
            proto.GetCountryListResp.Country = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.GetCountryListResp.Country, o.Message),
        i.DEBUG && !COMPILED && (proto.GetCountryListResp.Country.displayName = "proto.GetCountryListResp.Country"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetCountryListResp.Country.prototype.toObject = function(e) {
                return proto.GetCountryListResp.Country.toObject(e, this)
            }
                ,
                proto.GetCountryListResp.Country.toObject = function(e, t) {
                    var r = {
                        countryid: o.Message.getFieldWithDefault(t, 1, 0),
                        langcode: o.Message.getFieldWithDefault(t, 2, ""),
                        nativename: o.Message.getFieldWithDefault(t, 3, ""),
                        englishname: o.Message.getFieldWithDefault(t, 4, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GetCountryListResp.Country.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GetCountryListResp.Country;
                return proto.GetCountryListResp.Country.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GetCountryListResp.Country.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt64String();
                            e.setCountryid(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setLangcode(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setNativename(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setEnglishname(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GetCountryListResp.Country.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GetCountryListResp.Country.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GetCountryListResp.Country.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getCountryid(),
                0 !== r && t.writeInt64String(1, r),
                    r = e.getLangcode(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getNativename(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getEnglishname(),
                r.length > 0 && t.writeString(4, r)
            }
            ,
            proto.GetCountryListResp.Country.prototype.getCountryid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
        ,
        proto.GetCountryListResp.Country.prototype.setCountryid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetCountryListResp.Country.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetCountryListResp.Country.prototype.setLangcode = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetCountryListResp.Country.prototype.getNativename = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.GetCountryListResp.Country.prototype.setNativename = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetCountryListResp.Country.prototype.getEnglishname = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.GetCountryListResp.Country.prototype.setEnglishname = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetCountryListResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetCountryListResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetCountryListResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetCountryListResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetCountryListResp.prototype.getCountrylistList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.GetCountryListResp.Country, 3)
        }
        ,
        proto.GetCountryListResp.prototype.setCountrylistList = function(e) {
            o.Message.setRepeatedWrapperField(this, 3, e)
        }
        ,
        proto.GetCountryListResp.prototype.addCountrylist = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 3, e, proto.GetCountryListResp.Country, t)
        }
        ,
        proto.GetCountryListResp.prototype.clearCountrylistList = function() {
            this.setCountrylistList([])
        }
        ,
        proto.SendCodeWithSignOutStatusReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.SendCodeWithSignOutStatusReq, o.Message),
        i.DEBUG && !COMPILED && (proto.SendCodeWithSignOutStatusReq.displayName = "proto.SendCodeWithSignOutStatusReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.SendCodeWithSignOutStatusReq.prototype.toObject = function(e) {
                return proto.SendCodeWithSignOutStatusReq.toObject(e, this)
            }
                ,
                proto.SendCodeWithSignOutStatusReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        phonenum: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.SendCodeWithSignOutStatusReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.SendCodeWithSignOutStatusReq;
            return proto.SendCodeWithSignOutStatusReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.SendCodeWithSignOutStatusReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setPhonenum(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.SendCodeWithSignOutStatusReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.SendCodeWithSignOutStatusReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.SendCodeWithSignOutStatusReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getPhonenum(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.SendCodeWithSignOutStatusReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.SendCodeWithSignOutStatusReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.SendCodeWithSignOutStatusReq.prototype.getPhonenum = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.SendCodeWithSignOutStatusReq.prototype.setPhonenum = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.SendCodeWithSignOutStatusResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.SendCodeWithSignOutStatusResp, o.Message),
        i.DEBUG && !COMPILED && (proto.SendCodeWithSignOutStatusResp.displayName = "proto.SendCodeWithSignOutStatusResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.SendCodeWithSignOutStatusResp.prototype.toObject = function(e) {
                return proto.SendCodeWithSignOutStatusResp.toObject(e, this)
            }
                ,
                proto.SendCodeWithSignOutStatusResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        timeout: o.Message.getFieldWithDefault(t, 3, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.SendCodeWithSignOutStatusResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.SendCodeWithSignOutStatusResp;
            return proto.SendCodeWithSignOutStatusResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.SendCodeWithSignOutStatusResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt32();
                        e.setTimeout(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.SendCodeWithSignOutStatusResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.SendCodeWithSignOutStatusResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.SendCodeWithSignOutStatusResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getTimeout(),
            0 !== r && t.writeInt32(3, r)
        }
        ,
        proto.SendCodeWithSignOutStatusResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.SendCodeWithSignOutStatusResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.SendCodeWithSignOutStatusResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.SendCodeWithSignOutStatusResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.SendCodeWithSignOutStatusResp.prototype.getTimeout = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.SendCodeWithSignOutStatusResp.prototype.setTimeout = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ValidatePasscodeWithSignOutStatusReq, o.Message),
        i.DEBUG && !COMPILED && (proto.ValidatePasscodeWithSignOutStatusReq.displayName = "proto.ValidatePasscodeWithSignOutStatusReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.ValidatePasscodeWithSignOutStatusReq.prototype.toObject = function(e) {
                return proto.ValidatePasscodeWithSignOutStatusReq.toObject(e, this)
            }
                ,
                proto.ValidatePasscodeWithSignOutStatusReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        phonenum: o.Message.getFieldWithDefault(t, 2, ""),
                        passcode: o.Message.getFieldWithDefault(t, 3, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ValidatePasscodeWithSignOutStatusReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ValidatePasscodeWithSignOutStatusReq;
            return proto.ValidatePasscodeWithSignOutStatusReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setPhonenum(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setPasscode(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ValidatePasscodeWithSignOutStatusReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getPhonenum(),
            r.length > 0 && t.writeString(2, r),
                r = e.getPasscode(),
            r.length > 0 && t.writeString(3, r)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.prototype.getPhonenum = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.prototype.setPhonenum = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.prototype.getPasscode = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusReq.prototype.setPasscode = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ValidatePasscodeWithSignOutStatusResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ValidatePasscodeWithSignOutStatusResp.displayName = "proto.ValidatePasscodeWithSignOutStatusResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.ValidatePasscodeWithSignOutStatusResp.prototype.toObject = function(e) {
                return proto.ValidatePasscodeWithSignOutStatusResp.toObject(e, this)
            }
                ,
                proto.ValidatePasscodeWithSignOutStatusResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        token: o.Message.getFieldWithDefault(t, 3, ""),
                        timeout: o.Message.getFieldWithDefault(t, 4, 0),
                        uid: o.Message.getFieldWithDefault(t, 5, 0),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 6, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ValidatePasscodeWithSignOutStatusResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ValidatePasscodeWithSignOutStatusResp;
            return proto.ValidatePasscodeWithSignOutStatusResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setToken(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setTimeout(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setUid(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ValidatePasscodeWithSignOutStatusResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getToken(),
            r.length > 0 && t.writeString(3, r),
                r = e.getTimeout(),
            0 !== r && t.writeInt32(4, r),
                r = e.getUid(),
            0 !== r && t.writeInt64String(5, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(6, r)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.getToken = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.setToken = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.getTimeout = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.setTimeout = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.getUid = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.setUid = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.ValidatePasscodeWithSignOutStatusResp.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.OverwritePasswdByTokenWithSignOutStatusReq, o.Message),
        i.DEBUG && !COMPILED && (proto.OverwritePasswdByTokenWithSignOutStatusReq.displayName = "proto.OverwritePasswdByTokenWithSignOutStatusReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.toObject = function(e) {
                return proto.OverwritePasswdByTokenWithSignOutStatusReq.toObject(e, this)
            }
                ,
                proto.OverwritePasswdByTokenWithSignOutStatusReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        phonenum: o.Message.getFieldWithDefault(t, 2, ""),
                        token: o.Message.getFieldWithDefault(t, 3, ""),
                        targetpasswd: o.Message.getFieldWithDefault(t, 4, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.OverwritePasswdByTokenWithSignOutStatusReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.OverwritePasswdByTokenWithSignOutStatusReq;
            return proto.OverwritePasswdByTokenWithSignOutStatusReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setPhonenum(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setToken(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setTargetpasswd(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.OverwritePasswdByTokenWithSignOutStatusReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getPhonenum(),
            r.length > 0 && t.writeString(2, r),
                r = e.getToken(),
            r.length > 0 && t.writeString(3, r),
                r = e.getTargetpasswd(),
            r.length > 0 && t.writeString(4, r)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.getPhonenum = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.setPhonenum = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.getToken = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.setToken = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.getTargetpasswd = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusReq.prototype.setTargetpasswd = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.OverwritePasswdByTokenWithSignOutStatusResp, o.Message),
        i.DEBUG && !COMPILED && (proto.OverwritePasswdByTokenWithSignOutStatusResp.displayName = "proto.OverwritePasswdByTokenWithSignOutStatusResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.OverwritePasswdByTokenWithSignOutStatusResp.prototype.toObject = function(e) {
                return proto.OverwritePasswdByTokenWithSignOutStatusResp.toObject(e, this)
            }
                ,
                proto.OverwritePasswdByTokenWithSignOutStatusResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.OverwritePasswdByTokenWithSignOutStatusResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.OverwritePasswdByTokenWithSignOutStatusResp;
            return proto.OverwritePasswdByTokenWithSignOutStatusResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.OverwritePasswdByTokenWithSignOutStatusResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.OverwritePasswdByTokenWithSignOutStatusResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.AuthSignIn2Req = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.AuthSignIn2Req, o.Message),
        i.DEBUG && !COMPILED && (proto.AuthSignIn2Req.displayName = "proto.AuthSignIn2Req"),
        o.Message.GENERATE_TO_OBJECT && (proto.AuthSignIn2Req.prototype.toObject = function(e) {
                return proto.AuthSignIn2Req.toObject(e, this)
            }
                ,
                proto.AuthSignIn2Req.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        phonenum: o.Message.getFieldWithDefault(t, 2, ""),
                        password: o.Message.getFieldWithDefault(t, 3, ""),
                        appversioncode: o.Message.getFieldWithDefault(t, 4, 0),
                        devicetype: o.Message.getFieldWithDefault(t, 5, 0),
                        imei: o.Message.getFieldWithDefault(t, 6, ""),
                        brand: o.Message.getFieldWithDefault(t, 7, ""),
                        model: o.Message.getFieldWithDefault(t, 8, ""),
                        apnstoken: o.Message.getFieldWithDefault(t, 9, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.AuthSignIn2Req.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AuthSignIn2Req;
            return proto.AuthSignIn2Req.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AuthSignIn2Req.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setPhonenum(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setPassword(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setAppversioncode(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setDevicetype(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setImei(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setBrand(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setModel(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setApnstoken(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AuthSignIn2Req.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AuthSignIn2Req.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AuthSignIn2Req.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getPhonenum(),
            r.length > 0 && t.writeString(2, r),
                r = e.getPassword(),
            r.length > 0 && t.writeString(3, r),
                r = e.getAppversioncode(),
            0 !== r && t.writeInt32(4, r),
                r = e.getDevicetype(),
            0 !== r && t.writeInt32(5, r),
                r = e.getImei(),
            r.length > 0 && t.writeString(6, r),
                r = e.getBrand(),
            r.length > 0 && t.writeString(7, r),
                r = e.getModel(),
            r.length > 0 && t.writeString(8, r),
                r = e.getApnstoken(),
            r.length > 0 && t.writeString(9, r)
        }
        ,
        proto.AuthSignIn2Req.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.AuthSignIn2Req.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getPhonenum = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.AuthSignIn2Req.prototype.setPhonenum = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getPassword = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.AuthSignIn2Req.prototype.setPassword = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getAppversioncode = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.AuthSignIn2Req.prototype.setAppversioncode = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getDevicetype = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.AuthSignIn2Req.prototype.setDevicetype = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getImei = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.AuthSignIn2Req.prototype.setImei = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getBrand = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.AuthSignIn2Req.prototype.setBrand = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getModel = function() {
            return o.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.AuthSignIn2Req.prototype.setModel = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.AuthSignIn2Req.prototype.getApnstoken = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.AuthSignIn2Req.prototype.setApnstoken = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.AuthSignIn2Resp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.AuthSignIn2Resp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.AuthSignIn2Resp, o.Message),
        i.DEBUG && !COMPILED && (proto.AuthSignIn2Resp.displayName = "proto.AuthSignIn2Resp"),
        proto.AuthSignIn2Resp.repeatedFields_ = [12],
        o.Message.GENERATE_TO_OBJECT && (proto.AuthSignIn2Resp.prototype.toObject = function(e) {
                return proto.AuthSignIn2Resp.toObject(e, this)
            }
                ,
                proto.AuthSignIn2Resp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        deviceid: o.Message.getFieldWithDefault(t, 3, 0),
                        sessionid: o.Message.getFieldWithDefault(t, 4, 0),
                        nonickname: o.Message.getFieldWithDefault(t, 5, !1),
                        noemail: o.Message.getFieldWithDefault(t, 6, !1),
                        cert: o.Message.getFieldWithDefault(t, 7, ""),
                        bodyaes: (r = t.getBodyaes()) && a.AesKeyAndIV.toObject(e, r),
                        userfiledomain: o.Message.getFieldWithDefault(t, 9, ""),
                        dialogfiledomain: o.Message.getFieldWithDefault(t, 10, ""),
                        user: (r = t.getUser()) && a.User.toObject(e, r),
                        configitemlistList: o.Message.toObjectList(t.getConfigitemlistList(), a.ConfigItem.toObject, e),
                        frozendays: o.Message.getFieldWithDefault(t, 13, 0),
                        complaintlefttimes: o.Message.getFieldWithDefault(t, 14, 0),
                        complainturl: o.Message.getFieldWithDefault(t, 15, ""),
                        destroyappinfoflag: o.Message.getFieldWithDefault(t, 16, !1),
                        xianliaoidalreadysetflag: o.Message.getFieldWithDefault(t, 17, !1),
                        sharefiledomain: o.Message.getFieldWithDefault(t, 18, "")
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
        proto.AuthSignIn2Resp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AuthSignIn2Resp;
            return proto.AuthSignIn2Resp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AuthSignIn2Resp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDeviceid(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setSessionid(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setNonickname(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setNoemail(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setCert(o);
                        break;
                    case 8:
                        o = new a.AesKeyAndIV;
                        t.readMessage(o, a.AesKeyAndIV.deserializeBinaryFromReader),
                            e.setBodyaes(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setUserfiledomain(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setDialogfiledomain(o);
                        break;
                    case 11:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader),
                            e.setUser(o);
                        break;
                    case 12:
                        o = new a.ConfigItem;
                        t.readMessage(o, a.ConfigItem.deserializeBinaryFromReader),
                            e.addConfigitemlist(o);
                        break;
                    case 13:
                        o = t.readInt32();
                        e.setFrozendays(o);
                        break;
                    case 14:
                        o = t.readInt32();
                        e.setComplaintlefttimes(o);
                        break;
                    case 15:
                        o = t.readString();
                        e.setComplainturl(o);
                        break;
                    case 16:
                        o = t.readBool();
                        e.setDestroyappinfoflag(o);
                        break;
                    case 17:
                        o = t.readBool();
                        e.setXianliaoidalreadysetflag(o);
                        break;
                    case 18:
                        o = t.readString();
                        e.setSharefiledomain(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AuthSignIn2Resp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AuthSignIn2Resp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AuthSignIn2Resp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getDeviceid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getSessionid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getNonickname(),
            r && t.writeBool(5, r),
                r = e.getNoemail(),
            r && t.writeBool(6, r),
                r = e.getCert(),
            r.length > 0 && t.writeString(7, r),
                r = e.getBodyaes(),
            null != r && t.writeMessage(8, r, a.AesKeyAndIV.serializeBinaryToWriter),
                r = e.getUserfiledomain(),
            r.length > 0 && t.writeString(9, r),
                r = e.getDialogfiledomain(),
            r.length > 0 && t.writeString(10, r),
                r = e.getUser(),
            null != r && t.writeMessage(11, r, a.User.serializeBinaryToWriter),
                r = e.getConfigitemlistList(),
            r.length > 0 && t.writeRepeatedMessage(12, r, a.ConfigItem.serializeBinaryToWriter),
                r = e.getFrozendays(),
            0 !== r && t.writeInt32(13, r),
                r = e.getComplaintlefttimes(),
            0 !== r && t.writeInt32(14, r),
                r = e.getComplainturl(),
            r.length > 0 && t.writeString(15, r),
                r = e.getDestroyappinfoflag(),
            r && t.writeBool(16, r),
                r = e.getXianliaoidalreadysetflag(),
            r && t.writeBool(17, r),
                r = e.getSharefiledomain(),
            r.length > 0 && t.writeString(18, r)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.AuthSignIn2Resp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getDeviceid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setDeviceid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getSessionid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setSessionid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getNonickname = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setNonickname = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getNoemail = function() {
            return o.Message.getFieldWithDefault(this, 6, !1)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setNoemail = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getCert = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.AuthSignIn2Resp.prototype.setCert = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getBodyaes = function() {
            return o.Message.getWrapperField(this, a.AesKeyAndIV, 8)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setBodyaes = function(e) {
            o.Message.setWrapperField(this, 8, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.clearBodyaes = function() {
            this.setBodyaes(void 0)
        }
        ,
        proto.AuthSignIn2Resp.prototype.hasBodyaes = function() {
            return null != o.Message.getField(this, 8)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getUserfiledomain = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.AuthSignIn2Resp.prototype.setUserfiledomain = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getDialogfiledomain = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.AuthSignIn2Resp.prototype.setDialogfiledomain = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getUser = function() {
            return o.Message.getWrapperField(this, a.User, 11)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setUser = function(e) {
            o.Message.setWrapperField(this, 11, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.clearUser = function() {
            this.setUser(void 0)
        }
        ,
        proto.AuthSignIn2Resp.prototype.hasUser = function() {
            return null != o.Message.getField(this, 11)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getConfigitemlistList = function() {
            return o.Message.getRepeatedWrapperField(this, a.ConfigItem, 12)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setConfigitemlistList = function(e) {
            o.Message.setRepeatedWrapperField(this, 12, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.addConfigitemlist = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 12, e, proto.ConfigItem, t)
        }
        ,
        proto.AuthSignIn2Resp.prototype.clearConfigitemlistList = function() {
            this.setConfigitemlistList([])
        }
        ,
        proto.AuthSignIn2Resp.prototype.getFrozendays = function() {
            return o.Message.getFieldWithDefault(this, 13, 0)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setFrozendays = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getComplaintlefttimes = function() {
            return o.Message.getFieldWithDefault(this, 14, 0)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setComplaintlefttimes = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getComplainturl = function() {
            return o.Message.getFieldWithDefault(this, 15, "")
        }
        ,
        proto.AuthSignIn2Resp.prototype.setComplainturl = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getDestroyappinfoflag = function() {
            return o.Message.getFieldWithDefault(this, 16, !1)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setDestroyappinfoflag = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getXianliaoidalreadysetflag = function() {
            return o.Message.getFieldWithDefault(this, 17, !1)
        }
        ,
        proto.AuthSignIn2Resp.prototype.setXianliaoidalreadysetflag = function(e) {
            o.Message.setField(this, 17, e)
        }
        ,
        proto.AuthSignIn2Resp.prototype.getSharefiledomain = function() {
            return o.Message.getFieldWithDefault(this, 18, "")
        }
        ,
        proto.AuthSignIn2Resp.prototype.setSharefiledomain = function(e) {
            o.Message.setField(this, 18, e)
        }
        ,
        proto.LoginBySmsCode2Req = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.LoginBySmsCode2Req, o.Message),
        i.DEBUG && !COMPILED && (proto.LoginBySmsCode2Req.displayName = "proto.LoginBySmsCode2Req"),
        o.Message.GENERATE_TO_OBJECT && (proto.LoginBySmsCode2Req.prototype.toObject = function(e) {
                return proto.LoginBySmsCode2Req.toObject(e, this)
            }
                ,
                proto.LoginBySmsCode2Req.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        phonenum: o.Message.getFieldWithDefault(t, 2, ""),
                        passcode: o.Message.getFieldWithDefault(t, 3, ""),
                        appversioncode: o.Message.getFieldWithDefault(t, 4, 0),
                        devicetype: o.Message.getFieldWithDefault(t, 5, 0),
                        imei: o.Message.getFieldWithDefault(t, 6, ""),
                        brand: o.Message.getFieldWithDefault(t, 7, ""),
                        model: o.Message.getFieldWithDefault(t, 8, ""),
                        apnstoken: o.Message.getFieldWithDefault(t, 9, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.LoginBySmsCode2Req.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.LoginBySmsCode2Req;
            return proto.LoginBySmsCode2Req.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.LoginBySmsCode2Req.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setPhonenum(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setPasscode(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setAppversioncode(o);
                        break;
                    case 5:
                        o = t.readInt32();
                        e.setDevicetype(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setImei(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setBrand(o);
                        break;
                    case 8:
                        o = t.readString();
                        e.setModel(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setApnstoken(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.LoginBySmsCode2Req.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.LoginBySmsCode2Req.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.LoginBySmsCode2Req.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getPhonenum(),
            r.length > 0 && t.writeString(2, r),
                r = e.getPasscode(),
            r.length > 0 && t.writeString(3, r),
                r = e.getAppversioncode(),
            0 !== r && t.writeInt32(4, r),
                r = e.getDevicetype(),
            0 !== r && t.writeInt32(5, r),
                r = e.getImei(),
            r.length > 0 && t.writeString(6, r),
                r = e.getBrand(),
            r.length > 0 && t.writeString(7, r),
                r = e.getModel(),
            r.length > 0 && t.writeString(8, r),
                r = e.getApnstoken(),
            r.length > 0 && t.writeString(9, r)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getPhonenum = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setPhonenum = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getPasscode = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setPasscode = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getAppversioncode = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setAppversioncode = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getDevicetype = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setDevicetype = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getImei = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setImei = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getBrand = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setBrand = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getModel = function() {
            return o.Message.getFieldWithDefault(this, 8, "")
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setModel = function(e) {
            o.Message.setField(this, 8, e)
        }
        ,
        proto.LoginBySmsCode2Req.prototype.getApnstoken = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.LoginBySmsCode2Req.prototype.setApnstoken = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.LoginBySmsCode2Resp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.LoginBySmsCode2Resp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.LoginBySmsCode2Resp, o.Message),
        i.DEBUG && !COMPILED && (proto.LoginBySmsCode2Resp.displayName = "proto.LoginBySmsCode2Resp"),
        proto.LoginBySmsCode2Resp.repeatedFields_ = [12],
        o.Message.GENERATE_TO_OBJECT && (proto.LoginBySmsCode2Resp.prototype.toObject = function(e) {
                return proto.LoginBySmsCode2Resp.toObject(e, this)
            }
                ,
                proto.LoginBySmsCode2Resp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        deviceid: o.Message.getFieldWithDefault(t, 3, 0),
                        sessionid: o.Message.getFieldWithDefault(t, 4, 0),
                        nonickname: o.Message.getFieldWithDefault(t, 5, !1),
                        noemail: o.Message.getFieldWithDefault(t, 6, !1),
                        cert: o.Message.getFieldWithDefault(t, 7, ""),
                        bodyaes: (r = t.getBodyaes()) && a.AesKeyAndIV.toObject(e, r),
                        userfiledomain: o.Message.getFieldWithDefault(t, 9, ""),
                        dialogfiledomain: o.Message.getFieldWithDefault(t, 10, ""),
                        user: (r = t.getUser()) && a.User.toObject(e, r),
                        configitemlistList: o.Message.toObjectList(t.getConfigitemlistList(), a.ConfigItem.toObject, e),
                        frozendays: o.Message.getFieldWithDefault(t, 13, 0),
                        complaintlefttimes: o.Message.getFieldWithDefault(t, 14, 0),
                        complainturl: o.Message.getFieldWithDefault(t, 15, ""),
                        destroyappinfoflag: o.Message.getFieldWithDefault(t, 16, !1),
                        xianliaoidalreadysetflag: o.Message.getFieldWithDefault(t, 17, !1),
                        sharefiledomain: o.Message.getFieldWithDefault(t, 18, "")
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
        proto.LoginBySmsCode2Resp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.LoginBySmsCode2Resp;
            return proto.LoginBySmsCode2Resp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.LoginBySmsCode2Resp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readInt64String();
                        e.setDeviceid(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setSessionid(o);
                        break;
                    case 5:
                        o = t.readBool();
                        e.setNonickname(o);
                        break;
                    case 6:
                        o = t.readBool();
                        e.setNoemail(o);
                        break;
                    case 7:
                        o = t.readString();
                        e.setCert(o);
                        break;
                    case 8:
                        o = new a.AesKeyAndIV;
                        t.readMessage(o, a.AesKeyAndIV.deserializeBinaryFromReader),
                            e.setBodyaes(o);
                        break;
                    case 9:
                        o = t.readString();
                        e.setUserfiledomain(o);
                        break;
                    case 10:
                        o = t.readString();
                        e.setDialogfiledomain(o);
                        break;
                    case 11:
                        o = new a.User;
                        t.readMessage(o, a.User.deserializeBinaryFromReader),
                            e.setUser(o);
                        break;
                    case 12:
                        o = new a.ConfigItem;
                        t.readMessage(o, a.ConfigItem.deserializeBinaryFromReader),
                            e.addConfigitemlist(o);
                        break;
                    case 13:
                        o = t.readInt32();
                        e.setFrozendays(o);
                        break;
                    case 14:
                        o = t.readInt32();
                        e.setComplaintlefttimes(o);
                        break;
                    case 15:
                        o = t.readString();
                        e.setComplainturl(o);
                        break;
                    case 16:
                        o = t.readBool();
                        e.setDestroyappinfoflag(o);
                        break;
                    case 17:
                        o = t.readBool();
                        e.setXianliaoidalreadysetflag(o);
                        break;
                    case 18:
                        o = t.readString();
                        e.setSharefiledomain(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.LoginBySmsCode2Resp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.LoginBySmsCode2Resp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getDeviceid(),
            0 !== r && t.writeInt64String(3, r),
                r = e.getSessionid(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getNonickname(),
            r && t.writeBool(5, r),
                r = e.getNoemail(),
            r && t.writeBool(6, r),
                r = e.getCert(),
            r.length > 0 && t.writeString(7, r),
                r = e.getBodyaes(),
            null != r && t.writeMessage(8, r, a.AesKeyAndIV.serializeBinaryToWriter),
                r = e.getUserfiledomain(),
            r.length > 0 && t.writeString(9, r),
                r = e.getDialogfiledomain(),
            r.length > 0 && t.writeString(10, r),
                r = e.getUser(),
            null != r && t.writeMessage(11, r, a.User.serializeBinaryToWriter),
                r = e.getConfigitemlistList(),
            r.length > 0 && t.writeRepeatedMessage(12, r, a.ConfigItem.serializeBinaryToWriter),
                r = e.getFrozendays(),
            0 !== r && t.writeInt32(13, r),
                r = e.getComplaintlefttimes(),
            0 !== r && t.writeInt32(14, r),
                r = e.getComplainturl(),
            r.length > 0 && t.writeString(15, r),
                r = e.getDestroyappinfoflag(),
            r && t.writeBool(16, r),
                r = e.getXianliaoidalreadysetflag(),
            r && t.writeBool(17, r),
                r = e.getSharefiledomain(),
            r.length > 0 && t.writeString(18, r)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getDeviceid = function() {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setDeviceid = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getSessionid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setSessionid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getNonickname = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setNonickname = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getNoemail = function() {
            return o.Message.getFieldWithDefault(this, 6, !1)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setNoemail = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getCert = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setCert = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getBodyaes = function() {
            return o.Message.getWrapperField(this, a.AesKeyAndIV, 8)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setBodyaes = function(e) {
            o.Message.setWrapperField(this, 8, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.clearBodyaes = function() {
            this.setBodyaes(void 0)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.hasBodyaes = function() {
            return null != o.Message.getField(this, 8)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getUserfiledomain = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setUserfiledomain = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getDialogfiledomain = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setDialogfiledomain = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getUser = function() {
            return o.Message.getWrapperField(this, a.User, 11)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setUser = function(e) {
            o.Message.setWrapperField(this, 11, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.clearUser = function() {
            this.setUser(void 0)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.hasUser = function() {
            return null != o.Message.getField(this, 11)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getConfigitemlistList = function() {
            return o.Message.getRepeatedWrapperField(this, a.ConfigItem, 12)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setConfigitemlistList = function(e) {
            o.Message.setRepeatedWrapperField(this, 12, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.addConfigitemlist = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 12, e, proto.ConfigItem, t)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.clearConfigitemlistList = function() {
            this.setConfigitemlistList([])
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getFrozendays = function() {
            return o.Message.getFieldWithDefault(this, 13, 0)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setFrozendays = function(e) {
            o.Message.setField(this, 13, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getComplaintlefttimes = function() {
            return o.Message.getFieldWithDefault(this, 14, 0)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setComplaintlefttimes = function(e) {
            o.Message.setField(this, 14, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getComplainturl = function() {
            return o.Message.getFieldWithDefault(this, 15, "")
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setComplainturl = function(e) {
            o.Message.setField(this, 15, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getDestroyappinfoflag = function() {
            return o.Message.getFieldWithDefault(this, 16, !1)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setDestroyappinfoflag = function(e) {
            o.Message.setField(this, 16, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getXianliaoidalreadysetflag = function() {
            return o.Message.getFieldWithDefault(this, 17, !1)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setXianliaoidalreadysetflag = function(e) {
            o.Message.setField(this, 17, e)
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.getSharefiledomain = function() {
            return o.Message.getFieldWithDefault(this, 18, "")
        }
        ,
        proto.LoginBySmsCode2Resp.prototype.setSharefiledomain = function(e) {
            o.Message.setField(this, 18, e)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.SendAppLogWithSignOutStatusReq, o.Message),
        i.DEBUG && !COMPILED && (proto.SendAppLogWithSignOutStatusReq.displayName = "proto.SendAppLogWithSignOutStatusReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.SendAppLogWithSignOutStatusReq.prototype.toObject = function(e) {
                return proto.SendAppLogWithSignOutStatusReq.toObject(e, this)
            }
                ,
                proto.SendAppLogWithSignOutStatusReq.toObject = function(e, t) {
                    var r = {
                        code: o.Message.getFieldWithDefault(t, 1, ""),
                        message: o.Message.getFieldWithDefault(t, 2, ""),
                        buildversion: o.Message.getFieldWithDefault(t, 3, ""),
                        logtype: o.Message.getFieldWithDefault(t, 4, 0),
                        exceptioninfo: o.Message.getFieldWithDefault(t, 5, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.SendAppLogWithSignOutStatusReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.SendAppLogWithSignOutStatusReq;
            return proto.SendAppLogWithSignOutStatusReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setCode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMessage(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setBuildversion(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setLogtype(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setExceptioninfo(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.SendAppLogWithSignOutStatusReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getCode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getMessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getBuildversion(),
            r.length > 0 && t.writeString(3, r),
                r = e.getLogtype(),
            0 !== r && t.writeInt32(4, r),
                r = e.getExceptioninfo(),
            r.length > 0 && t.writeString(5, r)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.getCode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.setCode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.getMessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.setMessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.getBuildversion = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.setBuildversion = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.getLogtype = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.setLogtype = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.getExceptioninfo = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.SendAppLogWithSignOutStatusReq.prototype.setExceptioninfo = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.SendAppLogWithSignOutStatusResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.SendAppLogWithSignOutStatusResp, o.Message),
        i.DEBUG && !COMPILED && (proto.SendAppLogWithSignOutStatusResp.displayName = "proto.SendAppLogWithSignOutStatusResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.SendAppLogWithSignOutStatusResp.prototype.toObject = function(e) {
                return proto.SendAppLogWithSignOutStatusResp.toObject(e, this)
            }
                ,
                proto.SendAppLogWithSignOutStatusResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.SendAppLogWithSignOutStatusResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.SendAppLogWithSignOutStatusResp;
            return proto.SendAppLogWithSignOutStatusResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.SendAppLogWithSignOutStatusResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.SendAppLogWithSignOutStatusResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.SendAppLogWithSignOutStatusResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.SendAppLogWithSignOutStatusResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.SendAppLogWithSignOutStatusResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.SendAppLogWithSignOutStatusResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.SendAppLogWithSignOutStatusResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.SendAppLogWithSignOutStatusResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetVerificationCodeToRecoverPasswordReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetVerificationCodeToRecoverPasswordReq.displayName = "proto.GetVerificationCodeToRecoverPasswordReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetVerificationCodeToRecoverPasswordReq.prototype.toObject = function(e) {
                return proto.GetVerificationCodeToRecoverPasswordReq.toObject(e, this)
            }
                ,
                proto.GetVerificationCodeToRecoverPasswordReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        mobile: o.Message.getFieldWithDefault(t, 2, ""),
                        uniquedeviceidentifier: o.Message.getFieldWithDefault(t, 3, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetVerificationCodeToRecoverPasswordReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetVerificationCodeToRecoverPasswordReq;
            return proto.GetVerificationCodeToRecoverPasswordReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMobile(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setUniquedeviceidentifier(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetVerificationCodeToRecoverPasswordReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getMobile(),
            r.length > 0 && t.writeString(2, r),
                r = e.getUniquedeviceidentifier(),
            r.length > 0 && t.writeString(3, r)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.prototype.getMobile = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.prototype.setMobile = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.prototype.getUniquedeviceidentifier = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordReq.prototype.setUniquedeviceidentifier = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetVerificationCodeToRecoverPasswordResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetVerificationCodeToRecoverPasswordResp.displayName = "proto.GetVerificationCodeToRecoverPasswordResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetVerificationCodeToRecoverPasswordResp.prototype.toObject = function(e) {
                return proto.GetVerificationCodeToRecoverPasswordResp.toObject(e, this)
            }
                ,
                proto.GetVerificationCodeToRecoverPasswordResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        verificationcode: o.Message.getFieldWithDefault(t, 3, ""),
                        timeoutmillis: o.Message.getFieldWithDefault(t, 4, 0),
                        uid: o.Message.getFieldWithDefault(t, 5, 0),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 6, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetVerificationCodeToRecoverPasswordResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetVerificationCodeToRecoverPasswordResp;
            return proto.GetVerificationCodeToRecoverPasswordResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setVerificationcode(o);
                        break;
                    case 4:
                        o = t.readInt64String();
                        e.setTimeoutmillis(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setUid(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetVerificationCodeToRecoverPasswordResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getVerificationcode(),
            r.length > 0 && t.writeString(3, r),
                r = e.getTimeoutmillis(),
            0 !== r && t.writeInt64String(4, r),
                r = e.getUid(),
            0 !== r && t.writeInt64String(5, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(6, r)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.getVerificationcode = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.setVerificationcode = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.getTimeoutmillis = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.setTimeoutmillis = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.getUid = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.setUid = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.GetVerificationCodeToRecoverPasswordResp.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetRecoverPasswordVerificationInfoReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetRecoverPasswordVerificationInfoReq.displayName = "proto.GetRecoverPasswordVerificationInfoReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetRecoverPasswordVerificationInfoReq.prototype.toObject = function(e) {
                return proto.GetRecoverPasswordVerificationInfoReq.toObject(e, this)
            }
                ,
                proto.GetRecoverPasswordVerificationInfoReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        mobile: o.Message.getFieldWithDefault(t, 2, ""),
                        uniquedeviceidentifier: o.Message.getFieldWithDefault(t, 3, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetRecoverPasswordVerificationInfoReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetRecoverPasswordVerificationInfoReq;
            return proto.GetRecoverPasswordVerificationInfoReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMobile(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setUniquedeviceidentifier(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetRecoverPasswordVerificationInfoReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getMobile(),
            r.length > 0 && t.writeString(2, r),
                r = e.getUniquedeviceidentifier(),
            r.length > 0 && t.writeString(3, r)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.prototype.getMobile = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.prototype.setMobile = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.prototype.getUniquedeviceidentifier = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.GetRecoverPasswordVerificationInfoReq.prototype.setUniquedeviceidentifier = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp = function(e) {
            o.Message.initialize(this, e, 0, -1, proto.GetRecoverPasswordVerificationInfoResp.repeatedFields_, null)
        }
        ,
        i.inherits(proto.GetRecoverPasswordVerificationInfoResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetRecoverPasswordVerificationInfoResp.displayName = "proto.GetRecoverPasswordVerificationInfoResp"),
        proto.GetRecoverPasswordVerificationInfoResp.repeatedFields_ = [4],
        o.Message.GENERATE_TO_OBJECT && (proto.GetRecoverPasswordVerificationInfoResp.prototype.toObject = function(e) {
                return proto.GetRecoverPasswordVerificationInfoResp.toObject(e, this)
            }
                ,
                proto.GetRecoverPasswordVerificationInfoResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        meetrequirement: o.Message.getFieldWithDefault(t, 3, !1),
                        helperList: o.Message.toObjectList(t.getHelperList(), proto.GetRecoverPasswordVerificationInfoResp.Helper.toObject, e)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetRecoverPasswordVerificationInfoResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetRecoverPasswordVerificationInfoResp;
            return proto.GetRecoverPasswordVerificationInfoResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readBool();
                        e.setMeetrequirement(o);
                        break;
                    case 4:
                        o = new proto.GetRecoverPasswordVerificationInfoResp.Helper;
                        t.readMessage(o, proto.GetRecoverPasswordVerificationInfoResp.Helper.deserializeBinaryFromReader),
                            e.addHelper(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetRecoverPasswordVerificationInfoResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getMeetrequirement(),
            r && t.writeBool(3, r),
                r = e.getHelperList(),
            r.length > 0 && t.writeRepeatedMessage(4, r, proto.GetRecoverPasswordVerificationInfoResp.Helper.serializeBinaryToWriter)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.GetRecoverPasswordVerificationInfoResp.Helper, o.Message),
        i.DEBUG && !COMPILED && (proto.GetRecoverPasswordVerificationInfoResp.Helper.displayName = "proto.GetRecoverPasswordVerificationInfoResp.Helper"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.toObject = function(e) {
                return proto.GetRecoverPasswordVerificationInfoResp.Helper.toObject(e, this)
            }
                ,
                proto.GetRecoverPasswordVerificationInfoResp.Helper.toObject = function(e, t) {
                    var r = {
                        uid: o.Message.getFieldWithDefault(t, 1, 0),
                        nickname: o.Message.getFieldWithDefault(t, 2, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 3, ""),
                        retcode: o.Message.getFieldWithDefault(t, 4, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.GetRecoverPasswordVerificationInfoResp.Helper.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.GetRecoverPasswordVerificationInfoResp.Helper;
            return proto.GetRecoverPasswordVerificationInfoResp.Helper.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt64String();
                        e.setUid(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setNickname(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    case 4:
                        o = t.readInt32();
                        e.setRetcode(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.GetRecoverPasswordVerificationInfoResp.Helper.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getUid(),
            0 !== r && t.writeInt64String(1, r),
                r = e.getNickname(),
            r.length > 0 && t.writeString(2, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(3, r),
                r = e.getRetcode(),
            0 !== r && t.writeInt32(4, r)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.getUid = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.setUid = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.getNickname = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.setNickname = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.getRetcode = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.Helper.prototype.setRetcode = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.getMeetrequirement = function() {
            return o.Message.getFieldWithDefault(this, 3, !1)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.setMeetrequirement = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.getHelperList = function() {
            return o.Message.getRepeatedWrapperField(this, proto.GetRecoverPasswordVerificationInfoResp.Helper, 4)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.setHelperList = function(e) {
            o.Message.setRepeatedWrapperField(this, 4, e)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.addHelper = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 4, e, proto.GetRecoverPasswordVerificationInfoResp.Helper, t)
        }
        ,
        proto.GetRecoverPasswordVerificationInfoResp.prototype.clearHelperList = function() {
            this.setHelperList([])
        }
        ,
        proto.RecoverPasswordReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.RecoverPasswordReq, o.Message),
        i.DEBUG && !COMPILED && (proto.RecoverPasswordReq.displayName = "proto.RecoverPasswordReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.RecoverPasswordReq.prototype.toObject = function(e) {
                return proto.RecoverPasswordReq.toObject(e, this)
            }
                ,
                proto.RecoverPasswordReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        mobile: o.Message.getFieldWithDefault(t, 2, ""),
                        targetpassword: o.Message.getFieldWithDefault(t, 3, ""),
                        uniquedeviceno: o.Message.getFieldWithDefault(t, 4, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.RecoverPasswordReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.RecoverPasswordReq;
            return proto.RecoverPasswordReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.RecoverPasswordReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMobile(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTargetpassword(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setUniquedeviceno(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.RecoverPasswordReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.RecoverPasswordReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.RecoverPasswordReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getMobile(),
            r.length > 0 && t.writeString(2, r),
                r = e.getTargetpassword(),
            r.length > 0 && t.writeString(3, r),
                r = e.getUniquedeviceno(),
            r.length > 0 && t.writeString(4, r)
        }
        ,
        proto.RecoverPasswordReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.RecoverPasswordReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.RecoverPasswordReq.prototype.getMobile = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.RecoverPasswordReq.prototype.setMobile = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.RecoverPasswordReq.prototype.getTargetpassword = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.RecoverPasswordReq.prototype.setTargetpassword = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.RecoverPasswordReq.prototype.getUniquedeviceno = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.RecoverPasswordReq.prototype.setUniquedeviceno = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.RecoverPasswordResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.RecoverPasswordResp, o.Message),
        i.DEBUG && !COMPILED && (proto.RecoverPasswordResp.displayName = "proto.RecoverPasswordResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.RecoverPasswordResp.prototype.toObject = function(e) {
                return proto.RecoverPasswordResp.toObject(e, this)
            }
                ,
                proto.RecoverPasswordResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.RecoverPasswordResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.RecoverPasswordResp;
            return proto.RecoverPasswordResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.RecoverPasswordResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.RecoverPasswordResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.RecoverPasswordResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.RecoverPasswordResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.RecoverPasswordResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.RecoverPasswordResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.RecoverPasswordResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.RecoverPasswordResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ValidateMobileWithForgetPasswordReq, o.Message),
        i.DEBUG && !COMPILED && (proto.ValidateMobileWithForgetPasswordReq.displayName = "proto.ValidateMobileWithForgetPasswordReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.ValidateMobileWithForgetPasswordReq.prototype.toObject = function(e) {
                return proto.ValidateMobileWithForgetPasswordReq.toObject(e, this)
            }
                ,
                proto.ValidateMobileWithForgetPasswordReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        mobile: o.Message.getFieldWithDefault(t, 2, ""),
                        uniquedeviceno: o.Message.getFieldWithDefault(t, 3, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ValidateMobileWithForgetPasswordReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ValidateMobileWithForgetPasswordReq;
            return proto.ValidateMobileWithForgetPasswordReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMobile(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setUniquedeviceno(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ValidateMobileWithForgetPasswordReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getMobile(),
            r.length > 0 && t.writeString(2, r),
                r = e.getUniquedeviceno(),
            r.length > 0 && t.writeString(3, r)
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.prototype.getMobile = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.prototype.setMobile = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.prototype.getUniquedeviceno = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ValidateMobileWithForgetPasswordReq.prototype.setUniquedeviceno = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ValidateMobileWithForgetPasswordResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ValidateMobileWithForgetPasswordResp.displayName = "proto.ValidateMobileWithForgetPasswordResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.ValidateMobileWithForgetPasswordResp.prototype.toObject = function(e) {
                return proto.ValidateMobileWithForgetPasswordResp.toObject(e, this)
            }
                ,
                proto.ValidateMobileWithForgetPasswordResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ValidateMobileWithForgetPasswordResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ValidateMobileWithForgetPasswordResp;
            return proto.ValidateMobileWithForgetPasswordResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ValidateMobileWithForgetPasswordResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ValidateMobileWithForgetPasswordResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ValidateBankCardInfoWithForgetPasswordReq, o.Message),
        i.DEBUG && !COMPILED && (proto.ValidateBankCardInfoWithForgetPasswordReq.displayName = "proto.ValidateBankCardInfoWithForgetPasswordReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.toObject = function(e) {
                return proto.ValidateBankCardInfoWithForgetPasswordReq.toObject(e, this)
            }
                ,
                proto.ValidateBankCardInfoWithForgetPasswordReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        mobile: o.Message.getFieldWithDefault(t, 2, ""),
                        bankcardno: o.Message.getFieldWithDefault(t, 3, ""),
                        realname: o.Message.getFieldWithDefault(t, 4, ""),
                        certno: o.Message.getFieldWithDefault(t, 5, ""),
                        reservedmobile: o.Message.getFieldWithDefault(t, 6, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ValidateBankCardInfoWithForgetPasswordReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ValidateBankCardInfoWithForgetPasswordReq;
            return proto.ValidateBankCardInfoWithForgetPasswordReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMobile(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setBankcardno(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setRealname(o);
                        break;
                    case 5:
                        o = t.readString();
                        e.setCertno(o);
                        break;
                    case 6:
                        o = t.readString();
                        e.setReservedmobile(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ValidateBankCardInfoWithForgetPasswordReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getMobile(),
            r.length > 0 && t.writeString(2, r),
                r = e.getBankcardno(),
            r.length > 0 && t.writeString(3, r),
                r = e.getRealname(),
            r.length > 0 && t.writeString(4, r),
                r = e.getCertno(),
            r.length > 0 && t.writeString(5, r),
                r = e.getReservedmobile(),
            r.length > 0 && t.writeString(6, r)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.getMobile = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.setMobile = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.getBankcardno = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.setBankcardno = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.getRealname = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.setRealname = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.getCertno = function() {
            return o.Message.getFieldWithDefault(this, 5, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.setCertno = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.getReservedmobile = function() {
            return o.Message.getFieldWithDefault(this, 6, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordReq.prototype.setReservedmobile = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.ValidateBankCardInfoWithForgetPasswordResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ValidateBankCardInfoWithForgetPasswordResp.displayName = "proto.ValidateBankCardInfoWithForgetPasswordResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.toObject = function(e) {
                return proto.ValidateBankCardInfoWithForgetPasswordResp.toObject(e, this)
            }
                ,
                proto.ValidateBankCardInfoWithForgetPasswordResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 3, ""),
                        token: o.Message.getFieldWithDefault(t, 4, ""),
                        userid: o.Message.getFieldWithDefault(t, 5, 0)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.ValidateBankCardInfoWithForgetPasswordResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.ValidateBankCardInfoWithForgetPasswordResp;
            return proto.ValidateBankCardInfoWithForgetPasswordResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setSmallavatarurl(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setToken(o);
                        break;
                    case 5:
                        o = t.readInt64String();
                        e.setUserid(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.ValidateBankCardInfoWithForgetPasswordResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r),
                r = e.getSmallavatarurl(),
            r.length > 0 && t.writeString(3, r),
                r = e.getToken(),
            r.length > 0 && t.writeString(4, r),
                r = e.getUserid(),
            0 !== r && t.writeInt64String(5, r)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.getSmallavatarurl = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.setSmallavatarurl = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.getToken = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.setToken = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.getUserid = function() {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }
        ,
        proto.ValidateBankCardInfoWithForgetPasswordResp.prototype.setUserid = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.OverwritePasswordAfterValidationReq = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.OverwritePasswordAfterValidationReq, o.Message),
        i.DEBUG && !COMPILED && (proto.OverwritePasswordAfterValidationReq.displayName = "proto.OverwritePasswordAfterValidationReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.OverwritePasswordAfterValidationReq.prototype.toObject = function(e) {
                return proto.OverwritePasswordAfterValidationReq.toObject(e, this)
            }
                ,
                proto.OverwritePasswordAfterValidationReq.toObject = function(e, t) {
                    var r = {
                        langcode: o.Message.getFieldWithDefault(t, 1, ""),
                        mobile: o.Message.getFieldWithDefault(t, 2, ""),
                        targetpassword: o.Message.getFieldWithDefault(t, 3, ""),
                        token: o.Message.getFieldWithDefault(t, 4, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.OverwritePasswordAfterValidationReq.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.OverwritePasswordAfterValidationReq;
            return proto.OverwritePasswordAfterValidationReq.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.OverwritePasswordAfterValidationReq.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readString();
                        e.setLangcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setMobile(o);
                        break;
                    case 3:
                        o = t.readString();
                        e.setTargetpassword(o);
                        break;
                    case 4:
                        o = t.readString();
                        e.setToken(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.OverwritePasswordAfterValidationReq.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.OverwritePasswordAfterValidationReq.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getLangcode(),
            r.length > 0 && t.writeString(1, r),
                r = e.getMobile(),
            r.length > 0 && t.writeString(2, r),
                r = e.getTargetpassword(),
            r.length > 0 && t.writeString(3, r),
                r = e.getToken(),
            r.length > 0 && t.writeString(4, r)
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.getLangcode = function() {
            return o.Message.getFieldWithDefault(this, 1, "")
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.setLangcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.getMobile = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.setMobile = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.getTargetpassword = function() {
            return o.Message.getFieldWithDefault(this, 3, "")
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.setTargetpassword = function(e) {
            o.Message.setField(this, 3, e)
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.getToken = function() {
            return o.Message.getFieldWithDefault(this, 4, "")
        }
        ,
        proto.OverwritePasswordAfterValidationReq.prototype.setToken = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.OverwritePasswordAfterValidationResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.OverwritePasswordAfterValidationResp, o.Message),
        i.DEBUG && !COMPILED && (proto.OverwritePasswordAfterValidationResp.displayName = "proto.OverwritePasswordAfterValidationResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.OverwritePasswordAfterValidationResp.prototype.toObject = function(e) {
                return proto.OverwritePasswordAfterValidationResp.toObject(e, this)
            }
                ,
                proto.OverwritePasswordAfterValidationResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.OverwritePasswordAfterValidationResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.OverwritePasswordAfterValidationResp;
            return proto.OverwritePasswordAfterValidationResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.OverwritePasswordAfterValidationResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.OverwritePasswordAfterValidationResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.OverwritePasswordAfterValidationResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.OverwritePasswordAfterValidationResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.OverwritePasswordAfterValidationResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.OverwritePasswordAfterValidationResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.OverwritePasswordAfterValidationResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.OverwritePasswordAfterValidationResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        i.object.extend(t, proto)
    },
    e199: function(e, t, r) {
        "use strict";
        var o = r("4a57")
            , i = r.n(o);
        i.a
    },
    e7fe: function(e, t, r) {
        "use strict";
        var o = r("4814")
            , i = r.n(o);
        i.a
    },
    ecc0: function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")()
            , a = r("8d32");
        i.exportSymbol("proto.AppForceWebLogoutToWebResp", null, s),
            i.exportSymbol("proto.AuthLogOutReq", null, s),
            i.exportSymbol("proto.AuthLogOutResp", null, s),
            i.exportSymbol("proto.AuthLogoutToWebResp", null, s),
            i.exportSymbol("proto.ClickOKToWebResp", null, s),
            i.exportSymbol("proto.GetAlertConfigReq", null, s),
            i.exportSymbol("proto.GetAlertConfigResp", null, s),
            i.exportSymbol("proto.ScanWebQrcodeToWebResp", null, s),
            proto.AuthLogOutReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.AuthLogOutReq, o.Message),
        i.DEBUG && !COMPILED && (proto.AuthLogOutReq.displayName = "proto.AuthLogOutReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.AuthLogOutReq.prototype.toObject = function(e) {
                return proto.AuthLogOutReq.toObject(e, this)
            }
                ,
                proto.AuthLogOutReq.toObject = function(e, t) {
                    var r = {
                        appversioncode: o.Message.getFieldWithDefault(t, 1, 0),
                        devicetype: o.Message.getFieldWithDefault(t, 2, 0),
                        imei: o.Message.getFieldWithDefault(t, 3, ""),
                        brand: o.Message.getFieldWithDefault(t, 4, ""),
                        model: o.Message.getFieldWithDefault(t, 5, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.AuthLogOutReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.AuthLogOutReq;
                return proto.AuthLogOutReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.AuthLogOutReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setAppversioncode(o);
                            break;
                        case 2:
                            o = t.readInt32();
                            e.setDevicetype(o);
                            break;
                        case 3:
                            o = t.readString();
                            e.setImei(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setBrand(o);
                            break;
                        case 5:
                            o = t.readString();
                            e.setModel(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.AuthLogOutReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.AuthLogOutReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.AuthLogOutReq.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getAppversioncode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getDevicetype(),
                0 !== r && t.writeInt32(2, r),
                    r = e.getImei(),
                r.length > 0 && t.writeString(3, r),
                    r = e.getBrand(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getModel(),
                r.length > 0 && t.writeString(5, r)
            }
            ,
            proto.AuthLogOutReq.prototype.getAppversioncode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.AuthLogOutReq.prototype.setAppversioncode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.AuthLogOutReq.prototype.getDevicetype = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.AuthLogOutReq.prototype.setDevicetype = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.AuthLogOutReq.prototype.getImei = function() {
                return o.Message.getFieldWithDefault(this, 3, "")
            }
            ,
            proto.AuthLogOutReq.prototype.setImei = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.AuthLogOutReq.prototype.getBrand = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.AuthLogOutReq.prototype.setBrand = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.AuthLogOutReq.prototype.getModel = function() {
                return o.Message.getFieldWithDefault(this, 5, "")
            }
            ,
            proto.AuthLogOutReq.prototype.setModel = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.AuthLogOutResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.AuthLogOutResp, o.Message),
        i.DEBUG && !COMPILED && (proto.AuthLogOutResp.displayName = "proto.AuthLogOutResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.AuthLogOutResp.prototype.toObject = function(e) {
                return proto.AuthLogOutResp.toObject(e, this)
            }
                ,
                proto.AuthLogOutResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.AuthLogOutResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.AuthLogOutResp;
                return proto.AuthLogOutResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.AuthLogOutResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.AuthLogOutResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.AuthLogOutResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.AuthLogOutResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r)
            }
            ,
            proto.AuthLogOutResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.AuthLogOutResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.AuthLogOutResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.AuthLogOutResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.GetAlertConfigReq = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.GetAlertConfigReq, o.Message),
        i.DEBUG && !COMPILED && (proto.GetAlertConfigReq.displayName = "proto.GetAlertConfigReq"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetAlertConfigReq.prototype.toObject = function(e) {
                return proto.GetAlertConfigReq.toObject(e, this)
            }
                ,
                proto.GetAlertConfigReq.toObject = function(e, t) {
                    var r = {};
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GetAlertConfigReq.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GetAlertConfigReq;
                return proto.GetAlertConfigReq.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GetAlertConfigReq.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GetAlertConfigReq.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GetAlertConfigReq.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GetAlertConfigReq.serializeBinaryToWriter = function(e, t) {}
            ,
            proto.GetAlertConfigResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.GetAlertConfigResp, o.Message),
        i.DEBUG && !COMPILED && (proto.GetAlertConfigResp.displayName = "proto.GetAlertConfigResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.GetAlertConfigResp.prototype.toObject = function(e) {
                return proto.GetAlertConfigResp.toObject(e, this)
            }
                ,
                proto.GetAlertConfigResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        globalmuteflag: o.Message.getFieldWithDefault(t, 3, !1),
                        soundalertflag: o.Message.getFieldWithDefault(t, 4, !1),
                        vibrationalertflag: o.Message.getFieldWithDefault(t, 5, !1),
                        pokenotifyflag: o.Message.getFieldWithDefault(t, 6, !1)
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.GetAlertConfigResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.GetAlertConfigResp;
                return proto.GetAlertConfigResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.GetAlertConfigResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readBool();
                            e.setGlobalmuteflag(o);
                            break;
                        case 4:
                            o = t.readBool();
                            e.setSoundalertflag(o);
                            break;
                        case 5:
                            o = t.readBool();
                            e.setVibrationalertflag(o);
                            break;
                        case 6:
                            o = t.readBool();
                            e.setPokenotifyflag(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.GetAlertConfigResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.GetAlertConfigResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.GetAlertConfigResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getGlobalmuteflag(),
                r && t.writeBool(3, r),
                    r = e.getSoundalertflag(),
                r && t.writeBool(4, r),
                    r = e.getVibrationalertflag(),
                r && t.writeBool(5, r),
                    r = e.getPokenotifyflag(),
                r && t.writeBool(6, r)
            }
            ,
            proto.GetAlertConfigResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.GetAlertConfigResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.GetAlertConfigResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.GetAlertConfigResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.GetAlertConfigResp.prototype.getGlobalmuteflag = function() {
                return o.Message.getFieldWithDefault(this, 3, !1)
            }
            ,
            proto.GetAlertConfigResp.prototype.setGlobalmuteflag = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.GetAlertConfigResp.prototype.getSoundalertflag = function() {
                return o.Message.getFieldWithDefault(this, 4, !1)
            }
            ,
            proto.GetAlertConfigResp.prototype.setSoundalertflag = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.GetAlertConfigResp.prototype.getVibrationalertflag = function() {
                return o.Message.getFieldWithDefault(this, 5, !1)
            }
            ,
            proto.GetAlertConfigResp.prototype.setVibrationalertflag = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.GetAlertConfigResp.prototype.getPokenotifyflag = function() {
                return o.Message.getFieldWithDefault(this, 6, !1)
            }
            ,
            proto.GetAlertConfigResp.prototype.setPokenotifyflag = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.ScanWebQrcodeToWebResp = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.ScanWebQrcodeToWebResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ScanWebQrcodeToWebResp.displayName = "proto.ScanWebQrcodeToWebResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.ScanWebQrcodeToWebResp.prototype.toObject = function(e) {
                return proto.ScanWebQrcodeToWebResp.toObject(e, this)
            }
                ,
                proto.ScanWebQrcodeToWebResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        uid: o.Message.getFieldWithDefault(t, 3, 0),
                        smallavatarurl: o.Message.getFieldWithDefault(t, 4, ""),
                        orginavatarurl: o.Message.getFieldWithDefault(t, 5, ""),
                        userfiledomain: o.Message.getFieldWithDefault(t, 6, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.ScanWebQrcodeToWebResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.ScanWebQrcodeToWebResp;
                return proto.ScanWebQrcodeToWebResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.ScanWebQrcodeToWebResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setUid(o);
                            break;
                        case 4:
                            o = t.readString();
                            e.setSmallavatarurl(o);
                            break;
                        case 5:
                            o = t.readString();
                            e.setOrginavatarurl(o);
                            break;
                        case 6:
                            o = t.readString();
                            e.setUserfiledomain(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.ScanWebQrcodeToWebResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.ScanWebQrcodeToWebResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getUid(),
                0 !== r && t.writeInt64String(3, r),
                    r = e.getSmallavatarurl(),
                r.length > 0 && t.writeString(4, r),
                    r = e.getOrginavatarurl(),
                r.length > 0 && t.writeString(5, r),
                    r = e.getUserfiledomain(),
                r.length > 0 && t.writeString(6, r)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.getUid = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.setUid = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.getSmallavatarurl = function() {
                return o.Message.getFieldWithDefault(this, 4, "")
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.setSmallavatarurl = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.getOrginavatarurl = function() {
                return o.Message.getFieldWithDefault(this, 5, "")
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.setOrginavatarurl = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.getUserfiledomain = function() {
                return o.Message.getFieldWithDefault(this, 6, "")
            }
            ,
            proto.ScanWebQrcodeToWebResp.prototype.setUserfiledomain = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.ClickOKToWebResp = function(e) {
                o.Message.initialize(this, e, 0, -1, proto.ClickOKToWebResp.repeatedFields_, null)
            }
            ,
            i.inherits(proto.ClickOKToWebResp, o.Message),
        i.DEBUG && !COMPILED && (proto.ClickOKToWebResp.displayName = "proto.ClickOKToWebResp"),
            proto.ClickOKToWebResp.repeatedFields_ = [12],
        o.Message.GENERATE_TO_OBJECT && (proto.ClickOKToWebResp.prototype.toObject = function(e) {
                return proto.ClickOKToWebResp.toObject(e, this)
            }
                ,
                proto.ClickOKToWebResp.toObject = function(e, t) {
                    var r, i = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, ""),
                        deviceid: o.Message.getFieldWithDefault(t, 3, 0),
                        sessionid: o.Message.getFieldWithDefault(t, 4, 0),
                        nonickname: o.Message.getFieldWithDefault(t, 5, !1),
                        noemail: o.Message.getFieldWithDefault(t, 6, !1),
                        cert: o.Message.getFieldWithDefault(t, 7, ""),
                        bodyaes: (r = t.getBodyaes()) && a.AesKeyAndIV.toObject(e, r),
                        userfiledomain: o.Message.getFieldWithDefault(t, 9, ""),
                        dialogfiledomain: o.Message.getFieldWithDefault(t, 10, ""),
                        user: (r = t.getUser()) && a.User.toObject(e, r),
                        configitemlistList: o.Message.toObjectList(t.getConfigitemlistList(), a.ConfigItem.toObject, e)
                    };
                    return e && (i.$jspbMessageInstance = t),
                        i
                }
        ),
            proto.ClickOKToWebResp.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.ClickOKToWebResp;
                return proto.ClickOKToWebResp.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.ClickOKToWebResp.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setErrorcode(o);
                            break;
                        case 2:
                            o = t.readString();
                            e.setErrormessage(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setDeviceid(o);
                            break;
                        case 4:
                            o = t.readInt64String();
                            e.setSessionid(o);
                            break;
                        case 5:
                            o = t.readBool();
                            e.setNonickname(o);
                            break;
                        case 6:
                            o = t.readBool();
                            e.setNoemail(o);
                            break;
                        case 7:
                            o = t.readString();
                            e.setCert(o);
                            break;
                        case 8:
                            o = new a.AesKeyAndIV;
                            t.readMessage(o, a.AesKeyAndIV.deserializeBinaryFromReader),
                                e.setBodyaes(o);
                            break;
                        case 9:
                            o = t.readString();
                            e.setUserfiledomain(o);
                            break;
                        case 10:
                            o = t.readString();
                            e.setDialogfiledomain(o);
                            break;
                        case 11:
                            o = new a.User;
                            t.readMessage(o, a.User.deserializeBinaryFromReader),
                                e.setUser(o);
                            break;
                        case 12:
                            o = new a.ConfigItem;
                            t.readMessage(o, a.ConfigItem.deserializeBinaryFromReader),
                                e.addConfigitemlist(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.ClickOKToWebResp.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.ClickOKToWebResp.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.ClickOKToWebResp.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getErrorcode(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getErrormessage(),
                r.length > 0 && t.writeString(2, r),
                    r = e.getDeviceid(),
                0 !== r && t.writeInt64String(3, r),
                    r = e.getSessionid(),
                0 !== r && t.writeInt64String(4, r),
                    r = e.getNonickname(),
                r && t.writeBool(5, r),
                    r = e.getNoemail(),
                r && t.writeBool(6, r),
                    r = e.getCert(),
                r.length > 0 && t.writeString(7, r),
                    r = e.getBodyaes(),
                null != r && t.writeMessage(8, r, a.AesKeyAndIV.serializeBinaryToWriter),
                    r = e.getUserfiledomain(),
                r.length > 0 && t.writeString(9, r),
                    r = e.getDialogfiledomain(),
                r.length > 0 && t.writeString(10, r),
                    r = e.getUser(),
                null != r && t.writeMessage(11, r, a.User.serializeBinaryToWriter),
                    r = e.getConfigitemlistList(),
                r.length > 0 && t.writeRepeatedMessage(12, r, a.ConfigItem.serializeBinaryToWriter)
            }
            ,
            proto.ClickOKToWebResp.prototype.getErrorcode = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.ClickOKToWebResp.prototype.setErrorcode = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.ClickOKToWebResp.prototype.getErrormessage = function() {
                return o.Message.getFieldWithDefault(this, 2, "")
            }
            ,
            proto.ClickOKToWebResp.prototype.setErrormessage = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.ClickOKToWebResp.prototype.getDeviceid = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.ClickOKToWebResp.prototype.setDeviceid = function(e) {
                o.Message.setField(this, 3, e)
            }
        ,
        proto.ClickOKToWebResp.prototype.getSessionid = function() {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }
        ,
        proto.ClickOKToWebResp.prototype.setSessionid = function(e) {
            o.Message.setField(this, 4, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.getNonickname = function() {
            return o.Message.getFieldWithDefault(this, 5, !1)
        }
        ,
        proto.ClickOKToWebResp.prototype.setNonickname = function(e) {
            o.Message.setField(this, 5, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.getNoemail = function() {
            return o.Message.getFieldWithDefault(this, 6, !1)
        }
        ,
        proto.ClickOKToWebResp.prototype.setNoemail = function(e) {
            o.Message.setField(this, 6, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.getCert = function() {
            return o.Message.getFieldWithDefault(this, 7, "")
        }
        ,
        proto.ClickOKToWebResp.prototype.setCert = function(e) {
            o.Message.setField(this, 7, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.getBodyaes = function() {
            return o.Message.getWrapperField(this, a.AesKeyAndIV, 8)
        }
        ,
        proto.ClickOKToWebResp.prototype.setBodyaes = function(e) {
            o.Message.setWrapperField(this, 8, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.clearBodyaes = function() {
            this.setBodyaes(void 0)
        }
        ,
        proto.ClickOKToWebResp.prototype.hasBodyaes = function() {
            return null != o.Message.getField(this, 8)
        }
        ,
        proto.ClickOKToWebResp.prototype.getUserfiledomain = function() {
            return o.Message.getFieldWithDefault(this, 9, "")
        }
        ,
        proto.ClickOKToWebResp.prototype.setUserfiledomain = function(e) {
            o.Message.setField(this, 9, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.getDialogfiledomain = function() {
            return o.Message.getFieldWithDefault(this, 10, "")
        }
        ,
        proto.ClickOKToWebResp.prototype.setDialogfiledomain = function(e) {
            o.Message.setField(this, 10, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.getUser = function() {
            return o.Message.getWrapperField(this, a.User, 11)
        }
        ,
        proto.ClickOKToWebResp.prototype.setUser = function(e) {
            o.Message.setWrapperField(this, 11, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.clearUser = function() {
            this.setUser(void 0)
        }
        ,
        proto.ClickOKToWebResp.prototype.hasUser = function() {
            return null != o.Message.getField(this, 11)
        }
        ,
        proto.ClickOKToWebResp.prototype.getConfigitemlistList = function() {
            return o.Message.getRepeatedWrapperField(this, a.ConfigItem, 12)
        }
        ,
        proto.ClickOKToWebResp.prototype.setConfigitemlistList = function(e) {
            o.Message.setRepeatedWrapperField(this, 12, e)
        }
        ,
        proto.ClickOKToWebResp.prototype.addConfigitemlist = function(e, t) {
            return o.Message.addToRepeatedWrapperField(this, 12, e, proto.ConfigItem, t)
        }
        ,
        proto.ClickOKToWebResp.prototype.clearConfigitemlistList = function() {
            this.setConfigitemlistList([])
        }
        ,
        proto.AuthLogoutToWebResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.AuthLogoutToWebResp, o.Message),
        i.DEBUG && !COMPILED && (proto.AuthLogoutToWebResp.displayName = "proto.AuthLogoutToWebResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.AuthLogoutToWebResp.prototype.toObject = function(e) {
                return proto.AuthLogoutToWebResp.toObject(e, this)
            }
                ,
                proto.AuthLogoutToWebResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.AuthLogoutToWebResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AuthLogoutToWebResp;
            return proto.AuthLogoutToWebResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AuthLogoutToWebResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AuthLogoutToWebResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AuthLogoutToWebResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AuthLogoutToWebResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.AuthLogoutToWebResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.AuthLogoutToWebResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AuthLogoutToWebResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.AuthLogoutToWebResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        proto.AppForceWebLogoutToWebResp = function(e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }
        ,
        i.inherits(proto.AppForceWebLogoutToWebResp, o.Message),
        i.DEBUG && !COMPILED && (proto.AppForceWebLogoutToWebResp.displayName = "proto.AppForceWebLogoutToWebResp"),
        o.Message.GENERATE_TO_OBJECT && (proto.AppForceWebLogoutToWebResp.prototype.toObject = function(e) {
                return proto.AppForceWebLogoutToWebResp.toObject(e, this)
            }
                ,
                proto.AppForceWebLogoutToWebResp.toObject = function(e, t) {
                    var r = {
                        errorcode: o.Message.getFieldWithDefault(t, 1, 0),
                        errormessage: o.Message.getFieldWithDefault(t, 2, "")
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
        proto.AppForceWebLogoutToWebResp.deserializeBinary = function(e) {
            var t = new o.BinaryReader(e)
                , r = new proto.AppForceWebLogoutToWebResp;
            return proto.AppForceWebLogoutToWebResp.deserializeBinaryFromReader(r, t)
        }
        ,
        proto.AppForceWebLogoutToWebResp.deserializeBinaryFromReader = function(e, t) {
            while (t.nextField()) {
                if (t.isEndGroup())
                    break;
                var r = t.getFieldNumber();
                switch (r) {
                    case 1:
                        var o = t.readInt32();
                        e.setErrorcode(o);
                        break;
                    case 2:
                        o = t.readString();
                        e.setErrormessage(o);
                        break;
                    default:
                        t.skipField();
                        break
                }
            }
            return e
        }
        ,
        proto.AppForceWebLogoutToWebResp.prototype.serializeBinary = function() {
            var e = new o.BinaryWriter;
            return proto.AppForceWebLogoutToWebResp.serializeBinaryToWriter(this, e),
                e.getResultBuffer()
        }
        ,
        proto.AppForceWebLogoutToWebResp.serializeBinaryToWriter = function(e, t) {
            var r = void 0;
            r = e.getErrorcode(),
            0 !== r && t.writeInt32(1, r),
                r = e.getErrormessage(),
            r.length > 0 && t.writeString(2, r)
        }
        ,
        proto.AppForceWebLogoutToWebResp.prototype.getErrorcode = function() {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }
        ,
        proto.AppForceWebLogoutToWebResp.prototype.setErrorcode = function(e) {
            o.Message.setField(this, 1, e)
        }
        ,
        proto.AppForceWebLogoutToWebResp.prototype.getErrormessage = function() {
            return o.Message.getFieldWithDefault(this, 2, "")
        }
        ,
        proto.AppForceWebLogoutToWebResp.prototype.setErrormessage = function(e) {
            o.Message.setField(this, 2, e)
        }
        ,
        i.object.extend(t, proto)
    },
    f701: function(e, t, r) {},
    f741: function(e, t, r) {
        var o = r("8513")
            , i = o
            , s = Function("return this")();
        i.exportSymbol("proto.XLNetworkRequest", null, s),
            i.exportSymbol("proto.XLNetworkResponse", null, s),
            proto.XLNetworkRequest = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.XLNetworkRequest, o.Message),
        i.DEBUG && !COMPILED && (proto.XLNetworkRequest.displayName = "proto.XLNetworkRequest"),
        o.Message.GENERATE_TO_OBJECT && (proto.XLNetworkRequest.prototype.toObject = function(e) {
                return proto.XLNetworkRequest.toObject(e, this)
            }
                ,
                proto.XLNetworkRequest.toObject = function(e, t) {
                    var r = {
                        cmdid: o.Message.getFieldWithDefault(t, 1, 0),
                        messageseq: o.Message.getFieldWithDefault(t, 2, 0),
                        deviceid: o.Message.getFieldWithDefault(t, 3, 0),
                        sessionid: o.Message.getFieldWithDefault(t, 4, 0),
                        uid: o.Message.getFieldWithDefault(t, 5, 0),
                        protocolversion: o.Message.getFieldWithDefault(t, 6, 0),
                        destid: o.Message.getFieldWithDefault(t, 7, 0),
                        body: t.getBody_asB64()
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.XLNetworkRequest.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.XLNetworkRequest;
                return proto.XLNetworkRequest.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.XLNetworkRequest.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setCmdid(o);
                            break;
                        case 2:
                            o = t.readInt64String();
                            e.setMessageseq(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setDeviceid(o);
                            break;
                        case 4:
                            o = t.readInt64String();
                            e.setSessionid(o);
                            break;
                        case 5:
                            o = t.readInt64String();
                            e.setUid(o);
                            break;
                        case 6:
                            o = t.readInt32();
                            e.setProtocolversion(o);
                            break;
                        case 7:
                            o = t.readInt64String();
                            e.setDestid(o);
                            break;
                        case 8:
                            o = t.readBytes();
                            e.setBody(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.XLNetworkRequest.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.XLNetworkRequest.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.XLNetworkRequest.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getCmdid(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getMessageseq(),
                0 !== r && t.writeInt64String(2, r),
                    r = e.getDeviceid(),
                0 !== r && t.writeInt64String(3, r),
                    r = e.getSessionid(),
                0 !== r && t.writeInt64String(4, r),
                    r = e.getUid(),
                0 !== r && t.writeInt64String(5, r),
                    r = e.getProtocolversion(),
                0 !== r && t.writeInt32(6, r),
                    r = e.getDestid(),
                0 !== r && t.writeInt64String(7, r),
                    r = e.getBody_asU8(),
                r.length > 0 && t.writeBytes(8, r)
            }
            ,
            proto.XLNetworkRequest.prototype.getCmdid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.XLNetworkRequest.prototype.setCmdid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.XLNetworkRequest.prototype.getMessageseq = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.XLNetworkRequest.prototype.setMessageseq = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.XLNetworkRequest.prototype.getDeviceid = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.XLNetworkRequest.prototype.setDeviceid = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.XLNetworkRequest.prototype.getSessionid = function() {
                return o.Message.getFieldWithDefault(this, 4, 0)
            }
            ,
            proto.XLNetworkRequest.prototype.setSessionid = function(e) {
                o.Message.setField(this, 4, e)
            }
            ,
            proto.XLNetworkRequest.prototype.getUid = function() {
                return o.Message.getFieldWithDefault(this, 5, 0)
            }
            ,
            proto.XLNetworkRequest.prototype.setUid = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.XLNetworkRequest.prototype.getProtocolversion = function() {
                return o.Message.getFieldWithDefault(this, 6, 0)
            }
            ,
            proto.XLNetworkRequest.prototype.setProtocolversion = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.XLNetworkRequest.prototype.getDestid = function() {
                return o.Message.getFieldWithDefault(this, 7, 0)
            }
            ,
            proto.XLNetworkRequest.prototype.setDestid = function(e) {
                o.Message.setField(this, 7, e)
            }
            ,
            proto.XLNetworkRequest.prototype.getBody = function() {
                return o.Message.getFieldWithDefault(this, 8, "")
            }
            ,
            proto.XLNetworkRequest.prototype.getBody_asB64 = function() {
                return o.Message.bytesAsB64(this.getBody())
            }
            ,
            proto.XLNetworkRequest.prototype.getBody_asU8 = function() {
                return o.Message.bytesAsU8(this.getBody())
            }
            ,
            proto.XLNetworkRequest.prototype.setBody = function(e) {
                o.Message.setField(this, 8, e)
            }
            ,
            proto.XLNetworkResponse = function(e) {
                o.Message.initialize(this, e, 0, -1, null, null)
            }
            ,
            i.inherits(proto.XLNetworkResponse, o.Message),
        i.DEBUG && !COMPILED && (proto.XLNetworkResponse.displayName = "proto.XLNetworkResponse"),
        o.Message.GENERATE_TO_OBJECT && (proto.XLNetworkResponse.prototype.toObject = function(e) {
                return proto.XLNetworkResponse.toObject(e, this)
            }
                ,
                proto.XLNetworkResponse.toObject = function(e, t) {
                    var r = {
                        cmdid: o.Message.getFieldWithDefault(t, 1, 0),
                        messageseq: o.Message.getFieldWithDefault(t, 2, 0),
                        deviceid: o.Message.getFieldWithDefault(t, 3, 0),
                        uid: o.Message.getFieldWithDefault(t, 5, 0),
                        protocolversion: o.Message.getFieldWithDefault(t, 6, 0),
                        body: t.getBody_asB64()
                    };
                    return e && (r.$jspbMessageInstance = t),
                        r
                }
        ),
            proto.XLNetworkResponse.deserializeBinary = function(e) {
                var t = new o.BinaryReader(e)
                    , r = new proto.XLNetworkResponse;
                return proto.XLNetworkResponse.deserializeBinaryFromReader(r, t)
            }
            ,
            proto.XLNetworkResponse.deserializeBinaryFromReader = function(e, t) {
                while (t.nextField()) {
                    if (t.isEndGroup())
                        break;
                    var r = t.getFieldNumber();
                    switch (r) {
                        case 1:
                            var o = t.readInt32();
                            e.setCmdid(o);
                            break;
                        case 2:
                            o = t.readInt64String();
                            e.setMessageseq(o);
                            break;
                        case 3:
                            o = t.readInt64String();
                            e.setDeviceid(o);
                            break;
                        case 5:
                            o = t.readInt64String();
                            e.setUid(o);
                            break;
                        case 6:
                            o = t.readInt32();
                            e.setProtocolversion(o);
                            break;
                        case 8:
                            o = t.readBytes();
                            e.setBody(o);
                            break;
                        default:
                            t.skipField();
                            break
                    }
                }
                return e
            }
            ,
            proto.XLNetworkResponse.prototype.serializeBinary = function() {
                var e = new o.BinaryWriter;
                return proto.XLNetworkResponse.serializeBinaryToWriter(this, e),
                    e.getResultBuffer()
            }
            ,
            proto.XLNetworkResponse.serializeBinaryToWriter = function(e, t) {
                var r = void 0;
                r = e.getCmdid(),
                0 !== r && t.writeInt32(1, r),
                    r = e.getMessageseq(),
                0 !== r && t.writeInt64String(2, r),
                    r = e.getDeviceid(),
                0 !== r && t.writeInt64String(3, r),
                    r = e.getUid(),
                0 !== r && t.writeInt64String(5, r),
                    r = e.getProtocolversion(),
                0 !== r && t.writeInt32(6, r),
                    r = e.getBody_asU8(),
                r.length > 0 && t.writeBytes(8, r)
            }
            ,
            proto.XLNetworkResponse.prototype.getCmdid = function() {
                return o.Message.getFieldWithDefault(this, 1, 0)
            }
            ,
            proto.XLNetworkResponse.prototype.setCmdid = function(e) {
                o.Message.setField(this, 1, e)
            }
            ,
            proto.XLNetworkResponse.prototype.getMessageseq = function() {
                return o.Message.getFieldWithDefault(this, 2, 0)
            }
            ,
            proto.XLNetworkResponse.prototype.setMessageseq = function(e) {
                o.Message.setField(this, 2, e)
            }
            ,
            proto.XLNetworkResponse.prototype.getDeviceid = function() {
                return o.Message.getFieldWithDefault(this, 3, 0)
            }
            ,
            proto.XLNetworkResponse.prototype.setDeviceid = function(e) {
                o.Message.setField(this, 3, e)
            }
            ,
            proto.XLNetworkResponse.prototype.getUid = function() {
                return o.Message.getFieldWithDefault(this, 5, 0)
            }
            ,
            proto.XLNetworkResponse.prototype.setUid = function(e) {
                o.Message.setField(this, 5, e)
            }
            ,
            proto.XLNetworkResponse.prototype.getProtocolversion = function() {
                return o.Message.getFieldWithDefault(this, 6, 0)
            }
            ,
            proto.XLNetworkResponse.prototype.setProtocolversion = function(e) {
                o.Message.setField(this, 6, e)
            }
            ,
            proto.XLNetworkResponse.prototype.getBody = function() {
                return o.Message.getFieldWithDefault(this, 8, "")
            }
            ,
            proto.XLNetworkResponse.prototype.getBody_asB64 = function() {
                return o.Message.bytesAsB64(this.getBody())
            }
            ,
            proto.XLNetworkResponse.prototype.getBody_asU8 = function() {
                return o.Message.bytesAsU8(this.getBody())
            }
            ,
            proto.XLNetworkResponse.prototype.setBody = function(e) {
                o.Message.setField(this, 8, e)
            }
            ,
            i.object.extend(t, proto)
    }
});
