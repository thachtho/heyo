(()=>{
    const socket = new WebSocket('ws://localhost:2000');

    socket.onopen = () => {
      console.log('Connected to WebSocket server');


      var t = {
        46700: (t,e,n)=>{
            var r = {
                "./af": 42786,
                "./af.js": 42786,
                "./ar": 30867,
                "./ar-dz": 14130,
                "./ar-dz.js": 14130,
                "./ar-kw": 96135,
                "./ar-kw.js": 96135,
                "./ar-ly": 56440,
                "./ar-ly.js": 56440,
                "./ar-ma": 47702,
                "./ar-ma.js": 47702,
                "./ar-sa": 16040,
                "./ar-sa.js": 16040,
                "./ar-tn": 37100,
                "./ar-tn.js": 37100,
                "./ar.js": 30867,
                "./az": 31083,
                "./az.js": 31083,
                "./be": 9808,
                "./be.js": 9808,
                "./bg": 68338,
                "./bg.js": 68338,
                "./bm": 67438,
                "./bm.js": 67438,
                "./bn": 8905,
                "./bn-bd": 76225,
                "./bn-bd.js": 76225,
                "./bn.js": 8905,
                "./bo": 11560,
                "./bo.js": 11560,
                "./br": 1278,
                "./br.js": 1278,
                "./bs": 80622,
                "./bs.js": 80622,
                "./ca": 2468,
                "./ca.js": 2468,
                "./cs": 5822,
                "./cs.js": 5822,
                "./cv": 50877,
                "./cv.js": 50877,
                "./cy": 47373,
                "./cy.js": 47373,
                "./da": 24780,
                "./da.js": 24780,
                "./de": 59740,
                "./de-at": 60217,
                "./de-at.js": 60217,
                "./de-ch": 60894,
                "./de-ch.js": 60894,
                "./de.js": 59740,
                "./dv": 5300,
                "./dv.js": 5300,
                "./el": 50837,
                "./el.js": 50837,
                "./en-au": 78348,
                "./en-au.js": 78348,
                "./en-ca": 77925,
                "./en-ca.js": 77925,
                "./en-gb": 22243,
                "./en-gb.js": 22243,
                "./en-ie": 46436,
                "./en-ie.js": 46436,
                "./en-il": 47207,
                "./en-il.js": 47207,
                "./en-in": 44175,
                "./en-in.js": 44175,
                "./en-nz": 76319,
                "./en-nz.js": 76319,
                "./en-sg": 31662,
                "./en-sg.js": 31662,
                "./eo": 92915,
                "./eo.js": 92915,
                "./es": 55655,
                "./es-do": 55251,
                "./es-do.js": 55251,
                "./es-mx": 96112,
                "./es-mx.js": 96112,
                "./es-us": 71146,
                "./es-us.js": 71146,
                "./es.js": 55655,
                "./et": 5603,
                "./et.js": 5603,
                "./eu": 77763,
                "./eu.js": 77763,
                "./fa": 76959,
                "./fa.js": 76959,
                "./fi": 11897,
                "./fi.js": 11897,
                "./fil": 42549,
                "./fil.js": 42549,
                "./fo": 94694,
                "./fo.js": 94694,
                "./fr": 94470,
                "./fr-ca": 63049,
                "./fr-ca.js": 63049,
                "./fr-ch": 52330,
                "./fr-ch.js": 52330,
                "./fr.js": 94470,
                "./fy": 5044,
                "./fy.js": 5044,
                "./ga": 29295,
                "./ga.js": 29295,
                "./gd": 2101,
                "./gd.js": 2101,
                "./gl": 38794,
                "./gl.js": 38794,
                "./gom-deva": 27884,
                "./gom-deva.js": 27884,
                "./gom-latn": 23168,
                "./gom-latn.js": 23168,
                "./gu": 95349,
                "./gu.js": 95349,
                "./he": 24206,
                "./he.js": 24206,
                "./hi": 30094,
                "./hi.js": 30094,
                "./hr": 30316,
                "./hr.js": 30316,
                "./hu": 22138,
                "./hu.js": 22138,
                "./hy-am": 11423,
                "./hy-am.js": 11423,
                "./id": 29218,
                "./id.js": 29218,
                "./is": 90135,
                "./is.js": 90135,
                "./it": 90626,
                "./it-ch": 10150,
                "./it-ch.js": 10150,
                "./it.js": 90626,
                "./ja": 39183,
                "./ja.js": 39183,
                "./jv": 24286,
                "./jv.js": 24286,
                "./ka": 12105,
                "./ka.js": 12105,
                "./kk": 47772,
                "./kk.js": 47772,
                "./km": 18758,
                "./km.js": 18758,
                "./kn": 79282,
                "./kn.js": 79282,
                "./ko": 33730,
                "./ko.js": 33730,
                "./ku": 1408,
                "./ku.js": 1408,
                "./ky": 33291,
                "./ky.js": 33291,
                "./lb": 36841,
                "./lb.js": 36841,
                "./lo": 55466,
                "./lo.js": 55466,
                "./lt": 57010,
                "./lt.js": 57010,
                "./lv": 37595,
                "./lv.js": 37595,
                "./me": 39861,
                "./me.js": 39861,
                "./mi": 35493,
                "./mi.js": 35493,
                "./mk": 95966,
                "./mk.js": 95966,
                "./ml": 87341,
                "./ml.js": 87341,
                "./mn": 4462,
                "./mn.js": 4462,
                "./mr": 10370,
                "./mr.js": 10370,
                "./ms": 9847,
                "./ms-my": 41237,
                "./ms-my.js": 41237,
                "./ms.js": 9847,
                "./mt": 72126,
                "./mt.js": 72126,
                "./my": 56165,
                "./my.js": 56165,
                "./nb": 64924,
                "./nb.js": 64924,
                "./ne": 16744,
                "./ne.js": 16744,
                "./nl": 93901,
                "./nl-be": 59814,
                "./nl-be.js": 59814,
                "./nl.js": 93901,
                "./nn": 83877,
                "./nn.js": 83877,
                "./oc-lnc": 92135,
                "./oc-lnc.js": 92135,
                "./pa-in": 15858,
                "./pa-in.js": 15858,
                "./pl": 64495,
                "./pl.js": 64495,
                "./pt": 89520,
                "./pt-br": 57971,
                "./pt-br.js": 57971,
                "./pt.js": 89520,
                "./ro": 96459,
                "./ro.js": 96459,
                "./ru": 21793,
                "./ru.js": 21793,
                "./sd": 40950,
                "./sd.js": 40950,
                "./se": 10490,
                "./se.js": 10490,
                "./si": 90124,
                "./si.js": 90124,
                "./sk": 64249,
                "./sk.js": 64249,
                "./sl": 14985,
                "./sl.js": 14985,
                "./sq": 51104,
                "./sq.js": 51104,
                "./sr": 49131,
                "./sr-cyrl": 79915,
                "./sr-cyrl.js": 79915,
                "./sr.js": 49131,
                "./ss": 95606,
                "./ss.js": 95606,
                "./sv": 98760,
                "./sv.js": 98760,
                "./sw": 91172,
                "./sw.js": 91172,
                "./ta": 27333,
                "./ta.js": 27333,
                "./te": 23110,
                "./te.js": 23110,
                "./tet": 52095,
                "./tet.js": 52095,
                "./tg": 27321,
                "./tg.js": 27321,
                "./th": 9041,
                "./th.js": 9041,
                "./tk": 19005,
                "./tk.js": 19005,
                "./tl-ph": 75768,
                "./tl-ph.js": 75768,
                "./tlh": 89444,
                "./tlh.js": 89444,
                "./tr": 72397,
                "./tr.js": 72397,
                "./tzl": 28254,
                "./tzl.js": 28254,
                "./tzm": 51106,
                "./tzm-latn": 30699,
                "./tzm-latn.js": 30699,
                "./tzm.js": 51106,
                "./ug-cn": 9288,
                "./ug-cn.js": 9288,
                "./uk": 67691,
                "./uk.js": 67691,
                "./ur": 13795,
                "./ur.js": 13795,
                "./uz": 6791,
                "./uz-latn": 60588,
                "./uz-latn.js": 60588,
                "./uz.js": 6791,
                "./vi": 65666,
                "./vi.js": 65666,
                "./x-pseudo": 14378,
                "./x-pseudo.js": 14378,
                "./yo": 75805,
                "./yo.js": 75805,
                "./zh-cn": 83839,
                "./zh-cn.js": 83839,
                "./zh-hk": 55726,
                "./zh-hk.js": 55726,
                "./zh-mo": 99807,
                "./zh-mo.js": 99807,
                "./zh-tw": 74152,
                "./zh-tw.js": 74152
            };
            function i(t) {
                var e = o(t);
                return n(e)
            }
            function o(t) {
                if (!n.o(r, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                    e
                }
                return r[t]
            }
            i.keys = function() {
                return Object.keys(r)
            }
            ,
            i.resolve = o,
            t.exports = i,
            i.id = 46700
        }
        ,
        61597: (t,e,n)=>{
            "use strict";
            n.r(e),
            n.d(e, {
                default: ()=>ze
            });
            var r = n(15861)
              , i = n(29439)
              , o = n(67294)
              , a = n(82031)
              , l = n(4942)
              , s = n(12612);
            const c = {
                primary: "#f12e35",
                secondary: "#4ecdc4",
                black: "#000",
                btn: "#1966fe",
                white: "#fff",
                mediumGrey: "#6e6969",
                lightGrey: "#f8f4f4",
                danger: "#ff5252",
                darkGrey: "#0c0c0c"
            };
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach((function(e) {
                        (0,
                        l.default)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            const f = d(d({}, s.default), {}, {
                colors: d(d({}, s.default.colors), {}, {
                    primary: c.primary,
                    background: c.white
                })
            });
            var h = n(62256)
              , g = n(10398)
              , p = n(93433)
              , y = n(31401)
              , m = n(15671)
              , v = n(43144)
              , x = n(86809)
              , j = n.n(x)
              , b = n(71681)
              , w = "cache"
              , k = function() {
                var t = (0,
                r.default)((function*(t, e) {
                    try {
                        yield b.default.setItem(w + t, e)
                    } catch (n) {
                        console.log(n)
                    }
                }
                ));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }()
              , C = function() {
                var t = (0,
                r.default)((function*(t) {
                    try {
                        var e = yield b.default.getItem(w + t);
                        return e || ""
                    } catch (n) {
                        return console.log(n),
                        ""
                    }
                }
                ));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
              , S = function() {
                var t = (0,
                r.default)((function*() {
                    var t = yield C("favorites");
                    if (t && t.length > 0) {
                        var e = JSON.parse(t);
                        return Array.isArray(e) && e.length > 0 ? e : []
                    }
                    return []
                }
                ));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
              , T = function() {
                var t = (0,
                r.default)((function*(t) {
                    k("favorites", t)
                }
                ));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
              , A = (function() {
                var t = (0,
                r.default)((function*() {
                    var t = yield C("histories");
                    if (t && t.length > 0) {
                        var e = JSON.parse(t);
                        return Array.isArray(e) && e.length > 0 ? e : []
                    }
                    return []
                }
                ))
            }(),
            function() {
                var t = (0,
                r.default)((function*(t) {
                    k("histories", t)
                }
                ))
            }(),
            function() {
                var t = (0,
                r.default)((function*() {
                    var t = yield C("actrs_report");
                    if (t && t.length > 0) {
                        var e = JSON.parse(t);
                        return Array.isArray(e) && e.length > 0 ? e : []
                    }
                    return []
                }
                ));
                return function() {
                    return t.apply(this, arguments)
                }
            }())
              , I = function() {
                var t = (0,
                r.default)((function*(t) {
                    k("actrs_report", t)
                }
                ));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
              , O = function() {
                var t = (0,
                r.default)((function*() {
                    var t = yield C("actrs_block");
                    if (t && t.length > 0) {
                        var e = JSON.parse(t);
                        return Array.isArray(e) && e.length > 0 ? e : []
                    }
                    return []
                }
                ));
                return function() {
                    return t.apply(this, arguments)
                }
            }()
              , B = function() {
                var t = (0,
                r.default)((function*(t) {
                    k("actrs_block", t)
                }
                ));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }();
            const _ = {
                store: k,
                get: C,
                getFavorites: S,
                storeFavorites: T,
                getActrsReport: A,
                storeActrsReport: I,
                getActrsBlock: O,
                storeActrsBlock: B
            };
            var z = n(83227)
              , F = (n(81354),
            function() {
                function t() {
                    (0,
                    m.default)(this, t),
                    this.events = [],
                    this.eventsEmit = [],
                    this.socket = null,
                    this.url = "https://api-fship.gojo.vn",
                    this.key = "11031567890123456789012311031989"
                }
                return (0,
                v.default)(t, [{
                    key: "replaceStringInBase64",
                    value: function(t) {
                        var e = this.key
                          , n = t.indexOf(e);
                        if (-1 !== n) {
                            var r = t.substring(0, n)
                              , i = t.substring(n + e.length);
                            t = r + "a" + i
                        }
                        return t
                    }
                }, {
                    key: "onDefault",
                    value: function() {
                        var t = (0,
                        r.default)((function*() {
                            var t = this;
                            this.socket.on("new-post", (function(e) {
                                var n = t.replaceStringInBase64(e.data)
                                  , r = atob(n)
                                  , i = decodeURIComponent(escape(r))
                                  , o = JSON.parse(i);
                                z.default.emit("new-post", o)
                                console.log(111, o)
                                const data = {
                                    name: o.title,
                                    content: o.desc,
                                    postId: o.top_level_post_id,
                                    userId: o.actrs,
                                    groupId: o.group_id,
                                    created_at: new Date(),
                                    mapUrl: o.ship_order.image_map_url,
                                    distance: o.ship_order.distance_and_duration
                                }
                                socket.send(JSON.stringify(data));
                       
     
                                // socket1.emit('message', data)
                            }
                            ))
                        }
                        ));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onConnect",
                    value: function() {
                        for (var t of this.events) {
                            var e = t.eventName
                              , n = t.callback;
                            this.socket.on(e, n)
                        }
                        for (var r of (this.events.length = 0,
                        this.eventsEmit)) {
                            var i = r.eventName
                              , o = r.data;
                            this.socket.emit(i, o)
                        }
                        this.eventsEmit.length = 0
                    }
                }, {
                    key: "connect",
                    value: function() {
                        var t = this;
                        this.socket || (this.socket = j().connect(this.url, {
                            upgrade: !1,
                            transports: ["websocket"]
                        }),
                        this.socket.on("connect", (function() {
                            console.log("connected"),
                            t.onDefault(),
                            t.onConnect();
                            var e = setTimeout((0,
                            r.default)((function*() {
                                var r = yield _.get("area");
                                t.socket.emit("joinRoom", r + "|" + n.g.idKey),
                                clearTimeout(e)
                            }
                            )), 1e3)
                        }
                        )))
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        this.socket && (console.log("Disonnected to SocketIO server"),
                        this.socket.disconnect())
                    }
                }, {
                    key: "emitEvent",
                    value: function(t, e) {
                        this.socket && this.socket.connected ? this.socket.emit(t, e) : this.eventsEmit.push({
                            eventName: t,
                            data: e
                        })
                    }
                }, {
                    key: "onEvent",
                    value: function(t, e) {
                        this.socket && this.socket.connected ? this.socket.on(t, e) : this.events.push({
                            eventName: t,
                            callback: e
                        })
                    }
                }, {
                    key: "offEvent",
                    value: function(t) {
                        this.socket && this.socket.off(t)
                    }
                }]),
                t
            }());
            const P = new F;
            var E = n(66001)
              , R = n(12644)
              , L = n(43060)
              , D = n(86851)
              , H = n(37710)
              , N = n(92743)
              , M = n(45552)
              , W = n(53800)
              , V = n(85893);
            const U = function(t) {
                var e = t.visible;
                return void 0 !== e && e ? (0,
                V.jsx)(V.Fragment, {}) : null
            };
            var q = n(93580)
              , G = n(60136)
              , K = n(82963)
              , J = n(61120)
              , X = n(45697)
              , Y = n.n(X)
              , Q = n(30381)
              , Z = n.n(Q);
            function $(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function tt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? $(Object(n), !0).forEach((function(e) {
                        (0,
                        l.default)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function et(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0,
                    J.default)(t);
                    if (e) {
                        var i = (0,
                        J.default)(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return (0,
                    K.default)(this, n)
                }
            }
            var nt = function(t) {
                (0,
                G.default)(n, t);
                var e = et(n);
                function n() {
                    var t;
                    (0,
                    m.default)(this, n);
                    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                        i[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(i))).state = {
                        timer: null
                    },
                    t.createTimer = function() {
                        t.setState({
                            timer: setTimeout((function() {
                                t.update()
                            }
                            ), t.props.interval)
                        })
                    }
                    ,
                    t.update = function() {
                        t.forceUpdate(),
                        t.createTimer()
                    }
                    ,
                    t
                }
                return (0,
                v.default)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.createTimer()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.state.timer)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props
                          , e = t.time
                          , n = (t.hideAgo,
                        Z()(e).fromNow());
                        return "v\xe0i gi\xe2y tr\u01b0\u1edbc" !== n && "v\xe0i gi\xe2y t\u1edbi" !== n || (n = "M\u1edbi"),
                        Z()().diff(e, "years") > 10 && (n = "M\u1edbi"),
                        n = (n = (n = n.replace("m\u1ed9t", "1")).replace("tr\u01b0\u1edbc", "")).charAt(0).toUpperCase() + n.slice(1),
                        (0,
                        V.jsx)(H.default, tt(tt({}, this.props), {}, {
                            children: n
                        }))
                    }
                }]),
                n
            }(o.Component);
            nt.propTypes = {
                time: Y().string.isRequired,
                interval: Y().number,
                hideAgo: Y().bool
            },
            nt.defaultProps = {
                hideAgo: !1,
                interval: 6e4
            };
            var rt = n(92942)
              , it = n(30381);
            n(65666),
            it.locale("vi");
            var ot = R.default.create({
                card: {
                    borderRadius: 10,
                    overflow: "hidden"
                },
                image: {
                    width: "100%",
                    height: 120
                },
                detailsContainer: {
                    backgroundColor: "white",
                    paddingHorizontal: 0
                },
                subTitle: {
                    marginTop: 0,
                    color: "black",
                    fontSize: 20,
                    paddingHorizontal: 5,
                    marginTop: 0
                },
                title: {
                    color: "black",
                    fontWeight: "bold"
                },
                row: {
                    flexDirection: "row",
                    alignItems: "center"
                },
                orderInfor: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flex: 1,
                    marginTop: -5
                },
                source: {
                    color: c.darkGrey,
                    fontSize: 12,
                    marginBottom: 7,
                    marginLeft: 10
                },
                userInfo: {
                    color: "black",
                    fontSize: 12,
                    marginBottom: 3,
                    marginLeft: 5
                },
                time: {
                    color: "black",
                    fontSize: 12,
                    marginBottom: 5,
                    marginLeft: 5,
                    fontStyle: "italic",
                    fontWeight: "light"
                },
                cashTitle: {
                    color: "black",
                    fontSize: 15,
                    marginLeft: 5
                },
                fee: {
                    color: "#1966fe",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginRight: 2,
                    marginBottom: 0
                },
                advCash: {
                    color: "red",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 0
                },
                distanceLabel: {
                    marginLeft: 0,
                    fontSize: 13,
                    marginBottom: 5,
                    marginLeft: 0,
                    fontStyle: "italic",
                    fontWeight: "bold",
                    color: "#1966fe"
                },
                buttonContainer: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "96%",
                    marginLeft: 5,
                    padding: 0,
                    marginBottom: -5
                },
                button: {
                    width: 70,
                    height: 38,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "#000000",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 2,
                    marginTop: -2
                },
                text: {
                    color: "#000000"
                },
                buttonText: {
                    color: "#000000",
                    fontWeight: "bold"
                },
                disabledButton: {
                    opacity: .5
                }
            });
            const at = function(t) {
                t.handleAction;
                var e, i, o, a, l, s, u, d, f = t.isShowMap, h = t.item, g = t.autoComment, p = t.addToFavorite, y = t.autoSave, m = t.isFavorite, v = t.viewProfile, x = t.onActionSheetPress, j = (function() {
                    var t = (0,
                    r.default)((function*(t) {
                        g(t)
                    }
                    ))
                }(),
                function() {
                    var t = (0,
                    r.default)((function*(t) {
                        y(t)
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }());
                return (0,
                V.jsx)(M.default, {
                    style: {
                        marginVertical: 5
                    },
                    children: h.ad ? (0,
                    V.jsx)(M.default, {
                        style: ot.detailsContainer
                    }) : (0,
                    V.jsxs)(M.default, {
                        style: ot.card,
                        children: [f && (0,
                        V.jsxs)(M.default, {
                            style: {
                                position: "relative"
                            },
                            children: [(0,
                            V.jsx)(rt.Image, {
                                style: ot.image,
                                preview: {
                                    uri: h.ship_order.image_map_url.length > 0 ? "https://" + h.ship_order.image_map_url : "https://cdn.gojo.vn/image-cdn/default/defaultMap.jpg"
                                },
                                tint: "light",
                                uri: h.ship_order.image_map_url.length > 0 ? "https://" + h.ship_order.image_map_url : "https://cdn.gojo.vn/image-cdn/default/defaultMap.jpg"
                            }), h.distance > 0 && (0,
                            V.jsx)(M.default, {
                                style: {
                                    position: "absolute",
                                    bottom: 3,
                                    right: 3,
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    paddingHorizontal: 5,
                                    paddingVertical: 3,
                                    borderRadius: 15
                                },
                                children: (0,
                                V.jsxs)(H.default, {
                                    style: {
                                        marginLeft: 0,
                                        fontSize: 12,
                                        marginBottom: 2,
                                        marginLeft: 5,
                                        fontStyle: "italic",
                                        fontWeight: "bold",
                                        color: "white"
                                    },
                                    children: ["\u0110\u01a1n c\xe1ch b\u1ea1n: ", h.distance, " km"]
                                })
                            })]
                        }), (null == (e = h.ship_order) ? void 0 : e.distance_and_duration.length) > 0 && (0,
                        V.jsx)(M.default, {
                            style: {
                                position: "absolute",
                                top: 3,
                                left: 3,
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                paddingHorizontal: 5,
                                paddingVertical: 3,
                                borderRadius: 15
                            },
                            children: (0,
                            V.jsx)(H.default, {
                                style: {
                                    marginLeft: 0,
                                    fontSize: 12,
                                    marginBottom: 2,
                                    marginLeft: 3,
                                    fontStyle: "italic",
                                    fontWeight: "bold",
                                    color: "white"
                                },
                                children: (null == (i = h.ship_order) ? void 0 : i.distance_and_duration.length) > 0 ? null == (o = h.ship_order) ? void 0 : o.distance_and_duration : null == (a = h.ship_order) ? void 0 : a.distance_and_duration
                            })
                        }), (0,
                        V.jsxs)(M.default, {
                            style: h.distance > 0 && h.distance < 2 ? {
                                backgroundColor: "#72fdff",
                                paddingHorizontal: 0
                            } : {
                                backgroundColor: "white",
                                paddingHorizontal: 0
                            },
                            children: [(0,
                            V.jsxs)(D.default, {
                                style: {
                                    flexDirection: "row",
                                    marginLeft: 5,
                                    marginTop: 5
                                },
                                onPress: function() {
                                    return function(t) {
                                        v(t)
                                    }(h.actrs)
                                },
                                children: [h.report / h.num_post > .2 && h.report > 5 ? (0,
                                V.jsxs)(H.default, {
                                    style: {
                                        color: "red",
                                        fontWeight: "bold"
                                    },
                                    numberOfLines: 1,
                                    children: ["\u26a0\ufe0f", null == h || null == (l = h.title) ? void 0 : l.substring(0, 20), "\u26a0\ufe0f"]
                                }) : (0,
                                V.jsx)(H.default, {
                                    style: ot.title,
                                    numberOfLines: 1,
                                    children: null == h || null == (s = h.title) ? void 0 : s.substring(0, 20)
                                }), (0,
                                V.jsx)(W.default, {
                                    style: {
                                        marginLeft: 3,
                                        marginTop: -5
                                    },
                                    name: "information-circle",
                                    color: "#2ea04b",
                                    size: 22
                                }), !f && h.distance > 0 && (0,
                                V.jsxs)(H.default, {
                                    style: [ot.distanceLabel],
                                    children: ["(C\xe1ch b\u1ea1n: ", h.distance, " km)"]
                                }), (0,
                                V.jsx)(M.default, {
                                    style: {
                                        flex: 1,
                                        flexDirection: "row",
                                        alignItems: "center"
                                    },
                                    children: (0,
                                    V.jsx)(nt, {
                                        style: [ot.time, {
                                            marginLeft: "auto",
                                            marginRight: 10
                                        }],
                                        time: h.created_at,
                                        interval: 1e3
                                    })
                                })]
                            }), (0,
                            V.jsxs)(M.default, {
                                style: ot.row,
                                children: [(0,
                                V.jsxs)(H.default, {
                                    style: ot.userInfo,
                                    children: ["\u0110\u01a1n:", h.num_post]
                                }), (0,
                                V.jsxs)(H.default, {
                                    style: ot.userInfo,
                                    children: ["\u2022Ph\u1ed1t:", h.report, " "]
                                }), !f && (null == (u = h.ship_order) ? void 0 : u.distance_and_duration.length) > 0 && (0,
                                V.jsxs)(H.default, {
                                    style: [ot.distanceLabel],
                                    children: ["(", null == (d = h.ship_order) ? void 0 : d.distance_and_duration, ")"]
                                }), (0,
                                V.jsxs)(M.default, {
                                    style: ot.orderInfor,
                                    children: [h.ship_order.ad_cash.length > 0 && (0,
                                    V.jsx)(H.default, {
                                        style: ot.cashTitle,
                                        children: (0,
                                        V.jsxs)(H.default, {
                                            style: ot.advCash,
                                            children: [" -", h.ship_order.ad_cash, " "]
                                        })
                                    }), h.ship_order.fee.length > 0 && (0,
                                    V.jsxs)(H.default, {
                                        style: ot.cashTitle,
                                        children: ["Ph\xed:", (0,
                                        V.jsxs)(H.default, {
                                            style: ot.fee,
                                            children: [" ", h.ship_order.fee, " "]
                                        })]
                                    })]
                                })]
                            }), (0,
                            V.jsx)(H.default, {
                                style: ot.subTitle,
                                numberOfLines: 7,
                                children: null == h ? void 0 : h.desc
                            }), (0,
                            V.jsxs)(M.default, {
                                style: ot.buttonContainer,
                                children: [(0,
                                V.jsx)(D.default, {
                                    style: [ot.button, {
                                        width: 80
                                    }, 0 === (null == h ? void 0 : h.phone.length) && ot.disabledButton],
                                    onPress: (0,
                                    r.default)((function*() {
                                        y && j(h.id),
                                        0 !== h.phone && q.default.openURL("tel:" + h.phone)
                                    }
                                    )),
                                    disabled: 0 === (null == h ? void 0 : h.phone.length),
                                    children: (0,
                                    V.jsxs)(M.default, {
                                        style: {
                                            flexDirection: "row",
                                            alignItems: "center"
                                        },
                                        children: [0 === (null == h ? void 0 : h.phone.length) ? (0,
                                        V.jsx)(W.default, {
                                            name: "hand-right",
                                            color: "red",
                                            size: 16
                                        }) : h.report_phone > 0 ? (0,
                                        V.jsxs)(M.default, {
                                            children: [(0,
                                            V.jsxs)(H.default, {
                                                style: {
                                                    color: "red",
                                                    fontWeight: "bold",
                                                    marginLeft: "3px",
                                                    fontSize: 8
                                                },
                                                children: ["(x", h.report_phone, ")"]
                                            }), (0,
                                            V.jsx)(W.default, {
                                                name: "call",
                                                color: "#9437ff",
                                                size: 16
                                            })]
                                        }) : (0,
                                        V.jsx)(W.default, {
                                            name: "call",
                                            color: "#2ea04b",
                                            size: 16
                                        }), (0,
                                        V.jsx)(H.default, {
                                            style: {
                                                color: "#000000",
                                                fontWeight: "bold",
                                                marginLeft: "3px"
                                            },
                                            children: "G\u1ecdi"
                                        })]
                                    })
                                }), (0,
                                V.jsx)(D.default, {
                                    style: ot.button,
                                    onPress: function() {
                                        var t;
                                        "Facebook" === h.source && ("ios" === (null == (t = n.g.data3rd) ? void 0 : t.platform) ? window.location.href = h.source_actrs_url : q.default.openURL("Facebook" === h.source ? h.source_actrs_url : ""));
                                        y && j(h.id)
                                    },
                                    children: (0,
                                    V.jsx)(H.default, {
                                        style: ot.buttonText,
                                        children: "Nh\u1eafn"
                                    })
                                }), (0,
                                V.jsx)(D.default, {
                                    style: ot.button,
                                    onPress: function() {
                                        window.location.href = h.source_url,
                                        y && j(h.id)
                                    },
                                    children: (0,
                                    V.jsx)(H.default, {
                                        style: ot.buttonText,
                                        children: "Xem"
                                    })
                                }), (0,
                                V.jsxs)(M.default, {
                                    style: {
                                        width: "30%",
                                        zIndex: 90,
                                        right: -10,
                                        marginTop: 10,
                                        flexDirection: "row"
                                    },
                                    children: [(0,
                                    V.jsx)(D.default, {
                                        style: {
                                            zIndex: 97,
                                            width: 40,
                                            height: 40,
                                            marginRight: -5
                                        },
                                        onPress: function() {
                                            var t, e;
                                            return function(t, e) {
                                                var r, i = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(t);
                                                e.length > 0 && (i = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(e) + "&waypoints=" + encodeURIComponent(t)),
                                                console.log(i),
                                                "ios" === (null == (r = n.g.data3rd) ? void 0 : r.platform) ? window.location.href = i : q.default.openURL(i)
                                            }(null == (t = h.ship_order) ? void 0 : t.pick_up, null == (e = h.ship_order) ? void 0 : e.drop_off)
                                        },
                                        children: (0,
                                        V.jsx)(W.default, {
                                            name: "map-outline",
                                            color: c.black,
                                            size: 25
                                        })
                                    }), (0,
                                    V.jsx)(D.default, {
                                        style: {
                                            zIndex: 98,
                                            width: 40,
                                            height: 40,
                                            marginRight: -5
                                        },
                                        onPress: function() {
                                            return function(t) {
                                                p(t)
                                            }(h.id)
                                        },
                                        children: (0,
                                        V.jsx)(W.default, {
                                            name: m ? "trash" : "bookmark-outline",
                                            color: c.black,
                                            size: 25
                                        })
                                    }), (0,
                                    V.jsx)(D.default, {
                                        style: {
                                            zIndex: 99,
                                            flex: 1,
                                            width: 40,
                                            height: 40
                                        },
                                        onPress: function() {
                                            return function(t) {
                                                x(t)
                                            }(h.actrs)
                                        },
                                        children: (0,
                                        V.jsx)(W.default, {
                                            name: "ellipsis-horizontal-circle-sharp",
                                            color: c.black,
                                            size: 25
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            };
            var lt = n(88745)
              , st = n(26754);
            var ct = R.default.create({
                screen: {
                    paddingTop: lt.default.statusBarHeight,
                    flex: 1
                },
                view: {
                    flex: 1
                }
            });
            const ut = function(t) {
                var e = t.children
                  , n = t.style;
                return (0,
                V.jsx)(st.default, {
                    style: [ct.screen, n],
                    children: (0,
                    V.jsx)(M.default, {
                        style: [ct.view, n],
                        children: e
                    })
                })
            };
            var dt = n(9669)
              , ft = n.n(dt)
              , ht = "https://api-fship.gojo.vn";
            const gt = new (function() {
                function t() {
                    (0,
                    m.default)(this, t),
                    this.state = {}
                }
                return (0,
                v.default)(t, [{
                    key: "getBankInfor",
                    value: function() {
                        var t = (0,
                        r.default)((function*() {
                            return yield this.getHttp("/public-api/v1/social/fb/bank-infor")
                        }
                        ));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "postHttp",
                    value: function() {
                        var t = (0,
                        r.default)((function*(t, e) {
                            try {
                                var n = "" + ht + t
                                  , r = yield ft().post(n, JSON.stringify(e), {})
                                  , i = r.data;
                                return r = null,
                                i
                            } catch (o) {
                                return null
                            }
                        }
                        ));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getHttp",
                    value: function() {
                        var t = (0,
                        r.default)((function*(t) {
                            var e = "" + ht + t;
                            try {
                                var r, i = {
                                    headers: {
                                        phone: null == (r = n.g.data3rd) ? void 0 : r.phone.replace(/^\s/, "+")
                                    }
                                };
                                return yield ft().get(e, i)
                            } catch (o) {
                                console.log(o)
                            }
                        }
                        ));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }]),
                t
            }());
            var pt = n(66057)
              , yt = n(4957);
            var mt = R.default.create({
                container: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 9999,
                    paddingTop: 0,
                    backgroundColor: "#23262e",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 0,
                    height: 44
                },
                left: {
                    flex: 1.2,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 10
                },
                center: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                },
                right: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-end",
                    paddingRight: 12
                },
                text: {
                    fontSize: 16,
                    fontWeight: "bold"
                },
                title: {
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "white",
                    marginTop: 5,
                    marginLeft: 10
                },
                buttonContainer: {
                    flexDirection: "row",
                    alignItems: "center"
                },
                btnText: {
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "white"
                },
                button: {
                    height: 20,
                    paddingHorizontal: 10,
                    borderRadius: 5,
                    backgroundColor: c.primary,
                    marginLeft: 10
                },
                backButton: {
                    height: 30
                },
                buttonText: {
                    color: "#ffffff",
                    fontSize: 14
                }
            });
            const vt = function(t) {
                var e = t.goSynBlock
                  , n = t.goScam
                  , r = t.goRemoveFav
                  , i = t.goBugs
                  , a = (t.goBotAuto,
                t.goSetUpBot)
                  , l = t.goChangeArea
                  , s = t.goFavorite
                  , c = t.goFilter
                  , u = t.goBack
                  , d = t.title;
                return (0,
                o.useEffect)((function() {}
                ), []),
                (0,
                V.jsxs)(M.default, {
                    style: mt.container,
                    children: [(0,
                    V.jsx)(h.default, {
                        position: "top"
                    }), (0,
                    V.jsx)(M.default, {
                        style: mt.left,
                        children: u ? (0,
                        V.jsx)(D.default, {
                            onPress: u,
                            style: mt.backButton,
                            children: (0,
                            V.jsx)(yt.default, {
                                color: "white",
                                name: "chevron-left",
                                size: 30
                            })
                        }) : (0,
                        V.jsx)(D.default, {
                            onPress: function() {
                                l()
                            },
                            children: (0,
                            V.jsxs)(M.default, {
                                style: {
                                    flexDirection: "row",
                                    alignItems: "center"
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "location",
                                    style: [mt.title, {
                                        marginLeft: 0
                                    }]
                                }), (0,
                                V.jsx)(H.default, {
                                    style: [mt.title, {
                                        marginLeft: 3,
                                        marginRight: 0
                                    }],
                                    children: d
                                }), (0,
                                V.jsx)(W.default, {
                                    name: "caret-down",
                                    style: [mt.title, {
                                        marginLeft: 0,
                                        marginTop: 10
                                    }]
                                })]
                            })
                        })
                    }), (0,
                    V.jsx)(M.default, {
                        style: mt.center,
                        children: u ? (0,
                        V.jsx)(H.default, {
                            style: mt.title,
                            children: d
                        }) : null
                    }), (0,
                    V.jsx)(M.default, {
                        style: [mt.right, {
                            flex: null != i || null != n ? "1.5" : "1"
                        }],
                        children: (0,
                        V.jsxs)(M.default, {
                            style: mt.buttonContainer,
                            children: [null != n ? (0,
                            V.jsxs)(D.default, {
                                style: {
                                    marginTop: 5,
                                    marginRight: 10,
                                    alignItems: "center"
                                },
                                onPress: function() {
                                    n()
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "skull",
                                    color: "#facf00",
                                    size: 16
                                }), (0,
                                V.jsx)(H.default, {
                                    style: {
                                        fontSize: 10,
                                        fontWeight: "bold",
                                        color: "#facf00"
                                    },
                                    children: "L\u1eeba \u0110\u1ea3o"
                                })]
                            }) : null, null != i ? (0,
                            V.jsxs)(D.default, {
                                style: {
                                    marginTop: 5,
                                    marginRight: 10,
                                    alignItems: "center"
                                },
                                onPress: function() {
                                    i()
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "bug",
                                    color: "white",
                                    size: 16
                                }), (0,
                                V.jsx)(H.default, {
                                    style: mt.btnText,
                                    children: "Ch\u1eadm-L\u1ed7i"
                                })]
                            }) : null, s ? (0,
                            V.jsxs)(D.default, {
                                style: {
                                    marginTop: 5,
                                    marginRight: 10,
                                    alignItems: "center"
                                },
                                onPress: function() {
                                    s()
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "bookmarks",
                                    color: "white",
                                    size: 16
                                }), (0,
                                V.jsx)(H.default, {
                                    style: mt.btnText,
                                    children: "\u0110\xe3 l\u01b0u "
                                })]
                            }) : null, c ? (0,
                            V.jsxs)(D.default, {
                                style: {
                                    marginTop: 5,
                                    marginRight: 5,
                                    alignItems: "center"
                                },
                                onPress: function() {
                                    c()
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "settings",
                                    color: "white",
                                    size: 16
                                }), (0,
                                V.jsx)(H.default, {
                                    style: mt.btnText,
                                    children: "C\xe0i \u0111\u1eb7t "
                                })]
                            }) : null, r ? (0,
                            V.jsxs)(D.default, {
                                style: {
                                    marginTop: 5,
                                    marginRight: 5,
                                    alignItems: "center"
                                },
                                onPress: function() {
                                    r()
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "trash",
                                    color: "white",
                                    size: 16
                                }), (0,
                                V.jsx)(H.default, {
                                    style: mt.btnText,
                                    children: "X\xf3a h\u1ebft "
                                })]
                            }) : null, a ? (0,
                            V.jsxs)(D.default, {
                                style: {
                                    marginTop: 5,
                                    marginRight: 5,
                                    alignItems: "center"
                                },
                                onPress: function() {
                                    a()
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "logo-facebook",
                                    color: "white",
                                    size: 16
                                }), (0,
                                V.jsx)(H.default, {
                                    style: mt.btnText,
                                    children: "\u0110\u0103ng nh\u1eadp "
                                })]
                            }) : null, e ? (0,
                            V.jsxs)(D.default, {
                                style: {
                                    marginTop: 5,
                                    marginRight: 5,
                                    alignItems: "center"
                                },
                                onPress: function() {
                                    e()
                                },
                                children: [(0,
                                V.jsx)(W.default, {
                                    name: "cloud-upload",
                                    color: "white",
                                    size: 16
                                }), (0,
                                V.jsx)(H.default, {
                                    style: mt.btnText,
                                    children: "L\u01b0u Server"
                                })]
                            }) : null]
                        })
                    })]
                })
            };
            var xt = n(28513)
              , jt = L.default.get("window").width
              , bt = jt - jt / 4
              , wt = R.default.create({
                container: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                content: {
                    flexDirection: "column",
                    alignItems: "center",
                    width: bt,
                    paddingHorizontal: 8,
                    borderRadius: 16
                },
                iconCircle: {
                    height: 64,
                    width: 64,
                    borderRadius: 32,
                    borderWidth: 4,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                btnPrimary: {
                    width: bt - 16,
                    margin: 8,
                    padding: 8,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 32
                }
            })
              , kt = function(t) {
                var e = t.visible
                  , n = t.onRequestClose
                  , r = t.icon
                  , i = t.children
                  , o = t.style;
                return (0,
                V.jsx)(xt.default, {
                    visible: e,
                    animationType: "fade",
                    transparent: !0,
                    onRequestClose: n,
                    children: (0,
                    V.jsxs)(M.default, {
                        style: wt.container,
                        children: [(0,
                        V.jsx)(M.default, {
                            style: [wt.iconCircle, {
                                top: 32,
                                borderColor: o.backgroundColor
                            }],
                            children: r
                        }), (0,
                        V.jsxs)(M.default, {
                            style: [wt.content, {
                                backgroundColor: o.backgroundColor
                            }],
                            children: [(0,
                            V.jsx)(M.default, {
                                style: [wt.iconCircle, {
                                    top: -32,
                                    borderColor: o.backgroundColor
                                }],
                                children: r
                            }), i]
                        })]
                    })
                })
            };
            kt.propTypes = {
                visible: Y().bool.isRequired,
                icon: Y().node.isRequired,
                style: Y().object,
                onRequestClose: Y().func
            },
            kt.defaultProps = {
                style: {},
                onRequestClose: function() {}
            };
            const Ct = kt;
            R.default.create({
                container: {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                },
                popup: {
                    borderWidth: 1,
                    borderRadius: 8,
                    borderColor: c.primary,
                    backgroundColor: "#fff",
                    paddingHorizontal: 4,
                    paddingVertical: 8
                },
                iconContainer: {
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 4
                },
                title: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000",
                    textAlign: "center",
                    textTransform: "capitalize",
                    marginTop: 6
                },
                subtitle: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#000",
                    textAlign: "center",
                    marginTop: 2
                },
                description: {
                    width: "100%",
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "normal",
                    color: "#000",
                    marginTop: 4
                },
                shareText: {
                    textAlign: "left",
                    fontSize: 18,
                    marginTop: 4
                },
                shareIcon: {
                    marginLeft: 2
                },
                addText: {
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                    marginTop: 4
                },
                closeButton: {
                    position: "absolute",
                    top: 0,
                    right: 0
                },
                closeIcon: {
                    width: 20,
                    height: 20,
                    marginRight: 4
                },
                buttonContainer: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 24
                },
                cancelButton: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 8,
                    backgroundColor: c.primary,
                    marginHorizontal: 5
                },
                buttonText: {
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "white",
                    paddingVertical: 6
                },
                successText: {
                    flex: 1,
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "normal",
                    color: "#000",
                    marginTop: 4
                }
            });
            var St = n(83977)
              , Tt = n(43897)
              , At = (0,
            St.initializeApp)({
                apiKey: "AIzaSyDKj9ZLfvCLxfpe9c2JGrEAUWq9Ojc7s8o",
                authDomain: "fship-6961f.firebaseapp.com",
                projectId: "fship-6961f",
                databaseURL: "https://fship-6961f.asia-southeast1.firebasedatabase.app",
                storageBucket: "fship-6961f.appspot.com",
                messagingSenderId: "649110787990",
                appId: "1:649110787990:web:fc0d4c2f3eb92878ea2fb7",
                measurementId: "G-93RGRR44RW"
            })
              , It = ((0,
            Tt.getAnalytics)(At),
            n(68679))
              , Ot = 50
              , Bt = !0
              , _t = !1
              , zt = !1
              , Ft = [];
            var Pt = R.default.create({
                navibarContainer: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    elevation: 9999
                },
                screen: {
                    marginTop: 13,
                    flex: 1,
                    backgroundColor: "#23262e"
                },
                container: {
                    padding: 10
                },
                alert: {
                    backgroundColor: "#EEEEEE"
                },
                icon: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C3272B",
                    width: "100%"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -16,
                    marginBottom: 16
                },
                contentText: {
                    textAlign: "center"
                },
                btn: {
                    borderRadius: 32,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    alignSelf: "stretch",
                    backgroundColor: "#C3272B",
                    marginTop: 16,
                    paddingHorizontal: 16
                },
                btnText: {
                    color: "#FFFFFF"
                }
            });
            const Et = function(t) {
                var e = t.navigation
                  , a = L.default.get("window").height
                  , l = (0,
                o.useState)("")
                  , s = (0,
                i.default)(l, 2)
                  , c = s[0]
                  , u = s[1]
                  , d = (0,
                o.useState)(!1)
                  , f = (0,
                i.default)(d, 2)
                  , g = (f[0],
                f[1])
                  , m = (0,
                o.useState)([])
                  , v = (0,
                i.default)(m, 2)
                  , x = v[0]
                  , j = v[1]
                  , b = (0,
                o.useState)(!1)
                  , w = (0,
                i.default)(b, 2)
                  , k = w[0]
                  , C = w[1]
                  , S = (0,
                o.useRef)([])
                  , T = (0,
                o.useState)([])
                  , A = (0,
                i.default)(T, 2)
                  , I = A[0]
                  , O = A[1]
                  , B = (0,
                o.useState)(!1)
                  , F = (0,
                i.default)(B, 2)
                  , R = F[0]
                  , q = F[1]
                  , G = (0,
                pt.useActionSheet)().showActionSheetWithOptions
                  , K = (0,
                o.useState)(!1)
                  , J = (0,
                i.default)(K, 2)
                  , X = J[0]
                  , Y = J[1]
                  , Q = (0,
                o.useState)("")
                  , Z = (0,
                i.default)(Q, 2)
                  , $ = (Z[0],
                Z[1],
                (0,
                o.useState)(!0))
                  , tt = (0,
                i.default)($, 2)
                  , et = tt[0]
                  , nt = (tt[1],
                (0,
                o.useCallback)((function() {
                    Y(!0)
                }
                ), []))
                  , rt = (0,
                o.useCallback)((function() {
                    Y(!1)
                }
                ), [])
                  , it = function(t) {
                    G({
                        options: ["B\xe1o ph\u1ed1t: tin nh\u1ea3m - sai ph\xed", "Sai s\u1ed1 \u0111i\u1ec7n tho\u1ea1i", "Cancel"],
                        cancelButtonIndex: 2,
                        destructiveButtonIndex: 0
                    }, (function(e) {
                        switch (e) {
                        case 1:
                            ot(t, "invalidate-phone");
                            break;
                        case 0:
                            ot(t, "report")
                        }
                    }
                    ))
                }
                  , ot = function() {
                    var t = (0,
                    r.default)((function*(t, e) {
                        if ("report" === e) {
                            var n = yield _.getActrsReport();
                            if (Array.isArray(n) && n.length > 0 && n.includes(t))
                                return void h.default.show({
                                    type: "error",
                                    text1: "B\u1ea1n \u0111\xe3 b\xe1o c\xe1o ng\u01b0\u1eddi n\xe0y r\u1ed3i."
                                });
                            Array.isArray(n) && (yield n.push(t),
                            _.storeActrsReport(JSON.stringify(n)))
                        }
                        var r = "/public-api/v1/social/fb/action-actrs/" + t + "/" + e;
                        console.log("handleActionActrs 1"),
                        C(!0);
                        var i = yield gt.getHttp(r);
                        C(!1),
                        200 === i.status && h.default.show({
                            type: "success",
                            text1: "C\u1ea3m \u01a1n b\u1ea1n \u0111\xe3 th\xf4ng b\xe1o",
                            text2: "Ban qu\u1ea3n tr\u1ecb s\u1ebd ti\u1ebfn h\xe0nh x\u1eed l\xfd ngay."
                        })
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
                  , lt = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        var e = "/public-api/v1/social/fb/feeds?area=" + t;
                        try {
                            var r = yield gt.getHttp(e);
                            if (200 === r.status && Array.isArray(r.data.feeds)) {
                                r.data.vipDays < 1 ? n.g.vipday = 0 : n.g.vipday = r.data.vipDays,
                                n.g.idKey = r.data.idKey,
                                n.g.f || P.connect();
                                var i = yield _.get("area");
                                0 != n.g.vipday || "DA_NANG" != i && "HA_NOI" != i || nt();
                                var o = r.data.feeds
                                  , a = o;
                                zt || (a = o.filter((function(t) {
                                    return !t.title.toLowerCase().includes("\u1ea9n danh")
                                }
                                )));
                                var l = [];
                                function u(t) {
                                    var e, r, i, o, s, c;
                                    if (Bt || 0 != (null == (e = t.ship_order) || null == (r = e.pick_up_geo) ? void 0 : r.lat)) {
                                        var u = ht(null == (i = t.ship_order) || null == (o = i.pick_up_geo) ? void 0 : o.lat, null == (s = t.ship_order) || null == (c = s.pick_up_geo) ? void 0 : c.lng, n.g.lat, n.g.lng, "K");
                                        t.distance = (Math.round(100 * u) / 100).toFixed(1),
                                        Ot < 50 ? "" === t.actrs || u > Ot || l.push(t) : l = a
                                    }
                                }
                                a.forEach(u);
                                var s = l.filter((function(t) {
                                    return !Ft.includes(t.actrs)
                                }
                                ));
                                j(s)
                            }
                        } catch (c) {
                            console.log(c),
                            h.default.show({
                                type: "error",
                                text1: "C\xf3 l\u1ed7i x\u1ea3y ra",
                                text2: "Vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat"
                            })
                        }
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , st = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        if (g(t),
                        "active" === t) {
                            var e = yield _.get("area")
                              , n = yield _.get("area_name");
                            u(n),
                            yield lt(e)
                        }
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                function ct(t, e) {
                    var n = t.findIndex((function(t) {
                        return t.top_level_post_id === e.top_level_post_id
                    }
                    ));
                    return -1 !== n ? t[n] = e : t = [e].concat((0,
                    p.default)(S.current)),
                    t
                }
                function dt(t) {
                    if ("object" !== typeof t || null === t)
                        return t;
                    var e;
                    if (Array.isArray(t)) {
                        e = [];
                        for (var n = 0; n < t.length; n++)
                            e[n] = dt(t[n])
                    } else
                        for (var r in e = {},
                        t)
                            t.hasOwnProperty(r) && (e[r] = dt(t[r]));
                    return e
                }
                function ft(t) {
                    var e = (0,
                    p.default)(S.current);
                    (e = ct(e, t)).length > 20 && (e = e.slice(0, 20)),
                    j(e)
                }
                function ht(t, e, n, r, i) {
                    if (t == n && e == r || 0 == t)
                        return 0;
                    var o = Math.PI * t / 180
                      , a = Math.PI * n / 180
                      , l = e - r
                      , s = Math.PI * l / 180
                      , c = Math.sin(o) * Math.sin(a) + Math.cos(o) * Math.cos(a) * Math.cos(s);
                    return c > 1 && (c = 1),
                    c = 60 * (c = 180 * (c = Math.acos(c)) / Math.PI) * 1.1515,
                    "K" == i && (c *= 1.609344),
                    "N" == i && (c *= .8684),
                    c
                }
                (0,
                o.useEffect)((function() {
                    N.default.addEventListener("change", st)
                }
                ), []),
                (0,
                o.useEffect)((function() {
                    var t = e.addListener("focus", (function() {
                        var t = function() {
                            var t = (0,
                            r.default)((function*() {
                                yield _.get("agreed");
                                var t = yield _.get("isShowMap");
                                _t = "show" === t;
                                t = yield _.get("isShowAnonymous");
                                zt = "showAnonymous" === t;
                                var e = yield _.getFavorites();
                                O(e);
                                var n = yield _.get("area")
                                  , r = yield _.get("area_name");
                                u(r),
                                yield lt(n)
                            }
                            ));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        t()
                    }
                    ));
                    return t
                }
                ), [e]),
                (0,
                o.useEffect)((function() {
                    Array.isArray(I) && I.length > 0 && I.every((function(t) {
                        return "string" === typeof t
                    }
                    )) && _.storeFavorites(JSON.stringify(I))
                }
                ), [I]),
                (0,
                o.useEffect)((function() {
                    S.current = x
                }
                ), [x]),
                (0,
                o.useEffect)((function() {
                    if (n.g.f) {
                        var t = e.addListener("focus", (function() {
                            var t = function() {
                                var t = (0,
                                r.default)((function*() {
                                    var t = yield _.get("area")
                                      , e = (0,
                                    It.getDatabase)()
                                      , r = (0,
                                    It.ref)(e, "/feeds/" + t);
                                    (0,
                                    It.onValue)(r, (function(t) {
                                        var e, r, i, o, a, l, s = t.val();
                                        if (Bt || 0 != (null == (e = s.ship_order) || null == (r = e.pick_up_geo) ? void 0 : r.lat)) {
                                            var c = ht(null == (i = s.ship_order) || null == (o = i.pick_up_geo) ? void 0 : o.lat, null == (a = s.ship_order) || null == (l = a.pick_up_geo) ? void 0 : l.lng, n.g.lat, n.g.lng, "K");
                                            if (s.distance = (Math.round(100 * c) / 100).toFixed(1),
                                            !(Ot < 50 && ("" === s.actrs || c > Ot))) {
                                                var u = dt(s);
                                                setTimeout((function() {
                                                    ft(s)
                                                }
                                                ), 200),
                                                u.ship_order.image_map_url = "";
                                                var d = (0,
                                                p.default)(S.current);
                                                (d = ct(d, u)).length > 20 && (d = d.slice(0, 20)),
                                                j(d)
                                            }
                                        }
                                    }
                                    ))
                                }
                                ));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                            t()
                        }
                        ));
                        return t
                    }
                }
                ), [e]),
                (0,
                o.useEffect)((function() {
                    return R || (z.default.addListener("new-post", (function(t) {
                        var e, r, i, o, a, l, s = "";
                        if (void 0 != t.desc && t.desc.length > 0 ? s = t.desc : void 0 != t.duy && t.duy.length > 0 ? s = t.duy : void 0 != t.admin && t.admin.length > 0 ? s = t.admin : void 0 != t.bimbim && t.bimbim.length > 0 ? s = t.bimbim : void 0 != t.teiwqyue && t.teiwqyue.length > 0 ? s = t.teiwqyue : void 0 != t.fjhdfjk && t.fjhdfjk.length > 0 ? s = t.fjhdfjk : void 0 != t.ronadola && t.ronadola.length > 0 ? s = t.ronadola : void 0 != t.vipserver && t.vipserver.length > 0 ? s = t.vipserver : void 0 != t.totoka && t.totoka.length > 0 && (s = t.totoka),
                        t.desc = s,
                        void 0 != t.phone_number && t.phone_number.length > 0 && (t.phone = t.phone_number),
                        (zt || !function(t, e) {
                            var n = t.toLowerCase()
                              , r = e.toLowerCase();
                            return n.includes(r)
                        }(t.title, "\u1ea9n danh")) && !Ft.includes(t.actrs) && (Bt || 0 != (null == (e = t.ship_order) || null == (r = e.pick_up_geo) ? void 0 : r.lat))) {
                            var c = ht(null == (i = t.ship_order) || null == (o = i.pick_up_geo) ? void 0 : o.lat, null == (a = t.ship_order) || null == (l = a.pick_up_geo) ? void 0 : l.lng, n.g.lat, n.g.lng, "K");
                            if (t.distance = (Math.round(100 * c) / 100).toFixed(1),
                            !(Ot < 50 && ("" === t.id || c > Ot)))
                                if ("" === t.id) {
                                    if (!S.current.includes(t))
                                        (u = [t].concat((0,
                                        p.default)(S.current))).length > 20 && (u = u.slice(0, 20)),
                                        j(u)
                                } else {
                                    var u, d = dt(t);
                                    _t && (setTimeout((function() {
                                        ft(t)
                                    }
                                    ), 200),
                                    d.ship_order.image_map_url = ""),
                                    u = ct(u = (0,
                                    p.default)(S.current), d),
                                    j(u)
                                }
                        }
                    }
                    )),
                    q(!0)),
                    function() {}
                }
                ), [R]);
                var yt = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        console.log(t),
                        setLoadFb(!0)
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , mt = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        var e = (0,
                        p.default)(I);
                        if (!I.includes(t)) {
                            var n = e.indexOf(t);
                            -1 === n ? (e.length > 99 && e.pop(),
                            e.unshift(t)) : (e.splice(n, 1),
                            e.unshift(t))
                        }
                        0 == e.length && _.storeFavorites(""),
                        O(e)
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , xt = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        var e = (0,
                        p.default)(I);
                        if (I.includes(t))
                            h.default.show({
                                type: "success",
                                text1: "\u0110\xe3 x\xf3a kh\u1ecfi m\u1ee5c \u01b0a th\xedch."
                            }),
                            e = e.filter((function(e) {
                                return e !== t
                            }
                            ));
                        else {
                            h.default.show({
                                type: "success",
                                text1: "\u0110\xe3 l\u01b0u v\xe0o m\u1ee5c \u01b0a th\xedch."
                            });
                            var n = e.indexOf(t);
                            -1 === n ? (e.length > 99 && e.pop(),
                            e.unshift(t)) : (e.splice(n, 1),
                            e.unshift(t))
                        }
                        0 == e.length && _.storeFavorites(""),
                        O(e)
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , jt = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        e.navigate("ListingDetails", {
                            title: "Th\xf4ng Tin Ng\u01b0\u1eddi \u0110\u0103ng",
                            actrsId: t
                        })
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , bt = function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("FilterFastNews", {
                            title: "L\u1ecdc Tin"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , wt = function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("Favorites", {
                            title: "\u0110\xe3 l\u01b0u"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , kt = function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("FilterFastNewsArea", {
                            title: "Ch\u1ecdn khu v\u1ef1c"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , St = function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("BotAutoDistance", {
                            title: "Bot Auo"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , Tt = function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("ScammerScreen", {
                            title: "L\u1eeba \u0110\u1ea3o"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , At = (function() {
                    var t = (0,
                    r.default)((function*() {
                        Y(!1),
                        _.store("agreed", "agreed")
                    }
                    ))
                }(),
                function() {
                    var t = (0,
                    r.default)((function*() {
                        Y(!0)
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }());
                (0,
                o.useEffect)((function() {}
                ), []),
                function() {
                    var t = (0,
                    r.default)((function*() {
                        try {
                            if ("granted" !== (yield(0,
                            y.requestForegroundPermissionsAsync)()).status)
                                return void h.default.show({
                                    type: "error",
                                    text1: "Quy\u1ec1n truy c\u1eadp v\u1ecb tr\xed b\u1ecb t\u1eeb ch\u1ed1i.",
                                    text2: "H\u1ec7 th\u1ed1ng s\u1ebd kh\xf4ng t\xecm \u0111\u01b0\u1ee3c \u0111\u01a1n g\u1ea7n b\u1ea1n."
                                });
                            var t = (yield(0,
                            y.getCurrentPositionAsync)({})).coords
                              , e = t.latitude
                              , r = t.longitude;
                            n.g.lat = e,
                            n.g.lng = r
                        } catch (i) {
                            console.log("L\u1ed7i khi l\u1ea5y v\u1ecb tr\xed:", i)
                        }
                    }
                    ))
                }(),
                (0,
                o.useEffect)((function() {
                    return e.addListener("focus", (0,
                    r.default)((function*() {
                        var t, e = yield _.get("distance");
                        Ot = e;
                        try {
                            t = yield _.getActrsBlock()
                        } catch (r) {
                            console.error("Error getting actrsBlock:", r)
                        }
                        Array.isArray(t) && t.length > 0 && (Ft = t);
                        var n = yield _.get("isShowUnknowLocation");
                        Bt = "show" === n
                    }
                    )))
                }
                ), [e]);
                var Et = function() {
                    var t = (0,
                    r.default)((function*() {
                        Y(!1),
                        e.navigate("BankScreen", {
                            title: "N\xe2ng C\u1ea5p VIP"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                V.jsxs)(ut, {
                    style: Pt.screen,
                    children: [(0,
                    V.jsx)(M.default, {
                        style: Pt.navibarContainer,
                        children: (0,
                        V.jsx)(vt, {
                            goBugs: et ? null : At,
                            goScam: et ? Tt : null,
                            goBotAuto: St,
                            goChangeArea: kt,
                            goFilter: bt,
                            goFavorite: wt,
                            title: c.length > 0 ? c : "\u0110\u01a1n m\u1edbi"
                        })
                    }), (0,
                    V.jsx)(Ct, {
                        style: Pt.alert,
                        icon: (0,
                        V.jsx)(M.default, {
                            style: [Pt.icon, {
                                borderRadius: 32
                            }],
                            children: (0,
                            V.jsx)(W.default, {
                                name: "megaphone",
                                size: 36,
                                color: "#FFFFFF"
                            })
                        }),
                        onRequestClose: rt,
                        visible: X,
                        children: (0,
                        V.jsxs)(M.default, {
                            style: Pt.content,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: Pt.contentText,
                                children: "H\xe3y c\xf9ng chung tay duy tr\xec, x\xe2y d\u1ef1ng v\xe0 ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng l\xe2u d\xe0i b\u1eb1ng c\xe1ch \u1ee7ng h\u1ed9 kinh ph\xed. M\u1ecdi \u0111\xf3ng g\xf3p \u0111\u1ec1u mang l\u1ea1i \xfd ngh\u0129a l\u1edbn lao!"
                            }), (0,
                            V.jsx)(D.default, {
                                style: Pt.btn,
                                onPress: Et,
                                children: (0,
                                V.jsx)(H.default, {
                                    style: Pt.btnText,
                                    children: "T\xe0i tr\u1ee3 ngay \u0111\u1ec3 t\u1eaft th\xf4ng b\xe1o n\xe0y."
                                })
                            }), (0,
                            V.jsx)(D.default, {
                                style: Pt.btn,
                                onPress: function() {
                                    Y(!1)
                                },
                                children: (0,
                                V.jsx)(H.default, {
                                    style: Pt.btnText,
                                    children: "Ti\u1ebfp t\u1ee5c d\xf9ng mi\u1ec5n ph\xed."
                                })
                            })]
                        })
                    }), k || 0 !== x.length ? (0,
                    V.jsx)(M.default, {
                        style: Pt.container,
                        children: (0,
                        V.jsx)(E.default, {
                            style: {
                                marginTop: 10,
                                maxHeight: a
                            },
                            data: x,
                            keyExtractor: function(t, e) {
                                return e.toString()
                            },
                            ItemSeparatorComponent: function() {
                                return (0,
                                V.jsx)(M.default, {
                                    style: {
                                        height: 0
                                    }
                                })
                            },
                            renderItem: function(t) {
                                var e = t.item;
                                return e && (0,
                                V.jsx)(at, {
                                    item: e,
                                    isFavorite: I.includes(null == e ? void 0 : e.id),
                                    autoComment: yt,
                                    autoSave: mt,
                                    addToFavorite: xt,
                                    viewProfile: jt,
                                    onActionSheetPress: it,
                                    isShowMap: _t
                                })
                            },
                            removeClippedSubviews: !0
                        })
                    }) : (0,
                    V.jsx)(M.default, {
                        style: {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: (0,
                        V.jsx)(H.default, {
                            style: {
                                textAlign: "center",
                                color: "white"
                            },
                            children: "Danh s\xe1ch tr\u1ed1ng."
                        })
                    }), (0,
                    V.jsx)(U, {
                        visible: k
                    })]
                })
            };
            var Rt = n(23612)
              , Lt = n(33777)
              , Dt = n(48002)
              , Ht = n(45987);
            const Nt = {
                text: {
                    fontSize: 18,
                    fontFamily: (n(66578).default.OS,
                    "Arial"),
                    color: c.darkGrey
                }
            };
            var Mt = ["children", "style"];
            function Wt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Vt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Wt(Object(n), !0).forEach((function(e) {
                        (0,
                        l.default)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            R.default.create({});
            const Ut = function(t) {
                var e = t.children
                  , n = t.style
                  , r = (0,
                Ht.default)(t, Mt);
                return (0,
                V.jsx)(H.default, Vt(Vt({
                    style: [Nt.text, n]
                }, r), {}, {
                    children: e
                }))
            };
            var qt = R.default.create({
                container: {
                    alignItems: "center",
                    flexDirection: "row",
                    padding: 0,
                    backgroundColor: "#23262e"
                },
                detailsContainer: {
                    flex: 1,
                    marginLeft: 10,
                    justifyContent: "center"
                },
                image: {
                    width: 70,
                    height: 70,
                    borderRadius: 35
                },
                subTitle: {
                    color: "white"
                },
                title: {
                    fontWeight: "500",
                    color: "white"
                }
            });
            const Gt = function(t) {
                var e = t.title
                  , r = t.subTitle
                  , i = t.image
                  , o = t.IconComponent
                  , a = t.onPress
                  , l = t.renderRightActions
                  , s = t.rightIcon;
                return (0,
                V.jsx)(Dt.default, {
                    renderRightActions: l,
                    children: (0,
                    V.jsx)(Lt.default, {
                        underlayColor: c.light,
                        onPress: a,
                        children: (0,
                        V.jsxs)(M.default, {
                            style: qt.container,
                            children: [o, i ? (0,
                            V.jsx)(Rt.default, {
                                style: qt.image,
                                source: {
                                    uri: i
                                }
                            }) : (0,
                            V.jsx)(Rt.default, {
                                style: qt.image,
                                source: n(45020)
                            }), (0,
                            V.jsxs)(M.default, {
                                style: qt.detailsContainer,
                                children: [(0,
                                V.jsx)(Ut, {
                                    style: qt.title,
                                    numberOflines: 1,
                                    children: e
                                }), r && (0,
                                V.jsx)(Ut, {
                                    style: qt.subTitle,
                                    numberOflines: 2,
                                    children: r
                                })]
                            }), s ? (0,
                            V.jsx)(yt.default, {
                                color: c.mediumGrey,
                                name: "chevron-right",
                                size: 25
                            }) : null]
                        })
                    })
                })
            };
            var Kt = ["children", "style"];
            function Jt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Xt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Jt(Object(n), !0).forEach((function(e) {
                        (0,
                        l.default)(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            const Yt = function(t) {
                var e = t.children
                  , n = t.style
                  , r = (0,
                Ht.default)(t, Kt);
                return (0,
                V.jsx)(H.default, Xt(Xt({
                    style: [Nt.text, n]
                }, r), {}, {
                    children: e
                }))
            };
            var Qt = n(30381);
            n(65666),
            Qt.locale("vi");
            var Zt = R.default.create({
                card: {
                    borderRadius: 15,
                    backgroundColor: "#2c2f39",
                    marginBottom: 10,
                    overflow: "hidden"
                },
                detailsContainer: {
                    padding: 5
                },
                subTitle: {
                    fontSize: 14,
                    color: "white"
                },
                title: {
                    color: c.primary,
                    fontWeight: "bold",
                    color: "white"
                },
                row: {
                    flexDirection: "row",
                    alignItems: "center"
                },
                source: {
                    color: "white",
                    fontSize: 12,
                    marginBottom: 7,
                    marginLeft: 10
                },
                userInfo: {
                    color: "white",
                    fontSize: 12,
                    marginBottom: 2,
                    marginLeft: 5
                },
                time: {
                    color: "#2ea04b",
                    marginLeft: 5,
                    fontStyle: "italic"
                },
                buttonContainer: {
                    alignItems: "center",
                    padding: 10
                },
                button: {
                    width: "100%",
                    height: 40,
                    backgroundColor: c.primary,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center"
                },
                buttonText: {
                    color: "white",
                    fontWeight: "bold"
                },
                disabledButton: {
                    opacity: .5
                }
            });
            const $t = function(t) {
                var e = t.item;
                return (0,
                V.jsx)(V.Fragment, {
                    children: (0,
                    V.jsxs)(M.default, {
                        style: Zt.card,
                        children: [(0,
                        V.jsxs)(M.default, {
                            style: Zt.detailsContainer,
                            children: [(0,
                            V.jsxs)(M.default, {
                                style: {
                                    flexDirection: "row",
                                    marginBottom: 5,
                                    marginTop: 5
                                },
                                children: [(0,
                                V.jsxs)(H.default, {
                                    style: {
                                        color: "white"
                                    },
                                    children: [Qt(e.created_at).format("hh:mm DD/MM/YYYY"), " "]
                                }), (0,
                                V.jsx)(nt, {
                                    style: Zt.time,
                                    time: e.created_at,
                                    interval: 1e3
                                })]
                            }), (0,
                            V.jsx)(Ut, {
                                style: Zt.subTitle,
                                numberOfLines: 7,
                                children: null == e ? void 0 : e.desc
                            })]
                        }), (0,
                        V.jsx)(M.default, {
                            style: Zt.buttonContainer,
                            children: (0,
                            V.jsx)(D.default, {
                                style: Zt.button,
                                onPress: function() {
                                    var t;
                                    return "ios" === (null == (t = n.g.data3rd) ? void 0 : t.platform) ? window.location.href = e.source_url : q.default.openURL(e.source_url)
                                },
                                children: (0,
                                V.jsx)(H.default, {
                                    style: Zt.buttonText,
                                    children: "Xem Tin"
                                })
                            })
                        })]
                    })
                })
            };
            var te = [];
            var ee = R.default.create({
                screen: {
                    marginTop: 44,
                    backgroundColor: "#23262e",
                    flex: 1
                },
                container: {
                    marginVertical: 20
                },
                detailsContainer: {
                    padding: 10
                },
                image: {
                    width: "100%",
                    height: 300
                },
                price: {
                    color: c.secondary,
                    fontWeight: "bold",
                    fontSize: 20,
                    marginVertical: 10
                },
                title: {
                    fontSize: 24,
                    fontWeight: "500"
                },
                userContainer: {
                    marginVertical: 10
                },
                container: {
                    justifyContent: "center",
                    alignItems: "center"
                },
                buttonContainer: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10
                },
                button: {
                    width: "32%",
                    height: 40,
                    backgroundColor: c.primary,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center"
                },
                buttonText: {
                    color: "white",
                    fontWeight: "bold"
                },
                disabledButton: {
                    opacity: .5
                },
                alert: {
                    backgroundColor: "#EEEEEE"
                },
                icon: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C3272B",
                    width: "100%"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -16,
                    marginBottom: 16
                },
                contentText: {
                    textAlign: "center"
                },
                btn: {
                    borderRadius: 32,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    alignSelf: "stretch",
                    backgroundColor: "#C3272B",
                    marginTop: 16,
                    paddingHorizontal: 16
                },
                btnText: {
                    color: "#FFFFFF"
                }
            });
            const ne = function(t) {
                var e, a = t.navigation, l = t.route.params, s = l.title, c = l.actrsId, u = (0,
                o.useState)([]), d = (0,
                i.default)(u, 2), f = d[0], g = d[1], p = (0,
                o.useState)(null), y = (0,
                i.default)(p, 2), m = y[0], v = y[1], x = (0,
                o.useState)(!1), j = (0,
                i.default)(x, 2), b = j[0], w = j[1], k = (0,
                o.useState)(!1), C = (0,
                i.default)(k, 2), S = C[0], T = C[1], A = (0,
                o.useState)(!1), I = (0,
                i.default)(A, 2), O = I[0], B = I[1];
                o.useLayoutEffect((function() {
                    a.setOptions({
                        title: s,
                        headerBackTitle: null
                    })
                }
                ), [a, s]);
                var z = function() {
                    var t = (0,
                    r.default)((function*() {
                        var t = "/public-api/v1/social/fb/get-actrs-details/" + c;
                        w(!0);
                        try {
                            var e = yield gt.getHttp(t);
                            if (w(!1),
                            200 === e.status && 200 === e.data.status.code) {
                                var n = e.data.data;
                                v(n.actrs),
                                g(n.feeds)
                            }
                        } catch (r) {
                            console.log(r),
                            h.default.show({
                                type: "error",
                                text1: "C\xf3 l\u1ed7i x\u1ea3y ra",
                                text2: "Vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat"
                            })
                        }
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                (0,
                o.useEffect)((function() {
                    z()
                }
                ), []),
                (0,
                o.useEffect)((function() {
                    window.scrollTo(0, 0)
                }
                ), []);
                var F = function() {
                    var t = (0,
                    r.default)((function*() {
                        T(!1),
                        P(m.actrs, "sos")
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , P = function() {
                    var t = (0,
                    r.default)((function*(t, e) {
                        if (console.log(e, t),
                        "sos" === e) {
                            var n = yield _.getActrsReport();
                            if (Array.isArray(n) && n.length > 0 && n.includes(t))
                                return console.log(e, t),
                                void h.default.show({
                                    type: "error",
                                    text1: "B\u1ea1n \u0111\xe3 b\xe1o c\xe1o ng\u01b0\u1eddi n\xe0y r\u1ed3i."
                                });
                            Array.isArray(n) && (console.log(e, t),
                            yield n.push(t),
                            _.storeActrsReport(JSON.stringify(n)))
                        }
                        var r = "/public-api/v1/social/fb/action-actrs/" + t + "/" + e;
                        console.log("handleActionActrs 3"),
                        w(!0);
                        var i = yield gt.getHttp(r);
                        w(!1),
                        200 === i.status && h.default.show({
                            type: "success",
                            text1: "C\u1ea3m \u01a1n b\u1ea1n \u0111\xe3 th\xf4ng b\xe1o"
                        })
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                o.useEffect)((function() {
                    var t = function() {
                        var t = (0,
                        r.default)((function*() {
                            var t;
                            try {
                                t = yield _.getActrsBlock()
                            } catch (e) {
                                console.error("Error getting actrsBlock:", e)
                            }
                            Array.isArray(t) && t.length > 0 && (te = t),
                            te.includes(c) && B(!0)
                        }
                        ));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    t(),
                    z()
                }
                ), []),
                (0,
                V.jsxs)(st.default, {
                    style: ee.screen,
                    children: [(0,
                    V.jsx)(Ct, {
                        style: ee.alert,
                        icon: (0,
                        V.jsx)(M.default, {
                            style: [ee.icon, {
                                borderRadius: 32
                            }],
                            children: (0,
                            V.jsx)(W.default, {
                                name: "alert",
                                size: 36,
                                color: "#FFFFFF"
                            })
                        }),
                        onRequestClose: function() {
                            T(!1)
                        },
                        visible: S,
                        children: (0,
                        V.jsxs)(M.default, {
                            style: ee.content,
                            children: [(0,
                            V.jsxs)(Yt, {
                                style: ee.contentText,
                                children: ["B\u1ea1n \u0111ang b\xe1o L\u1eeaA \u0110\u1ea2O KH\u1ea8N C\u1ea4P, t\u1ea5t c\u1ea3 shipper s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c th\xf4ng b\xe1o n\xe0y. B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn \u0111\xe2y l\xe0 L\u1eeaA \u0110\u1ea2O? N\u1ebfu b\u1ea1n c\u1ed1 t\xecnh b\xe1o kh\xf4ng \u0111\xfang, ch\xfang t\xf4i s\u1ebd KH\xd3A T\xc0I KHO\u1ea2N ", null == (e = n.g.data3rd) ? void 0 : e.phone.replace(/^\s/, "+"), " c\u1ee7a b\u1ea1n v\u0129nh vi\u1ec5n."]
                            }), (0,
                            V.jsx)(D.default, {
                                style: ee.btn,
                                onPress: F,
                                children: (0,
                                V.jsx)(Yt, {
                                    style: ee.btnText,
                                    children: "B\xc1O KH\u1ea8N C\u1ea4P"
                                })
                            }), (0,
                            V.jsx)(D.default, {
                                style: [ee.btn, {
                                    backgroundColor: "#1966fe"
                                }],
                                onPress: function() {
                                    T(!1)
                                },
                                children: (0,
                                V.jsx)(Yt, {
                                    style: ee.btnText,
                                    children: "T\xd4I NH\u1ea6M, H\u1ee6Y"
                                })
                            })]
                        })
                    }), (0,
                    V.jsx)(vt, {
                        title: "Ng\u01b0\u1eddi \u0111\u0103ng",
                        goBack: function() {
                            a.goBack()
                        }
                    }), (0,
                    V.jsx)(U, {
                        visible: b
                    }), null != m && (0,
                    V.jsxs)(M.default, {
                        style: ee.detailsContainer,
                        children: [(0,
                        V.jsx)(M.default, {
                            style: ee.userContainer,
                            children: (0,
                            V.jsx)(Gt, {
                                title: m.name,
                                subTitle: "\u0110\xe3 \u0111\u0103ng: " + m.num_post + "          Ph\u1ed1t: " + m.report,
                                image: m.avatar
                            })
                        }), (0,
                        V.jsxs)(M.default, {
                            style: ee.buttonContainer,
                            children: [(0,
                            V.jsx)(D.default, {
                                style: [ee.button],
                                onPress: function() {
                                    var t;
                                    "ios" === (null == (t = n.g.data3rd) ? void 0 : t.platform) ? window.location.href = "https://www.facebook.com/profile.php?id=" + m.actrs : q.default.openURL("https://www.facebook.com/profile.php?id=" + m.actrs)
                                },
                                children: (0,
                                V.jsx)(Yt, {
                                    style: ee.buttonText,
                                    children: "Check F.B"
                                })
                            }), (0,
                            V.jsx)(D.default, {
                                style: [ee.button],
                                onPress: function() {
                                    return function(t) {
                                        te.length > 1e3 ? h.default.show({
                                            type: "error",
                                            text1: "Ch\u1eb7n t\u1ed1i \u0111a 1000 shop. Vui l\xf2ng x\xf3a b\u1edbt"
                                        }) : (te.includes(t) ? (B(!1),
                                        h.default.show({
                                            type: "success",
                                            text1: "\u0110\xe3 b\u1ecf ch\u1eb7n th\xe0nh c\xf4ng."
                                        }),
                                        te = te.filter((function(e) {
                                            return e !== t
                                        }
                                        ))) : (B(!0),
                                        te.push(t),
                                        h.default.show({
                                            type: "success",
                                            text1: "Ch\u1eb7n th\xe0nh c\xf4ng."
                                        })),
                                        _.storeActrsBlock(JSON.stringify(te)))
                                    }(m.actrs)
                                },
                                children: (0,
                                V.jsx)(Yt, {
                                    style: ee.buttonText,
                                    children: O ? "B\u1ecf ch\u1eb7n" : "Ch\u1eb7n"
                                })
                            }), (0,
                            V.jsx)(D.default, {
                                style: [ee.button, {
                                    backgroundColor: "#b749f7"
                                }],
                                onPress: function() {
                                    T(!0)
                                },
                                children: (0,
                                V.jsx)(Yt, {
                                    style: ee.buttonText,
                                    children: "SOS L.\u0110\u1ea3o"
                                })
                            })]
                        }), (0,
                        V.jsx)(M.default, {
                            style: ee.container,
                            children: (0,
                            V.jsx)(Yt, {
                                style: {
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "white"
                                },
                                children: "Tin \u0111\xe3 \u0111\u0103ng"
                            })
                        })]
                    }), (0,
                    V.jsx)(E.default, {
                        contentContainerStyle: {
                            paddingBottom: 20,
                            padding: 10
                        },
                        data: f,
                        keyExtractor: function(t, e) {
                            return e.toString()
                        },
                        renderItem: function(t) {
                            var e = t.item;
                            return (0,
                            V.jsx)($t, {
                                item: e
                            })
                        }
                    })]
                })
            };
            var re = R.default.create({
                container: {
                    alignItems: "center",
                    flexDirection: "row",
                    padding: 15,
                    backgroundColor: "#2c2f39",
                    height: 44
                },
                detailsContainer: {
                    flex: 1,
                    marginLeft: 10,
                    justifyContent: "center"
                },
                image: {
                    width: 36,
                    height: 36,
                    borderRadius: 35
                },
                subTitle: {
                    color: "white"
                },
                title: {
                    fontWeight: "500",
                    color: "white"
                }
            });
            const ie = function(t) {
                var e = t.title
                  , n = t.subTitle
                  , r = t.image
                  , i = t.IconComponent
                  , o = t.onPress
                  , a = t.isCheck
                  , l = (t.renderRightActions,
                t.isShowRight);
                return (0,
                V.jsx)(M.default, {
                    style: {
                        paddingHorizontal: 10,
                        paddingBottom: 5
                    },
                    children: (0,
                    V.jsx)(Lt.default, {
                        underlayColor: c.light,
                        onPress: o,
                        children: (0,
                        V.jsxs)(M.default, {
                            style: re.container,
                            children: [i, r && (0,
                            V.jsx)(Rt.default, {
                                style: re.image,
                                source: r
                            }), (0,
                            V.jsxs)(M.default, {
                                style: re.detailsContainer,
                                children: [(0,
                                V.jsx)(Ut, {
                                    style: re.title,
                                    numberOflines: 1,
                                    children: e
                                }), n && (0,
                                V.jsx)(Ut, {
                                    style: re.subTitle,
                                    numberOflines: 2,
                                    children: n
                                })]
                            }), l ? (0,
                            V.jsx)(W.default, {
                                color: "white",
                                name: "chevron-forward-sharp",
                                size: 25
                            }) : a ? (0,
                            V.jsx)(W.default, {
                                color: "white",
                                name: "checkbox-sharp",
                                size: 25
                            }) : (0,
                            V.jsx)(W.default, {
                                color: "white",
                                name: "square-outline",
                                size: 25
                            })]
                        })
                    })
                })
            };
            var oe = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    marginVertical: 20
                }
            });
            const ae = function(t) {
                var e = t.navigation
                  , a = (t.route,
                (0,
                o.useState)(!1))
                  , l = (0,
                i.default)(a, 2)
                  , s = l[0]
                  , u = l[1]
                  , d = (0,
                o.useState)(!1)
                  , f = (0,
                i.default)(d, 2)
                  , g = f[0]
                  , p = f[1]
                  , y = (0,
                o.useState)(!1)
                  , m = (0,
                i.default)(y, 2)
                  , v = m[0]
                  , x = m[1]
                  , j = (0,
                o.useState)("")
                  , b = (0,
                i.default)(j, 2)
                  , w = b[0]
                  , k = b[1]
                  , C = function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("BlocksScreen", {
                            title: "\u0110\xe3 Ch\u1eb7n"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , S = (function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("BotAutoDistance", {
                            title: "Bot Auo"
                        })
                    }
                    ))
                }(),
                function() {
                    var t = (0,
                    r.default)((function*() {
                        e.navigate("BankScreen", {
                            title: "N\xe2ng C\u1ea5p VIP"
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }())
                  , T = function() {
                    var t = (0,
                    r.default)((function*() {
                        var t;
                        "ios" === (null == (t = n.g.data3rd) ? void 0 : t.platform) ? window.location.href = "https://zalo.me/0944889705" : q.default.openURL("https://zalo.me/0944889705")
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , A = function() {
                    var t = (0,
                    r.default)((function*() {
                        var t, e;
                        "DA_NANG" == (yield _.get("area")) ? "ios" === (null == (t = n.g.data3rd) ? void 0 : t.platform) ? window.location.href = "https://zalo.me/g/vsnjmr793" : q.default.openURL("https://zalo.me/g/vsnjmr793") : "ios" === (null == (e = n.g.data3rd) ? void 0 : e.platform) ? window.location.href = "https://zalo.me/g/wkwfyb413" : q.default.openURL("https://zalo.me/g/wkwfyb413")
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
                  , I = [{
                    title: "T\xe0i tr\u1ee3 kinh ph\xed",
                    index: 101,
                    isShowRight: !0,
                    icon: {
                        name: "star",
                        backgroundColor: c.primary
                    },
                    targetAction: S
                }, {
                    title: "Danh s\xe1ch Ch\u1eb7n",
                    index: 110,
                    isShowRight: !0,
                    icon: {
                        name: "eye-off",
                        backgroundColor: c.primary
                    },
                    targetAction: C
                }, {
                    title: "Ch\u1ecdn b\xe1n k\xednh qu\xe9t \u0111\u01a1n",
                    index: 1,
                    isShowRight: !0,
                    icon: {
                        name: "radio",
                        backgroundColor: c.primary
                    },
                    targetAction: function() {
                        e.navigate("FilterFastNewsDistance", {
                            title: "Kho\u1ea3n c\xe1ch"
                        })
                    }
                }, {
                    title: "Hi\u1ec7n \u0111\u01a1n \u1ea9n danh",
                    index: 22,
                    isShowRight: !1,
                    icon: {
                        name: "walk",
                        backgroundColor: c.primary
                    },
                    targetAction: function() {
                        s ? h.default.show({
                            type: "error",
                            text1: "\u0110\xe3 \u1ea9n c\xe1c \u0111\u01a1n \u0111\u0103ng \u1ea8n Danh."
                        }) : h.default.show({
                            type: "success",
                            text1: "\u0110\xe3 hi\u1ec7n c\xe1c \u0111\u01a1n \u0111\u0103ng \u1ea8n Danh."
                        }),
                        u(!s)
                    }
                }, {
                    title: "Hi\u1ec7n b\u1ea3n \u0111\u1ed3 khi c\xf3 \u0111\u01a1n m\u1edbi",
                    index: 2,
                    isShowRight: !1,
                    icon: {
                        name: "map",
                        backgroundColor: c.primary
                    },
                    targetAction: function() {
                        g ? h.default.show({
                            type: "success",
                            text1: "B\u1ea1n \u0111\xe3 t\u1eaft hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 khi c\xf3 \u0111\u01a1n m\u1edbi."
                        }) : h.default.show({
                            type: "success",
                            text1: "B\u1ea1n \u0111\xe3 b\u1eadt hi\u1ec3n th\u1ecb b\u1ea3n \u0111\u1ed3 khi c\xf3 \u0111\u01a1n m\u1edbi."
                        }),
                        p(!g)
                    }
                }, {
                    title: "Nh\u1eadn th\xf4ng b\xe1o khi c\xf3 \u0111\u01a1n m\u1edbi",
                    index: 11,
                    isShowRight: !1,
                    icon: {
                        name: "notifications",
                        backgroundColor: c.primary
                    },
                    targetAction: function() {
                        function t() {
                            return (t = (0,
                            r.default)((function*() {
                                var t, e = null == (t = n.g.data3rd) ? void 0 : t.phone.replace(/^\s/, "+"), r = "/public-api/v1/social/fb/notification-action/" + e + "/UP?area=" + w;
                                v && (r = "/public-api/v1/social/fb/notification-action/" + e + "/DEL"),
                                gt.getHttp(r)
                            }
                            ))).apply(this, arguments)
                        }
                        !function() {
                            t.apply(this, arguments)
                        }(),
                        v ? h.default.show({
                            type: "success",
                            text1: "Y\xeau c\u1ea7u s\u1ebd \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n trong 20s",
                            text2: "B\u1ea1n \u0111\xe3 t\u1eaft th\xf4ng b\xe1o khi c\xf3 \u0111\u01a1n m\u1edbi."
                        }) : h.default.show({
                            type: "success",
                            text1: "Y\xeau c\u1ea7u s\u1ebd \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n trong 20s",
                            text2: "B\u1ea1n \u0111\xe3 b\u1eadt th\xf4ng b\xe1o khi c\xf3 \u0111\u01a1n m\u1edbi."
                        }),
                        x(!v)
                    }
                }, {
                    title: "T\u1ef1 l\u01b0u \u0111\u01a1n khi li\xean h\u1ec7",
                    index: 3,
                    isShowRight: !1,
                    icon: {
                        name: "bookmark",
                        backgroundColor: c.primary
                    },
                    targetAction: function() {
                        console.log("goAutoSave")
                    }
                }, {
                    title: "Tham gia nh\xf3m ZALO h\u1ed7 tr\u1ee3",
                    index: 5,
                    isShowRight: !0,
                    icon: {
                        name: "people",
                        backgroundColor: c.primary
                    },
                    targetAction: A
                }, {
                    title: "Li\xean h\u1ec7 Admin App",
                    index: 55,
                    isShowRight: !0,
                    icon: {
                        name: "logo-snapchat",
                        backgroundColor: c.primary
                    },
                    targetAction: T
                }];
                return (0,
                o.useEffect)((function() {
                    function t() {
                        return (t = (0,
                        r.default)((function*() {
                            var t = yield _.get("isShowMap");
                            p("show" === t)
                        }
                        ))).apply(this, arguments)
                    }
                    !function() {
                        t.apply(this, arguments)
                    }()
                }
                ), []),
                (0,
                o.useEffect)((function() {
                    function t() {
                        return (t = (0,
                        r.default)((function*() {
                            var t = yield _.get("isShowAnonymous");
                            console.log(t),
                            u("showAnonymous" === t)
                        }
                        ))).apply(this, arguments)
                    }
                    !function() {
                        t.apply(this, arguments)
                    }()
                }
                ), []),
                (0,
                o.useEffect)((function() {
                    function t() {
                        return (t = (0,
                        r.default)((function*() {
                            yield _.store("isShowMap", g ? "show" : "noshow")
                        }
                        ))).apply(this, arguments)
                    }
                    !function() {
                        t.apply(this, arguments)
                    }()
                }
                ), [g]),
                (0,
                o.useEffect)((function() {
                    function t() {
                        return (t = (0,
                        r.default)((function*() {
                            yield _.store("isShowAnonymous", s ? "showAnonymous" : "noshowAnonymous");
                            var t = yield _.get("isShowAnonymous");
                            console.log(t)
                        }
                        ))).apply(this, arguments)
                    }
                    !function() {
                        t.apply(this, arguments)
                    }()
                }
                ), [s]),
                (0,
                o.useEffect)((function() {
                    function t() {
                        return (t = (0,
                        r.default)((function*() {
                            var t, e = yield _.get("area");
                            k(e);
                            var r = "/public-api/v1/social/fb/notification-get-status/" + (null == (t = n.g.data3rd) ? void 0 : t.phone.replace(/^\s/, "+"));
                            console.log(r);
                            var i = yield gt.getHttp(r);
                            console.log(i.data),
                            200 === i.status && i.data ? x(!0) : x(!1)
                        }
                        ))).apply(this, arguments)
                    }
                    !function() {
                        t.apply(this, arguments)
                    }()
                }
                ), []),
                (0,
                V.jsxs)(ut, {
                    style: oe.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        title: "C\xe0i \u0111\u1eb7t",
                        goBack: function() {
                            e.goBack()
                        }
                    }), (0,
                    V.jsx)(M.default, {
                        style: oe.container,
                        children: (0,
                        V.jsx)(E.default, {
                            data: I,
                            keyExtractor: function(t) {
                                return t.title
                            },
                            renderItem: function(t) {
                                var e = t.item;
                                return (0,
                                V.jsx)(ie, {
                                    title: e.title,
                                    rightIcon: !0,
                                    IconComponent: (0,
                                    V.jsx)(W.default, {
                                        name: e.icon.name,
                                        size: 20,
                                        color: e.icon.backgroundColor
                                    }),
                                    isShowRight: e.isShowRight,
                                    isCheck: 2 == e.index ? g : 11 == e.index ? v : 22 != e.index || s,
                                    index: e.index,
                                    isShowMap: g,
                                    onPress: function() {
                                        e.targetAction(e)
                                    }
                                })
                            }
                        })
                    })]
                })
            };
            R.default.create({
                seperator: {
                    width: "100%",
                    height: 1,
                    backgroundColor: c.lightGrey
                }
            });
            var le = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    marginVertical: 20
                }
            });
            const se = function(t) {
                t.route;
                var e = t.navigation
                  , a = (0,
                o.useState)([])
                  , l = (0,
                i.default)(a, 2)
                  , s = l[0]
                  , c = l[1]
                  , u = (0,
                o.useState)("")
                  , d = (0,
                i.default)(u, 2)
                  , f = d[0]
                  , g = d[1]
                  , p = (0,
                o.useCallback)((0,
                r.default)((function*() {
                    try {
                        var t = yield gt.getHttp("/public-api/v1/social/fb/areas");
                        200 === t.status && c(t.data)
                    } catch (e) {
                        console.log(e),
                        h.default.show({
                            type: "error",
                            text1: "C\xf3 l\u1ed7i x\u1ea3y ra",
                            text2: "Vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat"
                        })
                    }
                }
                )), []);
                (0,
                o.useEffect)((function() {
                    p()
                }
                ), [p]);
                var y = (0,
                o.useCallback)(function() {
                    var t = (0,
                    r.default)((function*(t) {
                        var r;
                        n.g.f || P.emitEvent("joinRoom", t.code);
                        var i = yield _.get("area");
                        if (i != t.code) {
                            var o = (0,
                            It.getDatabase)()
                              , a = (0,
                            It.ref)(o, "/feeds/" + i);
                            (0,
                            It.off)(a)
                        }
                        _.store("area", t.code),
                        _.store("area_name", t.name),
                        "+84944889705" == (null == (r = n.g.data3rd) ? void 0 : r.phone.replace(/^\s/, "+")) && "HA_NOI" == t.code && (n.g.lat = 21.020766517849072,
                        n.g.lng = 105.83702248210905),
                        e.goBack(),
                        h.default.show({
                            type: "success",
                            text1: "B\u1ea1n \u0111\xe3 ch\u1ecdn khu v\u1ef1c " + t.name + " th\xe0nh c\xf4ng"
                        })
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), []);
                return (0,
                o.useEffect)((function() {
                    return e.addListener("focus", (0,
                    r.default)((function*() {
                        var t = yield _.get("area");
                        g(t)
                    }
                    )))
                }
                ), [e]),
                (0,
                V.jsxs)(ut, {
                    style: le.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        title: "Ch\u1ecdn khu v\u1ef1c",
                        goBack: function() {
                            e.goBack()
                        }
                    }), (0,
                    V.jsx)(M.default, {
                        style: le.container,
                        children: (0,
                        V.jsx)(E.default, {
                            data: s,
                            keyExtractor: (0,
                            o.useMemo)((function() {
                                return function(t) {
                                    return t.code
                                }
                            }
                            ), []),
                            renderItem: function(t) {
                                var e = t.item;
                                return (0,
                                V.jsx)(ie, {
                                    title: e.name,
                                    onPress: function() {
                                        return y(e)
                                    },
                                    isCheck: f === e.code
                                })
                            }
                        })
                    })]
                })
            };
            var ce = n(45999)
              , ue = R.default.create({
                container: {
                    height: 60,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 10
                },
                label: {
                    flex: 1,
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold"
                }
            });
            const de = function(t) {
                var e = t.switchHandle
                  , n = t.showUnknowLocation
                  , r = (0,
                o.useState)(!0)
                  , a = (0,
                i.default)(r, 2)
                  , l = a[0]
                  , s = a[1];
                return (0,
                o.useEffect)((function() {
                    s(n)
                }
                ), [n]),
                (0,
                V.jsxs)(M.default, {
                    style: ue.container,
                    children: [(0,
                    V.jsx)(H.default, {
                        style: ue.label,
                        children: "Hi\u1ec3n th\u1ecb \u0111\u01a1n kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\u1ecb tr\xed"
                    }), (0,
                    V.jsx)(ce.default, {
                        trackColor: {
                            false: "#767577",
                            true: "#fff"
                        },
                        thumbColor: "#f4f3f4",
                        onValueChange: function() {
                            l ? h.default.show({
                                type: "error",
                                text2: "B\u1ea1n \u0111\xe3 ch\u1ecdn \u1ea9n nh\u1eefng \u0111\u01a1n kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\u1ecb tr\xed."
                            }) : h.default.show({
                                type: "success",
                                text2: "B\u1ea1n \u0111\xe3 ch\u1ecdn hi\u1ec3n th\u1ecb nh\u1eefng \u0111\u01a1n kh\xf4ng x\xe1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c v\u1ecb tr\xed."
                            }),
                            s((function(t) {
                                return !t
                            }
                            )),
                            e(!l)
                        },
                        value: l
                    })]
                })
            };
            var fe = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    marginVertical: 20
                }
            });
            const he = function(t) {
                t.route;
                var e = t.navigation
                  , n = (0,
                o.useState)(50)
                  , a = (0,
                i.default)(n, 2)
                  , l = a[0]
                  , s = a[1]
                  , c = (0,
                o.useState)(!0)
                  , u = (0,
                i.default)(c, 2)
                  , d = u[0]
                  , f = u[1]
                  , g = (0,
                o.useState)([{
                    title: "< 1km",
                    value: 1
                }, {
                    title: "< 2km",
                    value: 2
                }, {
                    title: "< 3km",
                    value: 3
                }, {
                    title: "< 5km",
                    value: 5
                }, {
                    title: "< 7km",
                    value: 7
                }, {
                    title: "To\xe0n Th\xe0nh Ph\u1ed1",
                    value: 50
                }])
                  , p = (0,
                i.default)(g, 2)
                  , y = p[0];
                p[1],
                (0,
                o.useEffect)((function() {
                    function t() {
                        return t = (0,
                        r.default)((function*() {
                            var t = yield _.get("distance");
                            s(t);
                            var e = yield _.get("isShowUnknowLocation");
                            f("show" === e)
                        }
                        )),
                        t.apply(this, arguments)
                    }
                    !function() {
                        t.apply(this, arguments)
                    }()
                }
                ), []);
                var m = (0,
                o.useCallback)(function() {
                    var t = (0,
                    r.default)((function*(t) {
                        s(t.value),
                        yield _.store("distance", t.value),
                        h.default.show({
                            type: "success",
                            text1: "Ch\u1ec9 hi\u1ec7n \u0111\u01a1n c\xe1ch b\u1ea1n " + t.title
                        })
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), []);
                return (0,
                V.jsxs)(ut, {
                    style: fe.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        title: "B\xe1n k\xednh",
                        goBack: function() {
                            e.goBack()
                        }
                    }), (0,
                    V.jsxs)(M.default, {
                        style: fe.container,
                        children: [(0,
                        V.jsx)(M.default, {
                            children: (0,
                            V.jsx)(H.default, {
                                style: {
                                    padding: 10,
                                    marginVertical: 5,
                                    color: "white"
                                },
                                children: "Ch\u1ecdn b\xe1n k\xednh t\u1eeb v\u1ecb tr\xed c\u1ee7a b\u1ea1n \u0111\u1ebfn v\u1ecb tr\xed \u0111\u01a1n h\xe0ng. L\u01b0u \xfd: khi b\u1ea1n s\u1eed d\u1ee5ng t\xednh n\u0103ng n\xe0y, \u0111\u01a1n s\u1ebd hi\u1ec3n th\u1ecb ch\u1eadm h\u01a1n kho\u1ea3n ~ 0.3 gi\xe2y so v\u1edbi  b\xecnh th\u01b0\u1eddng. "
                            })
                        }), (0,
                        V.jsx)(E.default, {
                            data: y,
                            keyExtractor: (0,
                            o.useMemo)((function() {
                                return function(t) {
                                    return t.value
                                }
                            }
                            ), []),
                            renderItem: function(t) {
                                var e = t.item;
                                return (0,
                                V.jsx)(ie, {
                                    title: e.title,
                                    onPress: function() {
                                        return m(e)
                                    },
                                    isCheck: l == e.value
                                })
                            }
                        }), (0,
                        V.jsx)(M.default, {
                            style: {},
                            children: (0,
                            V.jsx)(de, {
                                showUnknowLocation: d,
                                switchHandle: function(t) {
                                    f(t),
                                    t ? _.store("isShowUnknowLocation", "show") : _.store("isShowUnknowLocation", "noshow")
                                }
                            })
                        })]
                    })]
                })
            };
            var ge = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    marginVertical: 20
                },
                alert: {
                    backgroundColor: "#EEEEEE"
                },
                icon: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C3272B",
                    width: "100%"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -16,
                    marginBottom: 16
                },
                contentText: {
                    textAlign: "center"
                },
                btn: {
                    borderRadius: 32,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    alignSelf: "stretch",
                    backgroundColor: "#C3272B",
                    marginTop: 16,
                    paddingHorizontal: 16
                },
                btnText: {
                    color: "#FFFFFF"
                }
            });
            const pe = function(t) {
                t.route;
                var e = t.navigation
                  , n = (0,
                o.useState)(!1)
                  , a = (0,
                i.default)(n, 2)
                  , l = a[0]
                  , s = a[1]
                  , c = (0,
                o.useState)("\u0110\u1ec3 tr\xe1nh t\xecnh tr\u1ea1ng SPAM. Vui l\xf2ng tham gia nh\xf3m Zalo \u0111\u1ec3 x\xe1c th\u1ef1c, tr\u01b0\u1edbc khi s\u1eed d\u1ee5ng t\xednh n\u0103ng n\xe0y.")
                  , u = (0,
                i.default)(c, 2)
                  , d = u[0]
                  , f = (u[1],
                (0,
                o.useState)(0))
                  , g = (0,
                i.default)(f, 2)
                  , p = g[0]
                  , y = g[1]
                  , m = (0,
                o.useState)([])
                  , v = (0,
                i.default)(m, 2)
                  , x = v[0]
                  , j = (v[1],
                (0,
                o.useState)([{
                    title: "< 1km",
                    value: 1
                }, {
                    title: "< 2km",
                    value: 2
                }, {
                    title: "< 3km",
                    value: 3
                }, {
                    title: "Kh\xf4ng d\xf9ng Bot",
                    value: 0
                }]))
                  , b = (0,
                i.default)(j, 2)
                  , w = b[0];
                b[1],
                (0,
                o.useEffect)((function() {
                    function t() {
                        return (t = (0,
                        r.default)((function*() {
                            var t = yield _.get("botdistance");
                            y(t)
                        }
                        ))).apply(this, arguments)
                    }
                    !function() {
                        t.apply(this, arguments)
                    }()
                }
                ), []);
                var k = (0,
                o.useCallback)(function() {
                    var t = (0,
                    r.default)((function*(t) {
                        0 == t.value ? (y(t.value),
                        yield _.store("botdistance", t.value),
                        h.default.show({
                            type: "success",
                            text1: "T\u1ef1 \u0111\u1ed9ng nh\u1eadn, khi \u0111\u01a1n c\xe1ch b\u1ea1n " + t.title
                        })) : C()
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), [])
                  , C = (0,
                o.useCallback)((function() {
                    s(!0)
                }
                ), [])
                  , S = (0,
                o.useCallback)((function() {
                    s(!1)
                }
                ), [])
                  , T = (0,
                o.useCallback)((function() {
                    C()
                }
                ), []);
                return (0,
                V.jsxs)(ut, {
                    style: ge.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        goSetUpBot: T,
                        title: "Bot Auto",
                        goBack: function() {
                            e.goBack()
                        }
                    }), (0,
                    V.jsx)(Ct, {
                        style: ge.alert,
                        icon: (0,
                        V.jsx)(M.default, {
                            style: [ge.icon, {
                                borderRadius: 32
                            }],
                            children: (0,
                            V.jsx)(W.default, {
                                name: "happy-outline",
                                size: 36,
                                color: "#FFFFFF"
                            })
                        }),
                        onRequestClose: S,
                        visible: l,
                        children: (0,
                        V.jsxs)(M.default, {
                            style: ge.content,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: ge.contentText,
                                children: d
                            }), (0,
                            V.jsx)(D.default, {
                                style: ge.btn,
                                onPress: S,
                                children: (0,
                                V.jsx)(H.default, {
                                    style: ge.btnText,
                                    children: "Okay"
                                })
                            })]
                        })
                    }), (0,
                    V.jsxs)(M.default, {
                        style: ge.container,
                        children: [(0,
                        V.jsx)(M.default, {
                            children: (0,
                            V.jsx)(H.default, {
                                style: {
                                    padding: 10,
                                    marginVertical: 5,
                                    color: "white"
                                },
                                children: "Bot s\u1ebd t\u1ef1 \u0111\u1ed9ng comment b\xe0i vi\u1ebft tr\xean Facebook v\xe0 nh\u1eafn Messenger nh\u1eadn \u0111\u01a1n \u0111\u1ebfn Ch\u1ee7 Shop, khi v\u1ecb tr\xed c\u1ee7a b\u1ea1n c\xe1ch \u0111\u01a1n h\xe0ng m\u1ed9t kho\u1ea3n c\xe1ch d\u01b0\u1edbi \u0111\xe2y: "
                            })
                        }), (0,
                        V.jsx)(E.default, {
                            data: w,
                            keyExtractor: (0,
                            o.useMemo)((function() {
                                return function(t) {
                                    return t.value
                                }
                            }
                            ), []),
                            renderItem: function(t) {
                                var e = t.item;
                                return (0,
                                V.jsx)(ie, {
                                    title: e.title,
                                    onPress: function() {
                                        return k(e)
                                    },
                                    isCheck: p == e.value
                                })
                            }
                        }), (0,
                        V.jsx)(M.default, {
                            style: {},
                            children: (0,
                            V.jsx)(M.default, {
                                children: (0,
                                V.jsx)(H.default, {
                                    style: {
                                        padding: 10,
                                        marginVertical: 5,
                                        color: "white"
                                    },
                                    children: 'Quan tr\u1ecdng: Vui l\xf2ng ch\u1ecdn "Kh\xf4ng d\xf9ng Bot" khi b\u1ea1n kh\xf4ng th\u1ec3 nh\u1eadn \u0111\u01a1n, \u0111\u1ec3 tr\xe1nh l\xe0m phi\u1ec1n Ch\u1ee7 Shop. Xin c\u1ea3m \u01a1n! '
                                })
                            })
                        }), (0,
                        V.jsx)(M.default, {
                            style: {
                                marginVertical: 20,
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: (0,
                            V.jsx)(H.default, {
                                style: {
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    color: "white"
                                },
                                children: "\u0110\u01a1n Bot v\u1eeba nh\u1eadn"
                            })
                        }), 0 === x.length ? (0,
                        V.jsx)(M.default, {
                            style: {
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: (0,
                            V.jsx)(H.default, {
                                style: {
                                    textAlign: "center",
                                    color: "white"
                                },
                                children: "Danh s\xe1ch tr\u1ed1ng."
                            })
                        }) : (0,
                        V.jsx)(E.default, {
                            contentContainerStyle: {
                                paddingBottom: 20,
                                padding: 10
                            },
                            data: x,
                            keyExtractor: function(t, e) {
                                return e.toString()
                            },
                            renderItem: function(t) {
                                var e = t.item;
                                return (0,
                                V.jsx)(CardShort, {
                                    item: e
                                })
                            }
                        })]
                    })]
                })
            };
            var ye = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    padding: 10
                },
                text: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "white"
                },
                alert: {
                    backgroundColor: "#EEEEEE"
                },
                icon: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C3272B",
                    width: "100%"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -16,
                    marginBottom: 16
                },
                contentText: {
                    textAlign: "center"
                },
                btn: {
                    borderRadius: 32,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    alignSelf: "stretch",
                    backgroundColor: "#C3272B",
                    marginTop: 16,
                    paddingHorizontal: 16
                },
                btnText: {
                    color: "#FFFFFF"
                }
            });
            const me = function(t) {
                var e = t.navigation
                  , n = t.route
                  , r = (L.default.get("window").height,
                n.params.title);
                return (0,
                V.jsxs)(ut, {
                    style: ye.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        title: r,
                        goBack: function() {
                            e.goBack()
                        }
                    }), (0,
                    V.jsx)("iframe", {
                        src: "https://shopmap.gojo.vn?a=c",
                        height: "100%",
                        width: "100%"
                    })]
                })
            };
            var ve = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    padding: 10,
                    marginTop: 10
                },
                text: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "white"
                },
                alert: {
                    backgroundColor: "#EEEEEE"
                },
                icon: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C3272B",
                    width: "100%"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -16,
                    marginBottom: 16
                },
                contentText: {
                    textAlign: "center"
                },
                btn: {
                    borderRadius: 32,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    alignSelf: "stretch",
                    backgroundColor: "#C3272B",
                    marginTop: 16,
                    paddingHorizontal: 16
                },
                btnText: {
                    color: "#FFFFFF"
                },
                detailsContainer: {
                    padding: 10
                },
                userContainer: {
                    marginVertical: 10
                },
                buttonContainer: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10
                },
                button: {
                    width: "47%",
                    height: 40,
                    backgroundColor: c.primary,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center"
                },
                buttonText: {
                    color: "white",
                    fontWeight: "bold"
                }
            });
            const xe = function(t) {
                var e = t.navigation
                  , a = t.route
                  , l = L.default.get("window").height
                  , s = a.params.title
                  , c = (0,
                o.useState)([])
                  , u = (0,
                i.default)(c, 2)
                  , d = u[0]
                  , f = u[1]
                  , h = (0,
                o.useState)(!1)
                  , g = (0,
                i.default)(h, 2)
                  , p = g[0]
                  , y = g[1]
                  , m = (0,
                o.useState)([])
                  , v = (0,
                i.default)(m, 2)
                  , x = (v[0],
                v[1],
                (0,
                pt.useActionSheet)().showActionSheetWithOptions,
                (0,
                o.useState)(!1))
                  , j = (0,
                i.default)(x, 2)
                  , b = (j[0],
                j[1])
                  , w = (0,
                o.useState)("")
                  , k = (0,
                i.default)(w, 2)
                  , C = (k[0],
                k[1],
                (0,
                o.useCallback)((function() {
                    b(!0)
                }
                ), []),
                function() {
                    var t = (0,
                    r.default)((function*(t) {
                        console.log(t.actrs),
                        e.navigate("ListingDetails", {
                            title: "Th\xf4ng Tin Ng\u01b0\u1eddi \u0110\u0103ng",
                            actrsId: t.actrs
                        })
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())
                  , S = function() {
                    var t = (0,
                    r.default)((function*() {
                        y(!0);
                        var t = yield gt.getHttp("/public-api/v1/social/fb/get-actrs-scam?skip=0&numReport=700");
                        y(!1),
                        200 === t.status && (console.log(t.data.data.actrs),
                        f(t.data.data.actrs))
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                o.useEffect)((function() {
                    S()
                }
                ), []),
                (0,
                V.jsxs)(ut, {
                    style: ve.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        title: s,
                        goBack: function() {
                            e.goBack()
                        }
                    }), !p && 0 === d.length && (0,
                    V.jsx)(M.default, {
                        style: {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: (0,
                        V.jsx)(H.default, {
                            style: {
                                textAlign: "center",
                                color: "white"
                            },
                            children: "Danh s\xe1ch tr\u1ed1ng."
                        })
                    }), (0,
                    V.jsx)(U, {
                        visible: p
                    }), (0,
                    V.jsx)(M.default, {
                        style: ve.container,
                        children: (0,
                        V.jsx)(E.default, {
                            style: {
                                maxHeight: l - 44
                            },
                            data: d,
                            keyExtractor: function(t, e) {
                                return e.toString()
                            },
                            ItemSeparatorComponent: function() {
                                return (0,
                                V.jsx)(M.default, {
                                    style: {
                                        height: 1,
                                        backgroundColor: "white"
                                    }
                                })
                            },
                            renderItem: function(t) {
                                t.actrs;
                                var e = t.index;
                                return (0,
                                V.jsxs)(M.default, {
                                    style: ve.detailsContainer,
                                    children: [(0,
                                    V.jsx)(M.default, {
                                        style: ve.userContainer,
                                        children: (0,
                                        V.jsx)(Gt, {
                                            title: d[e].name,
                                            subTitle: "\u0110\xe3 \u0111\u0103ng: " + d[e].num_post + "          Ph\u1ed1t: " + d[e].report,
                                            image: "https://cdn.gojo.vn/image-cdn/default/scam.png"
                                        })
                                    }), (0,
                                    V.jsxs)(M.default, {
                                        style: ve.buttonContainer,
                                        children: [(0,
                                        V.jsx)(D.default, {
                                            style: [ve.button],
                                            onPress: function() {
                                                var t;
                                                "ios" === (null == (t = n.g.data3rd) ? void 0 : t.platform) ? window.location.href = "https://www.facebook.com/profile.php?id=" + d[e].actrs : q.default.openURL("https://www.facebook.com/profile.php?id=" + d[e].actrs)
                                            },
                                            children: (0,
                                            V.jsx)(H.default, {
                                                style: ve.buttonText,
                                                children: "Check Facebook"
                                            })
                                        }), (0,
                                        V.jsx)(D.default, {
                                            style: [ve.button, {
                                                backgroundColor: "#b749f7"
                                            }],
                                            onPress: function() {
                                                C(d[e])
                                            },
                                            children: (0,
                                            V.jsx)(H.default, {
                                                style: ve.buttonText,
                                                children: "Tin \u0111\xe3 \u0111\u0103ng"
                                            })
                                        })]
                                    }), d[e].report_from.length > 0 ? (0,
                                    V.jsxs)(H.default, {
                                        style: {
                                            textAlign: "left",
                                            color: "white"
                                        },
                                        children: [" T\u1ed1 c\xe1o b\u1edfi: ", "XXXXX" + d[e].report_from.slice(6)]
                                    }) : null]
                                })
                            }
                        })
                    })]
                })
            };
            var je = n(47290);
            var be = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    padding: 10,
                    marginTop: 0
                },
                text: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "white"
                },
                alert: {
                    backgroundColor: "#EEEEEE"
                },
                icon: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C3272B",
                    width: "100%"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -16,
                    marginBottom: 16
                },
                contentText: {
                    textAlign: "center"
                },
                btn: {
                    borderRadius: 32,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    alignSelf: "stretch",
                    backgroundColor: "#C3272B",
                    marginTop: 16,
                    paddingHorizontal: 16
                },
                btnText: {
                    color: "#FFFFFF"
                },
                detailsContainer: {
                    padding: 10
                },
                userContainer: {
                    marginVertical: 10
                },
                buttonContainer: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10
                },
                button: {
                    width: "98%",
                    height: 40,
                    backgroundColor: c.primary,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center"
                },
                buttonText: {
                    color: "white",
                    fontWeight: "bold"
                }
            });
            const we = function(t) {
                var e = t.navigation
                  , n = t.route
                  , a = L.default.get("window").height
                  , l = n.params.title
                  , s = (0,
                o.useState)([])
                  , c = (0,
                i.default)(s, 2)
                  , u = c[0]
                  , d = c[1]
                  , f = (0,
                o.useState)(!1)
                  , g = (0,
                i.default)(f, 2)
                  , p = g[0]
                  , y = g[1]
                  , m = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        console.log(t.actrs),
                        e.navigate("ListingDetails", {
                            title: "Th\xf4ng Tin Ng\u01b0\u1eddi \u0110\u0103ng",
                            actrsId: t.actrs
                        })
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , v = function() {
                    var t = (0,
                    r.default)((function*() {
                        var t;
                        try {
                            t = yield _.getActrsBlock()
                        } catch (r) {
                            console.error("Error getting actrsBlock:", r)
                        }
                        if (Array.isArray(t) && t.length > 0) {
                            var e = "/public-api/v1/social/fb/get-actrs-block?ids=" + t.join(",");
                            y(!0);
                            var n = yield gt.getHttp(e);
                            y(!1),
                            200 === n.data.status.code && d(n.data.data.actrs)
                        }
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                (0,
                o.useEffect)((function() {
                    return e.addListener("focus", (function() {
                        v()
                    }
                    ))
                }
                ), [e]);
                var x = function() {
                    var t = (0,
                    r.default)((function*() {
                        var t;
                        try {
                            t = yield _.getActrsBlock()
                        } catch (r) {
                            console.error("Error getting actrsBlock:", r)
                        }
                        if (Array.isArray(t) && t.length > 0) {
                            var e = "/public-api/v1/social/fb/syn-actrs-block?action=UP&ids=" + t.join(",");
                            y(!0);
                            var n = yield gt.getHttp(e);
                            setTimeout((function() {
                                y(!1)
                            }
                            ), 2e3),
                            200 === n.data.status.code ? 200 === n.data.data.code ? h.default.show({
                                type: "success",
                                text1: '\u0110\xe3 l\u01b0u danh s\xe1ch "Ch\u1eb7n" l\xean Server.'
                            }) : 2 === n.data.data.code ? h.default.show({
                                type: "error",
                                text1: "S\u1ed1 \u0111i\u1ec7n tho\u1ea1i ch\u01b0a \u0111\u0103ng k\xfd tr\xean App m\u1edbi",
                                text2: "B\u1ea1n c\u1ea7n t\u1ea3i App m\u1edbi, \u0111\u0103ng k\xfd, sau \u0111\xf3 quay l\u1ea1i \u0111\xe2y."
                            }) : h.default.show({
                                type: "error",
                                text1: "C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 admin"
                            }) : h.default.show({
                                type: "error",
                                text1: "C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 admin"
                            })
                        }
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                V.jsxs)(ut, {
                    style: be.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        goSynBlock: x,
                        title: l,
                        goBack: function() {
                            e.goBack()
                        }
                    }), !p && 0 === u.length && (0,
                    V.jsx)(M.default, {
                        style: {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: (0,
                        V.jsx)(H.default, {
                            style: {
                                textAlign: "center",
                                color: "white"
                            },
                            children: "Danh s\xe1ch tr\u1ed1ng."
                        })
                    }), (0,
                    V.jsxs)(M.default, {
                        style: be.container,
                        children: [p && (0,
                        V.jsx)(je.default, {
                            size: "large",
                            color: "#9437ff"
                        }), (0,
                        V.jsx)(E.default, {
                            style: {
                                maxHeight: a - 44
                            },
                            data: u,
                            keyExtractor: function(t, e) {
                                return e.toString()
                            },
                            ItemSeparatorComponent: function() {
                                return (0,
                                V.jsx)(M.default, {
                                    style: {
                                        height: 1,
                                        backgroundColor: "white"
                                    }
                                })
                            },
                            renderItem: function(t) {
                                t.actrs;
                                var e = t.index;
                                return (0,
                                V.jsxs)(M.default, {
                                    style: be.detailsContainer,
                                    children: [(0,
                                    V.jsx)(M.default, {
                                        style: be.userContainer,
                                        children: (0,
                                        V.jsx)(Gt, {
                                            title: u[e].name,
                                            subTitle: "\u0110\xe3 \u0111\u0103ng: " + u[e].num_post + "          Ph\u1ed1t: " + u[e].report
                                        })
                                    }), (0,
                                    V.jsx)(M.default, {
                                        style: be.buttonContainer,
                                        children: (0,
                                        V.jsx)(D.default, {
                                            style: [be.button, {
                                                backgroundColor: "#b749f7"
                                            }],
                                            onPress: function() {
                                                m(u[e])
                                            },
                                            children: (0,
                                            V.jsx)(H.default, {
                                                style: be.buttonText,
                                                children: "Xem"
                                            })
                                        })
                                    })]
                                })
                            }
                        })]
                    })]
                })
            };
            var ke = R.default.create({
                screen: {
                    marginTop: 13,
                    backgroundColor: "#23262e"
                },
                container: {
                    padding: 10,
                    marginTop: 10
                },
                text: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "white"
                },
                alert: {
                    backgroundColor: "#EEEEEE"
                },
                icon: {
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#C3272B",
                    width: "100%"
                },
                content: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: -16,
                    marginBottom: 16
                },
                contentText: {
                    textAlign: "center"
                },
                btn: {
                    borderRadius: 32,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 8,
                    paddingVertical: 8,
                    alignSelf: "stretch",
                    backgroundColor: "#C3272B",
                    marginTop: 16,
                    paddingHorizontal: 16
                },
                btnText: {
                    color: "#FFFFFF"
                }
            });
            const Ce = function(t) {
                var e = t.navigation
                  , n = t.route
                  , a = L.default.get("window").height
                  , l = n.params.title
                  , s = (0,
                o.useState)([])
                  , c = (0,
                i.default)(s, 2)
                  , u = c[0]
                  , d = c[1]
                  , f = (0,
                o.useState)(!1)
                  , g = (0,
                i.default)(f, 2)
                  , y = g[0]
                  , m = g[1]
                  , v = (0,
                o.useState)([])
                  , x = (0,
                i.default)(v, 2)
                  , j = x[0]
                  , b = x[1]
                  , w = (0,
                pt.useActionSheet)().showActionSheetWithOptions
                  , k = (0,
                o.useState)(!1)
                  , C = (0,
                i.default)(k, 2)
                  , S = C[0]
                  , T = C[1]
                  , A = (0,
                o.useState)("")
                  , I = (0,
                i.default)(A, 2)
                  , O = (I[0],
                I[1],
                (0,
                o.useCallback)((function() {
                    T(!0)
                }
                ), []))
                  , B = (0,
                o.useCallback)((function() {
                    T(!1)
                }
                ), [])
                  , z = function(t) {
                    w({
                        options: ["B\xe1o ph\u1ed1t: tin gi\u1ea3 - l\u1eeba \u0111\u1ea3o", "Sai s\u1ed1 \u0111i\u1ec7n tho\u1ea1i", "Cancel"],
                        cancelButtonIndex: 2,
                        destructiveButtonIndex: 0
                    }, (function(e) {
                        switch (e) {
                        case 1:
                            F(t, "invalidate-phone");
                            break;
                        case 0:
                            F(t, "report")
                        }
                    }
                    ))
                }
                  , F = function() {
                    var t = (0,
                    r.default)((function*(t, e) {
                        if ("report" === e) {
                            var n = yield _.getActrsReport();
                            if (Array.isArray(n) && n.length > 0 && n.includes(t))
                                return void h.default.show({
                                    type: "error",
                                    text1: "B\u1ea1n \u0111\xe3 b\xe1o c\xe1o ng\u01b0\u1eddi n\xe0y r\u1ed3i."
                                });
                            Array.isArray(n) && (yield n.push(t),
                            _.storeActrsReport(JSON.stringify(n)))
                        }
                        var r = "/public-api/v1/social/fb/action-actrs/" + t + "/" + e;
                        console.log("handleActionActrs 2"),
                        m(!0);
                        var i = yield gt.getHttp(r);
                        m(!1),
                        200 === i.status && h.default.show({
                            type: "success",
                            text1: "C\u1ea3m \u01a1n b\u1ea1n \u0111\xe3 th\xf4ng b\xe1o",
                            text2: "Ban qu\u1ea3n tr\u1ecb s\u1ebd ti\u1ebfn h\xe0nh x\u1eed l\xfd ngay."
                        })
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
                  , P = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        console.log(t),
                        e.navigate("ListingDetails", {
                            title: "Th\xf4ng Tin Ng\u01b0\u1eddi \u0110\u0103ng",
                            actrsId: t
                        })
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , R = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        var e = "/public-api/v1/social/fb/feeds?ids=" + t + "&&isfavorite=true";
                        m(!0);
                        var n = yield gt.getHttp(e);
                        m(!1),
                        200 === n.status && Array.isArray(n.data.feeds) && d(n.data.feeds)
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
                  , N = function(t) {
                    var e = (0,
                    p.default)(j);
                    j.includes(t) && (h.default.show({
                        type: "success",
                        text1: "\u0110\xe3 x\xf3a kh\u1ecfi m\u1ee5c \u01b0a th\xedch."
                    }),
                    0 == (e = e.filter((function(e) {
                        return e !== t
                    }
                    ))).length && _.storeFavorites(""),
                    R(e.toString()),
                    b(e))
                };
                (0,
                o.useEffect)((function() {
                    Array.isArray(j) && j.length > 0 && j.every((function(t) {
                        return "string" === typeof t
                    }
                    )) && _.storeFavorites(JSON.stringify(j))
                }
                ), [j]),
                (0,
                o.useEffect)((function() {
                    var t = e.addListener("focus", (function() {
                        var t = function() {
                            var t = (0,
                            r.default)((function*() {
                                var t = yield _.getFavorites();
                                t.length > 0 ? (t.length > 50 && h.default.show({
                                    type: "success",
                                    text1: "L\u01b0u \xfd: L\u01b0u t\u1ed1i \u0111a 100 \u0111\u01a1n",
                                    text2: "X\xf3a b\u1edbt \u0111\u01a1n l\u01b0u \u0111\u1ec3 App nhanh h\u01a1n"
                                }),
                                b(t),
                                R(t.toString())) : d([])
                            }
                            ));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                        t()
                    }
                    ));
                    return t
                }
                ), [e]);
                var q = function() {
                    var t = (0,
                    r.default)((function*() {
                        var t = [];
                        R(t.toString()),
                        b(t),
                        _.storeFavorites(JSON.stringify(t)),
                        B(),
                        h.default.show({
                            type: "success",
                            text1: "B\u1ea1n \u0111\xe3 x\xf3a t\u1ea5t c\u1ea3 \u0111\u01a1n l\u01b0u."
                        })
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                V.jsxs)(ut, {
                    style: ke.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        goRemoveFav: O,
                        title: l,
                        goBack: function() {
                            e.goBack()
                        }
                    }), (0,
                    V.jsx)(Ct, {
                        style: ke.alert,
                        icon: (0,
                        V.jsx)(M.default, {
                            style: [ke.icon, {
                                borderRadius: 32
                            }],
                            children: (0,
                            V.jsx)(W.default, {
                                name: "trash",
                                size: 36,
                                color: "#FFFFFF"
                            })
                        }),
                        onRequestClose: B,
                        visible: S,
                        children: (0,
                        V.jsxs)(M.default, {
                            style: ke.content,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: ke.contentText,
                                children: "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a h\u1ebft \u0111\u01a1n \u0111\xe3 l\u01b0u?"
                            }), (0,
                            V.jsx)(D.default, {
                                style: ke.btn,
                                onPress: q,
                                children: (0,
                                V.jsx)(H.default, {
                                    style: ke.btnText,
                                    children: "\u0110\u1ed3ng \xfd"
                                })
                            }), (0,
                            V.jsx)(D.default, {
                                style: [ke.btn, {
                                    backgroundColor: "#1966fe"
                                }],
                                onPress: B,
                                children: (0,
                                V.jsx)(H.default, {
                                    style: ke.btnText,
                                    children: "H\u1ee7y"
                                })
                            })]
                        })
                    }), !y && 0 === u.length && (0,
                    V.jsx)(M.default, {
                        style: {
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: (0,
                        V.jsx)(H.default, {
                            style: {
                                textAlign: "center",
                                color: "white"
                            },
                            children: "Danh s\xe1ch tr\u1ed1ng."
                        })
                    }), (0,
                    V.jsx)(U, {
                        visible: y
                    }), (0,
                    V.jsx)(M.default, {
                        style: ke.container,
                        children: (0,
                        V.jsx)(E.default, {
                            style: {
                                maxHeight: a - 44
                            },
                            data: u,
                            keyExtractor: function(t, e) {
                                return e.toString()
                            },
                            renderItem: function(t) {
                                var e = t.item;
                                return (0,
                                V.jsx)(at, {
                                    item: e,
                                    isFavorite: j.includes(e.id),
                                    addToFavorite: N,
                                    viewProfile: P,
                                    onActionSheetPress: z
                                })
                            }
                        })
                    })]
                })
            };
            var Se = n(9948);
            var Te = R.default.create({
                screen: {
                    backgroundColor: "#23262e"
                },
                container: {
                    alignItems: "right",
                    padding: 20
                },
                row: {
                    flexDirection: "row",
                    marginBottom: 15
                },
                label: {
                    color: "white",
                    textAlign: "left",
                    marginRight: 10,
                    width: 100
                },
                value: {
                    flex: 1,
                    color: "white",
                    textAlign: "left"
                },
                copyText: {
                    color: "white",
                    textDecorationLine: "underline"
                }
            });
            const Ae = function(t) {
                var e, a = t.navigation, l = (t.route,
                (0,
                o.useState)({})), s = (0,
                i.default)(l, 2), c = s[0], u = s[1], d = function() {
                    var t = (0,
                    r.default)((function*() {
                        var t = yield gt.getBankInfor();
                        console.log(t.data),
                        200 == t.data.status.code && u(t.data.data)
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                (0,
                o.useEffect)((function() {
                    d()
                }
                ), []);
                var f = function() {
                    var t = (0,
                    r.default)((function*(t) {
                        yield Se.setStringAsync(t),
                        h.default.show({
                            type: "success",
                            text1: "\u0110\xe3 sao ch\xe9p: " + t
                        })
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                return (0,
                V.jsxs)(ut, {
                    style: Te.screen,
                    children: [(0,
                    V.jsx)(vt, {
                        title: "T\xe0i Tr\u1ee3",
                        goBack: function() {
                            a.goBack()
                        }
                    }), (0,
                    V.jsx)(h.default, {
                        position: "bottom"
                    }), (0,
                    V.jsxs)(H.default, {
                        style: {
                            paddingHorizontal: 10,
                            marginTop: 60,
                            fontWeight: "bold",
                            color: "#9437ff"
                        },
                        children: ["S\u1ed1 ng\xe0y VIP c\xf2n l\u1ea1i c\u1ee7a b\u1ea1n: ", n.g.vipday, " ng\xe0y"]
                    }), (0,
                    V.jsx)(H.default, {
                        style: {
                            paddingHorizontal: 10,
                            marginTop: 10,
                            fontWeight: "bold",
                            color: "#fcd600"
                        },
                        children: "QUAN TR\u1eccNG: Chuy\u1ec3n \u0111\xfang S\u1ed0 TI\u1ec0N & N\u1ed8I DUNG, App s\u1ebd t\u1ef1 \u0111\u1ed9ng c\u1ed9ng th\xeam ng\xe0y VIP. N\u1ebfu chuy\u1ec3n sai s\u1ebd b\u1ecb giam ti\u1ec1n, s\u1ebd x\u1eed l\xfd b\u1eb1ng tay r\u1ea5t l\xe2u. Li\xean h\u1ec7 admin \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd."
                    }), (0,
                    V.jsxs)(M.default, {
                        style: Te.container,
                        children: [(0,
                        V.jsxs)(M.default, {
                            style: Te.row,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: Te.label,
                                children: "Ng\xe2n H\xe0ng:"
                            }), (0,
                            V.jsx)(H.default, {
                                style: Te.value,
                                children: c.bankName
                            })]
                        }), (0,
                        V.jsxs)(M.default, {
                            style: Te.row,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: Te.label,
                                children: "S\u1ed1 t\xe0i kho\u1ea3n:"
                            }), (0,
                            V.jsx)(H.default, {
                                style: [Te.value, Te.copyText, {
                                    color: "#9437ff"
                                }],
                                onPress: function() {
                                    return f(c.bankNumber)
                                },
                                children: c.bankNumber
                            })]
                        }), (0,
                        V.jsxs)(M.default, {
                            style: Te.row,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: Te.label,
                                children: "T\xean kho\u1ea3n:"
                            }), (0,
                            V.jsx)(H.default, {
                                style: Te.value,
                                children: c.bankAccount
                            })]
                        }), (0,
                        V.jsxs)(M.default, {
                            style: Te.row,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: Te.label,
                                children: "N\u1ed9i dung:"
                            }), (0,
                            V.jsxs)(H.default, {
                                style: [Te.value, Te.copyText, {
                                    color: "#9437ff"
                                }],
                                onPress: function() {
                                    var t;
                                    return f("gojo 0" + (null == (t = n.g.data3rd) ? void 0 : t.phone.slice(3)) + " BOSS")
                                },
                                children: ["gojo ", "0" + (null == (e = n.g.data3rd) ? void 0 : e.phone.slice(3)) + " BOSS"]
                            })]
                        }), (0,
                        V.jsxs)(M.default, {
                            style: Te.row,
                            children: [(0,
                            V.jsx)(H.default, {
                                style: Te.label,
                                children: "S\u1ed1 ti\u1ec1n: 30K"
                            }), (0,
                            V.jsx)(H.default, {
                                style: Te.value,
                                children: "+30 ng\xe0y VIP"
                            })]
                        }), (0,
                        V.jsx)(M.default, {
                            children: (0,
                            V.jsx)(H.default, {
                                style: {
                                    paddingHorizontal: 10,
                                    marginVertical: 5,
                                    marginTop: 20,
                                    color: "white"
                                },
                                children: "Vui l\xf2ng chuy\u1ec3n kho\u1ea3n \u0111\xfang v\u1edbi th\xf4ng tin b\xean tr\xean. Sau khi chuy\u1ec3n kho\u1ea3n th\xe0nh c\xf4ng. S\u1ed1 ng\xe0y VIP s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt sau v\xe0i gi\xe2y (Ch\u1ea1m v\xe0o S\u1ed1 t\xe0i kho\u1ea3n v\xe0 N\u1ed9i dung \u0111\u1ec3 t\u1ef1 \u0111\u1ed9ng sao ch\xe9p.):"
                            })
                        })]
                    })]
                })
            };
            var Ie = (0,
            g.default)();
            const Oe = function() {
                return (0,
                V.jsxs)(Ie.Navigator, {
                    screenOptions: {
                        headerShown: !1
                    },
                    children: [(0,
                    V.jsx)(Ie.Screen, {
                        name: "Listings",
                        component: Et
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "ListingDetails",
                        component: ne
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "FilterFastNews",
                        component: ae
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "Favorites",
                        component: Ce
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "FilterFastNewsArea",
                        component: se
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "FilterFastNewsDistance",
                        component: he
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "ShopMapScreen",
                        component: me
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "ScammerScreen",
                        component: xe
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "BlocksScreen",
                        component: we
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "BotAutoDistance",
                        component: pe
                    }), (0,
                    V.jsx)(Ie.Screen, {
                        name: "BankScreen",
                        component: Ae
                    })]
                })
            };
            var Be = o.createRef();
            var _e = n(44473);
            R.default.create({
                container: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                },
                text: {
                    textAlign: "center"
                }
            });
            const ze = function(t) {
                var e = (0,
                o.useState)(!1)
                  , l = (0,
                i.default)(e, 2)
                  , s = l[0]
                  , c = l[1];
                function u(t, e, n, r) {
                    var i = Math.PI / 180
                      , o = i * (n - t)
                      , a = i * (r - e)
                      , l = Math.sin(o / 2) * Math.sin(o / 2) + Math.cos(i * t) * Math.cos(i * n) * Math.sin(a / 2) * Math.sin(a / 2);
                    return 6371 * (2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)))
                }
                function d() {
                    return (d = (0,
                    r.default)((function*() {
                        var t, e = yield _e.getInitialURL();
                        n.g.url = e;
                        var r = new URLSearchParams(null == e ? void 0 : e.split("?")[1])
                          , o = Object.fromEntries(r.entries());
                        if (null != o && o.phone && (null == (t = o.phone) ? void 0 : t.length) > 0) {
                            n.g.data3rd = o,
                            n.g.f = !1;
                            var a = o.location.split(",");
                            n.g.lat = a[0],
                            n.g.lng = a[1];
                            var l = yield _.get("area");
                            if (!l || 0 == l.length) {
                                var s = function(t, e) {
                                    var n = null
                                      , r = Number.MAX_VALUE;
                                    for (var o of [{
                                        name: "\u0110\xe0 N\u1eb5ng",
                                        code: "DA_NANG",
                                        loc: [16.050432963093176, 108.21913057365141]
                                    }, {
                                        name: "H\xe0 N\u1ed9i",
                                        code: "HA_NOI",
                                        loc: [21.020766517849072, 105.83702248210905]
                                    }, {
                                        name: "H\u1ed3 Ch\xed Minh",
                                        code: "HO_CHI_MINH",
                                        loc: [10.77755256653898, 106.67592652490727]
                                    }, {
                                        name: "H\u1ea3i Ph\xf2ng",
                                        code: "HAI_PHONG",
                                        loc: [20.842400403329002, 106.69050585030826]
                                    }, {
                                        name: "V\u0129nh Ph\xfac",
                                        code: "VINH_PHUC",
                                        loc: [21.349494753915977, 105.55068623394166]
                                    }]) {
                                        var a = (0,
                                        i.default)(o.loc, 2)
                                          , l = u(t, e, a[0], a[1]);
                                        l < r && (r = l,
                                        n = o)
                                    }
                                    return n
                                }(a[0], a[1]);
                                yield _.store("area", s.code),
                                yield _.store("area_name", s.name)
                            }
                        } else
                            n.g.f = !0
                    }
                    ))).apply(this, arguments)
                }
                return (0,
                o.useEffect)((function() {
                    var t = function() {
                        var t = (0,
                        r.default)((function*() {
                            yield function() {
                                return d.apply(this, arguments)
                            }();
                            var t = yield _.get("isShowUnknowLocation");
                            t && 0 != t.length || (yield _.store("isShowUnknowLocation", "show"));
                            var e = yield _.get("area");
                            e && 0 != e.length || (yield _.store("area", "DA_NANG"),
                            yield _.store("area_name", "\u0110\xe0 N\u1eb5ng"));
                            var n = yield _.get("isShowMap");
                            n && 0 != n.length || (yield _.store("isShowMap", "noshow"));
                            var r = yield _.get("isShowAnonymous");
                            r && 0 != r.length || (yield _.store("isShowAnonymous", "showAnonymous"));
                            var i = yield _.get("distance");
                            i && 0 != i.length || (yield _.store("distance", 50)),
                            c(!0)
                        }
                        ));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                    t()
                }
                ), []),
                (0,
                V.jsx)(pt.ActionSheetProvider, {
                    children: (0,
                    V.jsx)(a.default, {
                        ref: Be,
                        theme: f,
                        children: s ? (0,
                        V.jsx)(Oe, {}) : null
                    })
                })
            }
        }
        ,
        45020: (t,e,n)=>{
            "use strict";
            t.exports = n.p + "static/media/default-avatar.b11cc6e953956a0c50a2.png"
        }
        ,
        42480: ()=>{}
        ,
        77020: ()=>{}
        ,
        24654: ()=>{}
    }
      , e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i)
            return i.exports;
        var o = e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.loaded = !0,
        o.exports
    }
    n.m = t,
    n.amdO = {},
    (()=>{
        var t = [];
        n.O = (e,r,i,o)=>{
            if (!r) {
                var a = 1 / 0;
                for (u = 0; u < t.length; u++) {
                    for (var [r,i,o] = t[u], l = !0, s = 0; s < r.length; s++)
                        (!1 & o || a >= o) && Object.keys(n.O).every((t=>n.O[t](r[s]))) ? r.splice(s--, 1) : (l = !1,
                        o < a && (a = o));
                    if (l) {
                        t.splice(u--, 1);
                        var c = i();
                        void 0 !== c && (e = c)
                    }
                }
                return e
            }
            o = o || 0;
            for (var u = t.length; u > 0 && t[u - 1][2] > o; u--)
                t[u] = t[u - 1];
            t[u] = [r, i, o]
        }
    }
    )(),
    n.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    (()=>{
        var t, e = Object.getPrototypeOf ? t=>Object.getPrototypeOf(t) : t=>t.__proto__;
        n.t = function(r, i) {
            if (1 & i && (r = this(r)),
            8 & i)
                return r;
            if ("object" === typeof r && r) {
                if (4 & i && r.__esModule)
                    return r;
                if (16 & i && "function" === typeof r.then)
                    return r
            }
            var o = Object.create(null);
            n.r(o);
            var a = {};
            t = t || [null, e({}), e([]), e(e)];
            for (var l = 2 & i && r; "object" == typeof l && !~t.indexOf(l); l = e(l))
                Object.getOwnPropertyNames(l).forEach((t=>a[t] = ()=>r[t]));
            return a.default = ()=>r,
            n.d(o, a),
            o
        }
    }
    )(),
    n.d = (t,e)=>{
        for (var r in e)
            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
    ,
    n.g = function() {
        if ("object" === typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" === typeof window)
                return window
        }
    }(),
    n.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    n.r = t=>{
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.nmd = t=>(t.paths = [],
    t.children || (t.children = []),
    t),
    n.p = "/",
    (()=>{
        var t = {
            179: 0
        };
        n.O.j = e=>0 === t[e];
        var e = (e,r)=>{
            var i, o, [a,l,s] = r, c = 0;
            if (a.some((e=>0 !== t[e]))) {
                for (i in l)
                    n.o(l, i) && (n.m[i] = l[i]);
                if (s)
                    var u = s(n)
            }
            for (e && e(r); c < a.length; c++)
                o = a[c],
                n.o(t, o) && t[o] && t[o][0](),
                t[o] = 0;
            return n.O(u)
        }
          , r = self.webpackChunkweb = self.webpackChunkweb || [];
        r.forEach(e.bind(null, 0)),
        r.push = e.bind(null, r.push.bind(r))
    }
    )();
    var r = n.O(void 0, [96], (()=>n(58634)));
    r = n.O(r)
    };

}
)();
