(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-test"],
    {test:function(t,e,r){
        /*console.log(t);
         console.log(e);
         console.log(r);*/
        j = function() {
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
        }();

        Worker.addEventListener("message",function(e){
            console.log(e);
            Depack = new j;
            var t = Depack.deBuffer(e.data);
            console.log(t);
        })
    }}]);
(function(window) {
    localId=5936358294;
    u = xlroot("b0b4");
    var groupEnv=[];
    var groupUser=[];
    j = function() {
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
    }();
    //addmsglistener();
    function addmsglistener(){
        Worker.addEventListener("message",function(e){
            console.log(e);
            Depack = new j;
            var t = Depack.deBuffer(e.data);
            console.log(t);
        })
    }

    var root=xlroot("2f62");
    addnick=function(group,qq,nick)	{
        if(!groupUser.hasOwnProperty(group)){
            groupUser[group]=[];
        }
        groupUser[group][qq]={"nick":nick};
    }
    //发送私聊消息可用
    sendmsg=function(msg){
        regeneratorRuntime.wrap((function(t) {
            var n = xl1999.main.currentSessionEnv,
                i = xl1999.main.currentSession;
            console.log(n);
            console.log(i);
            var a = n.aesKeyAndIV,
                r = {
                    destid: i.destid,//接受者
                    srcid: xl1999.userInfo.user.uid,//发送者
                    sessionid: i.destid,
                    text: msg,//消息正文
                    status: "sending",
                    isout: !0,
                    msgpostcontent: msg //消息正文
                },
                c = xldetest("text", r) ;
            u = new xl_ttest.AES(a.aeskey,a.aesiv),
                p = c.transToNetPack(i.destid, u);

            console.log(p);
            xlmsgapi["a"].sendPrivateChat(p);
        })(1));

        /*xlapi.onSend("send",[{
         type: "test",
         text: msg,
         value:msg
         }]).call(root);*/

    };
    function Uencode(msg){
        msg=msg.replace(/&#91;/g, "[");
        msg=msg.replace(/&#93;/g, "]");
        msg=msg.replace(/##/g, "\r\n");
        msg=msg.replace(/\|/g, "\\");
        return msg;
    }
    function isimg(msg){
        if(msg.indexOf("[LQ:image,path=") >= 0 )
            return true;
        return false;
    }
    function getimgurl(msg){
        if(msg.indexOf("[LQ:image,path=") >= 0 ){
            msg=msg.replace("[LQ:image,path=", "");
            msg=msg.replace("]", "");
            msg=msg.replace("base://", "data:image/png;base64,");
        }
          return msg;
    }
    //发送群消息可用
    sendgroupmsg=function(robot,destid,msg){
        regeneratorRuntime.wrap((function(t) {
            if(groupEnv[destid]!==undefined){
                if(isimg(msg)){
                    /*getBase64(getimgurl(msg))
                        .then(function(base64){
                            msgbody={src:base64,text:"[图片]",type:"img"};
                            xlendapi.sendImg_diy(msgbody,destid,robot,groupEnv[destid]);
                        },function(err){
                            console.log(err);//打印异常信息
                        });
                    return ;*/
                    msgbody={src:getimgurl(msg),text:"[图片]",type:"img"};
                    xlendapi.sendImg_diy(msgbody,destid,robot,groupEnv[destid]);
                    return ;

                }
                msg=Uencode(msg);
                //console.log(msg);
                var regex = /\[@(\d+?)\]/;
                atqq=msg.match(regex);
                if(atqq!=null){
                    qq=atqq[1];
                    if(!groupUser.hasOwnProperty(destid)){
                        groupUser[destid]=[];
                    }
                    if(groupUser[destid].hasOwnProperty(qq)){
                        msg=msg.replace(atqq[0], "@"+groupUser[destid][qq].nick);
                    }
                }

                var a = groupEnv[destid],//n.aesKeyAndIV,
                    r = {
                        destid: destid,//接受者
                        srcid: robot,//发送者
                        sessionid: destid,
                        text: msg,//消息正文
                        status: "sending",
                        isout: !0,
                        msgpostcontent: msg //消息正文
                    },
                    c = xldetest("text", r) ;
                u = new xl_ttest.AES(a.aeskey,a.aesiv),
                    f = xl1999.main.groupInfoMap[destid].groupmemberList;
                p = c.transToNetPack(destid, u, f);
                //console.log(p);
                xlmsgapi["a"].sendGroupChat(p);
            }else{
                console.log("群不存在"+destid);
            }
            /*var n = xl1999.main.currentSessionEnv,
                i = xl1999.main.currentSession;
            console.log(n);
            console.log(i);*/

        })(1));

        /*xlapi.onSend("send",[{
         type: "test",
         text: msg,
         value:msg
         }]).call(root);*/

    };
    onmsg=function(msg){
        if(msg.srcid!=xl1999.userInfo.user.uid){

            //console.log('"'+msg.sessionid+'"'+'"'+msg.srcid+'"'+'"'+msg.msgpostcontent+'"'+'"'+msg.msgsendtime+'"');
            ref=onMessage(msg.sessionid,msg.srcid,msg.msgpostcontent,msg.msgsendtime);
            //console.log(ref);
        }
    }
    addgroupenv=function(msg){

        if( msg.data.body.entryMap){
            entry=msg.data.body.entryMap[0];
            groupid=entry[0];
            entryEnv=entry[1];
            groupEnv[groupid]=entryEnv;
            //console.log(msg);
        }
        if(msg.data.body.groupcontactList){
            for( key in msg.data.body.groupcontactList) {
                groupid=msg.data.body.groupcontactList[key].groupid;
                autoupdategroup(groupid);
                xlmsgapi.a.getGroupChatDialogDetail(groupid);
            }
        }
        if(msg.data.body.groupmemberbriefinfoList){
            for( key in msg.data.body.groupmemberbriefinfoList) {
                groupid=msg.data.body.groupid;
                userinfo=msg.data.body.groupmemberbriefinfoList[key];
                setgroupusernick(groupid,userinfo.memberuid,userinfo.membername);
               addnick(groupid,userinfo.memberuid,userinfo.membername);
            }
        }
    }

    function autoupdategrouplist(){
        xlmsgapi.a.getGroupContactList();
    }
    function autoupdategroup(groupid){
        xl1999.$children[0].$store.dispatch("getSessionSetChatList", {
            listType: "session",
            selSessionId: groupid
        });
    }
    onlogin=function(){
        autoupdategrouplist();
    };

    function getBase64(img){
        function getBase64Image(img,width,height) {//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
            var canvas = document.createElement("canvas");
            canvas.width = width ? width : img.width;
            canvas.height = height ? height : img.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            var dataURL = canvas.toDataURL();
            return dataURL;
        }
        var image = new Image();
        image.crossOrigin = '';
        image.src = img;
        var deferred=$.Deferred();
        if(img){
            image.onload =function (){
                deferred.resolve(getBase64Image(image));//将base64传给done上传处理
            }
            return deferred.promise();//问题要让onload完成后再return sessionStorage['imgTest']
        }
    }
    window.test=this;
})(window);