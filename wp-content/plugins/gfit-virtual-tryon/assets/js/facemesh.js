/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@tensorflow/tfjs-core"), require("@tensorflow/tfjs-converter")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-core", "@tensorflow/tfjs-converter"], e) : e((t = t || self).facemesh = {}, t.tf, t.tf)
}(this, (function(t, e, n) {
    "use strict";
    var o = function() {
        return (o = Object.assign || function(t) {
            for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }).apply(this, arguments)
    };

    function r(t, e, n, o) {
        return new(n || (n = Promise))((function(r, i) {
            function s(t) {
                try {
                    c(o.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    c(o.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                    t(e)
                }))).then(s, a)
            }
            c((o = o.apply(t, e || [])).next())
        }))
    }

    function i(t, e) {
        var n, o, r, i, s = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(r = s.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < r[1]) {
                                    s.label = r[1], r = i;
                                    break
                                }
                                if (r && s.label < r[2]) {
                                    s.label = r[2], s.ops.push(i);
                                    break
                                }
                                r[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = e.call(t, s)
                    } catch (t) {
                        i = [6, t], o = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    }
    const s = t => ({
            startEndTensor: t,
            startPoint: e.slice(t, [0, 0], [-1, 2]),
            endPoint: e.slice(t, [0, 2], [-1, 2])
        }),
        a = {
            strides: [8, 16],
            anchors: [2, 6]
        };

    function c(t, n) {
        let o, r, i;
        if (t.topLeft instanceof e.Tensor && t.bottomRight instanceof e.Tensor) {
            const [s, a] = e.tidy(() => [e.concat([e.sub(n - 1, t.topLeft.slice(0, 1)), t.topLeft.slice(1, 1)]), e.concat([e.sub(n - 1, t.bottomRight.slice(0, 1)), t.bottomRight.slice(1, 1)])]);
            o = s, r = a, null != t.landmarks && (i = e.tidy(() => {
                const o = e.sub(e.tensor1d([n - 1, 0]), t.landmarks),
                    r = e.tensor1d([1, -1]);
                return e.mul(o, r)
            }))
        } else {
            const [e, s] = t.topLeft, [a, c] = t.bottomRight;
            o = [n - 1 - e, s], r = [n - 1 - a, c], null != t.landmarks && (i = t.landmarks.map(t => [n - 1 - t[0], t[1]]))
        }
        const s = {
            topLeft: o,
            bottomRight: r
        };
        return null != i && (s.landmarks = i), null != t.probability && (s.probability = t.probability instanceof e.Tensor ? t.probability.clone() : t.probability), s
    }

    function u(t, n) {
        return e.tidy(() => {
            let o;
            return o = t.hasOwnProperty("box") ? t.box : t, ((t, n) => {
                const o = e.mul(t.startPoint, n),
                    r = e.mul(t.endPoint, n),
                    i = e.concat2d([o, r], 1);
                return s(i)
            })(o, n).startEndTensor.squeeze()
        })
    }
    class h {
        constructor(t, n, o, r, i, s) {
            this.blazeFaceModel = t, this.width = n, this.height = o, this.maxFaces = r, this.anchorsData = function(t, e, n) {
                const o = [];
                for (let r = 0; r < n.strides.length; r++) {
                    const i = n.strides[r],
                        s = Math.floor((e + i - 1) / i),
                        a = Math.floor((t + i - 1) / i),
                        c = n.anchors[r];
                    for (let t = 0; t < s; t++) {
                        const e = i * (t + .5);
                        for (let t = 0; t < a; t++) {
                            const n = i * (t + .5);
                            for (let t = 0; t < c; t++) o.push([n, e])
                        }
                    }
                }
                return o
            }(n, o, a), this.anchors = e.tensor2d(this.anchorsData), this.inputSizeData = [n, o], this.inputSize = e.tensor1d([n, o]), this.iouThreshold = i, this.scoreThreshold = s
        }
        async getBoundingBoxes(t, n, o = !0) {
            const [r, i, a] = e.tidy(() => {
                const n = t.resizeBilinear([this.width, this.height]),
                    o = e.mul(e.sub(n.div(255), .5), 2),
                    r = this.blazeFaceModel.predict(o).squeeze(),
                    i = function(t, n, o) {
                        const r = e.slice(t, [0, 1], [-1, 2]),
                            i = e.add(r, n),
                            s = e.slice(t, [0, 3], [-1, 2]),
                            a = e.div(s, o),
                            c = e.div(i, o),
                            u = e.div(a, 2),
                            h = e.sub(c, u),
                            l = e.add(c, u),
                            d = e.mul(h, o),
                            f = e.mul(l, o);
                        return e.concat2d([d, f], 1)
                    }(r, this.anchors, this.inputSize),
                    s = e.slice(r, [0, 0], [-1, 1]);
                return [r, i, e.sigmoid(s).squeeze()]
            }), c = console.warn;
            console.warn = () => {};
            const u = e.image.nonMaxSuppression(i, a, this.maxFaces, this.iouThreshold, this.scoreThreshold);
            console.warn = c;
            const h = await u.array();
            u.dispose();
            let l = h.map(t => e.slice(i, [t, 0], [1, -1]));
            n || (l = await Promise.all(l.map(async t => {
                const e = await t.array();
                return t.dispose(), e
            })));
            const d = t.shape[1],
                f = t.shape[2];
            let p;
            p = n ? e.div([f, d], this.inputSize) : [f / this.inputSizeData[0], d / this.inputSizeData[1]];
            const m = [];
            for (let t = 0; t < l.length; t++) {
                const i = l[t],
                    c = e.tidy(() => {
                        const c = s(i instanceof e.Tensor ? i : e.tensor2d(i));
                        if (!o) return c;
                        const u = h[t];
                        let l;
                        return l = n ? this.anchors.slice([u, 0], [1, 2]) : this.anchorsData[u], {
                            box: c,
                            landmarks: e.slice(r, [u, 5], [1, -1]).squeeze().reshape([6, -1]),
                            probability: e.slice(a, [u], [1]),
                            anchor: l
                        }
                    });
                m.push(c)
            }
            return i.dispose(), a.dispose(), r.dispose(), {
                boxes: m,
                scaleFactor: p
            }
        }
        async estimateFaces(t, n = !1, o = !1, r = !0) {
            const [, i] = function(t) {
                return t instanceof e.Tensor ? [t.shape[0], t.shape[1]] : [t.height, t.width]
            }(t), s = e.tidy(() => (t instanceof e.Tensor || (t = e.browser.fromPixels(t)), t.toFloat().expandDims(0))), {
                boxes: a,
                scaleFactor: h
            } = await this.getBoundingBoxes(s, n, r);
            return s.dispose(), n ? a.map(t => {
                const e = u(t, h);
                let n = {
                    topLeft: e.slice([0], [2]),
                    bottomRight: e.slice([2], [2])
                };
                if (r) {
                    const {
                        landmarks: e,
                        probability: o,
                        anchor: r
                    } = t, i = e.add(r).mul(h);
                    n.landmarks = i, n.probability = o
                }
                return o && (n = c(n, i)), n
            }) : Promise.all(a.map(async t => {
                const e = u(t, h);
                let n;
                if (r) {
                    const [o, r, i] = await Promise.all([t.landmarks, e, t.probability].map(async t => t.array())), s = t.anchor, [a, c] = h, u = o.map(t => [(t[0] + s[0]) * a, (t[1] + s[1]) * c]);
                    n = {
                        topLeft: r.slice(0, 2),
                        bottomRight: r.slice(2),
                        landmarks: u,
                        probability: i
                    }, (t => {
                        t.startEndTensor.dispose(), t.startPoint.dispose(), t.endPoint.dispose()
                    })(t.box), t.landmarks.dispose(), t.probability.dispose()
                } else {
                    const t = await e.array();
                    n = {
                        topLeft: t.slice(0, 2),
                        bottomRight: t.slice(2)
                    }
                }
                return e.dispose(), o && (n = c(n, i)), n
            }))
        }
    }
    async function l({
        maxFaces: t = 10,
        inputWidth: e = 128,
        inputHeight: o = 128,
        iouThreshold: r = .3,
        scoreThreshold: i = .75
    } = {}) {
        const s = await n.loadGraphModel("https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1", {
            fromTFHub: !0
        });
        return new h(s, e, o, t, r, i)
    }
    var d = {
        silhouette: [10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109],
        lipsUpperOuter: [61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291],
        lipsLowerOuter: [146, 91, 181, 84, 17, 314, 405, 321, 375, 291],
        lipsUpperInner: [78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308],
        lipsLowerInner: [78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308],
        rightEyeUpper0: [246, 161, 160, 159, 158, 157, 173],
        rightEyeLower0: [33, 7, 163, 144, 145, 153, 154, 155, 133],
        rightEyeUpper1: [247, 30, 29, 27, 28, 56, 190],
        rightEyeLower1: [130, 25, 110, 24, 23, 22, 26, 112, 243],
        rightEyeUpper2: [113, 225, 224, 223, 222, 221, 189],
        rightEyeLower2: [226, 31, 228, 229, 230, 231, 232, 233, 244],
        rightEyeLower3: [143, 111, 117, 118, 119, 120, 121, 128, 245],
        rightEyebrowUpper: [156, 70, 63, 105, 66, 107, 55, 193],
        rightEyebrowLower: [35, 124, 46, 53, 52, 65],
        leftEyeUpper0: [466, 388, 387, 386, 385, 384, 398],
        leftEyeLower0: [263, 249, 390, 373, 374, 380, 381, 382, 362],
        leftEyeUpper1: [467, 260, 259, 257, 258, 286, 414],
        leftEyeLower1: [359, 255, 339, 254, 253, 252, 256, 341, 463],
        leftEyeUpper2: [342, 445, 444, 443, 442, 441, 413],
        leftEyeLower2: [446, 261, 448, 449, 450, 451, 452, 453, 464],
        leftEyeLower3: [372, 340, 346, 347, 348, 349, 350, 357, 465],
        leftEyebrowUpper: [383, 300, 293, 334, 296, 336, 285, 417],
        leftEyebrowLower: [265, 353, 276, 283, 282, 295],
        midwayBetweenEyes: [168],
        noseTip: [1],
        noseBottom: [2],
        noseRightCorner: [98],
        noseLeftCorner: [327],
        rightCheek: [205],
        leftCheek: [425]
    };

    function f(t) {
        return [Math.abs(t.endPoint[0] - t.startPoint[0]), Math.abs(t.endPoint[1] - t.startPoint[1])]
    }

    function p(t) {
        return [t.startPoint[0] + (t.endPoint[0] - t.startPoint[0]) / 2, t.startPoint[1] + (t.endPoint[1] - t.startPoint[1]) / 2]
    }

    function m(t, e) {
        void 0 === e && (e = 1.5);
        var n = p(t),
            o = f(t),
            r = [e * o[0] / 2, e * o[1] / 2];
        return {
            startPoint: [n[0] - r[0], n[1] - r[1]],
            endPoint: [n[0] + r[0], n[1] + r[1]],
            landmarks: t.landmarks
        }
    }

    function b(t, e) {
        var n, o = Math.PI / 2 - Math.atan2(-(e[1] - t[1]), e[0] - t[0]);
        return (n = o) - 2 * Math.PI * Math.floor((n + Math.PI) / (2 * Math.PI))
    }

    function g(t, e) {
        return [
            [1, 0, t],
            [0, 1, e],
            [0, 0, 1]
        ]
    }

    function y(t, e) {
        for (var n = 0, o = 0; o < t.length; o++) n += t[o] * e[o];
        return n
    }

    function P(t, e) {
        for (var n = [], o = 0; o < t.length; o++) n.push(t[o][e]);
        return n
    }

    function v(t, e) {
        for (var n = [], o = t.length, r = 0; r < o; r++) {
            n.push([]);
            for (var i = 0; i < o; i++) n[r].push(y(t[r], P(e, i)))
        }
        return n
    }

    function w(t, e) {
        var n = Math.cos(t),
            o = Math.sin(t),
            r = [
                [n, -o, 0],
                [o, n, 0],
                [0, 0, 1]
            ],
            i = v(g(e[0], e[1]), r);
        return v(i, g(-e[0], -e[1]))
    }
    var x = [1, 168],
        M = [3, 2],
        E = function() {
            function t(t, e, n, o, r, i) {
                this.regionsOfInterest = [], this.runsWithoutFaceDetector = 0, this.boundingBoxDetector = t, this.meshDetector = e, this.meshWidth = n, this.meshHeight = o, this.maxContinuousChecks = r, this.maxFaces = i
            }
            return t.prototype.transformRawCoords = function(t, e, n, o) {
                var r, i, s, a, c = this,
                    u = f({
                        startPoint: e.startPoint,
                        endPoint: e.endPoint
                    }),
                    h = [u[0] / this.meshWidth, u[1] / this.meshHeight],
                    l = t.map((function(t) {
                        return [h[0] * (t[0] - c.meshWidth / 2), h[1] * (t[1] - c.meshHeight / 2), t[2]]
                    })),
                    d = w(n, [0, 0]),
                    m = l.map((function(t) {
                        return function(t, e) {
                            return [y(t, e[0]), y(t, e[1])]
                        }(t, d).concat([t[2]])
                    })),
                    b = (i = [
                        [(r = o)[0][0], r[1][0]],
                        [r[0][1], r[1][1]]
                    ], s = [r[0][2], r[1][2]], a = [-y(i[0], s), -y(i[1], s)], [i[0].concat(a[0]), i[1].concat(a[1]), [0, 0, 1]]),
                    g = p({
                        startPoint: e.startPoint,
                        endPoint: e.endPoint
                    }).concat([1]),
                    P = [y(g, b[0]), y(g, b[1])];
                return m.map((function(t) {
                    return [t[0] + P[0], t[1] + P[1], t[2]]
                }))
            }, t.prototype.predict = function(t) {
                return r(this, void 0, void 0, (function() {
                    var n, r, s, a, c = this;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return this.shouldUpdateRegionsOfInterest() ? (!1, !0, [4, this.boundingBoxDetector.getBoundingBoxes(t, !1, !0)]) : [3, 2];
                            case 1:
                                return n = i.sent(), r = n.boxes, s = n.scaleFactor, 0 === r.length ? (this.regionsOfInterest = [], [2, null]) : (a = r.map((function(t) {
                                    var e, n, r = {
                                            startPoint: t.box.startPoint.squeeze().arraySync(),
                                            endPoint: t.box.endPoint.squeeze().arraySync()
                                        },
                                        i = m((n = s, {
                                            startPoint: [(e = r).startPoint[0] * n[0], e.startPoint[1] * n[1]],
                                            endPoint: [e.endPoint[0] * n[0], e.endPoint[1] * n[1]]
                                        }));
                                    return o({}, i, {
                                        landmarks: t.landmarks.arraySync()
                                    })
                                })), r.forEach((function(t) {
                                    null != t && null != t.startPoint && (t.startEndTensor.dispose(), t.startPoint.dispose(), t.endPoint.dispose())
                                })), this.updateRegionsOfInterest(a), this.runsWithoutFaceDetector = 0, [3, 3]);
                            case 2:
                                this.runsWithoutFaceDetector++, i.label = 3;
                            case 3:
                                return [2, e.tidy((function() {
                                    return c.regionsOfInterest.map((function(n, r) {
                                        var i;
                                        if (468 === n.landmarks.length) {
                                            var s = x[0],
                                                a = x[1];
                                            i = b(n.landmarks[s], n.landmarks[a])
                                        } else {
                                            s = M[0], a = M[1];
                                            i = b(n.landmarks[s], n.landmarks[a])
                                        }
                                        var u = p({
                                                startPoint: n.startPoint,
                                                endPoint: n.endPoint
                                            }),
                                            h = [u[0] / t.shape[2], u[1] / t.shape[1]],
                                            l = e.image.rotateWithOffset(t, i, 0, h),
                                            d = w(-i, u),
                                            f = function(t, n, o) {
                                                var r = n.shape[1],
                                                    i = n.shape[2],
                                                    s = [
                                                        [t.startPoint[1] / r, t.startPoint[0] / i, t.endPoint[1] / r, t.endPoint[0] / i]
                                                    ];
                                                return e.image.cropAndResize(n, s, [0], o)
                                            }({
                                                startPoint: n.startPoint,
                                                endPoint: n.endPoint
                                            }, l, [c.meshHeight, c.meshWidth]).div(255),
                                            m = c.meshDetector.predict(f),
                                            g = m[1],
                                            y = m[2],
                                            P = e.reshape(y, [-1, 3]),
                                            v = P.arraySync(),
                                            E = c.transformRawCoords(v, n, i, d),
                                            L = e.tensor2d(E),
                                            k = c.calculateLandmarksBoundingBox(E);
                                        return c.regionsOfInterest[r] = o({}, k, {
                                            landmarks: L.arraySync()
                                        }), {
                                            coords: P,
                                            scaledCoords: L,
                                            box: k,
                                            flag: g.squeeze()
                                        }
                                    }))
                                }))]
                        }
                    }))
                }))
            }, t.prototype.updateRegionsOfInterest = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e],
                        o = this.regionsOfInterest[e],
                        r = 0;
                    if (o && o.startPoint) {
                        var i = n.startPoint,
                            s = i[0],
                            a = i[1],
                            c = n.endPoint,
                            u = c[0],
                            h = c[1],
                            l = o.startPoint,
                            d = l[0],
                            f = l[1],
                            p = o.endPoint,
                            m = p[0],
                            b = p[1],
                            g = Math.max(s, d),
                            y = Math.max(a, f),
                            P = (Math.min(u, m) - g) * (Math.min(h, b) - y);
                        r = P / ((u - s) * (h - a) + (m - d) * (b - a) - P)
                    }
                    r < .25 && (this.regionsOfInterest[e] = n)
                }
                this.regionsOfInterest = this.regionsOfInterest.slice(0, t.length)
            }, t.prototype.clearRegionOfInterest = function(t) {
                null != this.regionsOfInterest[t] && (this.regionsOfInterest = this.regionsOfInterest.slice(0, t).concat(this.regionsOfInterest.slice(t + 1)))
            }, t.prototype.shouldUpdateRegionsOfInterest = function() {
                var t = this.regionsOfInterest.length,
                    e = 0 === t;
                return 1 === this.maxFaces || e ? e : t !== this.maxFaces && this.runsWithoutFaceDetector >= this.maxContinuousChecks
            }, t.prototype.calculateLandmarksBoundingBox = function(t) {
                var e = t.map((function(t) {
                        return t[0]
                    })),
                    n = t.map((function(t) {
                        return t[1]
                    })),
                    o = {
                        startPoint: [Math.min.apply(Math, e), Math.min.apply(Math, n)],
                        endPoint: [Math.max.apply(Math, e), Math.max.apply(Math, n)]
                    };
                return m({
                    startPoint: o.startPoint,
                    endPoint: o.endPoint
                })
            }, t
        }(),
        L = [
            [.499976992607117, .652534008026123],
            [.500025987625122, .547487020492554],
            [.499974012374878, .602371990680695],
            [.482113003730774, .471979022026062],
            [.500150978565216, .527155995368958],
            [.499909996986389, .498252987861633],
            [.499523013830185, .40106201171875],
            [.289712011814117, .380764007568359],
            [.499954998493195, .312398016452789],
            [.499987006187439, .269918978214264],
            [.500023007392883, .107050001621246],
            [.500023007392883, .666234016418457],
            [.5000159740448, .679224014282227],
            [.500023007392883, .692348003387451],
            [.499976992607117, .695277988910675],
            [.499976992607117, .70593398809433],
            [.499976992607117, .719385027885437],
            [.499976992607117, .737019002437592],
            [.499967992305756, .781370997428894],
            [.499816000461578, .562981009483337],
            [.473773002624512, .573909997940063],
            [.104906998574734, .254140973091125],
            [.365929991006851, .409575998783112],
            [.338757991790771, .41302502155304],
            [.311120003461838, .409460008144379],
            [.274657994508743, .389131009578705],
            [.393361985683441, .403706014156342],
            [.345234006643295, .344011008739471],
            [.370094001293182, .346076011657715],
            [.319321990013123, .347265005111694],
            [.297903001308441, .353591024875641],
            [.24779200553894, .410809993743896],
            [.396889001131058, .842755019664764],
            [.280097991228104, .375599980354309],
            [.106310002505779, .399955987930298],
            [.2099249958992, .391353011131287],
            [.355807989835739, .534406006336212],
            [.471751004457474, .65040397644043],
            [.474155008792877, .680191993713379],
            [.439785003662109, .657229006290436],
            [.414617002010345, .66654098033905],
            [.450374007225037, .680860996246338],
            [.428770989179611, .682690978050232],
            [.374971002340317, .727805018424988],
            [.486716985702515, .547628998756409],
            [.485300987958908, .527395009994507],
            [.257764995098114, .314490020275116],
            [.401223003864288, .455172002315521],
            [.429818987846375, .548614978790283],
            [.421351999044418, .533740997314453],
            [.276895999908447, .532056987285614],
            [.483370006084442, .499586999416351],
            [.33721199631691, .282882988452911],
            [.296391993761063, .293242990970612],
            [.169294998049736, .193813979625702],
            [.447580009698868, .302609980106354],
            [.392390012741089, .353887975215912],
            [.354490011930466, .696784019470215],
            [.067304998636246, .730105042457581],
            [.442739009857178, .572826027870178],
            [.457098007202148, .584792017936707],
            [.381974011659622, .694710969924927],
            [.392388999462128, .694203019142151],
            [.277076005935669, .271932005882263],
            [.422551989555359, .563233017921448],
            [.385919004678726, .281364023685455],
            [.383103013038635, .255840003490448],
            [.331431001424789, .119714021682739],
            [.229923993349075, .232002973556519],
            [.364500999450684, .189113974571228],
            [.229622006416321, .299540996551514],
            [.173287004232407, .278747975826263],
            [.472878992557526, .666198015213013],
            [.446828007698059, .668527007102966],
            [.422762006521225, .673889994621277],
            [.445307999849319, .580065965652466],
            [.388103008270264, .693961024284363],
            [.403039008378983, .706539988517761],
            [.403629004955292, .693953037261963],
            [.460041999816895, .557139039039612],
            [.431158006191254, .692366003990173],
            [.452181994915009, .692366003990173],
            [.475387006998062, .692366003990173],
            [.465828001499176, .779190003871918],
            [.472328990697861, .736225962638855],
            [.473087012767792, .717857003211975],
            [.473122000694275, .704625964164734],
            [.473033010959625, .695277988910675],
            [.427942007780075, .695277988910675],
            [.426479011774063, .703539967536926],
            [.423162013292313, .711845993995667],
            [.4183090031147, .720062971115112],
            [.390094995498657, .639572978019714],
            [.013953999616206, .560034036636353],
            [.499913990497589, .58014702796936],
            [.413199990987778, .69539999961853],
            [.409626007080078, .701822996139526],
            [.468080013990402, .601534962654114],
            [.422728985548019, .585985004901886],
            [.463079988956451, .593783974647522],
            [.37211999297142, .47341400384903],
            [.334562003612518, .496073007583618],
            [.411671012639999, .546965003013611],
            [.242175996303558, .14767599105835],
            [.290776997804642, .201445996761322],
            [.327338010072708, .256527006626129],
            [.399509996175766, .748921036720276],
            [.441727995872498, .261676013469696],
            [.429764986038208, .187834024429321],
            [.412198007106781, .108901023864746],
            [.288955003023148, .398952007293701],
            [.218936994671822, .435410976409912],
            [.41278201341629, .398970007896423],
            [.257135003805161, .355440020561218],
            [.427684992551804, .437960982322693],
            [.448339998722076, .536936044692993],
            [.178560003638268, .45755398273468],
            [.247308000922203, .457193970680237],
            [.286267012357712, .467674970626831],
            [.332827985286713, .460712015628815],
            [.368755996227264, .447206974029541],
            [.398963987827301, .432654976844788],
            [.476410001516342, .405806005001068],
            [.189241006970406, .523923993110657],
            [.228962004184723, .348950982093811],
            [.490725994110107, .562400996685028],
            [.404670000076294, .485132992267609],
            [.019469000399113, .401564002037048],
            [.426243007183075, .420431017875671],
            [.396993011236191, .548797011375427],
            [.266469985246658, .376977026462555],
            [.439121007919312, .51895797252655],
            [.032313998788595, .644356966018677],
            [.419054001569748, .387154996395111],
            [.462783008813858, .505746960639954],
            [.238978996872902, .779744982719421],
            [.198220998048782, .831938028335571],
            [.107550002634525, .540755033493042],
            [.183610007166862, .740257024765015],
            [.134409993886948, .333683013916016],
            [.385764002799988, .883153975009918],
            [.490967005491257, .579378008842468],
            [.382384985685349, .508572995662689],
            [.174399003386497, .397670984268188],
            [.318785011768341, .39623498916626],
            [.343364000320435, .400596976280212],
            [.396100014448166, .710216999053955],
            [.187885001301765, .588537991046906],
            [.430987000465393, .944064974784851],
            [.318993002176285, .898285031318665],
            [.266247987747192, .869701027870178],
            [.500023007392883, .190576016902924],
            [.499976992607117, .954452991485596],
            [.366169989109039, .398822009563446],
            [.393207013607025, .39553701877594],
            [.410373002290726, .391080021858215],
            [.194993004202843, .342101991176605],
            [.388664990663528, .362284004688263],
            [.365961998701096, .355970978736877],
            [.343364000320435, .355356991291046],
            [.318785011768341, .35834002494812],
            [.301414996385574, .363156020641327],
            [.058132998645306, .319076001644135],
            [.301414996385574, .387449026107788],
            [.499987989664078, .618434011936188],
            [.415838003158569, .624195992946625],
            [.445681989192963, .566076993942261],
            [.465844005346298, .620640993118286],
            [.49992299079895, .351523995399475],
            [.288718998432159, .819945991039276],
            [.335278987884521, .852819979190826],
            [.440512001514435, .902418971061707],
            [.128294005990028, .791940987110138],
            [.408771991729736, .373893976211548],
            [.455606997013092, .451801002025604],
            [.499877005815506, .908990025520325],
            [.375436991453171, .924192011356354],
            [.11421000212431, .615022003650665],
            [.448662012815475, .695277988910675],
            [.4480200111866, .704632043838501],
            [.447111994028091, .715808033943176],
            [.444831997156143, .730794012546539],
            [.430011987686157, .766808986663818],
            [.406787008047104, .685672998428345],
            [.400738000869751, .681069016456604],
            [.392399996519089, .677703022956848],
            [.367855995893478, .663918972015381],
            [.247923001646996, .601333022117615],
            [.452769994735718, .420849978923798],
            [.43639200925827, .359887003898621],
            [.416164010763168, .368713974952698],
            [.413385987281799, .692366003990173],
            [.228018000721931, .683571994304657],
            [.468268007040024, .352671027183533],
            [.411361992359161, .804327011108398],
            [.499989002943039, .469825029373169],
            [.479153990745544, .442654013633728],
            [.499974012374878, .439637005329132],
            [.432112008333206, .493588984012604],
            [.499886006116867, .866917014122009],
            [.49991300702095, .821729004383087],
            [.456548988819122, .819200992584229],
            [.344549000263214, .745438992977142],
            [.37890899181366, .574010014533997],
            [.374292999505997, .780184984207153],
            [.319687992334366, .570737957954407],
            [.357154995203018, .604269981384277],
            [.295284003019333, .621580958366394],
            [.447750002145767, .862477004528046],
            [.410986006259918, .508723020553589],
            [.31395098567009, .775308012962341],
            [.354128003120422, .812552988529205],
            [.324548006057739, .703992962837219],
            [.189096003770828, .646299958229065],
            [.279776990413666, .71465802192688],
            [.1338230073452, .682700991630554],
            [.336768001317978, .644733011722565],
            [.429883986711502, .466521978378296],
            [.455527991056442, .548622965812683],
            [.437114000320435, .558896005153656],
            [.467287987470627, .529924988746643],
            [.414712011814117, .335219979286194],
            [.37704598903656, .322777986526489],
            [.344107985496521, .320150971412659],
            [.312875986099243, .32233202457428],
            [.283526003360748, .333190023899078],
            [.241245999932289, .382785975933075],
            [.102986000478268, .468762993812561],
            [.267612010240555, .424560010433197],
            [.297879010438919, .433175981044769],
            [.333433985710144, .433878004550934],
            [.366427004337311, .426115989685059],
            [.396012008190155, .416696012020111],
            [.420121014118195, .41022801399231],
            [.007561000064015, .480777025222778],
            [.432949006557465, .569517970085144],
            [.458638995885849, .479089021682739],
            [.473466008901596, .545744001865387],
            [.476087987422943, .563830018043518],
            [.468472003936768, .555056989192963],
            [.433990985155106, .582361996173859],
            [.483518004417419, .562983989715576],
            [.482482999563217, .57784903049469],
            [.42645001411438, .389798998832703],
            [.438998997211456, .39649498462677],
            [.450067013502121, .400434017181396],
            [.289712011814117, .368252992630005],
            [.276670008897781, .363372981548309],
            [.517862021923065, .471948027610779],
            [.710287988185883, .380764007568359],
            [.526226997375488, .573909997940063],
            [.895093023777008, .254140973091125],
            [.634069979190826, .409575998783112],
            [.661242008209229, .41302502155304],
            [.688880026340485, .409460008144379],
            [.725341975688934, .389131009578705],
            [.606630027294159, .40370500087738],
            [.654766023159027, .344011008739471],
            [.629905998706818, .346076011657715],
            [.680678009986877, .347265005111694],
            [.702096998691559, .353591024875641],
            [.75221198797226, .410804986953735],
            [.602918028831482, .842862963676453],
            [.719901978969574, .375599980354309],
            [.893692970275879, .399959981441498],
            [.790081977844238, .391354024410248],
            [.643998026847839, .534487962722778],
            [.528249025344849, .65040397644043],
            [.525849997997284, .680191040039062],
            [.560214996337891, .657229006290436],
            [.585384011268616, .66654098033905],
            [.549625992774963, .680860996246338],
            [.57122802734375, .682691991329193],
            [.624852001667023, .72809898853302],
            [.513050019741058, .547281980514526],
            [.51509702205658, .527251958847046],
            [.742246985435486, .314507007598877],
            [.598631024360657, .454979002475739],
            [.570338010787964, .548575043678284],
            [.578631997108459, .533622980117798],
            [.723087012767792, .532054007053375],
            [.516445994377136, .499638974666595],
            [.662801027297974, .282917976379395],
            [.70362401008606, .293271005153656],
            [.830704987049103, .193813979625702],
            [.552385985851288, .302568018436432],
            [.607609987258911, .353887975215912],
            [.645429015159607, .696707010269165],
            [.932694971561432, .730105042457581],
            [.557260990142822, .572826027870178],
            [.542901992797852, .584792017936707],
            [.6180260181427, .694710969924927],
            [.607590973377228, .694203019142151],
            [.722943007946014, .271963000297546],
            [.577413976192474, .563166975975037],
            [.614082992076874, .281386971473694],
            [.616907000541687, .255886018276215],
            [.668509006500244, .119913995265961],
            [.770092010498047, .232020974159241],
            [.635536015033722, .189248979091644],
            [.77039098739624, .299556016921997],
            [.826722025871277, .278755009174347],
            [.527121007442474, .666198015213013],
            [.553171992301941, .668527007102966],
            [.577238023281097, .673889994621277],
            [.554691970348358, .580065965652466],
            [.611896991729736, .693961024284363],
            [.59696102142334, .706539988517761],
            [.596370995044708, .693953037261963],
            [.539958000183105, .557139039039612],
            [.568841993808746, .692366003990173],
            [.547818005084991, .692366003990173],
            [.52461302280426, .692366003990173],
            [.534089982509613, .779141008853912],
            [.527670979499817, .736225962638855],
            [.526912987232208, .717857003211975],
            [.526877999305725, .704625964164734],
            [.526966989040375, .695277988910675],
            [.572058022022247, .695277988910675],
            [.573521018028259, .703539967536926],
            [.57683801651001, .711845993995667],
            [.581691026687622, .720062971115112],
            [.609944999217987, .639909982681274],
            [.986046016216278, .560034036636353],
            [.5867999792099, .69539999961853],
            [.590372025966644, .701822996139526],
            [.531915009021759, .601536989212036],
            [.577268004417419, .585934996604919],
            [.536915004253387, .593786001205444],
            [.627542972564697, .473352015018463],
            [.665585994720459, .495950996875763],
            [.588353991508484, .546862006187439],
            [.757824003696442, .14767599105835],
            [.709249973297119, .201507985591888],
            [.672684013843536, .256581008434296],
            [.600408971309662, .74900496006012],
            [.55826598405838, .261672019958496],
            [.570303976535797, .187870979309082],
            [.588165998458862, .109044015407562],
            [.711045026779175, .398952007293701],
            [.781069993972778, .435405015945435],
            [.587247014045715, .398931980133057],
            [.742869973182678, .355445981025696],
            [.572156012058258, .437651991844177],
            [.55186802148819, .536570012569427],
            [.821442008018494, .457556009292603],
            [.752701997756958, .457181990146637],
            [.71375697851181, .467626988887787],
            [.66711300611496, .460672974586487],
            [.631101012229919, .447153985500336],
            [.6008620262146, .432473003864288],
            [.523481011390686, .405627012252808],
            [.810747981071472, .523926019668579],
            [.771045982837677, .348959028720856],
            [.509127020835876, .562718033790588],
            [.595292985439301, .485023975372314],
            [.980530977249146, .401564002037048],
            [.573499977588654, .420000016689301],
            [.602994978427887, .548687994480133],
            [.733529984951019, .376977026462555],
            [.560611009597778, .519016981124878],
            [.967685997486115, .644356966018677],
            [.580985009670258, .387160003185272],
            [.537728011608124, .505385041236877],
            [.760966002941132, .779752969741821],
            [.801778972148895, .831938028335571],
            [.892440974712372, .54076099395752],
            [.816350996494293, .740260004997253],
            [.865594983100891, .333687007427216],
            [.614073991775513, .883246004581451],
            [.508952975273132, .579437971115112],
            [.617941975593567, .508316040039062],
            [.825608015060425, .397674977779388],
            [.681214988231659, .39623498916626],
            [.656635999679565, .400596976280212],
            [.603900015354156, .710216999053955],
            [.81208598613739, .588539004325867],
            [.56801301240921, .944564998149872],
            [.681007981300354, .898285031318665],
            [.733752012252808, .869701027870178],
            [.633830010890961, .398822009563446],
            [.606792986392975, .39553701877594],
            [.589659988880157, .391062021255493],
            [.805015981197357, .342108011245728],
            [.611334979534149, .362284004688263],
            [.634037971496582, .355970978736877],
            [.656635999679565, .355356991291046],
            [.681214988231659, .35834002494812],
            [.698584973812103, .363156020641327],
            [.941866993904114, .319076001644135],
            [.698584973812103, .387449026107788],
            [.584177017211914, .624107003211975],
            [.554318010807037, .566076993942261],
            [.534153997898102, .62064003944397],
            [.711217999458313, .819975018501282],
            [.664629995822906, .852871000766754],
            [.559099972248077, .902631998062134],
            [.871706008911133, .791940987110138],
            [.591234028339386, .373893976211548],
            [.544341027736664, .451583981513977],
            [.624562978744507, .924192011356354],
            [.88577002286911, .615028977394104],
            [.551338016986847, .695277988910675],
            [.551980018615723, .704632043838501],
            [.552887976169586, .715808033943176],
            [.555167973041534, .730794012546539],
            [.569944024085999, .767035007476807],
            [.593203008174896, .685675978660583],
            [.599261999130249, .681069016456604],
            [.607599973678589, .677703022956848],
            [.631937980651855, .663500010967255],
            [.752032995223999, .601315021514893],
            [.547226011753082, .420395016670227],
            [.563543975353241, .359827995300293],
            [.583841025829315, .368713974952698],
            [.586614012718201, .692366003990173],
            [.771915018558502, .683578014373779],
            [.531597018241882, .352482974529266],
            [.588370978832245, .804440975189209],
            [.52079701423645, .442565023899078],
            [.567984998226166, .493479013442993],
            [.543282985687256, .819254994392395],
            [.655317008495331, .745514988899231],
            [.621008992195129, .574018001556396],
            [.625559985637665, .78031200170517],
            [.680198013782501, .570719003677368],
            [.64276397228241, .604337990283966],
            [.704662978649139, .621529996395111],
            [.552012026309967, .862591981887817],
            [.589071989059448, .508637011051178],
            [.685944974422455, .775357007980347],
            [.645735025405884, .812640011310577],
            [.675342977046967, .703978002071381],
            [.810858011245728, .646304965019226],
            [.72012197971344, .714666962623596],
            [.866151988506317, .682704985141754],
            [.663187026977539, .644596993923187],
            [.570082008838654, .466325998306274],
            [.544561982154846, .548375964164734],
            [.562758982181549, .558784961700439],
            [.531987011432648, .530140042304993],
            [.585271000862122, .335177004337311],
            [.622952997684479, .32277899980545],
            [.655896008014679, .320163011550903],
            [.687132000923157, .322345972061157],
            [.716481983661652, .333200991153717],
            [.758756995201111, .382786989212036],
            [.897013008594513, .468769013881683],
            [.732392013072968, .424547016620636],
            [.70211398601532, .433162987232208],
            [.66652500629425, .433866024017334],
            [.633504986763, .426087975502014],
            [.603875994682312, .416586995124817],
            [.579657971858978, .409945011138916],
            [.992439985275269, .480777025222778],
            [.567192018032074, .569419980049133],
            [.54136598110199, .478899002075195],
            [.526564002037048, .546118021011353],
            [.523913025856018, .563830018043518],
            [.531529009342194, .555056989192963],
            [.566035985946655, .582329034805298],
            [.51631098985672, .563053965568542],
            [.5174720287323, .577877044677734],
            [.573594987392426, .389806985855103],
            [.560697972774506, .395331978797913],
            [.549755990505219, .399751007556915],
            [.710287988185883, .368252992630005],
            [.723330020904541, .363372981548309]
        ];

    function k(t, e, n) {
        return r(this, void 0, void 0, (function() {
            return i(this, (function(o) {
                return [2, l({
                    maxFaces: t,
                    iouThreshold: e,
                    scoreThreshold: n
                })]
            }))
        }))
    }

    function O() {
        return r(this, void 0, void 0, (function() {
            return i(this, (function(t) {
                return [2, n.loadGraphModel("https://tfhub.dev/mediapipe/tfjs-model/facemesh/1/default/1", {
                    fromTFHub: !0
                })]
            }))
        }))
    }

    function B(t, n) {
        if (t.mesh instanceof e.Tensor) {
            var o = e.tidy((function() {
                    var o = e.tensor1d([n - 1, 0, 0]),
                        r = e.tensor1d([1, -1, 1]);
                    return e.tidy((function() {
                        return [e.concat([e.sub(n - 1, t.boundingBox.topLeft.slice(0, 1)), t.boundingBox.topLeft.slice(1, 1)]), e.concat([e.sub(n - 1, t.boundingBox.bottomRight.slice(0, 1)), t.boundingBox.bottomRight.slice(1, 1)]), e.sub(o, t.mesh).mul(r), e.sub(o, t.scaledMesh).mul(r)]
                    }))
                })),
                r = o[0],
                i = o[1],
                s = o[2],
                a = o[3];
            return Object.assign({}, t, {
                boundingBox: {
                    topLeft: r,
                    bottomRight: i
                },
                mesh: s,
                scaledMesh: a
            })
        }
        return Object.assign({}, t, {
            boundingBox: {
                topLeft: [n - 1 - t.boundingBox.topLeft[0], t.boundingBox.topLeft[1]],
                bottomRight: [n - 1 - t.boundingBox.bottomRight[0], t.boundingBox.bottomRight[1]]
            },
            mesh: t.mesh.map((function(t) {
                var e = t.slice(0);
                return e[0] = n - 1 - t[0], e
            })),
            scaledMesh: t.scaledMesh.map((function(t) {
                var e = t.slice(0);
                return e[0] = n - 1 - t[0], e
            }))
        })
    }
    var I = function() {
        function t(t, e, n, o, r) {
            this.pipeline = new E(t, e, 192, 192, n, r), this.detectionConfidence = o
        }
        return t.getAnnotations = function() {
            return d
        }, t.getUVCoords = function() {
            return L
        }, t.prototype.estimateFaces = function(t, n, o) {
            return void 0 === n && (n = !1), void 0 === o && (o = !1), r(this, void 0, void 0, (function() {
                var s, a, c, u, h, l = this;
                return i(this, (function(f) {
                    switch (f.label) {
                        case 0:
                            return s = function(t) {
                                return t instanceof e.Tensor ? [t.shape[0], t.shape[1]] : [t.height, t.width]
                            }(t), a = s[1], c = e.tidy((function() {
                                return t instanceof e.Tensor || (t = e.browser.fromPixels(t)), t.toFloat().expandDims(0)
                            })), "webgl" !== e.getBackend() ? [3, 2] : (h = e.env().get("WEBGL_PACK_DEPTHWISECONV"), e.env().set("WEBGL_PACK_DEPTHWISECONV", !0), [4, this.pipeline.predict(c)]);
                        case 1:
                            return u = f.sent(), e.env().set("WEBGL_PACK_DEPTHWISECONV", h), [3, 4];
                        case 2:
                            return [4, this.pipeline.predict(c)];
                        case 3:
                            u = f.sent(), f.label = 4;
                        case 4:
                            return c.dispose(), null != u && u.length > 0 ? [2, Promise.all(u.map((function(t, s) {
                                return r(l, void 0, void 0, (function() {
                                    var c, u, h, l, f, p, m, b, g, y, P, v, w, x, M = this;
                                    return i(this, (function(E) {
                                        switch (E.label) {
                                            case 0:
                                                return c = t.coords, u = t.scaledCoords, h = t.box, l = t.flag, f = [l], n || (f = f.concat([c, u])), [4, Promise.all(f.map((function(t) {
                                                    return r(M, void 0, void 0, (function() {
                                                        return i(this, (function(e) {
                                                            return [2, t.array()]
                                                        }))
                                                    }))
                                                })))];
                                            case 1:
                                                if (p = E.sent(), m = p[0], l.dispose(), m < this.detectionConfidence && this.pipeline.clearRegionOfInterest(s), n) return b = {
                                                    faceInViewConfidence: m,
                                                    mesh: c,
                                                    scaledMesh: u,
                                                    boundingBox: {
                                                        topLeft: e.tensor1d(h.startPoint),
                                                        bottomRight: e.tensor1d(h.endPoint)
                                                    }
                                                }, o ? [2, B(b, a)] : [2, b];
                                                for (x in g = p.slice(1), y = g[0], P = g[1], u.dispose(), c.dispose(), v = {
                                                        faceInViewConfidence: m,
                                                        boundingBox: {
                                                            topLeft: h.startPoint,
                                                            bottomRight: h.endPoint
                                                        },
                                                        mesh: y,
                                                        scaledMesh: P
                                                    }, o && (v = B(v, a)), w = {}, d) w[x] = d[x].map((function(t) {
                                                    return v.scaledMesh[t]
                                                }));
                                                return v.annotations = w, [2, v]
                                        }
                                    }))
                                }))
                            })))] : [2, []]
                    }
                }))
            }))
        }, t
    }();
    t.FaceMesh = I, t.load = function(t) {
        var e = void 0 === t ? {} : t,
            n = e.maxContinuousChecks,
            o = void 0 === n ? 5 : n,
            s = e.detectionConfidence,
            a = void 0 === s ? .9 : s,
            c = e.maxFaces,
            u = void 0 === c ? 10 : c,
            h = e.iouThreshold,
            l = void 0 === h ? .3 : h,
            d = e.scoreThreshold,
            f = void 0 === d ? .75 : d;
        return r(this, void 0, void 0, (function() {
            var t, e, n;
            return i(this, (function(r) {
                switch (r.label) {
                    case 0:
                        return [4, Promise.all([k(u, l, f), O()])];
                    case 1:
                        return t = r.sent(), e = t[0], n = t[1], [2, new I(e, n, o, a, u)]
                }
            }))
        }))
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));