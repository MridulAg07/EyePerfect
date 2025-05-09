/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
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
! function(e, a) {
    "object" == typeof exports && "undefined" != typeof module ? a(exports, require("@tensorflow/tfjs-core"), require("seedrandom")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs-core", "seedrandom"], a) : a((e = e || self).tf = e.tf || {}, e.tf, e.seedrandom)
}(this, (function(e, a, t) {
    "use strict";
    var n = function(e, a) {
        return (n = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, a) {
                e.__proto__ = a
            } || function(e, a) {
                for (var t in a) a.hasOwnProperty(t) && (e[t] = a[t])
            })(e, a)
    };

    function r(e, a, t, n) {
        return new(t || (t = Promise))((function(r, i) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function o(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var a;
                e.done ? r(e.value) : (a = e.value, a instanceof t ? a : new t((function(e) {
                    e(a)
                }))).then(s, o)
            }
            u((n = n.apply(e, a || [])).next())
        }))
    }

    function i(e, a) {
        var t, n, r, i, s = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (t = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                        switch (n = 0, r && (i = [2 & i[0], r.value]), i[0]) {
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
                                s.label++, n = i[1], i = [0];
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
                        i = a.call(e, s)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    }

    function s(e, t) {
        Array.isArray(e) || (e = [e]), e.forEach((function(e) {
            null != e && a.util.assert("complex64" !== e.dtype, (function() {
                return t + " does not support complex64 tensors in the CPU backend."
            }))
        }))
    }
    var o = a.kernel_impls.whereImpl,
        u = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.blockSize = 48, t.firstUse = !0, t.data = new a.DataStorage(t, a.engine()), t
            }
            return function(e, a) {
                function t() {
                    this.constructor = e
                }
                n(e, a), e.prototype = null === a ? Object.create(a) : (t.prototype = a.prototype, new t)
            }(t, e), t.prototype.nextDataId = function() {
                return t.nextDataId++
            }, t.prototype.write = function(e, t, n) {
                this.firstUse && (this.firstUse = !1, a.env().get("IS_NODE") && a.backend_util.warn("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"));
                var r = {
                    id: this.nextDataId()
                };
                return this.data.set(r, {
                    values: e,
                    dtype: n,
                    refCount: 1
                }), r
            }, t.prototype.makeTensorInfo = function(e, t, n) {
                var r;
                if ("string" === t && null != n && n.length > 0 && a.util.isString(n[0])) {
                    var i = n.map((function(e) {
                        return a.util.encodeString(e)
                    }));
                    r = this.write(i, e, t)
                } else r = this.write(n, e, t);
                return {
                    dataId: r,
                    shape: e,
                    dtype: t
                }
            }, t.prototype.refCount = function(e) {
                return this.data.has(e) ? this.data.get(e).refCount : 0
            }, t.prototype.incRef = function(e) {
                this.data.get(e).refCount++
            }, t.prototype.decRef = function(e) {
                this.data.has(e) && this.data.get(e).refCount--
            }, t.prototype.move = function(e, a, t, n, r) {
                this.data.set(e, {
                    values: a,
                    dtype: n,
                    refCount: r
                })
            }, t.prototype.numDataIds = function() {
                return this.data.numDataIds()
            }, t.prototype.read = function(e) {
                return r(this, void 0, void 0, (function() {
                    return i(this, (function(a) {
                        return [2, this.readSync(e)]
                    }))
                }))
            }, t.prototype.readSync = function(e) {
                var t = this.data.get(e),
                    n = t.dtype,
                    r = t.complexTensorInfos;
                if ("complex64" === n) {
                    var i = this.readSync(r.real.dataId),
                        s = this.readSync(r.imag.dataId);
                    return a.backend_util.mergeRealAndImagArrays(i, s)
                }
                return this.data.get(e).values
            }, t.prototype.bufferSync = function(e) {
                var t = this.readSync(e.dataId),
                    n = t;
                if ("string" === e.dtype) try {
                    n = t.map((function(e) {
                        return a.util.decodeString(e)
                    }))
                } catch (e) {
                    throw new Error("Failed to decode encoded string bytes into utf-8")
                }
                return a.buffer(e.shape, e.dtype, n)
            }, t.prototype.makeOutput = function(e, t, n) {
                var r = this.write(e, t, n);
                return a.engine().makeTensorFromDataId(r, t, n, this)
            }, t.prototype.disposeData = function(e, a) {
                if (void 0 === a && (a = !1), this.data.has(e)) {
                    if (this.data.get(e).refCount--, !a && this.data.get(e).refCount > 0) return !1;
                    var t = this.data.get(e).complexTensorInfos;
                    null != t && (this.disposeData(t.real.dataId, !0), this.disposeData(t.imag.dataId, !0)), this.data.delete(e)
                }
                return !0
            }, t.prototype.disposeIntermediateTensorInfo = function(e) {
                this.disposeData(e.dataId)
            }, t.prototype.time = function(e) {
                return r(this, void 0, void 0, (function() {
                    var t;
                    return i(this, (function(n) {
                        return t = a.util.now(), e(), [2, {
                            kernelMs: a.util.now() - t
                        }]
                    }))
                }))
            }, t.prototype.memory = function() {
                return {
                    unreliable: !0,
                    reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]
                }
            }, t.prototype.where = function(e) {
                s([e], "where");
                var a = this.readSync(e.dataId);
                return o(e.shape, a)
            }, t.prototype.dispose = function() {}, t.prototype.floatPrecision = function() {
                return 32
            }, t.prototype.epsilon = function() {
                return e.prototype.epsilon.call(this)
            }, t.nextDataId = 0, t
        }(a.KernelBackend);

    function d(e) {
        for (var a = new Float32Array(e.length), t = 0; t < e.length; ++t) a[t] = Math.abs(e[t]);
        return a
    }
    var p = {
        kernelName: a.Abs,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs.x,
                n = e.backend;
            s(t, "abs");
            var r = new Float32Array(a.util.sizeFromShape(t.shape));
            return r = d(n.data.get(t.dataId).values), n.makeOutput(r, t.shape, "float32")
        }
    };

    function l(e) {
        return function(t, n, r, i, s) {
            var o = a.backend_util.assertAndGetBroadcastShape(t, n),
                u = o.length,
                d = a.util.computeStrides(o),
                p = a.util.sizeFromShape(o),
                l = a.util.getTypedArrayFromDType(s, p),
                c = t.length,
                h = n.length,
                f = a.util.computeStrides(t),
                m = a.util.computeStrides(n),
                v = a.backend_util.getBroadcastDims(t, o),
                k = a.backend_util.getBroadcastDims(n, o);
            if (v.length + k.length === 0)
                for (var g = 0; g < l.length; ++g) l[g] = e(r[g % r.length], i[g % i.length]);
            else {
                var b = function(t) {
                    var n = a.util.indexToLoc(t, u, d),
                        s = n.slice(-c);
                    v.forEach((function(e) {
                        return s[e] = 0
                    }));
                    var o = a.util.locToIndex(s, c, f),
                        p = n.slice(-h);
                    k.forEach((function(e) {
                        return p[e] = 0
                    }));
                    var g = a.util.locToIndex(p, h, m);
                    l[t] = e(r[o], i[g])
                };
                for (g = 0; g < l.length; ++g) b(g)
            }
            return [l, o]
        }
    }

    function c(e) {
        var a = e.inputs,
            t = e.backend,
            n = a.real,
            r = a.imag,
            i = t.data.get(n.dataId).values,
            s = t.data.get(r.dataId).values,
            o = t.makeTensorInfo(n.shape, "complex64");
        return t.data.get(o.dataId).complexTensorInfos = {
            real: t.makeTensorInfo(n.shape, "float32", i),
            imag: t.makeTensorInfo(r.shape, "float32", s)
        }, o
    }
    var h = {
        kernelName: a.Complex,
        backendName: "cpu",
        kernelFunc: c
    };

    function f(e, t, n) {
        if (void 0 === n && (n = "float32"), "complex64" === n) return c({
            inputs: {
                real: f(e, t, "float32"),
                imag: f(e, t, "float32")
            },
            backend: e
        });
        var r = a.util.makeZerosTypedArray(a.util.sizeFromShape(t), n);
        return e.makeTensorInfo(t, n, r)
    }

    function m(e) {
        var a = e.inputs,
            t = e.backend,
            n = a.x;
        return t.incRef(n.dataId), {
            dataId: n.dataId,
            shape: n.shape,
            dtype: n.dtype
        }
    }
    var v = {
        kernelName: a.Identity,
        backendName: "cpu",
        kernelFunc: m
    };

    function k(e) {
        var a = e.inputs,
            t = e.backend,
            n = a.input,
            r = t.data.get(n.dataId).complexTensorInfos.real,
            i = t.data.get(r.dataId).values;
        return t.makeTensorInfo(r.shape, r.dtype, i)
    }
    var g = {
        kernelName: a.Real,
        backendName: "cpu",
        kernelFunc: k
    };

    function b(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.x,
            s = r.dtype;
        if ("complex64" === s) {
            if ("complex64" === i.dtype) return m({
                inputs: {
                    x: i
                },
                backend: n
            });
            var o = f(n, i.shape, i.dtype),
                u = b({
                    inputs: {
                        x: i
                    },
                    backend: n,
                    attrs: {
                        dtype: "float32"
                    }
                }),
                d = c({
                    inputs: {
                        real: u,
                        imag: o
                    },
                    backend: n
                });
            return n.disposeIntermediateTensorInfo(o), n.disposeIntermediateTensorInfo(u), d
        }
        if ("complex64" === i.dtype) {
            var p = k({
                    inputs: {
                        input: i
                    },
                    backend: n
                }),
                d = b({
                    inputs: {
                        x: p
                    },
                    backend: n,
                    attrs: {
                        dtype: s
                    }
                });
            return n.disposeIntermediateTensorInfo(p), d
        }
        if (!a.util.hasEncodingLoss(i.dtype, s)) return {
            dataId: (d = m({
                inputs: {
                    x: i
                },
                backend: n
            })).dataId,
            shape: d.shape,
            dtype: s
        };
        if ("int32" === s) {
            var h = n.data.get(i.dataId).values,
                v = Int32Array.from(h);
            return n.makeTensorInfo(i.shape, "int32", v)
        }
        if ("bool" === s) {
            var g = n.data.get(i.dataId).values,
                I = a.util.toTypedArray([0], i.dtype),
                y = l((function(e, a) {
                    return e !== a ? 1 : 0
                }))(i.shape, [], g, I, "bool"),
                N = y[0],
                T = y[1];
            return n.makeTensorInfo(T, "bool", N)
        }
        throw new Error("Error in Cast: failed to cast " + i.dtype + " to " + s)
    }
    var I = {
        kernelName: a.Cast,
        backendName: "cpu",
        kernelFunc: b
    };

    function y(e, t, n, r) {
        return null == n ? function(n) {
            var i = n.inputs,
                o = n.backend,
                u = i,
                d = u.a,
                p = u.b,
                l = o;
            s([d, p], e);
            var c = l.data.get(d.dataId).values,
                h = l.data.get(p.dataId).values,
                f = "string" === d.dtype ? a.backend_util.fromUint8ToStringArray(c) : c,
                m = "string" === d.dtype ? a.backend_util.fromUint8ToStringArray(h) : h,
                v = r || d.dtype,
                k = t(d.shape, p.shape, f, m, v),
                g = k[0],
                b = k[1];
            return l.makeTensorInfo(b, v, g)
        } : function(e) {
            var a = e.inputs,
                i = e.backend,
                s = a,
                o = s.a,
                u = s.b,
                d = i;
            if ("complex64" === o.dtype || "complex64" === u.dtype) {
                var p = b({
                        inputs: {
                            x: o
                        },
                        backend: d,
                        attrs: {
                            dtype: "complex64"
                        }
                    }),
                    l = d.data.get(p.dataId),
                    h = l.complexTensorInfos.real,
                    f = l.complexTensorInfos.imag,
                    m = d.data.get(h.dataId).values,
                    v = d.data.get(f.dataId).values,
                    k = b({
                        inputs: {
                            x: u
                        },
                        backend: d,
                        attrs: {
                            dtype: "complex64"
                        }
                    }),
                    g = d.data.get(k.dataId),
                    I = g.complexTensorInfos.real,
                    y = g.complexTensorInfos.imag,
                    N = d.data.get(I.dataId).values,
                    T = d.data.get(y.dataId).values,
                    x = n(o.shape, u.shape, m, v, N, T),
                    S = x[0],
                    F = x[1],
                    M = x[2],
                    A = d.makeTensorInfo(M, "float32", S),
                    w = d.makeTensorInfo(M, "float32", F),
                    D = c({
                        inputs: {
                            real: A,
                            imag: w
                        },
                        backend: d
                    });
                return d.disposeIntermediateTensorInfo(p), d.disposeIntermediateTensorInfo(k), d.disposeIntermediateTensorInfo(A), d.disposeIntermediateTensorInfo(w), D
            }
            var _ = d.data.get(o.dataId).values,
                z = d.data.get(u.dataId).values,
                E = r || o.dtype,
                W = t(o.shape, u.shape, _, z, E),
                C = W[0];
            M = W[1];
            return d.makeTensorInfo(M, E, C)
        }
    }

    function N(e) {
        return function(t, n, r, i, s, o) {
            var u = a.backend_util.assertAndGetBroadcastShape(t, n),
                d = a.util.sizeFromShape(u),
                p = u.length,
                l = a.util.computeStrides(u),
                c = a.util.getTypedArrayFromDType("float32", d),
                h = a.util.getTypedArrayFromDType("float32", d),
                f = a.backend_util.getBroadcastDims(t, u),
                m = a.backend_util.getBroadcastDims(n, u),
                v = a.backend_util.mergeRealAndImagArrays(r, i),
                k = a.backend_util.mergeRealAndImagArrays(s, o),
                g = t.length,
                b = a.util.computeStrides(t),
                I = n.length,
                y = a.util.computeStrides(n);
            if (f.length + m.length === 0)
                for (var N = 0; N < c.length; N++) {
                    var T = N % v.length,
                        x = N % k.length,
                        S = e(v[2 * T], v[2 * T + 1], k[2 * x], k[2 * x + 1]);
                    c[N] = S.real, h[N] = S.imag
                } else {
                    var F = function(t) {
                        var n = a.util.indexToLoc(t, p, l),
                            r = n.slice(-g);
                        f.forEach((function(e) {
                            return r[e] = 0
                        }));
                        var i = a.util.locToIndex(r, g, b),
                            s = n.slice(-I);
                        m.forEach((function(e) {
                            return s[e] = 0
                        }));
                        var o = a.util.locToIndex(s, I, y),
                            u = e(v[2 * i], v[2 * i + 1], k[2 * o], k[2 * o + 1]);
                        c[t] = u.real, h[t] = u.imag
                    };
                    for (N = 0; N < c.length; N++) F(N)
                }
            return [c, h, u]
        }
    }
    var T = l((function(e, a) {
            return e + a
        })),
        x = N((function(e, a, t, n) {
            return {
                real: e + t,
                imag: a + n
            }
        })),
        S = y(a.Add, T, x),
        F = {
            kernelName: a.Add,
            backendName: "cpu",
            kernelFunc: S
        };

    function M(e, t, n, r, i) {
        for (var s = a.util.sizeFromShape(r), o = a.util.makeZerosTypedArray(i, n), u = 0; u < e.length; u++) {
            var d = e[u];
            if (d < 0) throw new Error("Input x must be non-negative!");
            d >= i || (o[d] += s > 0 ? t[u] : 1)
        }
        return o
    }

    function A(e, t, n, r) {
        void 0 === r && (r = !1);
        for (var i = e.shape[0], s = e.shape[1], o = a.buffer([i, n], t.dtype), u = 0; u < i; u++)
            for (var d = 0; d < s; d++) {
                var p = e.get(u, d);
                if (p < 0) throw new Error("Input x must be non-negative!");
                p >= n || (r ? o.set(1, u, p) : t.size > 0 ? o.set(o.get(u, p) + t.get(u, d), u, p) : o.set(o.get(u, p) + 1, u, p))
            }
        return o
    }

    function w(e) {
        return function(t, n, r) {
            for (var i = a.util.getTypedArrayFromDType(n, t.length), s = 0; s < t.length; ++s) i[s] = e(t[s], r);
            return i
        }
    }

    function D(e, t, n) {
        return function(r) {
            var i = r.inputs,
                o = r.attrs,
                u = r.backend,
                d = i.x;
            if (s(d, e), "string" === d.dtype || "string" === n) throw new Error("unaryKernelFunc does not support string input/output");
            for (var p = u, l = p.data.get(d.dataId).values, c = a.util.sizeFromShape(d.shape), h = n || d.dtype, f = a.util.getArrayFromDType(h, c), m = 0; m < c; ++m) f[m] = t(l[m], o);
            return p.makeTensorInfo(d.shape, h, f)
        }
    }

    function _(e, a, t) {
        return function(n) {
            var r = n.inputs,
                i = n.attrs,
                o = n.backend,
                u = r.x;
            if (s(u, e), "string" === u.dtype || "string" === t) throw new Error("unaryKernelFunc does not support string input/output");
            var d = o,
                p = d.data.get(u.dataId).values,
                l = t || u.dtype,
                c = a(p, l, i);
            return d.makeTensorInfo(u.shape, l, c)
        }
    }
    var z = w((function(e) {
            return Math.ceil(e)
        })),
        E = _(a.Ceil, z),
        W = {
            kernelName: a.Ceil,
            backendName: "cpu",
            kernelFunc: E
        };

    function C(e, t, n, r) {
        var i = a.util.getArrayFromDType(n, a.util.sizeFromShape(t));
        if (r && "string" !== n) {
            var s = 0;
            e.forEach((function(e) {
                var t = a.util.sizeFromShape(e.shape);
                i.set(e.vals, s), s += t
            }))
        } else {
            var o = 0;
            e.forEach((function(e) {
                for (var r = "string" === n ? a.backend_util.fromUint8ToStringArray(e.vals) : e.vals, s = 0, u = 0; u < e.shape[0]; ++u)
                    for (var d = u * t[1] + o, p = 0; p < e.shape[1]; ++p) i[d + p] = r[s++];
                o += e.shape[1]
            }))
        }
        return i
    }
    var H = l((function(e, a) {
            return e === a ? 1 : 0
        })),
        P = y(a.Equal, H, null, "bool"),
        R = {
            kernelName: a.Equal,
            backendName: "cpu",
            kernelFunc: P
        },
        B = w((function(e) {
            return Math.exp(e)
        })),
        G = _(a.Exp, B),
        O = {
            kernelName: a.Exp,
            backendName: "cpu",
            kernelFunc: G
        },
        L = w((function(e) {
            return Math.expm1(e)
        })),
        V = _(a.Expm1, L),
        q = {
            kernelName: a.Expm1,
            backendName: "cpu",
            kernelFunc: V
        },
        U = w((function(e) {
            return Math.floor(e)
        })),
        Z = _(a.Floor, U),
        j = {
            kernelName: a.Floor,
            backendName: "cpu",
            kernelFunc: Z
        };

    function K(e, t, n, r, i, s, o, u, d) {
        for (var p = a.buffer([r, s], n), l = 0; l < r; l++) {
            for (var c = [], h = 0, f = 0; f < i; f++) {
                var m = e[l * i + f];
                h += m * o[f], c.push(m)
            }
            if (h < 0 || h >= d / s) throw new Error("Invalid indices: " + c + " does not index into " + u);
            for (var v = 0; v < s; v++) p.values[l * s + v] = t.get.apply(t, t.indexToLoc(h * s + v))
        }
        return p
    }

    function Y(e, t, n) {
        for (var r = a.buffer(n, e.dtype), i = 0; i < r.size; ++i) {
            var s = r.indexToLoc(i).slice(),
                o = s[0],
                u = s[2],
                d = t.locToIndex([o, u]);
            s[2] = t.values[d];
            var p = e.locToIndex(s);
            r.values[i] = e.values[p]
        }
        return r
    }
    var $ = l((function(e, a) {
            return e > a ? 1 : 0
        })),
        J = y(a.Greater, $, null, "bool"),
        Q = {
            kernelName: a.Greater,
            backendName: "cpu",
            kernelFunc: J
        },
        X = l((function(e, a) {
            return e >= a ? 1 : 0
        })),
        ee = y(a.GreaterEqual, X, null, "bool"),
        ae = {
            kernelName: a.GreaterEqual,
            backendName: "cpu",
            kernelFunc: ee
        },
        te = l((function(e, a) {
            return e < a ? 1 : 0
        })),
        ne = y(a.Less, te, null, "bool"),
        re = {
            kernelName: a.Less,
            backendName: "cpu",
            kernelFunc: ne
        },
        ie = l((function(e, a) {
            return e <= a ? 1 : 0
        })),
        se = y(a.LessEqual, ie, null, "bool"),
        oe = {
            kernelName: a.LessEqual,
            backendName: "cpu",
            kernelFunc: se
        };

    function ue(e, t, n) {
        var r = (t - e) / (n - 1),
            i = a.util.makeZerosTypedArray(n, "float32");
        i[0] = e;
        for (var s = 1; s < i.length; s++) i[s] = i[s - 1] + r;
        return i
    }
    var de = w((function(e) {
            return Math.log(e)
        })),
        pe = _(a.Log, de),
        le = {
            kernelName: a.Log,
            backendName: "cpu",
            kernelFunc: pe
        };

    function ce(e, t, n, r) {
        for (var i = a.util.getTypedArrayFromDType(r, a.util.sizeFromShape(n)), s = 0; s < i.length; ++s) {
            for (var o = s * t, u = e[o], d = 0; d < t; ++d) {
                var p = e[o + d];
                (Number.isNaN(p) || p > u) && (u = p)
            }
            i[s] = u
        }
        return i
    }
    var he = l((function(e, a) {
            return Math.max(e, a)
        })),
        fe = y(a.Maximum, he),
        me = {
            kernelName: a.Maximum,
            backendName: "cpu",
            kernelFunc: fe
        },
        ve = l((function(e, a) {
            return Math.min(e, a)
        })),
        ke = y(a.Minimum, ve),
        ge = {
            kernelName: a.Minimum,
            backendName: "cpu",
            kernelFunc: ke
        },
        be = l((function(e, a) {
            return e * a
        })),
        Ie = N((function(e, a, t, n) {
            return {
                real: e * t - a * n,
                imag: e * n + a * t
            }
        })),
        ye = y(a.Multiply, be, Ie),
        Ne = {
            kernelName: a.Multiply,
            backendName: "cpu",
            kernelFunc: ye
        };

    function Te(e, t, n) {
        var r = a.util.createScalarValue(-1, n);
        return be([], t, r, e, n)
    }
    var xe = {
            kernelName: a.Neg,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.inputs,
                    t = e.backend,
                    n = a.x;
                s(n, "neg");
                var r = Te(t.data.get(n.dataId).values, n.shape, n.dtype),
                    i = r[0],
                    o = r[1];
                return t.makeTensorInfo(o, n.dtype, i)
            }
        },
        Se = l((function(e, a) {
            return e !== a ? 1 : 0
        })),
        Fe = y(a.NotEqual, Se, null, "bool"),
        Me = {
            kernelName: a.NotEqual,
            backendName: "cpu",
            kernelFunc: Fe
        };

    function Ae(e, t, n, r, i) {
        for (var s = t.length, o = a.util.sizeFromShape(t), u = a.util.computeStrides(t), d = a.util.computeStrides(i), p = a.util.getTypedArrayFromDType(n, a.util.sizeFromShape(i)), l = 0; l < o; ++l) {
            for (var c = a.util.indexToLoc(l, s, u), h = new Array(c.length), f = 0; f < h.length; f++) h[f] = c[r[f]];
            p[a.util.locToIndex(h, s, d)] = e[l]
        }
        return p
    }

    function we(e) {
        var a = e.inputs,
            t = e.attrs,
            n = e.backend,
            r = a.x,
            i = t.perm;
        s(r, "transpose");
        for (var o = r.shape.length, u = new Array(o), d = 0; d < u.length; d++) u[d] = r.shape[i[d]];
        var p = Ae(n.data.get(r.dataId).values, r.shape, r.dtype, i, u);
        return {
            dataId: n.write(p, u, r.dtype),
            shape: u,
            dtype: r.dtype
        }
    }
    var De = {
        kernelName: a.Transpose,
        backendName: "cpu",
        kernelFunc: we
    };

    function _e(e, t, n, r) {
        for (var i = a.backend_util.computeOutAndReduceShapes(e, r), s = i[0], o = i[1], u = a.upcastType(t, "int32"), d = a.util.makeZerosTypedArray(a.util.sizeFromShape(s), u), p = a.util.sizeFromShape(o), l = 0; l < d.length; ++l) {
            for (var c = l * p, h = 1, f = 0; f < p; ++f) h *= n[c + f];
            d[l] = h
        }
        return {
            outVals: d,
            outShape: s,
            outDtype: u
        }
    }
    var ze = {
        kernelName: a.Prod,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.axis,
                u = r.keepDims;
            s(i, "prod");
            var d = i.shape.length,
                p = a.util.parseAxisParam(o, i.shape),
                l = a.backend_util.getAxesPermutation(p, d),
                c = p,
                h = i,
                f = [];
            null != l && (h = we({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    perm: l
                }
            }), f.push(h), c = a.backend_util.getInnerMostAxes(c.length, d));
            var m = n.data.get(h.dataId).values,
                v = _e(h.shape, h.dtype, m, c),
                k = v.outVals,
                g = v.outShape,
                b = v.outDtype,
                I = g;
            return u && (I = a.backend_util.expandShapeToKeepDim(g, p)), f.forEach((function(e) {
                return n.disposeIntermediateTensorInfo(e)
            })), n.makeTensorInfo(I, b, k)
        }
    };

    function Ee(e, t, n, r) {
        if (e === t || e < t && n < 0 || t < e && n > 1) return a.util.makeZerosTypedArray(0, r);
        var i = Math.abs(Math.ceil((t - e) / n)),
            s = a.util.makeZerosTypedArray(i, r);
        t < e && 1 === n && (n = -1), s[0] = e;
        for (var o = 1; o < s.length; o++) s[o] = s[o - 1] + n;
        return s
    }
    var We = w((function(e) {
            return 1 / Math.sqrt(e)
        })),
        Ce = _(a.Rsqrt, We),
        He = {
            kernelName: a.Rsqrt,
            backendName: "cpu",
            kernelFunc: Ce
        };

    function Pe(e, t, n, r, i) {
        var s = a.slice_util.isSliceContinous(r, t, n),
            o = a.util.sizeFromShape(n),
            u = a.util.computeStrides(r);
        if (s) {
            var d = a.slice_util.computeFlatOffset(t, u);
            return "string" === i ? e.slice(d, d + o) : e.subarray(d, d + o)
        }
        for (var p = "string" === i ? a.backend_util.fromUint8ToStringArray(e) : e, l = a.buffer(r, i, p), c = a.buffer(n, i), h = 0; h < c.size; ++h) {
            var f = c.indexToLoc(h),
                m = f.map((function(e, a) {
                    return e + t[a]
                }));
            c.set.apply(c, [l.get.apply(l, m)].concat(f))
        }
        return "string" === i ? a.backend_util.fromStringArrayToUint8(c.values) : c.values
    }

    function Re(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.x,
            o = r.begin,
            u = r.size;
        s(i, "slice");
        var d = a.slice_util.parseSliceParams(i, o, u),
            p = d[0],
            l = d[1];
        a.slice_util.assertParamsValid(i, p, l);
        var c = Pe(n.data.get(i.dataId).values, p, l, i.shape, i.dtype);
        return n.makeTensorInfo(l, i.dtype, c)
    }
    var Be = {
        kernelName: a.Slice,
        backendName: "cpu",
        kernelFunc: Re
    };

    function Ge(e, t, n, r, i, s, o) {
        var u = t[0],
            d = s[0],
            p = new Array(d),
            l = new Array(u),
            c = t[1];
        if (0 === d) {
            if (0 !== u) throw new Error("Received SparseTensor with denseShape[0] = 0 but\n         indices.shape[0] = " + u);
            return [I = a.util.getArrayFromDType(n, 0), [0, c], y = a.util.getArrayFromDType(i, 0), p, l]
        }
        for (var h = !0, f = 0, m = new Array(d).fill(0), v = 0; v < u; ++v) {
            if ((g = e[v * c]) < 0) throw new Error("indices(" + v + ", 0) is invalid: " + g + " < 0");
            if (g >= d) throw new Error("indices(" + v + ", 0) is invalid: " + g + " >= " + d);
            ++m[g], h = h && g >= f, f = g
        }
        for (var k = !0, g = 0; g < d; ++g) {
            var b = 0 === m[g];
            p[g] = b, k = k && !b, m[g] = Math.max(m[g], 1), g > 0 && (m[g] += m[g - 1])
        }
        if (k && h) {
            var I = e,
                y = r;
            for (v = 0; v < u; ++v) l[v] = v;
            return [I, [u, c], y, p, l]
        }
        var N = m[d - 1],
            T = (I = a.util.getArrayFromDType(n, N * c), y = a.util.getArrayFromDType(i, N), new Array(d).fill(0));
        for (v = 0; v < u; ++v) {
            var x = T[g = e[v * c]],
                S = (0 === g ? 0 : m[g - 1]) + x;
            T[g]++;
            for (var F = 0; F < c; ++F) I[S * c + F] = e[v * c + F];
            y[S] = r[v], l[v] = S
        }
        for (g = 0; g < d; ++g) {
            if (0 === T[g]) {
                var M = 0 === g ? 0 : m[g - 1];
                I[M * c + 0] = g;
                for (var A = 1; A < c; ++A) I[M * c + A] = 0;
                y[M] = o
            }
        }
        return [I, [N, c], y, p, l]
    }

    function Oe(e, t, n, r, i) {
        for (var s = a.util.sizeFromShape(r), o = t[0], u = i.length, d = [], p = 1, l = -1, c = 0; c < u; ++c) {
            var h = i[c];
            if (-1 === h) {
                if (-1 !== l) throw new Error("only one output dimension may be -1, not both " + l + " and " + c);
                l = c, d.push(1)
            } else {
                if (h < 0) throw new Error("size " + c + " must be non-negative, not " + h);
                p *= h, d.push(h)
            }
        }
        if (-1 !== l) {
            if (p <= 0) throw new Error("reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero");
            var f = Math.trunc(s / p);
            if (p * f !== s) throw new Error("Input to reshape is a SparseTensor with " + s + "\n          dense values, but the requested shape requires a multiple of " + p + ". inputShape=" + r + " outputShape= " + d);
            d[l] = f
        }
        var m = a.util.sizeFromShape(d);
        if (m !== s) throw new Error("Input to reshape is a tensor with " + s + " dense values, but the requested shape has " + m + ". inputShape=" + r + " outputShape=" + d);
        var v = r.length,
            k = [];
        if (v > 0) {
            k[v - 1] = 1;
            for (c = v - 2; c >= 0; --c) k[c] = k[c + 1] * r[c + 1]
        }
        var g = [];
        if (u > 0) {
            g[u - 1] = 1;
            for (c = u - 2; c >= 0; --c) g[c] = g[c + 1] * d[c + 1]
        }
        for (var b = a.util.getArrayFromDType(n, o * u), I = 0; I < o; ++I) {
            for (var y = 0, N = 0; N < v; ++N) y += e[I * v + N] * k[N];
            for (N = 0; N < u; ++N) b[I * u + N] = Math.trunc(y / g[N]), y %= g[N]
        }
        return [b, [o, u], d]
    }

    function Le(e, t, n, r, i, s, o) {
        void 0 === s && (s = !1), void 0 === o && (o = 0);
        var u = r.length;
        if (u !== i.length) throw new Error("segmentIds and indices should have same size.");
        var d = [t[0], e.length / t[0]],
            p = d[1],
            l = u > 0 ? i[u - 1] + 1 : 0;
        if (l < 0) throw new Error("segment ids must be >= 0");
        var c = t.slice();
        c[0] = l;
        var h = c.reduce((function(e, a) {
                return e * a
            }), 1),
            f = a.util.getArrayFromDType(n, h);
        if (0 === u) return l > 0 && f.fill(o), [f, c];
        if (l <= 0) throw new Error("segment ids must be >= 0");
        for (var m = 0, v = 1, k = 0, g = i[m];;) {
            var b = 0;
            if (v < u) {
                if (g === (b = i[v])) {
                    ++v;
                    continue
                }
                if (g >= b) throw new Error("segment ids are not increasing")
            }
            if (g < 0 || g >= l) throw new Error("Segment id " + g + " out of range [0, " + l + "), possibly because segmentIds input is not sorted.");
            g > k && f.fill(o, k * p, g * p);
            for (var I = m; I < v; ++I) {
                var y = r[I];
                if (y < 0 || y >= d[0]) throw new Error("Bad: indices[" + I + "] == " + r[I] + " out of range [0, " + d[0] + ")");
                for (var N = 0; N < p; N++) f[g * p + N] += e[y * p + N]
            }
            if (s)
                for (N = 0; N < p; N++) f[g * p + N] /= v - m;
            if (m = v, k = g + 1, g = b, ++v > u) break
        }
        return k < l && f.fill(o, k * p, l * p), [f, c]
    }
    var Ve = l((function(e, a) {
            var t = e - a;
            return t * t
        })),
        qe = y(a.SquaredDifference, Ve),
        Ue = {
            kernelName: a.SquaredDifference,
            backendName: "cpu",
            kernelFunc: qe
        };

    function Ze(e, t, n, r) {
        for (var i = a.buffer(e, t.dtype), s = 0; s < i.size; s++) {
            for (var o = i.indexToLoc(s), u = new Array(o.length), d = 0; d < u.length; d++) u[d] = o[d] * n[d] + r[d];
            i.set.apply(i, [t.get.apply(t, u)].concat(o))
        }
        return i
    }
    var je = function() {
        function e(e, t, n, r, i, s) {
            this.separator = a.util.encodeString(e), this.nGramWidths = t, this.leftPad = a.util.encodeString(n), this.rightPad = a.util.encodeString(r), this.padWidth = i, this.preserveShort = s
        }
        return e.prototype.getPadWidth = function(e) {
            return Math.min(this.padWidth < 0 ? e - 1 : this.padWidth, e - 1)
        }, e.prototype.getNumNGrams = function(e, a) {
            var t = this.getPadWidth(a);
            return Math.max(0, e + 2 * t - a + 1)
        }, e.prototype.createNGrams = function(e, a, t, n, r, i) {
            for (var s = function(s) {
                    var u = o.getPadWidth(i),
                        d = Math.max(0, u - s),
                        p = Math.max(0, u - (r - (s + 1))),
                        l = i - (d + p),
                        c = a + (d > 0 ? 0 : s - u),
                        h = 0;
                    h += d * o.leftPad.length;
                    for (var f = 0; f < l; ++f) h += e[c + f].length;
                    h += p * o.rightPad.length, h += (d + p + l - 1) * o.separator.length, t[n + s] = new Uint8Array(h);
                    var m = t[n + s],
                        v = 0,
                        k = function(e) {
                            return e.forEach((function(e) {
                                return m[v++] = e
                            }))
                        };
                    for (f = 0; f < d; ++f) k(o.leftPad), k(o.separator);
                    for (f = 0; f < l - 1; ++f) k(e[c + f]), k(o.separator);
                    if (l > 0) {
                        k(e[c + l - 1]);
                        for (f = 0; f < p; ++f) k(o.separator), k(o.rightPad)
                    } else {
                        for (f = 0; f < p - 1; ++f) k(o.rightPad), k(o.separator);
                        k(o.rightPad)
                    }
                }, o = this, u = 0; u < r; ++u) s(u)
        }, e.prototype.compute = function(e, t) {
            var n = this,
                r = e.length,
                i = t.length;
            if (i > 0) {
                var s = t[0];
                if (0 !== s) throw new Error("First split value must be 0, got " + s);
                for (var o = 1; o < i; ++o) {
                    var u = t[o] >= s;
                    if (!(u = u && t[o] <= r)) throw new Error("Invalid split value " + t[o] + ", must be in [" + s + ", " + r + "]");
                    s = t[o]
                }
                if (s !== r) throw new Error("Last split value must be data size. Expected " + r + ", got " + s)
            }
            var d = i - 1,
                p = a.util.getArrayFromDType("int32", i);
            if (0 === r || 0 === i) {
                var l = new Array(r);
                for (o = 0; o <= d; ++o) p[o] = 0;
                return [l, p]
            }
            p[0] = 0;
            var c = function(e) {
                    var a = t[e] - t[e - 1],
                        r = 0;
                    h.nGramWidths.forEach((function(e) {
                        r += n.getNumNGrams(a, e)
                    })), h.preserveShort && a > 0 && 0 === r && (r = 1), p[e] = p[e - 1] + r
                },
                h = this;
            for (o = 1; o <= d; ++o) c(o);
            var f = new Array(p[d]),
                m = function(a) {
                    var r = t[a],
                        i = p[a];
                    if (v.nGramWidths.forEach((function(s) {
                            var o = t[a + 1] - t[a],
                                u = n.getNumNGrams(o, s);
                            n.createNGrams(e, r, f, i, u, s), i += u
                        })), v.preserveShort && i === p[a]) {
                        var s = t[a + 1] - t[a];
                        if (0 === s) return "continue";
                        var o = s + 2 * v.padWidth;
                        v.createNGrams(e, r, f, i, 1, o)
                    }
                },
                v = this;
            for (o = 0; o < d; ++o) m(o);
            return [f, p]
        }, e
    }();

    function Ke(e, a, t, n, r, i, s, o) {
        return new je(t, n, r, i, s, o).compute(e, a)
    }

    function Ye(e, a, t) {
        if (!e.length) return [];
        if (0 === a.length) {
            for (var n = new Array(e.length), r = 0; r < e.length; ++r) n[r] = e.subarray(r, r + 1);
            return n
        }
        if (1 === a.length) {
            for (var i = a[0], s = [], o = e.indexOf(i); - 1 !== o;) {
                var u = e.subarray(0, o);
                t && 0 === u.length || s.push(u), o = (e = e.subarray(o + 1)).indexOf(i)
            }
            return t && 0 === e.length || s.push(e), s
        }
        var d = [],
            p = 0;
        for (r = 0; r < e.length + 1; r++)
            if (r === e.length || -1 !== a.indexOf(e[r])) {
                u = e.subarray(p, r);
                t && 0 === u.length || d.push(u), p = r + 1
            }
        return d
    }

    function $e(e, t, n) {
        for (var r = e.length, i = [], s = 0, o = 0, u = new Array(r), d = 0; d < r; ++d) {
            var p = Ye(e[d], t, n),
                l = p.length;
            u[d] = l, s += l, o = Math.max(o, l), i.push.apply(i, p)
        }
        var c = a.util.getArrayFromDType("int32", 2 * s),
            h = new Array(s),
            f = [r, o],
            m = 0;
        for (d = 0; d < r; ++d)
            for (var v = 0; v < u[d]; ++v) c[2 * m] = d, c[2 * m + 1] = v, h[m] = i[m], ++m;
        return [c, h, f]
    }

    function Je(e, t) {
        for (var n = a.util.getArrayFromDType("int32", e.length), r = 0; r < e.length; ++r) n[r] = a.util.fingerPrint64(e[r]).modulo(t).getLowBitsUnsigned();
        return n
    }
    var Qe = l((function(e, a) {
            return e - a
        })),
        Xe = N((function(e, a, t, n) {
            return {
                real: e - t,
                imag: a - n
            }
        })),
        ea = y(a.Sub, Qe, Xe),
        aa = {
            kernelName: a.Sub,
            backendName: "cpu",
            kernelFunc: ea
        };

    function ta(e, t) {
        for (var n = new Array(e.rank), r = 0; r < n.length; r++) n[r] = e.shape[r] * t[r];
        var i = a.buffer(n, e.dtype);
        for (r = 0; r < i.values.length; ++r) {
            for (var s = i.indexToLoc(r), o = new Array(e.rank), u = 0; u < o.length; u++) o[u] = s[u] % e.shape[u];
            var d = e.locToIndex(o);
            i.values[r] = e.values[d]
        }
        return i
    }

    function na(e, t, n, r, i) {
        for (var s = t[t.length - 1], o = [e.length / s, s], u = o[0], d = o[1], p = a.util.getTypedArrayFromDType(n, u * r), l = a.util.getTypedArrayFromDType("int32", u * r), c = 0; c < u; c++) {
            for (var h = c * d, f = e.subarray(h, h + d), m = [], v = 0; v < f.length; v++) m.push({
                value: f[v],
                index: v
            });
            m.sort((function(e, a) {
                return a.value - e.value
            }));
            var k = c * r,
                g = p.subarray(k, k + r),
                b = l.subarray(k, k + r);
            for (v = 0; v < r; v++) g[v] = m[v].value, b[v] = m[v].index
        }
        var I = t.slice();
        return I[I.length - 1] = r, [a.buffer(I, n, p), a.buffer(I, "int32", l)]
    }

    function ra(e, t, n, r) {
        for (var i = a.util.parseAxisParam(t, n)[0], s = [1, n[0], 1], o = 0; o < i; o++) s[0] *= n[o];
        s[1] = n[i];
        for (o = i + 1; o < n.length; o++) s[2] *= n[o];
        var u = {},
            d = new Int32Array(n[i]),
            p = new a.TensorBuffer(s, r, e),
            l = [],
            c = 1 === s[0] && 1 === s[2];
        for (o = 0; o < n[i]; o++) {
            var h = void 0;
            if (c) h = e[o].toString();
            else {
                for (var f = [], m = 0; m < s[0]; m++)
                    for (var v = 0; v < s[2]; v++) f.push(p.get(m, o, v));
                h = f.join(",")
            }
            if (void 0 !== u[h]) d[o] = u[h];
            else {
                var k = Object.keys(u).length;
                u[h] = k, d[o] = k, l.push(o)
            }
        }
        var g = s.slice();
        g[1] = Object.keys(u).length;
        var b = new a.TensorBuffer(g, r);
        l.forEach((function(e, a) {
            for (var t = 0; t < s[0]; t++)
                for (var n = 0; n < s[2]; n++) b.set(p.get(t, e, n), t, a, n)
        }));
        var I = n.slice();
        return I[i] = g[1], {
            outputValues: b.values,
            outputShape: I,
            indices: d
        }
    }
    var ia = {
        __proto__: null,
        simpleAbsImpl: d,
        addImpl: T,
        bincountImpl: M,
        bincountReduceImpl: A,
        ceilImpl: z,
        concatImpl: C,
        equalImpl: H,
        expImpl: B,
        expm1Impl: L,
        floorImpl: U,
        gatherNdImpl: K,
        gatherV2Impl: Y,
        greaterImpl: $,
        greaterEqualImpl: X,
        lessImpl: te,
        lessEqualImpl: ie,
        linSpaceImpl: ue,
        logImpl: de,
        maxImpl: ce,
        maximumImpl: he,
        minimumImpl: ve,
        multiplyImpl: be,
        negImpl: Te,
        notEqualImpl: Se,
        prodImpl: _e,
        rangeImpl: Ee,
        rsqrtImpl: We,
        sliceImpl: Pe,
        sparseFillEmptyRowsImpl: Ge,
        sparseReshapeImpl: Oe,
        sparseSegmentReductionImpl: Le,
        squaredDifferenceImpl: Ve,
        stridedSliceImpl: Ze,
        stringNGramsImpl: Ke,
        stringSplitImpl: $e,
        stringToHashBucketFastImpl: Je,
        subImpl: Qe,
        tileImpl: ta,
        topKImpl: na,
        transposeImpl: Ae,
        uniqueImpl: ra
    };
    a.registerBackend("cpu", (function() {
        return new u
    }), 1);
    var sa = D(a.Elu, (function(e) {
            return e >= 0 ? e : Math.exp(e) - 1
        })),
        oa = {
            kernelName: a.Elu,
            backendName: "cpu",
            kernelFunc: sa
        };

    function ua(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.x,
            o = r.alpha;
        s([i], "leakyRelu");
        for (var u = a.util.sizeFromShape(i.shape), d = n.data.get(i.dataId).values, p = a.util.getTypedArrayFromDType("float32", u), l = 0; l < d.length; l++) p[l] = d[l] < 0 ? o * d[l] : d[l];
        return n.makeTensorInfo(i.shape, "float32", p)
    }
    var da = {
            kernelName: a.LeakyRelu,
            backendName: "cpu",
            kernelFunc: ua
        },
        pa = l((function(e, a) {
            return e < 0 ? a * e : e
        }));

    function la(e) {
        var a = e.inputs,
            t = e.backend,
            n = a.x,
            r = a.alpha;
        s([n, r], "prelu");
        var i = t.data.get(n.dataId).values,
            o = t.data.get(r.dataId).values,
            u = pa(n.shape, r.shape, i, o, n.dtype),
            d = u[0],
            p = u[1];
        return t.makeTensorInfo(p, n.dtype, d)
    }
    var ca = {
            kernelName: a.Prelu,
            backendName: "cpu",
            kernelFunc: la
        },
        ha = D(a.Relu, (function(e) {
            return Math.max(0, e)
        })),
        fa = {
            kernelName: a.Relu,
            backendName: "cpu",
            kernelFunc: ha
        },
        ma = D(a.Relu6, (function(e) {
            return Math.min(Math.max(0, e), 6)
        })),
        va = {
            kernelName: a.Relu6,
            backendName: "cpu",
            kernelFunc: ma
        },
        ka = D(a.Sigmoid, (function(e) {
            return 1 / (1 + Math.exp(-e))
        })),
        ga = {
            kernelName: a.Sigmoid,
            backendName: "cpu",
            kernelFunc: ka
        };

    function ba(e, a, t, n, r) {
        if ("linear" === t) return m({
            inputs: {
                x: a
            },
            backend: e
        });
        if ("relu" === t) return ha({
            inputs: {
                x: a
            },
            backend: e
        });
        if ("elu" === t) return sa({
            inputs: {
                x: a
            },
            backend: e
        });
        if ("relu6" === t) return ma({
            inputs: {
                x: a
            },
            backend: e
        });
        if ("prelu" === t) return la({
            inputs: {
                x: a,
                alpha: n
            },
            backend: e
        });
        if ("leakyrelu" === t) return ua({
            inputs: {
                x: a
            },
            backend: e,
            attrs: {
                alpha: r
            }
        });
        if ("sigmoid" === t) return ka({
            inputs: {
                x: a
            },
            backend: e
        });
        throw new Error("Activation " + t + " has not been implemented for the CPU backend.")
    }

    function Ia(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.x,
            s = r.shape,
            o = a.util.sizeFromShape(i.shape),
            u = a.util.inferFromImplicitShape(s, o),
            d = a.util.sizeFromShape(u);
        a.util.assert(o === d, (function() {
            return "The new shape (" + u + ") has " + d + " elements and the old shape (" + i.shape + ") has " + o + " elements. The new shape and old shape must have the same number of elements."
        })), n.incRef(i.dataId);
        var p = n.data.get(i.dataId);
        if (null != p.complexTensorInfos) {
            var l = p.complexTensorInfos.real,
                c = p.complexTensorInfos.imag;
            l.shape = u, c.shape = u
        }
        return {
            dataId: i.dataId,
            shape: u,
            dtype: i.dtype
        }
    }
    var ya = {
        kernelName: a.Reshape,
        backendName: "cpu",
        kernelFunc: Ia
    };

    function Na(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.a,
            o = t.b,
            u = r.transposeA,
            d = r.transposeB;
        s([i, o], "matMul");
        var p = i.shape.length,
            l = o.shape.length,
            c = u ? i.shape[p - 2] : i.shape[p - 1],
            h = d ? o.shape[l - 1] : o.shape[l - 2],
            f = u ? i.shape[p - 1] : i.shape[p - 2],
            m = d ? o.shape[l - 2] : o.shape[l - 1],
            v = i.shape.slice(0, -2),
            k = o.shape.slice(0, -2),
            g = a.util.sizeFromShape(v),
            b = a.util.sizeFromShape(k),
            I = g === b || 1 === g || 1 === b;
        a.util.assert(p >= 2 && l >= 2 && I, (function() {
            return "Error in matMul: the input batch dimensions must either be the same or at least one input batch dimension must be 1. Got input batch dimensions of (" + v + ") and (" + k + ")."
        }));
        var y = (g > b ? i.shape.slice(0, -2) : o.shape.slice(0, -2)).concat([f, m]);
        a.util.assert(c === h, (function() {
            return "Error in matMul: inner shapes (" + c + ") and (" + h + ") of Tensors with shapes " + i.shape + " and " + o.shape + " and transposeA=" + u + " and transposeB=" + d + " must match."
        }));
        for (var N = d ? [b, m, h] : [b, h, m], T = Ia({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    shape: u ? [g, c, f] : [g, f, c]
                }
            }), x = Ia({
                inputs: {
                    x: o
                },
                backend: n,
                attrs: {
                    shape: N
                }
            }), S = u ? T.shape[1] : T.shape[2], F = u ? T.shape[2] : T.shape[1], M = d ? x.shape[1] : x.shape[2], A = Math.max(g, b), w = n.data.get(T.dataId).values, D = n.data.get(x.dataId).values, _ = a.util.computeStrides(T.shape), z = a.util.computeStrides(x.shape), E = u ? [_[0], 1, _[1]] : [_[0], _[1], 1], W = E[0], C = E[1], H = E[2], P = d ? [1, z[1], z[0]] : [z[1], 1, z[0]], R = P[0], B = P[1], G = P[2], O = F * M, L = a.buffer([A, F, M], T.dtype), V = L.values, q = n.blockSize, U = 0; U < A; U++)
            for (var Z = 0; Z < F; Z += q)
                for (var j = 0; j < M; j += q)
                    for (var K = 0; K < S; K += q)
                        for (var Y = Math.min(Z + q, F), $ = Math.min(j + q, M), J = Math.min(K + q, S), Q = Z; Q < Y; Q++)
                            for (var X = j; X < $; X++) {
                                for (var ee = 0, ae = K; ae < J; ae++) {
                                    var te = Math.min(U, g - 1) * W,
                                        ne = Math.min(U, b - 1) * G;
                                    ee += w[te + Q * C + ae * H] * D[ae * R + X * B + ne]
                                }
                                V[U * O + (Q * M + X)] += ee
                            }
        return n.disposeIntermediateTensorInfo(T), n.disposeIntermediateTensorInfo(x), n.makeTensorInfo(y, L.dtype, L.values)
    }
    var Ta = {
        kernelName: a.BatchMatMul,
        backendName: "cpu",
        kernelFunc: Na
    };
    var xa = {
            kernelName: a._FusedMatMul,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a, t, n, r = e.inputs,
                    i = e.backend,
                    s = e.attrs,
                    o = r.a,
                    u = r.b,
                    d = r.bias,
                    p = r.preluActivationWeights,
                    l = s.transposeA,
                    c = s.transposeB,
                    h = s.activation,
                    f = s.leakyreluAlpha,
                    m = [];
                a = Na({
                    inputs: {
                        a: o,
                        b: u
                    },
                    attrs: {
                        transposeA: l,
                        transposeB: c
                    },
                    backend: i
                }), d && (t = S({
                    inputs: {
                        a: a,
                        b: d
                    },
                    backend: i
                }), m.push(a), a = t), h && (n = ba(i, a, h, p, f), m.push(a), a = n);
                for (var v = 0, k = m; v < k.length; v++) {
                    var g = k[v];
                    i.disposeIntermediateTensorInfo(g)
                }
                return a
            }
        },
        Sa = D(a.Acos, (function(e) {
            return Math.acos(e)
        })),
        Fa = {
            kernelName: a.Acos,
            backendName: "cpu",
            kernelFunc: Sa
        },
        Ma = D(a.Acosh, (function(e) {
            return Math.acosh(e)
        })),
        Aa = {
            kernelName: a.Acosh,
            backendName: "cpu",
            kernelFunc: Ma
        };
    var wa = {
        kernelName: a.AddN,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = t;
            s(t, "addN");
            for (var i = r.map((function(e) {
                    return n.data.get(e.dataId).values
                })), o = a.buffer(r[0].shape, r[0].dtype), u = o.values, d = 0; d < r.length; d++)
                for (var p = i[d], l = 0; l < u.length; l++) u[l] += p[l];
            return n.makeTensorInfo(o.shape, o.dtype, o.values)
        }
    };
    var Da = {
        kernelName: a.All,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.axis,
                u = r.keepDims;
            s(i, "all");
            var d = a.util.parseAxisParam(o, i.shape),
                p = d,
                l = a.backend_util.getAxesPermutation(p, i.shape.length),
                c = i;
            null != l && (c = we({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    perm: l
                }
            }), p = a.backend_util.getInnerMostAxes(p.length, i.shape.length)), a.backend_util.assertAxesAreInnerMostDims("all", p, c.shape.length);
            for (var h = a.backend_util.computeOutAndReduceShapes(c.shape, p), f = h[0], m = h[1], v = a.util.sizeFromShape(m), k = a.util.makeZerosTypedArray(a.util.sizeFromShape(f), c.dtype), g = n.data.get(c.dataId).values, b = 0; b < k.length; ++b) {
                for (var I = b * v, y = g[I], N = 0; N < v; ++N) {
                    var T = g[I + N];
                    y = y && T
                }
                k[b] = y
            }
            null != l && n.disposeIntermediateTensorInfo(c);
            var x = n.makeTensorInfo(f, c.dtype, k);
            if (u) {
                var S = Ia({
                    inputs: {
                        x: x
                    },
                    backend: n,
                    attrs: {
                        shape: a.backend_util.expandShapeToKeepDim(f, d)
                    }
                });
                return n.disposeIntermediateTensorInfo(x), S
            }
            return x
        }
    };
    var _a = {
        kernelName: a.Any,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.axis,
                u = r.keepDims;
            s(i, "any");
            var d = a.util.parseAxisParam(o, i.shape),
                p = d,
                l = a.backend_util.getAxesPermutation(p, i.shape.length),
                c = i;
            null != l && (c = we({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    perm: l
                }
            }), p = a.backend_util.getInnerMostAxes(p.length, i.shape.length)), a.backend_util.assertAxesAreInnerMostDims("any", p, c.shape.length);
            for (var h = a.backend_util.computeOutAndReduceShapes(c.shape, p), f = h[0], m = h[1], v = a.util.sizeFromShape(m), k = a.util.makeZerosTypedArray(a.util.sizeFromShape(f), c.dtype), g = n.data.get(c.dataId).values, b = 0; b < k.length; ++b) {
                for (var I = b * v, y = g[I], N = 0; N < v; ++N) {
                    var T = g[I + N];
                    y = y || T
                }
                k[b] = y
            }
            null != l && n.disposeIntermediateTensorInfo(c);
            var x = n.makeTensorInfo(f, c.dtype, k);
            if (u) {
                var S = Ia({
                    inputs: {
                        x: x
                    },
                    backend: n,
                    attrs: {
                        shape: a.backend_util.expandShapeToKeepDim(f, d)
                    }
                });
                return n.disposeIntermediateTensorInfo(x), S
            }
            return x
        }
    };
    var za = {
        kernelName: a.ArgMax,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.axis;
            s(i, "argMax");
            var u = a.util.parseAxisParam(o, i.shape),
                d = a.backend_util.getAxesPermutation(u, i.shape.length),
                p = i,
                l = [];
            null != d && (p = we({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    perm: d
                }
            }), l.push(p), u = a.backend_util.getInnerMostAxes(u.length, p.shape.length)), u = [u[0]], a.backend_util.assertAxesAreInnerMostDims("argMax", u, p.shape.length);
            for (var c = a.backend_util.computeOutAndReduceShapes(p.shape, u), h = c[0], f = c[1], m = a.util.sizeFromShape(h), v = a.util.makeZerosTypedArray(m, "int32"), k = a.util.sizeFromShape(f), g = n.data.get(p.dataId).values, b = 0; b < v.length; ++b) {
                for (var I = b * k, y = g[I], N = 0, T = 0; T < k; ++T) {
                    var x = g[I + T];
                    x > y && (y = x, N = T)
                }
                v[b] = N
            }
            return l.forEach((function(e) {
                return n.disposeIntermediateTensorInfo(e)
            })), n.makeTensorInfo(h, "int32", v)
        }
    };
    var Ea = {
            kernelName: a.ArgMin,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t.x,
                    o = r.axis;
                s(i, "argMin");
                var u = a.util.parseAxisParam(o, i.shape),
                    d = a.backend_util.getAxesPermutation(u, i.shape.length),
                    p = i,
                    l = [];
                null != d && (p = we({
                    inputs: {
                        x: i
                    },
                    backend: n,
                    attrs: {
                        perm: d
                    }
                }), l.push(p), u = a.backend_util.getInnerMostAxes(u.length, p.shape.length)), u = [u[0]], a.backend_util.assertAxesAreInnerMostDims("argMin", u, p.shape.length);
                for (var c = a.backend_util.computeOutAndReduceShapes(p.shape, u), h = c[0], f = c[1], m = a.util.sizeFromShape(h), v = a.util.makeZerosTypedArray(m, "int32"), k = a.util.sizeFromShape(f), g = n.data.get(p.dataId).values, b = 0; b < v.length; ++b) {
                    for (var I = b * k, y = g[I], N = 0, T = 0; T < k; ++T) {
                        var x = g[I + T];
                        x < y && (y = x, N = T)
                    }
                    v[b] = N
                }
                return l.forEach((function(e) {
                    return n.disposeIntermediateTensorInfo(e)
                })), n.makeTensorInfo(h, "int32", v)
            }
        },
        Wa = D(a.Asin, (function(e) {
            return Math.asin(e)
        })),
        Ca = {
            kernelName: a.Asin,
            backendName: "cpu",
            kernelFunc: Wa
        },
        Ha = D(a.Asinh, (function(e) {
            return Math.asinh(e)
        })),
        Pa = {
            kernelName: a.Asinh,
            backendName: "cpu",
            kernelFunc: Ha
        },
        Ra = D(a.Atan, (function(e) {
            return Math.atan(e)
        })),
        Ba = {
            kernelName: a.Atan,
            backendName: "cpu",
            kernelFunc: Ra
        },
        Ga = l((function(e, a) {
            return Math.atan2(e, a)
        })),
        Oa = y(a.Atan2, Ga),
        La = {
            kernelName: a.Atan2,
            backendName: "cpu",
            kernelFunc: Oa
        },
        Va = D(a.Atanh, (function(e) {
            return Math.atanh(e)
        })),
        qa = {
            kernelName: a.Atanh,
            backendName: "cpu",
            kernelFunc: Va
        };

    function Ua(e, t, n, r, i, s) {
        for (var o = i.strideHeight, u = i.strideWidth, d = i.dilationHeight, p = i.dilationWidth, l = i.effectiveFilterHeight, c = i.effectiveFilterWidth, h = i.padInfo.top, f = i.padInfo.left, m = "max" === s ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, v = a.buffer(i.outShape, n), k = v.values, g = i.outShape[1] * i.outShape[2] * i.outShape[3], b = i.outShape[2] * i.outShape[3], I = i.outShape[3], y = 0; y < i.batchSize; ++y)
            for (var N = y * g, T = y * r[0], x = 0; x < i.inChannels; ++x)
                for (var S = 0; S < i.outHeight; ++S)
                    for (var F = S * o - h, M = Math.max(0, F), A = Math.min(i.inHeight, l + F), w = N + S * b, D = 0; D < i.outWidth; ++D) {
                        for (var _ = D * u - f, z = Math.max(0, _), E = Math.min(i.inWidth, c + _), W = m, C = 0, H = 0, P = M; P < A; P += d) {
                            for (var R = T + P * r[1], B = z; B < E; B += p) {
                                var G = e[R + B * r[2] + x];
                                "max" === s && G > W ? W = G : "avg" === s && (C += G, H++)
                            }
                            if (isNaN(W)) break
                        }
                        k[w + D * I + x] = "avg" === s ? C / H : W
                    }
        return v
    }

    function Za(e, t, n, r, i, s) {
        void 0 === i && (i = !1), void 0 === s && (s = !1);
        for (var o = a.buffer(r.outShape, "int32"), u = r.strideHeight, d = r.strideWidth, p = r.dilationHeight, l = r.dilationWidth, c = r.effectiveFilterHeight, h = r.effectiveFilterWidth, f = r.padInfo.top, m = r.padInfo.left, v = a.buffer(t, n, e), k = 0; k < r.batchSize; ++k)
            for (var g = 0; g < r.inChannels; ++g)
                for (var b = 0; b < r.outHeight; ++b) {
                    for (var I = b * u - f, y = I; y < 0;) y += p;
                    for (var N = Math.min(r.inHeight, c + I), T = 0; T < r.outWidth; ++T) {
                        for (var x = T * d - m, S = x; S < 0;) S += l;
                        for (var F = Math.min(r.inWidth, h + x), M = Number.NEGATIVE_INFINITY, A = -1, w = y; w < N; w += p)
                            for (var D = w - I, _ = S; _ < F; _ += l) {
                                var z = _ - x,
                                    E = v.get(k, w, _, g);
                                E > M && (M = E, A = i ? s ? ((k * r.inHeight + w) * r.inWidth + _) * r.inChannels + g : (w * r.inWidth + _) * r.inChannels + g : D * h + z)
                            }
                        o.set(A, k, b, T, g)
                    }
                }
        return o
    }

    function ja(e, t, n, r, i, s) {
        for (var o = i.strideDepth, u = i.strideHeight, d = i.strideWidth, p = i.dilationDepth, l = i.dilationHeight, c = i.dilationWidth, h = i.effectiveFilterDepth, f = i.effectiveFilterHeight, m = i.effectiveFilterWidth, v = i.padInfo.front, k = i.padInfo.top, g = i.padInfo.left, b = "max" === s ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, I = a.buffer(i.outShape, n), y = I.values, N = i.outShape[1] * i.outShape[2] * i.outShape[3] * i.outShape[4], T = i.outShape[2] * i.outShape[3] * i.outShape[4], x = i.outShape[3] * i.outShape[4], S = i.outShape[4], F = 0; F < i.batchSize; ++F)
            for (var M = F * N, A = F * r[0], w = 0; w < i.inChannels; ++w)
                for (var D = 0; D < i.outDepth; ++D) {
                    for (var _ = D * o - v, z = _; z < 0;) z += p;
                    for (var E = Math.min(i.inDepth, h + _), W = M + D * T, C = 0; C < i.outHeight; ++C) {
                        for (var H = C * u - k, P = H; P < 0;) P += l;
                        for (var R = Math.min(i.inHeight, f + H), B = W + C * x, G = 0; G < i.outWidth; ++G) {
                            for (var O = G * d - g, L = O; L < 0;) L += c;
                            for (var V = Math.min(i.inWidth, m + O), q = B + G * S, U = b, Z = 0, j = 0, K = z; K < E; K += p) {
                                for (var Y = A + K * r[1], $ = P; $ < R; $ += l) {
                                    for (var J = Y + $ * r[2], Q = L; Q < V; Q += c) {
                                        var X = e[J + Q * r[3] + w];
                                        if ("max" === s && X > U ? U = X : "avg" === s && (Z += X, j++), isNaN(U)) break
                                    }
                                    if (isNaN(U)) break
                                }
                                if (isNaN(U)) break
                            }
                            y[q + w] = "avg" === s ? Z / j : U
                        }
                    }
                }
        return I
    }
    var Ka = {
        kernelName: a.AvgPool,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x;
            s(i, "avgPool");
            var o = r.filterSize,
                u = r.strides,
                d = r.pad,
                p = r.dimRoundingMode;
            a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(u, 1), (function() {
                return "Error in avgPool: Either strides or dilations must be 1. Got strides " + u + " and dilations '1'"
            }));
            var l, c = a.backend_util.computePool2DInfo(i.shape, o, u, 1, d, p);
            if (1 === c.filterWidth && 1 === c.filterHeight && a.util.arraysEqual(c.inShape, c.outShape)) l = m({
                inputs: {
                    x: i
                },
                backend: n
            });
            else {
                var h = n.data.get(i.dataId).values,
                    f = a.util.computeStrides(i.shape),
                    v = Ua(h, i.shape, i.dtype, f, c, "avg");
                l = n.makeTensorInfo(c.outShape, i.dtype, v.values)
            }
            return l
        }
    };
    var Ya = {
        kernelName: a.AvgPool3D,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.filterSize,
                u = r.strides,
                d = r.pad,
                p = r.dimRoundingMode,
                l = r.dataFormat;
            s(i, "avgPool3d");
            var c = a.backend_util.computePool3DInfo(i.shape, o, u, 1, d, p, l),
                h = ja(n.data.get(i.dataId).values, i.shape, i.dtype, a.util.computeStrides(i.shape), c, "avg");
            return n.makeTensorInfo(h.shape, "float32", h.values)
        }
    };
    var $a = {
        kernelName: a.AvgPool3DGrad,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.dy,
                o = t.input,
                u = r.filterSize,
                d = r.strides,
                p = r.pad,
                l = r.dimRoundingMode;
            s([i, o], "avgPool3DGrad");
            for (var c = a.backend_util.computePool3DInfo(o.shape, u, d, 1, p, l), h = c.strideDepth, f = c.strideHeight, m = c.strideWidth, v = c.filterDepth, k = c.filterHeight, g = c.filterWidth, b = c.dilationDepth, I = c.dilationHeight, y = c.dilationWidth, N = c.effectiveFilterDepth, T = c.effectiveFilterHeight, x = c.effectiveFilterWidth, S = N - 1 - c.padInfo.front, F = x - 1 - c.padInfo.left, M = T - 1 - c.padInfo.top, A = a.buffer(o.shape, "float32"), w = 1 / (v * k * g), D = n.bufferSync(i), _ = 0; _ < c.batchSize; ++_)
                for (var z = 0; z < c.inChannels; ++z)
                    for (var E = 0; E < c.inDepth; ++E)
                        for (var W = 0; W < c.inHeight; ++W)
                            for (var C = 0; C < c.inWidth; ++C) {
                                for (var H = E - S, P = W - M, R = C - F, B = 0, G = 0; G < N; G += b) {
                                    var O = (H + G) / h;
                                    if (!(O < 0 || O >= c.outDepth || Math.floor(O) !== O))
                                        for (var L = 0; L < T; L += I) {
                                            var V = (P + L) / f;
                                            if (!(V < 0 || V >= c.outHeight || Math.floor(V) !== V))
                                                for (var q = 0; q < x; q += y) {
                                                    var U = (R + q) / m;
                                                    if (!(U < 0 || U >= c.outWidth || Math.floor(U) !== U)) B += D.get(_, O, V, U, z)
                                                }
                                        }
                                }
                                A.set(B * w, _, E, W, C, z)
                            }
            return n.makeTensorInfo(A.shape, A.dtype, A.values)
        }
    };
    var Ja = {
        kernelName: a.AvgPoolGrad,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.dy,
                o = t.input,
                u = o;
            s([i, o], "avgPoolGrad");
            for (var d = r.filterSize, p = r.strides, l = r.pad, c = a.backend_util.computePool2DInfo(u.shape, d, p, 1, l), h = c.strideHeight, f = c.strideWidth, m = c.filterHeight, v = c.filterWidth, k = c.dilationHeight, g = c.dilationWidth, b = c.effectiveFilterHeight, I = c.effectiveFilterWidth, y = I - 1 - c.padInfo.left, N = b - 1 - c.padInfo.top, T = a.buffer(u.shape, "float32"), x = 1 / (m * v), S = n.data.get(i.dataId).values, F = a.buffer(i.shape, "float32", S), M = 0; M < c.batchSize; ++M)
                for (var A = 0; A < c.inChannels; ++A)
                    for (var w = 0; w < c.inHeight; ++w)
                        for (var D = 0; D < c.inWidth; ++D) {
                            for (var _ = w - N, z = D - y, E = 0, W = 0; W < b; W += k) {
                                var C = (_ + W) / h;
                                if (!(C < 0 || C >= c.outHeight || Math.floor(C) !== C))
                                    for (var H = 0; H < I; H += g) {
                                        var P = (z + H) / f;
                                        if (!(P < 0 || P >= c.outWidth || Math.floor(P) !== P)) E += F.get(M, C, P, A)
                                    }
                            }
                            T.set(E * x, M, w, D, A)
                        }
            return n.makeTensorInfo(T.shape, T.dtype, T.values)
        }
    };
    var Qa = {
        kernelName: a.FusedBatchNorm,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = t.scale,
                u = t.offset,
                d = t.mean,
                p = t.variance;
            a.util.assert(d.shape.length === p.shape.length, (function() {
                return "Batch normalization gradient requires mean and variance to have equal ranks."
            })), a.util.assert(null == u || d.shape.length === u.shape.length, (function() {
                return "Batch normalization gradient requires mean and offset to have equal ranks."
            })), a.util.assert(null == o || d.shape.length === o.shape.length, (function() {
                return "Batch normalization gradient requires mean and scale to have equal ranks."
            })), s([i, d, p, o, u], "batchNorm");
            var l = r.varianceEpsilon;
            null == l && (l = .001);
            for (var c = n.data.get(i.dataId).values, h = n.data.get(d.dataId).values, f = n.data.get(p.dataId).values, m = o ? n.data.get(o.dataId).values : new Float32Array([1]), v = u ? n.data.get(u.dataId).values : new Float32Array([0]), k = new Float32Array(c.length), g = v.length, b = m.length, I = f.length, y = h.length, N = 0, T = 0, x = 0, S = 0, F = 0; F < c.length; ++F) k[F] = v[N++] + (c[F] - h[T++]) * m[x++] / Math.sqrt(f[S++] + l), N >= g && (N = 0), T >= y && (T = 0), x >= b && (x = 0), S >= I && (S = 0);
            return n.makeTensorInfo(i.shape, i.dtype, k)
        }
    };
    var Xa = {
        kernelName: a.BatchToSpaceND,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.blockShape,
                u = r.crops;
            s([i], "batchToSpaceND");
            var d = o.reduce((function(e, a) {
                    return e * a
                })),
                p = a.backend_util.getReshaped(i.shape, o, d),
                l = a.backend_util.getPermuted(p.length, o.length),
                c = a.backend_util.getReshapedPermuted(i.shape, o, d),
                h = a.backend_util.getSliceBeginCoords(u, o.length),
                f = a.backend_util.getSliceSize(c, u, o.length),
                m = Ia({
                    inputs: {
                        x: i
                    },
                    backend: n,
                    attrs: {
                        shape: p
                    }
                }),
                v = we({
                    inputs: {
                        x: m
                    },
                    backend: n,
                    attrs: {
                        perm: l
                    }
                }),
                k = Ia({
                    inputs: {
                        x: v
                    },
                    backend: n,
                    attrs: {
                        shape: c
                    }
                }),
                g = Re({
                    inputs: {
                        x: k
                    },
                    backend: n,
                    attrs: {
                        begin: h,
                        size: f
                    }
                });
            return n.disposeIntermediateTensorInfo(m), n.disposeIntermediateTensorInfo(v), n.disposeIntermediateTensorInfo(k), g
        }
    };
    var et = {
            kernelName: a.Bincount,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.inputs,
                    t = e.backend,
                    n = e.attrs,
                    r = a.x,
                    i = a.weights,
                    s = n.size,
                    o = M(t.data.get(r.dataId).values, t.data.get(i.dataId).values, i.dtype, i.shape, s);
                return t.makeTensorInfo([s], i.dtype, o)
            }
        },
        at = D(a.ClipByValue, (function(e, a) {
            var t = a;
            return e > t.clipValueMax ? t.clipValueMax : e < t.clipValueMin ? t.clipValueMin : e
        })),
        tt = {
            kernelName: a.ClipByValue,
            backendName: "cpu",
            kernelFunc: at
        },
        nt = {
            kernelName: a.ComplexAbs,
            backendName: "cpu",
            kernelFunc: function(e) {
                for (var t = e.inputs.x, n = e.backend, r = new Float32Array(a.util.sizeFromShape(t.shape)), i = n.data.get(t.dataId), s = i.complexTensorInfos.real, o = i.complexTensorInfos.imag, u = n.data.get(s.dataId).values, d = n.data.get(o.dataId).values, p = 0; p < u.length; p++) {
                    var l = u[p],
                        c = d[p];
                    r[p] = Math.hypot(l, c)
                }
                return n.makeOutput(r, t.shape, "float32")
            }
        };

    function rt(e) {
        var a = e.inputs,
            t = e.backend,
            n = a.input,
            r = t.data.get(n.dataId).complexTensorInfos.imag,
            i = t.data.get(r.dataId).values;
        return t.makeTensorInfo(r.shape, r.dtype, i)
    }
    var it = {
        kernelName: a.Imag,
        backendName: "cpu",
        kernelFunc: rt
    };

    function st(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs.axis,
            i = a.util.parseAxisParam(r, t[0].shape)[0],
            s = a.backend_util.computeOutShape(t.map((function(e) {
                return e.shape
            })), i);
        if (0 === a.util.sizeFromShape(s)) return n.makeTensorInfo(s, t[0].dtype, []);
        var o = t.filter((function(e) {
            return a.util.sizeFromShape(e.shape) > 0
        }));
        if (1 === o.length) return m({
            inputs: {
                x: o[0]
            },
            backend: n
        });
        var u = o.map((function(e) {
            return e.shape
        }));
        if (a.backend_util.assertParamsConsistent(u, i), "complex64" === o[0].dtype) {
            var d = o.map((function(e) {
                    return k({
                        inputs: {
                            input: e
                        },
                        backend: n
                    })
                })),
                p = o.map((function(e) {
                    return rt({
                        inputs: {
                            input: e
                        },
                        backend: n
                    })
                })),
                l = st({
                    inputs: d,
                    backend: n,
                    attrs: {
                        axis: i
                    }
                }),
                h = st({
                    inputs: p,
                    backend: n,
                    attrs: {
                        axis: i
                    }
                }),
                f = c({
                    inputs: {
                        real: l,
                        imag: h
                    },
                    backend: n
                });
            return d.forEach((function(e) {
                return n.disposeIntermediateTensorInfo(e)
            })), p.forEach((function(e) {
                return n.disposeIntermediateTensorInfo(e)
            })), n.disposeIntermediateTensorInfo(l), n.disposeIntermediateTensorInfo(h), f
        }
        var v = o.map((function(e) {
                var t = a.util.sizeFromShape(e.shape.slice(i));
                return Ia({
                    inputs: {
                        x: e
                    },
                    backend: n,
                    attrs: {
                        shape: [-1, t]
                    }
                })
            })),
            g = v.map((function(e) {
                return {
                    vals: n.data.get(e.dataId).values,
                    shape: e.shape
                }
            }));
        s = a.backend_util.computeOutShape(v.map((function(e) {
            return e.shape
        })), 1);
        var b = 1 === v[0].shape[0],
            I = C(g, s, t[0].dtype, b),
            y = a.backend_util.computeOutShape(o.map((function(e) {
                return e.shape
            })), i),
            N = n.makeTensorInfo(y, t[0].dtype, I);
        return v.forEach((function(e) {
            return n.disposeIntermediateTensorInfo(e)
        })), N
    }
    var ot = {
        kernelName: a.Concat,
        backendName: "cpu",
        kernelFunc: st
    };

    function ut(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.x,
            o = t.filter,
            u = r.strides,
            d = r.pad,
            p = r.dataFormat,
            l = r.dilations,
            c = r.dimRoundingMode;
        s([i, o], "conv2d");
        for (var h = a.backend_util.convertConv2DDataFormat(p), f = a.backend_util.computeConv2DInfo(i.shape, o.shape, u, l, d, c, !1, h), m = f.filterHeight, v = f.filterWidth, k = f.dilationHeight, g = f.dilationWidth, b = f.padInfo.left, I = f.padInfo.top, y = "channelsLast" === f.dataFormat, N = new a.TensorBuffer(f.outShape, i.dtype), T = a.util.computeStrides(i.shape), x = a.util.computeStrides(o.shape), S = T[0], F = y ? T[1] : T[2], M = y ? T[2] : 1, A = y ? 1 : T[1], w = N.strides[0], D = y ? N.strides[1] : N.strides[2], _ = y ? N.strides[2] : 1, z = y ? 1 : N.strides[1], E = n.data.get(i.dataId).values, W = n.data.get(o.dataId).values, C = N.values, H = 0; H < f.batchSize; ++H)
            for (var P = H * S, R = H * w, B = 0; B < f.outHeight; ++B)
                for (var G = R + B * D, O = B * f.strideHeight - I, L = 0; L < m; ++L) {
                    var V = O + L * k;
                    if (!(V < 0 || V >= f.inHeight))
                        for (var q = L * x[0], U = P + V * F, Z = 0; Z < f.outWidth; ++Z)
                            for (var j = G + Z * _, K = Z * f.strideWidth - b, Y = 0; Y < v; ++Y) {
                                var $ = K + Y * g;
                                if (!($ < 0 || $ >= f.inWidth))
                                    for (var J = U + $ * M, Q = q + Y * x[1], X = 0; X < f.inChannels; ++X) {
                                        for (var ee = E[J + X * A], ae = 0; ae < f.outChannels; ++ae) C[j + ae * z] += ee * W[Q + ae];
                                        Q += f.outChannels
                                    }
                            }
                }
        return n.makeTensorInfo(N.shape, N.dtype, C)
    }
    var dt = {
        kernelName: a.Conv2D,
        backendName: "cpu",
        kernelFunc: ut
    };
    var pt = {
        kernelName: a.Conv2DBackpropFilter,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = t.dy,
                u = r.strides,
                d = r.pad,
                p = r.dataFormat,
                l = r.dimRoundingMode,
                c = r.filterShape;
            s([i, o], "conv2dBackpropFilter");
            for (var h = a.backend_util.convertConv2DDataFormat(p), f = a.backend_util.computeConv2DInfo(i.shape, c, u, 1, d, l, !1, h), m = f.strideHeight, v = f.strideWidth, k = f.filterHeight, g = f.filterWidth, b = "channelsLast" === f.dataFormat, I = new a.TensorBuffer(f.filterShape, "float32"), y = f.padInfo.left, N = f.padInfo.top, T = n.data.get(i.dataId).values, x = n.data.get(o.dataId).values, S = new a.TensorBuffer(i.shape, i.dtype, T), F = new a.TensorBuffer(o.shape, o.dtype, x), M = 0; M < k; ++M)
                for (var A = Math.max(0, Math.ceil((N - M) / m)), w = Math.min(f.outHeight, (f.inHeight + N - M) / m), D = 0; D < g; ++D)
                    for (var _ = Math.max(0, Math.ceil((y - D) / v)), z = Math.min(f.outWidth, (f.inWidth + y - D) / v), E = 0; E < f.inChannels; ++E)
                        for (var W = 0; W < f.outChannels; ++W) {
                            for (var C = 0, H = 0; H < f.batchSize; ++H)
                                for (var P = A; P < w; ++P)
                                    for (var R = M + P * m - N, B = _; B < z; ++B) {
                                        var G = D + B * v - y;
                                        C += b ? S.get(H, R, G, E) * F.get(H, P, B, W) : S.get(H, E, R, G) * F.get(H, W, P, B)
                                    }
                            I.set(C, M, D, E, W)
                        }
            return n.makeTensorInfo(I.shape, I.dtype, I.values)
        }
    };
    var lt = {
        kernelName: a.Conv2DBackpropInput,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.dy,
                o = t.filter,
                u = r.inputShape,
                d = r.strides,
                p = r.pad,
                l = r.dataFormat,
                c = r.dimRoundingMode;
            s([i, o], "conv2dBackpropInput");
            var h = a.util.computeStrides(o.shape),
                f = a.util.computeStrides(i.shape),
                m = a.backend_util.convertConv2DDataFormat(l),
                v = a.backend_util.computeConv2DInfo(u, o.shape, d, 1, p, c, !1, m),
                k = new a.TensorBuffer(v.inShape, "float32"),
                g = k.values,
                b = n.data.get(i.dataId).values,
                I = n.data.get(o.dataId).values,
                y = h[0],
                N = h[1],
                T = h[2],
                x = v.batchSize,
                S = v.filterHeight,
                F = v.filterWidth,
                M = v.inChannels,
                A = v.inHeight,
                w = v.inWidth,
                D = v.outChannels,
                _ = v.outHeight,
                z = v.outWidth,
                E = v.strideHeight,
                W = v.strideWidth;
            m = v.dataFormat;
            for (var C = S - 1 - v.padInfo.top, H = F - 1 - v.padInfo.left, P = "channelsLast" === m, R = k.strides[0], B = P ? k.strides[1] : k.strides[2], G = P ? k.strides[2] : 1, O = P ? 1 : k.strides[1], L = f[0], V = P ? f[1] : f[2], q = P ? f[2] : 1, U = P ? 1 : f[1], Z = 0; Z < x; ++Z)
                for (var j = 0; j < M; ++j)
                    for (var K = 0; K < A; ++K)
                        for (var Y = K - C, $ = Math.max(0, Math.ceil(Y / E)), J = Math.min(_, (S + Y) / E), Q = 0; Q < w; ++Q) {
                            for (var X = Q - H, ee = Math.max(0, Math.ceil(X / W)), ae = Math.min(z, (F + X) / W), te = 0, ne = $; ne < J; ++ne)
                                for (var re = ne * E - Y, ie = ee; ie < ae; ++ie)
                                    for (var se = L * Z + V * ne + q * ie, oe = y * (S - 1 - re) + N * (F - 1 - (ie * W - X)) + T * j, ue = 0; ue < D; ++ue) {
                                        te += b[se + U * ue] * I[oe + ue]
                                    }
                            g[R * Z + B * K + G * Q + O * j] = te
                        }
            return n.makeTensorInfo(k.shape, k.dtype, k.values)
        }
    };
    var ct = {
        kernelName: a.Conv3D,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = t.filter,
                u = r.strides,
                d = r.pad,
                p = r.dilations;
            s([i, o], "conv3d");
            for (var l = a.backend_util.computeConv3DInfo(i.shape, o.shape, u, p, d), c = l.filterDepth, h = l.filterHeight, f = l.filterWidth, m = l.dilationDepth, v = l.dilationHeight, k = l.dilationWidth, g = l.padInfo, b = g.front, I = g.left, y = g.top, N = new a.TensorBuffer(l.outShape, i.dtype), T = n.data.get(i.dataId).values, x = n.data.get(o.dataId).values, S = N.values, F = a.util.computeStrides(i.shape), M = a.util.computeStrides(o.shape), A = 0; A < l.batchSize; ++A)
                for (var w = A * F[0], D = A * N.strides[0], _ = 0; _ < l.outDepth; ++_)
                    for (var z = D + _ * N.strides[1], E = _ * l.strideDepth - b, W = 0; W < c; ++W) {
                        var C = E + W * m;
                        if (!(C < 0 || C >= l.inDepth))
                            for (var H = W * M[0], P = w + C * F[1], R = 0; R < l.outHeight; ++R)
                                for (var B = z + R * N.strides[2], G = R * l.strideHeight - y, O = 0; O < h; ++O) {
                                    var L = G + O * v;
                                    if (!(L < 0 || L >= l.inHeight))
                                        for (var V = H + O * M[1], q = P + L * F[2], U = 0; U < l.outWidth; ++U)
                                            for (var Z = B + U * l.outChannels, j = U * l.strideWidth - I, K = 0; K < f; ++K) {
                                                var Y = j + K * k;
                                                if (!(Y < 0 || Y >= l.inWidth))
                                                    for (var $ = V + K * M[2], J = q + Y * l.inChannels, Q = $, X = 0; X < l.inChannels; ++X) {
                                                        for (var ee = T[J + X], ae = 0; ae < l.outChannels; ++ae) S[Z + ae] += ee * x[Q + ae];
                                                        Q += l.outChannels
                                                    }
                                            }
                                }
                    }
            return n.makeTensorInfo(N.shape, N.dtype, N.values)
        }
    };
    var ht = {
        kernelName: a.Conv3DBackpropFilterV2,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = t.dy,
                u = r.strides,
                d = r.pad,
                p = r.filterShape;
            s([i, o], "conv3dBackpropFilterV2");
            for (var l = a.util.computeStrides(i.shape), c = a.util.computeStrides(o.shape), h = a.backend_util.computeConv3DInfo(i.shape, p, u, 1, d), f = h.strideDepth, m = h.strideHeight, v = h.strideWidth, k = h.filterDepth, g = h.filterHeight, b = h.filterWidth, I = new a.TensorBuffer(h.filterShape, "float32"), y = I.values, N = I.strides, T = N[0], x = N[1], S = N[2], F = N[3], M = n.data.get(o.dataId).values, A = c[0], w = c[1], D = c[2], _ = c[3], z = n.data.get(i.dataId).values, E = l[0], W = l[1], C = l[2], H = l[3], P = h.padInfo.front, R = h.padInfo.left, B = h.padInfo.top, G = 0; G < k; ++G)
                for (var O = Math.max(0, Math.ceil((P - G) / f)), L = Math.min(h.outDepth, (h.inDepth + P - G) / f), V = G * T, q = 0; q < g; ++q)
                    for (var U = Math.max(0, Math.ceil((B - q) / m)), Z = Math.min(h.outHeight, (h.inHeight + B - q) / m), j = q * x + V, K = 0; K < b; ++K)
                        for (var Y = Math.max(0, Math.ceil((R - K) / v)), $ = Math.min(h.outWidth, (h.inWidth + R - K) / v), J = K * S + j, Q = 0; Q < h.inChannels; ++Q)
                            for (var X = Q * F + J, ee = 0; ee < h.outChannels; ++ee) {
                                for (var ae = 0, te = 0; te < h.batchSize; ++te)
                                    for (var ne = te * E, re = te * A, ie = O; ie < L; ++ie)
                                        for (var se = (G + ie * f - P) * W + ne, oe = ie * w + re, ue = U; ue < Z; ++ue)
                                            for (var de = (q + ue * m - B) * C + se, pe = ue * D + oe, le = Y; le < $; ++le) {
                                                var ce = le * _ + pe;
                                                ae += z[(K + le * v - R) * H + de + Q] * M[ce + ee]
                                            }
                                y[X + ee] = ae
                            }
            return n.makeTensorInfo(I.shape, I.dtype, I.values)
        }
    };
    var ft = {
            kernelName: a.Conv3DBackpropInputV2,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t.dy,
                    o = t.filter,
                    u = r.pad,
                    d = r.strides,
                    p = r.inputShape;
                s([i], "conv3dBackpropInputV2");
                for (var l = a.util.computeStrides(i.shape), c = a.util.computeStrides(o.shape), h = a.backend_util.computeConv3DInfo(p, o.shape, d, 1, u), f = new a.TensorBuffer(h.inShape, "float32"), m = f.values, v = f.strides, k = v[0], g = v[1], b = v[2], I = v[3], y = n.data.get(i.dataId).values, N = l[0], T = l[1], x = l[2], S = l[3], F = n.data.get(o.dataId).values, M = c[0], A = c[1], w = c[2], D = c[3], _ = h.batchSize, z = h.filterDepth, E = h.filterHeight, W = h.filterWidth, C = h.inChannels, H = h.inDepth, P = h.inHeight, R = h.inWidth, B = h.outChannels, G = h.outDepth, O = h.outHeight, L = h.outWidth, V = h.strideDepth, q = h.strideHeight, U = h.strideWidth, Z = z - 1 - h.padInfo.front, j = E - 1 - h.padInfo.top, K = W - 1 - h.padInfo.left, Y = 0; Y < _; ++Y)
                    for (var $ = 0; $ < C; ++$)
                        for (var J = 0; J < H; ++J)
                            for (var Q = J - Z, X = Math.max(0, Math.ceil(Q / V)), ee = Math.min(G, (z + Q) / V), ae = 0; ae < P; ++ae)
                                for (var te = ae - j, ne = Math.max(0, Math.ceil(te / q)), re = Math.min(O, (E + te) / q), ie = 0; ie < R; ++ie) {
                                    for (var se = ie - K, oe = Math.max(0, Math.ceil(se / U)), ue = Math.min(L, (W + se) / U), de = 0, pe = X; pe < ee; ++pe)
                                        for (var le = pe * V - Q, ce = ne; ce < re; ++ce)
                                            for (var he = ce * q - te, fe = oe; fe < ue; ++fe)
                                                for (var me = N * Y + T * pe + x * ce + S * fe, ve = M * (z - 1 - le) + A * (E - 1 - he) + w * (W - 1 - (fe * U - se)) + D * $, ke = 0; ke < B; ++ke) {
                                                    de += y[me + ke] * F[ve + ke]
                                                }
                                    m[k * Y + g * J + b * ae + I * ie + $] = de
                                }
                return n.makeTensorInfo(f.shape, f.dtype, f.values)
            }
        },
        mt = D(a.Cos, (function(e) {
            return Math.cos(e)
        })),
        vt = {
            kernelName: a.Cos,
            backendName: "cpu",
            kernelFunc: mt
        },
        kt = D(a.Cosh, (function(e) {
            return Math.cosh(e)
        })),
        gt = {
            kernelName: a.Cosh,
            backendName: "cpu",
            kernelFunc: kt
        };
    var bt = {
        kernelName: a.CropAndResize,
        backendName: "cpu",
        kernelFunc: function(e) {
            for (var t = e.inputs, n = e.backend, r = e.attrs, i = t.image, s = t.boxes, o = t.boxInd, u = r.cropSize, d = r.method, p = r.extrapolationValue, l = i.shape, c = l[0], h = l[1], f = l[2], m = l[3], v = s.shape[0], k = u[0], g = u[1], b = a.buffer([v, k, g, m], "float32"), I = n.data.get(s.dataId).values, y = n.data.get(o.dataId).values, N = n.data.get(i.dataId).values, T = a.util.computeStrides(i.shape), x = a.util.computeStrides(b.shape), S = 0; S < v; S++) {
                var F = 4 * S,
                    M = I[F],
                    A = I[F + 1],
                    w = I[F + 2],
                    D = I[F + 3],
                    _ = y[S];
                if (!(_ >= c))
                    for (var z = k > 1 ? (w - M) * (h - 1) / (k - 1) : 0, E = g > 1 ? (D - A) * (f - 1) / (g - 1) : 0, W = 0; W < k; W++) {
                        var C = k > 1 ? M * (h - 1) + W * z : .5 * (M + w) * (h - 1);
                        if (C < 0 || C > h - 1)
                            for (var H = 0; H < g; H++)
                                for (var P = 0; P < m; P++) {
                                    var R = P + H * x[2] + W * x[1] + S * x[0];
                                    b.values[R] = p
                                } else if ("bilinear" === d) {
                                    var B = Math.floor(C),
                                        G = Math.ceil(C),
                                        O = C - B;
                                    for (H = 0; H < g; H++) {
                                        if (($ = g > 1 ? A * (f - 1) + H * E : .5 * (A + D) * (f - 1)) < 0 || $ > f - 1)
                                            for (P = 0; P < m; P++) {
                                                R = P + H * x[2] + W * x[1] + S * x[0];
                                                b.values[R] = p
                                            } else {
                                                var L = Math.floor($),
                                                    V = Math.ceil($),
                                                    q = $ - L;
                                                for (P = 0; P < m; P++) {
                                                    var U = N[R = P + L * T[2] + B * T[1] + _ * T[0]],
                                                        Z = N[R = P + V * T[2] + B * T[1] + _ * T[0]],
                                                        j = N[R = P + L * T[2] + G * T[1] + _ * T[0]],
                                                        K = U + (Z - U) * q,
                                                        Y = j + (N[R = P + V * T[2] + G * T[1] + _ * T[0]] - j) * q;
                                                    R = P + H * x[2] + W * x[1] + S * x[0], b.values[R] = K + (Y - K) * O
                                                }
                                            }
                                    }
                                } else
                                    for (H = 0; H < g; ++H) {
                                        var $;
                                        if (($ = g > 1 ? A * (f - 1) + H * E : .5 * (A + D) * (f - 1)) < 0 || $ > f - 1)
                                            for (P = 0; P < m; P++) {
                                                R = P + H * x[2] + W * x[1] + S * x[0];
                                                b.values[R] = p
                                            } else {
                                                var J = Math.round($),
                                                    Q = Math.round(C);
                                                for (P = 0; P < m; P++) {
                                                    var X = P + J * T[2] + Q * T[1] + _ * T[0],
                                                        ee = P + H * x[2] + W * x[1] + S * x[0];
                                                    b.values[ee] = N[X]
                                                }
                                            }
                                    }
                    }
            }
            return n.makeTensorInfo(b.shape, b.dtype, b.values)
        }
    };
    var It = {
        kernelName: a.Cumsum,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.axis,
                u = r.exclusive,
                d = r.reverse;
            s(i, "cumsum");
            var p = a.backend_util.getAxesPermutation([o], i.shape.length),
                l = i;
            null != p && (l = we({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    perm: p
                }
            }));
            var c = a.backend_util.getInnerMostAxes(1, i.shape.length)[0];
            if (c !== l.shape.length - 1) throw new Error("backend.cumsum in CPU expects an inner-most axis=" + (l.shape.length - 1) + " but got axis=" + c);
            for (var h = a.upcastType(l.dtype, "int32"), f = a.util.makeZerosTypedArray(a.util.sizeFromShape(l.shape), h), m = n.data.get(l.dataId).values, v = l.shape[l.shape.length - 1], k = d ? function(e, a) {
                    return e + v - a - 1
                } : function(e, a) {
                    return e + a
                }, g = 0; g < m.length; g += v)
                for (var b = 0; b < v; b++) {
                    var I = k(g, b);
                    if (0 === b) f[I] = u ? 0 : m[I];
                    else {
                        var y = k(g, b - 1);
                        f[I] = u ? m[y] + f[y] : m[I] + f[y]
                    }
                }
            var N = n.makeTensorInfo(l.shape, h, f);
            if (null != p) {
                var T = we({
                    inputs: {
                        x: N
                    },
                    backend: n,
                    attrs: {
                        perm: a.backend_util.getUndoAxesPermutation(p)
                    }
                });
                return n.disposeIntermediateTensorInfo(N), n.disposeIntermediateTensorInfo(l), T
            }
            return N
        }
    };
    var yt = {
        kernelName: a.DenseBincount,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = a.x,
                i = a.weights,
                s = n.size,
                o = n.binaryOutput;
            if (1 === r.shape.length) {
                var u = M(t.data.get(r.dataId).values, t.data.get(i.dataId).values, i.dtype, i.shape, s);
                return t.makeTensorInfo([s], i.dtype, u)
            }
            if (2 === r.shape.length) {
                var d = A(t.bufferSync(r), t.bufferSync(i), s, o);
                return t.makeTensorInfo(d.shape, i.dtype, d.values)
            }
            throw new Error("Error in denseBincount: input must be at most rank 2, but got rank" + r.shape.length + ".")
        }
    };
    var Nt = {
        kernelName: a.DepthToSpace,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                s = r.blockSize,
                o = r.dataFormat;
            a.util.assert("NHWC" === o, (function() {
                return "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + o
            })), a.util.assert(s > 1, (function() {
                return "blockSize should be > 1 for depthToSpace, but was: " + s
            }));
            for (var u = i.shape[0], d = i.shape[1], p = i.shape[2], l = i.shape[3], c = d * s, h = p * s, f = l / (s * s), m = n.data.get(i.dataId).values, v = new Float32Array(u * c * h * f), k = 0, g = 0; g < u; ++g)
                for (var b = 0; b < c; ++b)
                    for (var I = Math.floor(b / s), y = b % s, N = 0; N < h; ++N)
                        for (var T = Math.floor(N / s), x = (y * s + N % s) * f, S = 0; S < f; ++S) {
                            var F = S + x + l * (T + p * (I + d * g));
                            v[k++] = m[F]
                        }
            return n.makeTensorInfo([u, c, h, f], i.dtype, v)
        }
    };

    function Tt(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.x,
            o = t.filter,
            u = r.strides,
            d = r.pad,
            p = r.dilations,
            l = r.dimRoundingMode;
        s([i, o], "depthwiseConv2DNative");
        var c = a.util.computeStrides(i.shape),
            h = a.util.computeStrides(o.shape),
            f = p;
        null == f && (f = [1, 1]), a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(u, f), (function() {
            return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + u + " and dilations '" + f + "'"
        }));
        for (var m = a.backend_util.computeConv2DInfo(i.shape, o.shape, u, f, d, l, !0), v = m.filterHeight, k = m.filterWidth, g = m.dilationHeight, b = m.dilationWidth, I = m.padInfo, y = I.left, N = I.top, T = m.outChannels / m.inChannels, x = new a.TensorBuffer(m.outShape, i.dtype), S = n.data.get(i.dataId).values, F = n.data.get(o.dataId).values, M = x.values, A = 0; A < m.batchSize; ++A)
            for (var w = A * c[0], D = A * x.strides[0], _ = 0; _ < m.outHeight; ++_)
                for (var z = D + _ * x.strides[1], E = _ * m.strideHeight - N, W = 0; W < v; ++W) {
                    var C = E + W * g;
                    if (!(C < 0 || C >= m.inHeight))
                        for (var H = W * h[0], P = w + C * c[1], R = 0; R < m.outWidth; ++R)
                            for (var B = z + R * x.strides[2], G = R * m.strideWidth - y, O = 0; O < k; ++O) {
                                var L = G + O * b;
                                if (!(L < 0 || L >= m.inWidth))
                                    for (var V = H + O * h[1], q = P + L * m.inChannels, U = B, Z = V, j = 0; j < m.inChannels; ++j) {
                                        for (var K = S[q + j], Y = 0; Y < T; ++Y) M[U + Y] += K * F[Z + Y];
                                        U += T, Z += T
                                    }
                            }
                }
        return n.makeTensorInfo(x.shape, x.dtype, x.values)
    }
    var xt = {
        kernelName: a.DepthwiseConv2dNative,
        backendName: "cpu",
        kernelFunc: Tt
    };
    var St = {
        kernelName: a.DepthwiseConv2dNativeBackpropFilter,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = t.dy,
                u = r.strides,
                d = r.dilations,
                p = r.pad,
                l = r.dimRoundingMode,
                c = r.filterShape;
            s([i, o], "depthwiseConv2dNativeBackpropFilter");
            for (var h = a.backend_util.computeConv2DInfo(i.shape, c, u, d, p, l, !0), f = h.strideHeight, m = h.strideWidth, v = h.filterHeight, k = h.filterWidth, g = new a.TensorBuffer(h.filterShape, "float32"), b = h.padInfo.left, I = h.padInfo.top, y = h.outChannels / h.inChannels, N = n.data.get(i.dataId).values, T = new a.TensorBuffer(i.shape, i.dtype, N), x = n.data.get(o.dataId).values, S = new a.TensorBuffer(o.shape, o.dtype, x), F = 0; F < v; ++F)
                for (var M = Math.max(0, Math.ceil((I - F) / f)), A = Math.min(h.outHeight, (h.inHeight + I - F) / f), w = 0; w < k; ++w)
                    for (var D = Math.max(0, Math.ceil((b - w) / m)), _ = Math.min(h.outWidth, (h.inWidth + b - w) / m), z = 0; z < h.outChannels; ++z) {
                        for (var E = Math.trunc(z / y), W = z % y, C = 0, H = 0; H < h.batchSize; ++H)
                            for (var P = M; P < A; ++P)
                                for (var R = F + P * f - I, B = D; B < _; ++B) {
                                    var G = w + B * m - b;
                                    C += T.get(H, R, G, E) * S.get(H, P, B, z)
                                }
                        g.set(C, F, w, E, W)
                    }
            return n.makeTensorInfo(g.shape, g.dtype, g.values)
        }
    };
    var Ft = {
        kernelName: a.DepthwiseConv2dNativeBackpropInput,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.dy,
                o = t.filter,
                u = r.strides,
                d = r.dilations,
                p = r.pad,
                l = r.dimRoundingMode,
                c = r.inputShape;
            s([i, o], "depthwiseConv2DNativeBackpropInput");
            for (var h = a.util.computeStrides(i.shape), f = a.util.computeStrides(o.shape), m = a.backend_util.computeConv2DInfo(c, o.shape, u, d, p, l, !0), v = new a.TensorBuffer(m.inShape, "float32"), k = v.values, g = v.strides, b = g[0], I = g[1], y = g[2], N = n.data.get(i.dataId).values, T = h[0], x = h[1], S = h[2], F = n.data.get(o.dataId).values, M = f[0], A = f[1], w = f[2], D = m.batchSize, _ = m.filterHeight, z = m.filterWidth, E = m.inChannels, W = m.inHeight, C = m.inWidth, H = m.outChannels, P = m.outHeight, R = m.outWidth, B = m.strideHeight, G = m.strideWidth, O = _ - 1 - m.padInfo.top, L = z - 1 - m.padInfo.left, V = H / E, q = 0; q < D; ++q)
                for (var U = 0; U < E; ++U)
                    for (var Z = 0; Z < W; ++Z)
                        for (var j = Z - O, K = Math.max(0, Math.ceil(j / B)), Y = Math.min(P, (_ + j) / B), $ = 0; $ < C; ++$) {
                            for (var J = $ - L, Q = Math.max(0, Math.ceil(J / G)), X = Math.min(R, (z + J) / G), ee = 0, ae = K; ae < Y; ++ae)
                                for (var te = ae * B - j, ne = Q; ne < X; ++ne)
                                    for (var re = T * q + x * ae + S * ne, ie = M * (_ - 1 - te) + A * (z - 1 - (ne * G - J)) + w * U, se = 0; se < V; ++se) {
                                        ee += N[re + (U * V + se)] * F[ie + se]
                                    }
                            k[b * q + I * Z + y * $ + U] = ee
                        }
            return n.makeTensorInfo(v.shape, v.dtype, v.values)
        }
    };
    var Mt = {
            kernelName: a.Diag,
            backendName: "cpu",
            kernelFunc: function(e) {
                for (var t = e.inputs, n = e.backend, r = t.x, i = a.util.sizeFromShape(r.shape), s = n.data.get(r.dataId).values, o = a.buffer([i, i], r.dtype), u = o.values, d = 0; d < s.length; d++) u[d * i + d] = s[d];
                var p = r.shape.concat(r.shape);
                return n.makeTensorInfo(p, o.dtype, o.values)
            }
        },
        At = {
            kernelName: a.Dilation2D,
            backendName: "cpu",
            kernelFunc: function(e) {
                for (var t = e.inputs, n = e.backend, r = e.attrs, i = t, s = i.x, o = i.filter, u = r, d = u.strides, p = u.pad, l = u.dilations, c = n, h = c.data.get(s.dataId).values, f = s.shape.length, m = c.data.get(o.dataId).values, v = o.shape.length, k = a.backend_util.computeDilation2DInfo(s.shape, o.shape, d, p, "NHWC", l), g = k.batchSize, b = k.inHeight, I = k.inWidth, y = k.inChannels, N = k.outHeight, T = k.outWidth, x = k.padInfo, S = k.strideHeight, F = k.strideWidth, M = k.filterHeight, A = k.filterWidth, w = k.dilationHeight, D = k.dilationWidth, _ = k.outShape, z = a.util.sizeFromShape(_), E = _.length, W = a.util.getArrayFromDType(s.dtype, z), C = 0; C < g; ++C)
                    for (var H = 0; H < N; ++H)
                        for (var P = H * S - x.top, R = 0; R < T; ++R)
                            for (var B = R * F - x.left, G = 0; G < y; ++G) {
                                for (var O = Number.MIN_SAFE_INTEGER, L = 0; L < M; ++L) {
                                    var V = P + L * w;
                                    if (V >= 0 && V < b)
                                        for (var q = 0; q < A; ++q) {
                                            var U = B + q * D;
                                            if (U >= 0 && U < I) {
                                                var Z = a.util.locToIndex([C, V, U, G], f, a.util.computeStrides(s.shape)),
                                                    j = a.util.locToIndex([L, q, G], v, a.util.computeStrides(o.shape)),
                                                    K = h[Z] + m[j];
                                                K > O && (O = K)
                                            }
                                        }
                                }
                                W[a.util.locToIndex([C, H, R, G], E, a.util.computeStrides(_))] = O
                            }
                return {
                    dataId: c.write(a.util.toTypedArray(W, s.dtype), _, s.dtype),
                    shape: _,
                    dtype: s.dtype
                }
            }
        },
        wt = {
            kernelName: a.Dilation2DBackpropFilter,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t,
                    s = i.x,
                    o = i.filter,
                    u = i.dy,
                    d = r,
                    p = d.strides,
                    l = d.pad,
                    c = d.dilations,
                    h = n,
                    f = a.util.toNestedArray(s.shape, h.data.get(s.dataId).values),
                    m = a.util.toNestedArray(o.shape, h.data.get(o.dataId).values),
                    v = a.backend_util.computeDilation2DInfo(s.shape, o.shape, p, l, "NHWC", c),
                    k = v.batchSize,
                    g = v.inHeight,
                    b = v.inWidth,
                    I = v.inChannels,
                    y = v.outHeight,
                    N = v.outWidth,
                    T = v.padInfo,
                    x = v.strideHeight,
                    S = v.strideWidth,
                    F = v.filterHeight,
                    M = v.filterWidth,
                    A = v.dilationHeight,
                    w = v.dilationWidth,
                    D = v.outShape;
                a.util.assert(u.rank === D.length, (function() {
                    return "Error in " + a.Dilation2DBackpropFilter + ", dy must have the same rank as output " + D.length + ", but got " + u.rank
                }));
                for (var _ = a.util.toNestedArray(D, h.data.get(u.dataId).values), z = a.util.makeZerosNestedTypedArray(o.shape, o.dtype), E = 0; E < k; ++E)
                    for (var W = 0; W < y; ++W)
                        for (var C = W * x - T.top, H = 0; H < N; ++H)
                            for (var P = H * S - T.left, R = 0; R < I; ++R) {
                                for (var B = Number.MIN_SAFE_INTEGER, G = 0, O = 0, L = 0; L < F; ++L) {
                                    var V = C + L * A;
                                    if (V >= 0 && V < g)
                                        for (var q = 0; q < M; ++q) {
                                            var U = P + q * w;
                                            if (U >= 0 && U < b) {
                                                var Z = f[E][V][U][R] + m[L][q][R];
                                                Z > B && (B = Z, G = L, O = q)
                                            }
                                        }
                                }
                                z[G][O][R] += _[E][W][H][R]
                            }
                return {
                    dataId: h.write(a.util.toTypedArray(z, s.dtype), o.shape, o.dtype),
                    shape: o.shape,
                    dtype: o.dtype
                }
            }
        },
        Dt = {
            kernelName: a.Dilation2DBackpropInput,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t,
                    s = i.x,
                    o = i.filter,
                    u = i.dy,
                    d = r,
                    p = d.strides,
                    l = d.pad,
                    c = d.dilations,
                    h = n,
                    f = a.util.toNestedArray(s.shape, h.data.get(s.dataId).values),
                    m = a.util.toNestedArray(o.shape, h.data.get(o.dataId).values),
                    v = a.backend_util.computeDilation2DInfo(s.shape, o.shape, p, l, "NHWC", c),
                    k = v.batchSize,
                    g = v.inHeight,
                    b = v.inWidth,
                    I = v.inChannels,
                    y = v.outHeight,
                    N = v.outWidth,
                    T = v.padInfo,
                    x = v.strideHeight,
                    S = v.strideWidth,
                    F = v.filterHeight,
                    M = v.filterWidth,
                    A = v.dilationHeight,
                    w = v.dilationWidth,
                    D = v.outShape;
                a.util.assert(u.rank === D.length, (function() {
                    return "Error in " + a.Dilation2DBackpropInput + ", dy must have the same rank as output " + D.length + ", but got " + u.rank
                }));
                for (var _ = a.util.toNestedArray(D, h.data.get(u.dataId).values), z = a.util.makeZerosNestedTypedArray(s.shape, s.dtype), E = 0; E < k; ++E)
                    for (var W = 0; W < y; ++W)
                        for (var C = W * x - T.top, H = 0; H < N; ++H)
                            for (var P = H * S - T.left, R = 0; R < I; ++R) {
                                for (var B = Number.MIN_SAFE_INTEGER, G = C < 0 ? 0 : C, O = P < 0 ? 0 : P, L = 0; L < F; ++L) {
                                    var V = C + L * A;
                                    if (V >= 0 && V < g)
                                        for (var q = 0; q < M; ++q) {
                                            var U = P + q * w;
                                            if (U >= 0 && U < b) {
                                                var Z = f[E][V][U][R] + m[L][q][R];
                                                Z > B && (B = Z, G = V, O = U)
                                            }
                                        }
                                }
                                z[E][G][O][R] += _[E][W][H][R]
                            }
                return {
                    dataId: h.write(a.util.toTypedArray(z, s.dtype), s.shape, s.dtype),
                    shape: s.shape,
                    dtype: s.dtype
                }
            }
        };

    function _t(e) {
        var t, n = e.inputs,
            r = e.backend,
            i = e.attrs,
            o = n.x,
            u = i.axis,
            d = i.keepDims;
        s(o, "sum");
        var p = (t = "bool" === o.dtype ? b({
                inputs: {
                    x: o
                },
                backend: r,
                attrs: {
                    dtype: "int32"
                }
            }) : m({
                inputs: {
                    x: o
                },
                backend: r
            })).shape.length,
            l = a.util.parseAxisParam(u, t.shape),
            c = a.backend_util.getAxesPermutation(l, p),
            h = l,
            v = t;
        null != c && (v = we({
            inputs: {
                x: t
            },
            backend: r,
            attrs: {
                perm: c
            }
        }), h = a.backend_util.getInnerMostAxes(h.length, p)), a.backend_util.assertAxesAreInnerMostDims("sum", h, v.shape.length);
        for (var k = a.backend_util.computeOutAndReduceShapes(v.shape, h), g = k[0], I = k[1], y = f(r, g, a.backend_util.upcastType(v.dtype, "int32")), N = a.util.sizeFromShape(I), T = r.data.get(y.dataId).values, x = r.data.get(v.dataId).values, S = 0; S < T.length; ++S) {
            for (var F = S * N, M = 0, A = 0; A < N; ++A) M += x[F + A];
            T[S] = M
        }
        if (d) {
            var w = y;
            y = Ia({
                inputs: {
                    x: y
                },
                backend: r,
                attrs: {
                    shape: a.backend_util.expandShapeToKeepDim(y.shape, l)
                }
            }), r.disposeIntermediateTensorInfo(w)
        }
        return r.disposeIntermediateTensorInfo(t), null != c && r.disposeIntermediateTensorInfo(v), y
    }
    var zt = {
        kernelName: a.Sum,
        backendName: "cpu",
        kernelFunc: _t
    };
    var Et = {
        kernelName: a.Einsum,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs.equation,
                i = t,
                s = a.backend_util.decodeEinsumEquation(r, i.length),
                o = s.allDims,
                u = s.summedDims,
                d = s.idDims;
            a.backend_util.checkEinsumDimSizes(o.length, d, i);
            for (var p = a.backend_util.getEinsumComputePath(u, d), l = p.path, c = p.steps, h = c.length, f = null, m = o.length, v = [], k = 0; k < h; ++k) {
                for (var g = 0, b = c[k]; g < b.length; g++) {
                    var I = b[g],
                        y = a.backend_util.getEinsumPermutation(m, d[I]),
                        N = y.permutationIndices,
                        T = y.expandDims,
                        x = void 0;
                    a.backend_util.isIdentityPermutation(N) ? x = i[I] : (x = we({
                        inputs: {
                            x: i[I]
                        },
                        backend: n,
                        attrs: {
                            perm: N
                        }
                    }), v.push(x));
                    for (var S = x.shape.slice(), F = 0; F < T.length; ++F) S.splice(T[F], 0, 1);
                    a.util.arraysEqual(x.shape, S) || (x = Ia({
                        inputs: {
                            x: x
                        },
                        backend: n,
                        attrs: {
                            shape: S
                        }
                    }), v.push(x)), null === f ? f = x : (f = ye({
                        inputs: {
                            a: x,
                            b: f
                        },
                        backend: n
                    }), v.push(f))
                }
                k < h - 1 && (l[k] >= 0 && (f = _t({
                    inputs: {
                        x: f
                    },
                    backend: n,
                    attrs: {
                        axis: l[k] - (o.length - m),
                        keepDims: !1
                    }
                }), v.push(f)), m--)
            }
            for (var M = 0, A = v; M < A.length; M++) {
                var w = A[M];
                w !== f && n.disposeIntermediateTensorInfo(w)
            }
            return f
        }
    };
    var Wt = {
            kernelName: a.EluGrad,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = t.dy,
                    i = t.y;
                s([r, i], "eluGrad");
                for (var o = new Float32Array(a.util.sizeFromShape(i.shape)), u = n.data.get(i.dataId).values, d = n.data.get(r.dataId).values, p = 0; p < u.length; ++p) {
                    var l = u[p];
                    o[p] = l >= 1 ? d[p] : d[p] * (l + 1)
                }
                return n.makeTensorInfo(i.shape, "float32", o)
            }
        },
        Ct = a.backend_util.ERF_P,
        Ht = a.backend_util.ERF_A1,
        Pt = a.backend_util.ERF_A2,
        Rt = a.backend_util.ERF_A3,
        Bt = a.backend_util.ERF_A4,
        Gt = a.backend_util.ERF_A5,
        Ot = D(a.Erf, (function(e) {
            var a = Math.sign(e),
                t = Math.abs(e),
                n = 1 / (1 + Ct * t);
            return a * (1 - ((((Gt * n + Bt) * n + Rt) * n + Pt) * n + Ht) * n * Math.exp(-t * t))
        })),
        Lt = {
            kernelName: a.Erf,
            backendName: "cpu",
            kernelFunc: Ot
        };

    function Vt(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.input,
            s = r.dim,
            o = i.shape.length,
            u = i.shape.slice(),
            d = s;
        return s < 0 && (a.util.assert(-(o + 1) <= s, (function() {
            return "Axis must be in the interval [" + -(o + 1) + ", " + o + "]"
        })), d = o + s + 1), u.splice(d, 0, 1), Ia({
            inputs: {
                x: i
            },
            backend: n,
            attrs: {
                shape: u
            }
        })
    }
    var qt = {
            kernelName: a.ExpandDims,
            backendName: "cpu",
            kernelFunc: Vt
        },
        Ut = l((function(e, a) {
            return e / a
        })),
        Zt = y(a.RealDiv, Ut),
        jt = {
            kernelName: a.RealDiv,
            backendName: "cpu",
            kernelFunc: Zt
        };

    function Kt(e, t, n) {
        for (var r = e.shape, i = r[0], s = r[1], o = n.data.get(e.dataId), u = o.complexTensorInfos.real, d = o.complexTensorInfos.imag, p = [i, s], l = a.util.sizeFromShape(p), h = a.util.getTypedArrayFromDType("float32", l), f = a.util.getTypedArrayFromDType("float32", l), m = 0; m < i; m++) {
            for (var v = Re({
                    inputs: {
                        x: u
                    },
                    backend: n,
                    attrs: {
                        begin: [m, 0],
                        size: [1, s]
                    }
                }), k = Re({
                    inputs: {
                        x: d
                    },
                    backend: n,
                    attrs: {
                        begin: [m, 0],
                        size: [1, s]
                    }
                }), g = c({
                    inputs: {
                        real: v,
                        imag: k
                    },
                    backend: n
                }), b = Yt(g, t, n), I = b.real, y = b.imag, N = a.backend_util.mergeRealAndImagArrays(I, y), T = 0; T < s; T++) {
                var x = a.backend_util.getComplexWithIndex(N, T);
                h[m * s + T] = x.real, f[m * s + T] = x.imag
            }
            n.disposeIntermediateTensorInfo(v), n.disposeIntermediateTensorInfo(k), n.disposeIntermediateTensorInfo(g)
        }
        var S = n.makeTensorInfo(p, "float32", h),
            F = n.makeTensorInfo(p, "float32", f),
            M = c({
                inputs: {
                    real: S,
                    imag: F
                },
                backend: n
            });
        return n.disposeIntermediateTensorInfo(S), n.disposeIntermediateTensorInfo(F), M
    }

    function Yt(e, t, n) {
        var r = a.util.sizeFromShape(e.shape),
            i = n.data.get(e.dataId),
            s = n.data.get(i.complexTensorInfos.real.dataId).values,
            o = n.data.get(i.complexTensorInfos.imag.dataId).values;
        if (0 == ((y = r) & y - 1)) {
            var u = function e(t, n, r, i, s) {
                    if (1 === r) return {
                        real: t,
                        imag: n
                    };
                    var o = a.backend_util.mergeRealAndImagArrays(t, n),
                        u = r / 2,
                        d = a.backend_util.complexWithEvenIndex(o),
                        p = d.real,
                        l = d.imag,
                        h = [p.length],
                        f = s.makeTensorInfo(h, "float32", p),
                        m = s.makeTensorInfo(h, "float32", l),
                        v = c({
                            inputs: {
                                real: f,
                                imag: m
                            },
                            backend: s
                        }),
                        g = a.backend_util.complexWithOddIndex(o),
                        b = g.real,
                        I = g.imag,
                        y = [b.length],
                        N = s.makeTensorInfo(y, "float32", b),
                        T = s.makeTensorInfo(y, "float32", I),
                        x = c({
                            inputs: {
                                real: N,
                                imag: T
                            },
                            backend: s
                        }),
                        F = e(p, l, u, i, s),
                        M = F.real,
                        A = F.imag,
                        w = [M.length],
                        D = s.makeTensorInfo(w, "float32", M),
                        _ = s.makeTensorInfo(w, "float32", A),
                        z = c({
                            inputs: {
                                real: D,
                                imag: _
                            },
                            backend: s
                        }),
                        E = e(b, I, u, i, s),
                        W = E.real,
                        C = E.imag,
                        H = [W.length],
                        P = s.makeTensorInfo(H, "float32", W),
                        R = s.makeTensorInfo(H, "float32", C),
                        B = c({
                            inputs: {
                                real: P,
                                imag: R
                            },
                            backend: s
                        }),
                        G = a.backend_util.exponents(r, i),
                        O = [G.real.length],
                        L = s.makeTensorInfo(O, "float32", G.real),
                        V = s.makeTensorInfo(O, "float32", G.imag),
                        q = c({
                            inputs: {
                                real: L,
                                imag: V
                            },
                            backend: s
                        }),
                        U = ye({
                            inputs: {
                                a: q,
                                b: B
                            },
                            backend: s
                        }),
                        Z = S({
                            inputs: {
                                a: z,
                                b: U
                            },
                            backend: s
                        }),
                        j = ea({
                            inputs: {
                                a: z,
                                b: U
                            },
                            backend: s
                        }),
                        K = k({
                            inputs: {
                                input: Z
                            },
                            backend: s
                        }),
                        Y = k({
                            inputs: {
                                input: j
                            },
                            backend: s
                        }),
                        $ = rt({
                            inputs: {
                                input: Z
                            },
                            backend: s
                        }),
                        J = rt({
                            inputs: {
                                input: j
                            },
                            backend: s
                        }),
                        Q = st({
                            inputs: [K, Y],
                            backend: s,
                            attrs: {
                                axis: 0
                            }
                        }),
                        X = st({
                            inputs: [$, J],
                            backend: s,
                            attrs: {
                                axis: 0
                            }
                        }),
                        ee = s.data.get(Q.dataId).values,
                        ae = s.data.get(X.dataId).values;
                    return s.disposeIntermediateTensorInfo(f), s.disposeIntermediateTensorInfo(m), s.disposeIntermediateTensorInfo(v), s.disposeIntermediateTensorInfo(N), s.disposeIntermediateTensorInfo(T), s.disposeIntermediateTensorInfo(x), s.disposeIntermediateTensorInfo(D), s.disposeIntermediateTensorInfo(_), s.disposeIntermediateTensorInfo(z), s.disposeIntermediateTensorInfo(P), s.disposeIntermediateTensorInfo(R), s.disposeIntermediateTensorInfo(B), s.disposeIntermediateTensorInfo(L), s.disposeIntermediateTensorInfo(V), s.disposeIntermediateTensorInfo(q), s.disposeIntermediateTensorInfo(U), s.disposeIntermediateTensorInfo(Z), s.disposeIntermediateTensorInfo(j), s.disposeIntermediateTensorInfo(K), s.disposeIntermediateTensorInfo($), s.disposeIntermediateTensorInfo(Y), s.disposeIntermediateTensorInfo(J), s.disposeIntermediateTensorInfo(Q), s.disposeIntermediateTensorInfo(X), {
                        real: ee,
                        imag: ae
                    }
                }(s, o, r, t, n),
                d = [e.shape[0], e.shape[1]];
            if (t) {
                var p = n.makeTensorInfo(d, "float32", u.real),
                    l = n.makeTensorInfo(d, "float32", u.imag),
                    h = n.makeTensorInfo([], "float32", a.util.createScalarValue(r, "float32")),
                    f = m({
                        inputs: {
                            x: h
                        },
                        backend: n
                    }),
                    v = jt.kernelFunc({
                        inputs: {
                            a: p,
                            b: h
                        },
                        backend: n
                    }),
                    g = jt.kernelFunc({
                        inputs: {
                            a: l,
                            b: f
                        },
                        backend: n
                    }),
                    b = n.data.get(v.dataId).values,
                    I = n.data.get(g.dataId).values;
                return n.disposeIntermediateTensorInfo(p), n.disposeIntermediateTensorInfo(l), n.disposeIntermediateTensorInfo(h), n.disposeIntermediateTensorInfo(f), n.disposeIntermediateTensorInfo(v), n.disposeIntermediateTensorInfo(g), {
                    real: b,
                    imag: I
                }
            }
            return u
        }
        var y, N = function(e, t, n) {
            for (var r = new Float32Array(2 * t), i = 0; i < t; i++) {
                for (var s = 0, o = 0, u = 0; u < t; u++) {
                    var d = a.backend_util.exponent(i * u, t, n),
                        p = a.backend_util.getComplexWithIndex(e, u);
                    s += p.real * d.real - p.imag * d.imag, o += p.real * d.imag + p.imag * d.real
                }
                n && (s /= t, o /= t), a.backend_util.assignToTypedArray(r, s, o, i)
            }
            return r
        }(a.backend_util.mergeRealAndImagArrays(s, o), r, t);
        return a.backend_util.splitRealAndImagArrays(N)
    }
    var $t = {
        kernelName: a.FFT,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = t.input,
                i = a.util.sizeFromShape(r.shape),
                s = r.shape[r.shape.length - 1],
                o = Ia({
                    inputs: {
                        x: r
                    },
                    backend: n,
                    attrs: {
                        shape: [i / s, s]
                    }
                }),
                u = Kt(o, !1, n),
                d = Ia({
                    inputs: {
                        x: u
                    },
                    backend: n,
                    attrs: {
                        shape: r.shape
                    }
                });
            return n.disposeIntermediateTensorInfo(o), n.disposeIntermediateTensorInfo(u), d
        }
    };

    function Jt(e) {
        var t = e.backend,
            n = e.attrs,
            r = n.shape,
            i = n.value,
            s = n.dtype || a.util.inferDtype(i),
            o = a.util.getArrayFromDType(s, a.util.sizeFromShape(r));
        return function(e, a, t) {
            e.fill(a)
        }(o, i), t.makeTensorInfo(r, s, o)
    }
    var Qt = {
        kernelName: a.Fill,
        backendName: "cpu",
        kernelFunc: Jt
    };
    var Xt = {
            kernelName: a.FlipLeftRight,
            backendName: "cpu",
            kernelFunc: function(e) {
                for (var t = e.inputs, n = (e.attrs, e.backend), r = t.image, i = n, s = a.util.getTypedArrayFromDType(r.dtype, a.util.sizeFromShape(r.shape)), o = r.shape, u = o[0], d = o[1], p = o[2], l = o[3], c = i.data.get(r.dataId).values, h = 0; h < u; h++)
                    for (var f = h * p * d * l, m = 0; m < d; m++)
                        for (var v = m * (p * l), k = 0; k < p; k++)
                            for (var g = k * l, b = 0; b < l; b++) {
                                var I = [u, m, k, b][2],
                                    y = Math.round(p - I),
                                    N = f + v + g + b,
                                    T = c[N];
                                if (y >= 0 && y < p) T = c[f + v + y * l + b];
                                s[N] = T
                            }
                return {
                    dataId: i.write(s, r.shape, r.dtype),
                    shape: r.shape,
                    dtype: r.dtype
                }
            }
        },
        en = l((function(e, a) {
            return Math.floor(e / a)
        })),
        an = y(a.FloorDiv, en, null, "int32"),
        tn = {
            kernelName: a.FloorDiv,
            backendName: "cpu",
            kernelFunc: an
        };
    var nn = {
        kernelName: a.FusedConv2D,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = a.x,
                i = a.filter,
                s = a.bias,
                o = a.preluActivationWeights,
                u = n.strides,
                d = n.pad,
                p = n.dataFormat,
                l = n.dilations,
                c = n.dimRoundingMode,
                h = n.activation,
                f = n.leakyreluAlpha,
                m = ut({
                    inputs: {
                        x: r,
                        filter: i
                    },
                    backend: t,
                    attrs: {
                        strides: u,
                        pad: d,
                        dataFormat: p,
                        dilations: l,
                        dimRoundingMode: c
                    }
                });
            if (s) {
                var v = m;
                m = S({
                    inputs: {
                        a: m,
                        b: s
                    },
                    backend: t
                }), t.disposeIntermediateTensorInfo(v)
            }
            if (h) {
                v = m;
                m = ba(t, m, h, o, f), t.disposeIntermediateTensorInfo(v)
            }
            return m
        }
    };
    var rn = {
        kernelName: a.FusedDepthwiseConv2D,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = a.x,
                i = a.filter,
                s = a.bias,
                o = a.preluActivationWeights,
                u = n.strides,
                d = n.pad,
                p = n.dataFormat,
                l = n.dilations,
                c = n.dimRoundingMode,
                h = n.activation,
                f = n.leakyreluAlpha,
                m = Tt({
                    inputs: {
                        x: r,
                        filter: i
                    },
                    backend: t,
                    attrs: {
                        strides: u,
                        pad: d,
                        dataFormat: p,
                        dilations: l,
                        dimRoundingMode: c
                    }
                });
            if (s) {
                var v = m;
                m = S({
                    inputs: {
                        a: m,
                        b: s
                    },
                    backend: t
                }), t.disposeIntermediateTensorInfo(v)
            }
            if (h) {
                v = m;
                m = ba(t, m, h, o, f), t.disposeIntermediateTensorInfo(v)
            }
            return m
        }
    };
    var sn = {
        kernelName: a.GatherNd,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = t.params,
                i = t.indices,
                s = a.util.sizeFromShape(r.shape),
                o = i.shape,
                u = o[o.length - 1],
                d = a.backend_util.prepareAndValidate(r, i),
                p = d[0],
                l = d[1],
                c = d[2],
                h = d[3];
            if (0 === l) return n.makeTensorInfo(p, r.dtype, []);
            var f = K(n.data.get(i.dataId).values, n.bufferSync(r), r.dtype, l, u, c, h, r.shape, s);
            return n.makeTensorInfo(p, r.dtype, f.values)
        }
    };
    var on = {
        kernelName: a.GatherV2,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = t.indices,
                u = r.axis,
                d = r.batchDims;
            s([i, o], "gatherV2");
            var p = d;
            null == d && (p = 0);
            var l = a.util.sizeFromShape(o.shape),
                c = a.util.parseAxisParam(u, i.shape)[0],
                h = a.backend_util.segment_util.collectGatherOpShapeInfo(i, o, c, p),
                f = Ia({
                    inputs: {
                        x: i
                    },
                    backend: n,
                    attrs: {
                        shape: [h.batchSize, h.outerSize, h.dimSize, h.sliceSize]
                    }
                }),
                m = Ia({
                    inputs: {
                        x: o
                    },
                    backend: n,
                    attrs: {
                        shape: [h.batchSize, l / h.batchSize]
                    }
                }),
                v = [h.batchSize, h.outerSize, l / h.batchSize, h.sliceSize],
                k = n.bufferSync(m),
                g = Y(n.bufferSync(f), k, v);
            return n.disposeIntermediateTensorInfo(f), n.disposeIntermediateTensorInfo(m), n.makeTensorInfo(h.outputShape, g.dtype, g.values)
        }
    };
    var un = {
            kernelName: a.IFFT,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = t.input,
                    i = a.util.sizeFromShape(r.shape),
                    s = r.shape[r.shape.length - 1],
                    o = Ia({
                        inputs: {
                            x: r
                        },
                        backend: n,
                        attrs: {
                            shape: [i / s, s]
                        }
                    }),
                    u = Kt(o, !0, n),
                    d = Ia({
                        inputs: {
                            x: u
                        },
                        backend: n,
                        attrs: {
                            shape: r.shape
                        }
                    });
                return n.disposeIntermediateTensorInfo(o), n.disposeIntermediateTensorInfo(u), d
            }
        },
        dn = D(a.IsFinite, (function(e) {
            return Number.isFinite(e) ? 1 : 0
        }), "bool"),
        pn = {
            kernelName: a.IsFinite,
            backendName: "cpu",
            kernelFunc: dn
        },
        ln = D(a.IsInf, (function(e) {
            return Math.abs(e) === 1 / 0 ? 1 : 0
        }), "bool"),
        cn = {
            kernelName: a.IsInf,
            backendName: "cpu",
            kernelFunc: ln
        },
        hn = D(a.IsNan, (function(e) {
            return Number.isNaN(e) ? 1 : 0
        }), "bool"),
        fn = {
            kernelName: a.IsNan,
            backendName: "cpu",
            kernelFunc: hn
        };
    var mn = {
            kernelName: a.LinSpace,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.backend,
                    t = e.attrs,
                    n = ue(t.start, t.stop, t.num);
                return a.makeTensorInfo([n.length], "float32", n)
            }
        },
        vn = D(a.Log1p, (function(e) {
            return Math.log1p(e)
        })),
        kn = {
            kernelName: a.Log1p,
            backendName: "cpu",
            kernelFunc: vn
        },
        gn = l((function(e, a) {
            return e && a
        })),
        bn = y(a.LogicalAnd, gn, null, "bool"),
        In = {
            kernelName: a.LogicalAnd,
            backendName: "cpu",
            kernelFunc: bn
        },
        yn = D(a.LogicalNot, (function(e) {
            return e ? 0 : 1
        }), "bool"),
        Nn = {
            kernelName: a.LogicalNot,
            backendName: "cpu",
            kernelFunc: yn
        },
        Tn = l((function(e, a) {
            return e || a
        })),
        xn = y(a.LogicalOr, Tn, null, "bool"),
        Sn = {
            kernelName: a.LogicalOr,
            backendName: "cpu",
            kernelFunc: xn
        };
    var Fn = {
        kernelName: a.LRN,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.depthRadius,
                u = r.bias,
                d = r.alpha,
                p = r.beta;
            s(i, "LRN");
            var l = i.shape[3],
                c = l - 1,
                h = n.data.get(i.dataId).values,
                f = a.util.sizeFromShape(i.shape),
                m = new Float32Array(f);

            function v(e) {
                for (var a = e % l, t = e - a + Math.max(0, a - o), n = e - a + Math.min(a + o, c), r = 0; t <= n; t++) {
                    var i = h[t];
                    r += i * i
                }
                return r
            }
            for (var k = 0; k < f; k++) {
                var g = v(k),
                    b = h[k] * Math.pow(u + d * g, -p);
                m[k] = b
            }
            return n.makeTensorInfo(i.shape, i.dtype, m)
        }
    };
    var Mn = {
        kernelName: a.LRNGrad,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = t.y,
                u = t.dy,
                d = r.depthRadius,
                p = r.bias,
                l = r.alpha,
                c = r.beta;
            s(u, "LRNGrad");
            for (var h = a.util.sizeFromShape(u.shape), f = u.shape[3], m = n.data.get(u.dataId).values, v = n.data.get(i.dataId).values, k = n.data.get(o.dataId).values, g = new Float32Array(h), b = h, I = 0; I < b; I++) {
                for (var y = I % f, N = I - y + Math.max(0, y - d), T = I - y + Math.min(f, y + d + 1), x = 0, S = N; S < T; S++) x += Math.pow(v[S], 2);
                x = l * x + p;
                for (S = N; S < T; S++) {
                    var F = -2 * l * c * v[S] * k[I] / x;
                    I === S && (F += Math.pow(x, -c)), F *= m[I], g[S] += F
                }
            }
            return n.makeTensorInfo(u.shape, i.dtype, g)
        }
    };

    function An(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.x,
            o = r.reductionIndices,
            u = r.keepDims,
            d = n,
            p = i.shape,
            l = p.length,
            c = a.util.parseAxisParam(o, p),
            h = c,
            f = a.backend_util.getAxesPermutation(h, l),
            m = d.data.get(i.dataId).values;
        if (null != f) {
            for (var v = new Array(l), k = 0; k < v.length; k++) v[k] = p[f[k]];
            m = Ae(m, p, i.dtype, f, v), h = a.backend_util.getInnerMostAxes(h.length, l), p = v
        }
        s(i, "max"), a.backend_util.assertAxesAreInnerMostDims("max", h, l);
        var g = a.backend_util.computeOutAndReduceShapes(p, h),
            b = g[0],
            I = g[1],
            y = ce(m, a.util.sizeFromShape(I), b, i.dtype),
            N = d.write(y, b, i.dtype),
            T = b;
        u && (T = v = a.backend_util.expandShapeToKeepDim(b, c));
        return {
            dataId: N,
            shape: T,
            dtype: i.dtype
        }
    }
    var wn = {
        kernelName: a.Max,
        backendName: "cpu",
        kernelFunc: An
    };
    var Dn = {
        kernelName: a.MaxPool,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x;
            s(i, "maxPool");
            var o = r.filterSize,
                u = r.strides,
                d = r.pad,
                p = r.dimRoundingMode;
            a.util.assert(a.backend_util.eitherStridesOrDilationsAreOne(u, 1), (function() {
                return "Error in maxPool: Either strides or dilations must be 1. Got strides " + u + " and dilations '1'"
            }));
            var l, c = a.backend_util.computePool2DInfo(i.shape, o, u, 1, d, p);
            if (1 === c.filterWidth && 1 === c.filterHeight && a.util.arraysEqual(c.inShape, c.outShape)) l = m({
                inputs: {
                    x: i
                },
                backend: n
            });
            else {
                var h = n.data.get(i.dataId).values,
                    f = a.util.computeStrides(i.shape),
                    v = Ua(h, i.shape, i.dtype, f, c, "max");
                l = n.makeTensorInfo(c.outShape, i.dtype, v.values)
            }
            return l
        }
    };
    var _n = {
        kernelName: a.MaxPool3D,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.filterSize,
                u = r.strides,
                d = r.pad,
                p = r.dimRoundingMode,
                l = r.dataFormat;
            s(i, "maxPool3d");
            var c = a.backend_util.computePool3DInfo(i.shape, o, u, 1, d, p, l),
                h = ja(n.data.get(i.dataId).values, i.shape, i.dtype, a.util.computeStrides(i.shape), c, "max");
            return n.makeTensorInfo(h.shape, "float32", h.values)
        }
    };
    var zn = {
        kernelName: a.MaxPool3DGrad,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.dy,
                o = t.input,
                u = r.filterSize,
                d = r.strides,
                p = r.pad,
                l = r.dimRoundingMode;
            s([i, o], "maxPool3DGrad");
            for (var c = a.backend_util.computePool3DInfo(o.shape, u, d, 1, p, l), h = function(e, t) {
                    for (var n = a.buffer(t.outShape, "int32"), r = t.strideDepth, i = t.strideHeight, s = t.strideWidth, o = t.dilationDepth, u = t.dilationHeight, d = t.dilationWidth, p = t.effectiveFilterDepth, l = t.effectiveFilterHeight, c = t.effectiveFilterWidth, h = t.padInfo.front, f = t.padInfo.top, m = t.padInfo.left, v = 0; v < t.batchSize; ++v)
                        for (var k = 0; k < t.inChannels; ++k)
                            for (var g = 0; g < t.outDepth; ++g) {
                                for (var b = g * r - h, I = b; I < 0;) I += o;
                                for (var y = Math.min(t.inDepth, p + b), N = 0; N < t.outHeight; ++N) {
                                    for (var T = N * i - f, x = T; x < 0;) x += u;
                                    for (var S = Math.min(t.inHeight, l + T), F = 0; F < t.outWidth; ++F) {
                                        for (var M = F * s - m, A = M; A < 0;) A += d;
                                        for (var w = Math.min(t.inWidth, c + M), D = Number.NEGATIVE_INFINITY, _ = -1, z = I; z < y; z += o)
                                            for (var E = z - b, W = x; W < S; W += u)
                                                for (var C = W - T, H = A; H < w; H += d) {
                                                    var P = H - M,
                                                        R = e.get(v, z, W, H, k);
                                                    R >= D && (D = R, _ = E * l * c + C * l + P)
                                                }
                                        n.set(_, v, g, N, F, k)
                                    }
                                }
                            }
                    return n
                }(n.bufferSync(o), c), f = c.strideDepth, m = c.strideHeight, v = c.strideWidth, k = c.dilationDepth, g = c.dilationHeight, b = c.dilationWidth, I = c.effectiveFilterDepth, y = c.effectiveFilterHeight, N = c.effectiveFilterWidth, T = I - 1 - c.padInfo.front, x = N - 1 - c.padInfo.left, S = y - 1 - c.padInfo.top, F = a.buffer(o.shape, "float32"), M = n.bufferSync(i), A = 0; A < c.batchSize; ++A)
                for (var w = 0; w < c.inChannels; ++w)
                    for (var D = 0; D < c.inDepth; ++D)
                        for (var _ = 0; _ < c.inHeight; ++_)
                            for (var z = 0; z < c.inWidth; ++z) {
                                for (var E = D - T, W = _ - S, C = z - x, H = 0, P = 0; P < I; P += k) {
                                    var R = (E + P) / f;
                                    if (!(R < 0 || R >= c.outDepth || Math.floor(R) !== R))
                                        for (var B = 0; B < y; B += g) {
                                            var G = (W + B) / m;
                                            if (!(G < 0 || G >= c.outHeight || Math.floor(G) !== G))
                                                for (var O = 0; O < N; O += b) {
                                                    var L = (C + O) / v;
                                                    if (!(L < 0 || L >= c.outWidth || Math.floor(L) !== L)) {
                                                        var V = I * y * N - 1 - h.get(A, R, G, L, w) === P * y * N + B * N + O ? 1 : 0;
                                                        if (0 !== V) H += M.get(A, R, G, L, w) * V
                                                    }
                                                }
                                        }
                                }
                                F.set(H, A, D, _, z, w)
                            }
            return n.makeTensorInfo(F.shape, F.dtype, F.values)
        }
    };
    var En = {
        kernelName: a.MaxPoolGrad,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.dy,
                o = t.input,
                u = o;
            s([o, t.output], "maxPoolGrad");
            for (var d = r.filterSize, p = r.strides, l = r.pad, c = r.dimRoundingMode, h = a.backend_util.computePool2DInfo(u.shape, d, p, 1, l, c), f = n.data.get(u.dataId).values, m = a.buffer(h.outShape, u.dtype, Za(f, u.shape, u.dtype, h).values), v = h.strideHeight, k = h.strideWidth, g = h.dilationHeight, b = h.dilationWidth, I = h.effectiveFilterHeight, y = h.effectiveFilterWidth, N = y - 1 - h.padInfo.left, T = I - 1 - h.padInfo.top, x = a.buffer(u.shape, "float32"), S = n.data.get(i.dataId).values, F = a.buffer(i.shape, "float32", S), M = 0; M < h.batchSize; ++M)
                for (var A = 0; A < h.inChannels; ++A)
                    for (var w = 0; w < h.inHeight; ++w)
                        for (var D = 0; D < h.inWidth; ++D) {
                            for (var _ = w - T, z = D - N, E = 0, W = 0; W < I; W += g) {
                                var C = (_ + W) / v;
                                if (!(C < 0 || C >= h.outHeight || Math.floor(C) !== C))
                                    for (var H = 0; H < y; H += b) {
                                        var P = (z + H) / k;
                                        if (!(P < 0 || P >= h.outWidth || Math.floor(P) !== P)) {
                                            var R = I * y - 1 - m.get(M, C, P, A) === W * y + H ? 1 : 0;
                                            if (0 !== R) E += F.get(M, C, P, A) * R
                                        }
                                    }
                            }
                            x.set(E, M, w, D, A)
                        }
            return n.makeTensorInfo(x.shape, x.dtype, x.values)
        }
    };
    var Wn = {
        kernelName: a.MaxPoolWithArgmax,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.attrs,
                r = e.backend,
                i = t.x,
                o = n,
                u = o.filterSize,
                d = o.strides,
                p = o.pad,
                l = o.includeBatchInIndex,
                c = r;
            s(i, "MaxPoolWithArgmax");
            var h = c.data.get(i.dataId).values,
                f = a.backend_util.computePool2DInfo(i.shape, u, d, [1, 1], p),
                m = function(e, t, n, r, i) {
                    var s = Ua(e, 0, n, a.util.computeStrides(t), i, "max"),
                        o = Za(e, t, n, i, !0, r);
                    return [s.values, o.values]
                }(h, i.shape, i.dtype, l, f),
                v = m[0],
                k = m[1],
                g = c.write(v, f.outShape, i.dtype),
                b = c.write(k, f.outShape, i.dtype);
            return [{
                dataId: g,
                shape: f.outShape,
                dtype: i.dtype
            }, {
                dataId: b,
                shape: f.outShape,
                dtype: "int32"
            }]
        }
    };
    var Cn = {
        kernelName: a.Mean,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                s = r.axis,
                o = r.keepDims,
                u = a.util.parseAxisParam(s, i.shape),
                d = a.backend_util.computeOutAndReduceShapes(i.shape, u)[1],
                p = a.util.sizeFromShape(d),
                l = [],
                c = n.makeTensorInfo([], "float32", new Float32Array([p]));
            l.push(c);
            var h = b({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    dtype: "float32"
                }
            });
            l.push(h);
            var f = Zt({
                inputs: {
                    a: h,
                    b: c
                },
                backend: n
            });
            l.push(f);
            var m = _t({
                inputs: {
                    x: f
                },
                backend: n,
                attrs: {
                    axis: s,
                    keepDims: o
                }
            });
            return l.forEach((function(e) {
                return n.disposeIntermediateTensorInfo(e)
            })), m
        }
    };
    var Hn = {
        kernelName: a.Min,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.axis,
                u = r.keepDims;
            s(i, "min");
            var d = a.util.parseAxisParam(o, i.shape),
                p = d,
                l = a.backend_util.getAxesPermutation(p, i.shape.length),
                c = i;
            null != l && (c = we({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    perm: l
                }
            }), p = a.backend_util.getInnerMostAxes(p.length, i.shape.length)), a.backend_util.assertAxesAreInnerMostDims("min", p, c.shape.length);
            for (var h = a.backend_util.computeOutAndReduceShapes(c.shape, p), f = h[0], m = h[1], v = a.util.sizeFromShape(m), k = a.util.makeZerosTypedArray(a.util.sizeFromShape(f), c.dtype), g = n.data.get(c.dataId).values, b = 0; b < k.length; ++b) {
                for (var I = b * v, y = g[I], N = 0; N < v; ++N) {
                    var T = g[I + N];
                    (Number.isNaN(T) || T < y) && (y = T)
                }
                k[b] = y
            }
            null != l && n.disposeIntermediateTensorInfo(c);
            var x = n.makeTensorInfo(f, c.dtype, k);
            if (u) {
                var S = Ia({
                    inputs: {
                        x: x
                    },
                    backend: n,
                    attrs: {
                        shape: a.backend_util.expandShapeToKeepDim(f, d)
                    }
                });
                return n.disposeIntermediateTensorInfo(x), S
            }
            return x
        }
    };
    var Pn = {
            kernelName: a.MirrorPad,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t.x,
                    o = r.paddings,
                    u = r.mode;
                s(i, "mirrorPad");
                for (var d = o.map((function(e, a) {
                        return e[0] + i.shape[a] + e[1]
                    })), p = o.map((function(e) {
                        return e[0]
                    })), l = o.map((function(e, a) {
                        return e[0] + i.shape[a]
                    })), c = "reflect" === u ? 0 : 1, h = n.data.get(i.dataId).values, f = i.shape.length, m = a.util.computeStrides(i.shape), v = a.util.sizeFromShape(d), k = d.length, g = a.util.computeStrides(d), b = a.util.getTypedArrayFromDType(i.dtype, v), I = 0; I < v; I++) {
                    for (var y = a.util.indexToLoc(I, k, g), N = 0; N < k; N++) y[N] < p[N] ? y[N] = 2 * p[N] - y[N] - c : y[N] >= l[N] && (y[N] = 2 * (l[N] - 1) - y[N] + c);
                    y = y.map((function(e, a) {
                        return e - p[a]
                    }));
                    var T = a.util.locToIndex(y, f, m);
                    b[I] = h[T]
                }
                return {
                    dataId: n.write(b, d, i.dtype),
                    shape: d,
                    dtype: i.dtype
                }
            }
        },
        Rn = l((function(e, a) {
            var t = e % a;
            return e < 0 && a < 0 || e >= 0 && a >= 0 ? t : (t + a) % a
        })),
        Bn = y(a.Mod, Rn),
        Gn = {
            kernelName: a.Mod,
            backendName: "cpu",
            kernelFunc: Bn
        };

    function On(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs,
            i = t.logits,
            s = r.dim,
            o = i.shape.length,
            u = s;
        if (-1 === u && (u = o - 1), u !== o - 1) throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + o + " and dim was " + u);
        var d = a.util.parseAxisParam([u], i.shape),
            p = An({
                inputs: {
                    x: i
                },
                backend: n,
                attrs: {
                    reductionIndices: d,
                    keepDims: !1
                }
            }),
            l = a.backend_util.expandShapeToKeepDim(p.shape, d),
            c = Ia({
                inputs: {
                    x: p
                },
                backend: n,
                attrs: {
                    shape: l
                }
            }),
            h = ea({
                inputs: {
                    a: i,
                    b: c
                },
                backend: n
            }),
            f = G({
                inputs: {
                    x: h
                },
                backend: n
            }),
            m = _t({
                inputs: {
                    x: f
                },
                backend: n,
                attrs: {
                    axis: d,
                    keepDims: !1
                }
            }),
            v = Ia({
                inputs: {
                    x: m
                },
                backend: n,
                attrs: {
                    shape: l
                }
            }),
            k = Zt({
                inputs: {
                    a: f,
                    b: v
                },
                backend: n
            });
        return n.disposeIntermediateTensorInfo(p), n.disposeIntermediateTensorInfo(c), n.disposeIntermediateTensorInfo(h), n.disposeIntermediateTensorInfo(f), n.disposeIntermediateTensorInfo(m), n.disposeIntermediateTensorInfo(v), k
    }
    var Ln = {
        kernelName: a.Softmax,
        backendName: "cpu",
        kernelFunc: On
    };
    var Vn = {
            kernelName: a.Multinomial,
            backendName: "cpu",
            kernelFunc: function(e) {
                var n = e.inputs,
                    r = e.backend,
                    i = e.attrs,
                    o = n.logits,
                    u = i.numSamples,
                    d = i.seed,
                    p = i.normalized;
                s(o, "multinomial");
                for (var l = p ? o : On({
                        inputs: {
                            logits: o
                        },
                        backend: r,
                        attrs: {
                            dim: -1
                        }
                    }), c = l.shape[0], h = l.shape[1], f = r.data.get(l.dataId).values, m = [c, u], v = a.util.makeZerosTypedArray(a.util.sizeFromShape(m), "int32"), k = 0; k < c; ++k) {
                    var g = k * h,
                        b = new Float32Array(h - 1);
                    b[0] = f[g];
                    for (var I = 1; I < b.length; ++I) b[I] = b[I - 1] + f[g + I];
                    for (var y = t.alea(d.toString()), N = k * u, T = 0; T < u; ++T) {
                        var x = y();
                        v[N + T] = b.length;
                        for (var S = 0; S < b.length; S++)
                            if (x < b[S]) {
                                v[N + T] = S;
                                break
                            }
                    }
                }
                return p || r.disposeIntermediateTensorInfo(l), r.makeTensorInfo(m, "int32", v)
            }
        },
        qn = a.kernel_impls.nonMaxSuppressionV3Impl;
    var Un = {
            kernelName: a.NonMaxSuppressionV3,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.inputs,
                    t = e.backend,
                    n = e.attrs,
                    r = a.boxes,
                    i = a.scores,
                    o = n.maxOutputSize,
                    u = n.iouThreshold,
                    d = n.scoreThreshold;
                s(r, "NonMaxSuppression");
                var p = t.data.get(r.dataId).values,
                    l = t.data.get(i.dataId).values,
                    c = qn(p, l, o, u, d).selectedIndices;
                return t.makeTensorInfo([c.length], "int32", new Int32Array(c))
            }
        },
        Zn = a.kernel_impls.nonMaxSuppressionV4Impl;
    var jn = {
            kernelName: a.NonMaxSuppressionV4,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.inputs,
                    t = e.backend,
                    n = e.attrs,
                    r = a.boxes,
                    i = a.scores,
                    o = n.maxOutputSize,
                    u = n.iouThreshold,
                    d = n.scoreThreshold,
                    p = n.padToMaxOutputSize;
                s(r, "NonMaxSuppressionPadded");
                var l = t.data.get(r.dataId).values,
                    c = t.data.get(i.dataId).values,
                    h = Zn(l, c, o, u, d, p),
                    f = h.selectedIndices,
                    m = h.validOutputs;
                return [t.makeTensorInfo([f.length], "int32", new Int32Array(f)), t.makeTensorInfo([], "int32", new Int32Array([m]))]
            }
        },
        Kn = a.kernel_impls.nonMaxSuppressionV5Impl;
    var Yn = {
        kernelName: a.NonMaxSuppressionV5,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = a.boxes,
                i = a.scores,
                o = n.maxOutputSize,
                u = n.iouThreshold,
                d = n.scoreThreshold,
                p = n.softNmsSigma;
            s(r, "NonMaxSuppressionWithScore");
            var l = t.data.get(r.dataId).values,
                c = t.data.get(i.dataId).values,
                h = Kn(l, c, o, u, d, p),
                f = h.selectedIndices,
                m = h.selectedScores;
            return [t.makeTensorInfo([f.length], "int32", new Int32Array(f)), t.makeTensorInfo([m.length], "float32", new Float32Array(m))]
        }
    };
    var $n = {
        kernelName: a.OneHot,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.indices,
                o = r.depth,
                u = r.onValue,
                d = r.offValue;
            s(i, "oneHot");
            var p = a.util.sizeFromShape(i.shape),
                l = new Float32Array(p * o);
            l.fill(d);
            for (var c = n.data.get(i.dataId).values, h = 0; h < p; ++h) c[h] >= 0 && c[h] < o && (l[h * o + c[h]] = u);
            return n.makeTensorInfo(i.shape.concat([o]), "int32", l)
        }
    };

    function Jn(e) {
        var a = e.inputs,
            t = e.backend,
            n = a.x;
        if ("string" === n.dtype) throw new Error("zerosLike is not supported for string tensors");
        if ("complex64" === n.dtype) {
            var r = k({
                    inputs: {
                        input: n
                    },
                    backend: t
                }),
                i = Jn({
                    inputs: {
                        x: r
                    },
                    backend: t
                }),
                s = rt({
                    inputs: {
                        input: n
                    },
                    backend: t
                }),
                o = Jn({
                    inputs: {
                        x: s
                    },
                    backend: t
                }),
                u = c({
                    inputs: {
                        real: i,
                        imag: o
                    },
                    backend: t
                });
            return t.disposeIntermediateTensorInfo(r), t.disposeIntermediateTensorInfo(i), t.disposeIntermediateTensorInfo(s), t.disposeIntermediateTensorInfo(o), u
        }
        return Jt({
            backend: t,
            attrs: {
                shape: n.shape,
                value: 0,
                dtype: n.dtype
            }
        })
    }
    var Qn = {
        kernelName: a.ZerosLike,
        backendName: "cpu",
        kernelFunc: Jn
    };
    var Xn = {
        kernelName: a.OnesLike,
        backendName: "cpu",
        kernelFunc: function e(a) {
            var t = a.inputs,
                n = a.backend,
                r = t.x;
            if ("string" === r.dtype) throw new Error("onesLike is not supported for string tensors");
            if ("complex64" === r.dtype) {
                var i = k({
                        inputs: {
                            input: r
                        },
                        backend: n
                    }),
                    s = e({
                        inputs: {
                            x: i
                        },
                        backend: n
                    }),
                    o = rt({
                        inputs: {
                            input: r
                        },
                        backend: n
                    }),
                    u = Jn({
                        inputs: {
                            x: o
                        },
                        backend: n
                    }),
                    d = c({
                        inputs: {
                            real: s,
                            imag: u
                        },
                        backend: n
                    });
                return n.disposeIntermediateTensorInfo(i), n.disposeIntermediateTensorInfo(s), n.disposeIntermediateTensorInfo(o), n.disposeIntermediateTensorInfo(u), d
            }
            return Jt({
                backend: n,
                attrs: {
                    shape: r.shape,
                    value: 1,
                    dtype: r.dtype
                }
            })
        }
    };

    function er(e) {
        var t = e.inputs,
            n = e.backend,
            r = e.attrs.axis;
        if (1 === t.length) return Vt({
            inputs: {
                input: t[0]
            },
            backend: n,
            attrs: {
                dim: r
            }
        });
        var i = t[0].shape,
            s = t[0].dtype;
        t.forEach((function(e) {
            a.util.assertShapesMatch(i, e.shape, "All tensors passed to stack must have matching shapes"), a.util.assert(s === e.dtype, (function() {
                return "All tensors passed to stack must have matching dtypes"
            }))
        }));
        var o = [],
            u = st({
                inputs: t.map((function(e) {
                    var a = Vt({
                        inputs: {
                            input: e
                        },
                        backend: n,
                        attrs: {
                            dim: r
                        }
                    });
                    return o.push(a), a
                })),
                backend: n,
                attrs: {
                    axis: r
                }
            });
        return o.forEach((function(e) {
            return n.disposeIntermediateTensorInfo(e)
        })), u
    }
    var ar = {
        kernelName: a.Pack,
        backendName: "cpu",
        kernelFunc: er
    };
    var tr = {
            kernelName: a.PadV2,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t.x,
                    o = r.paddings,
                    u = r.constantValue;
                s(i, "pad");
                var d = o.map((function(e, a) {
                        return e[0] + i.shape[a] + e[1]
                    })),
                    p = o.map((function(e) {
                        return e[0]
                    })),
                    l = n.data.get(i.dataId).values,
                    c = a.util.sizeFromShape(i.shape),
                    h = i.shape.length,
                    f = a.util.computeStrides(i.shape),
                    m = a.util.sizeFromShape(d),
                    v = d.length,
                    k = a.util.computeStrides(d),
                    g = a.util.getTypedArrayFromDType(i.dtype, m);
                0 !== u && g.fill(u);
                for (var b = 0; b < c; b++) {
                    var I = a.util.indexToLoc(b, h, f).map((function(e, a) {
                        return e + p[a]
                    }));
                    g[a.util.locToIndex(I, v, k)] = l[b]
                }
                return {
                    dataId: n.write(g, d, i.dtype),
                    shape: d,
                    dtype: i.dtype
                }
            }
        },
        nr = l((function(e, a) {
            return Math.pow(e, a)
        })),
        rr = y(a.Pow, nr),
        ir = {
            kernelName: a.Pow,
            backendName: "cpu",
            kernelFunc: rr
        };
    var sr = {
            kernelName: a.Range,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.backend,
                    t = e.attrs,
                    n = t.start,
                    r = t.stop,
                    i = t.dtype,
                    s = Ee(n, r, t.step, i);
                return a.makeTensorInfo([s.length], i, s)
            }
        },
        or = D(a.Reciprocal, (function(e) {
            return 1 / e
        })),
        ur = {
            kernelName: a.Reciprocal,
            backendName: "cpu",
            kernelFunc: or
        };
    var dr = {
        kernelName: a.ResizeBilinear,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.images,
                o = r.alignCorners,
                u = r.halfPixelCenters,
                d = r.size;
            s(i, "resizeBilinear");
            for (var p = a.util.computeStrides(i.shape), l = d[0], c = d[1], h = i.shape, f = h[0], m = h[1], v = h[2], k = h[3], g = n.data.get(i.dataId).values, b = new Float32Array(a.util.sizeFromShape([f, l, c, k])), I = [o && l > 1 ? m - 1 : m, o && c > 1 ? v - 1 : v], y = [o && l > 1 ? l - 1 : l, o && c > 1 ? c - 1 : c], N = 0, T = I[0] / y[0], x = I[1] / y[1], S = 0; S < f; S++)
                for (var F = 0; F < l; F++) {
                    var M = void 0;
                    M = u ? T * (F + .5) - .5 : T * F;
                    for (var A = Math.max(0, Math.floor(M)), w = M - A, D = Math.min(m - 1, Math.ceil(M)), _ = S * p[0] + A * p[1], z = S * p[0] + D * p[1], E = 0; E < c; E++) {
                        var W = void 0;
                        W = u ? x * (E + .5) - .5 : x * E;
                        for (var C = Math.max(0, Math.floor(W)), H = W - C, P = Math.min(v - 1, Math.ceil(W)), R = _ + C * p[2], B = z + C * p[2], G = _ + P * p[2], O = z + P * p[2], L = 0; L < k; L++) {
                            var V = g[R + L],
                                q = g[B + L],
                                U = V + (g[G + L] - V) * H,
                                Z = U + (q + (g[O + L] - q) * H - U) * w;
                            b[N++] = Z
                        }
                    }
                }
            return n.makeTensorInfo([f, l, c, k], "float32", b)
        }
    };
    var pr = {
        kernelName: a.ResizeBilinearGrad,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.images,
                o = t.dy,
                u = r.alignCorners;
            s([o, i], "resizeBilinearGrad");
            for (var d = a.util.computeStrides(i.shape), p = i.shape, l = p[0], c = p[1], h = p[2], f = p[3], m = o.shape, v = m[1], k = m[2], g = new Float32Array(l * c * h * f), b = [u && v > 1 ? c - 1 : c, u && k > 1 ? h - 1 : h], I = [u && v > 1 ? v - 1 : v, u && k > 1 ? k - 1 : k], y = b[0] / I[0], N = b[1] / I[1], T = n.data.get(o.dataId).values, x = 0, S = 0; S < l; S++)
                for (var F = S * d[0], M = 0; M < v; M++)
                    for (var A = M * y, w = Math.floor(A), D = Math.min(Math.ceil(A), c - 1), _ = F + w * d[1], z = F + D * d[1], E = A - w, W = 1 - E, C = 0; C < k; C++)
                        for (var H = C * N, P = Math.floor(H), R = Math.min(Math.ceil(H), h - 1), B = H - P, G = 1 - B, O = _ + P * d[2], L = _ + R * d[2], V = z + P * d[2], q = z + R * d[2], U = W * G, Z = W * B, j = E * G, K = E * B, Y = 0; Y < f; Y++) {
                            var $ = T[x++];
                            g[O + Y] += $ * U, g[L + Y] += $ * Z, g[V + Y] += $ * j, g[q + Y] += $ * K
                        }
            return n.makeTensorInfo([l, h, c, f], "float32", g)
        }
    };
    var lr = {
        kernelName: a.ResizeNearestNeighbor,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.images,
                o = r.alignCorners,
                u = r.halfPixelCenters,
                d = r.size;
            s(i, "resizeNearestNeighbor");
            for (var p = a.util.computeStrides(i.shape), l = d[0], c = d[1], h = i.shape, f = h[0], m = h[1], v = h[2], k = h[3], g = n.data.get(i.dataId).values, b = new Float32Array(f * l * c * k), I = [o && l > 1 ? m - 1 : m, o && c > 1 ? v - 1 : v], y = [o && l > 1 ? l - 1 : l, o && c > 1 ? c - 1 : c], N = I[0] / y[0], T = I[1] / y[1], x = 0, S = 0; S < f; S++)
                for (var F = S * p[0], M = 0; M < l; M++) {
                    var A = u ? N * (M + .5) : N * M,
                        w = Math.min(m - 1, o ? Math.round(A) : Math.floor(A));
                    u && (w = Math.max(0, w));
                    for (var D = F + w * p[1], _ = 0; _ < c; _++) {
                        var z = u ? T * (_ + .5) : T * _,
                            E = Math.min(v - 1, o ? Math.round(z) : Math.floor(z));
                        u && (E = Math.max(0, E));
                        for (var W = D + E * p[2], C = 0; C < k; C++) {
                            var H = g[W + C];
                            b[x++] = H
                        }
                    }
                }
            return n.makeTensorInfo([f, l, c, k], i.dtype, b)
        }
    };
    var cr = {
        kernelName: a.ResizeNearestNeighborGrad,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.images,
                o = t.dy,
                u = r.alignCorners;
            s([o, i], "resizeNearestNeighborGrad");
            for (var d = a.util.computeStrides(i.shape), p = a.util.computeStrides(o.shape), l = i.shape, c = l[0], h = l[1], f = l[2], m = l[3], v = o.shape, k = v[1], g = v[2], b = new Float32Array(c * h * f * m), I = n.data.get(o.dataId).values, y = [u && k > 1 ? h - 1 : h, u && g > 1 ? f - 1 : f], N = [u && k > 1 ? k - 1 : k, u && g > 1 ? g - 1 : g], T = y[0] / N[0], x = y[1] / N[1], S = 1 / T, F = 1 / x, M = 2 * Math.ceil(S) + 2, A = 2 * Math.ceil(F) + 2, w = 0; w < c; w++)
                for (var D = w * d[0], _ = 0; _ < h; _++)
                    for (var z = D + _ * d[1], E = Math.floor(_ * S), W = Math.floor(E - M / 2), C = 0; C < f; C++)
                        for (var H = z + C * d[2], P = Math.floor(C * F), R = Math.floor(P - A / 2), B = 0; B < m; B++) {
                            for (var G = 0, O = 0; O < M; O++) {
                                var L = O + W;
                                if (!(L < 0 || L >= k)) {
                                    var V = D + L * p[1],
                                        q = L * T;
                                    if (_ === Math.min(h - 1, u ? Math.round(q) : Math.floor(q)))
                                        for (var U = 0; U < A; U++) {
                                            var Z = U + R;
                                            if (!(Z < 0 || Z >= g)) {
                                                var j = V + Z * p[2],
                                                    K = Z * x;
                                                C === Math.min(f - 1, u ? Math.round(K) : Math.floor(K)) && (G += I[j + B])
                                            }
                                        }
                                }
                            }
                            b[H + B] = G
                        }
            return n.makeTensorInfo(i.shape, i.dtype, b)
        }
    };
    var hr = {
            kernelName: a.Reverse,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t.x,
                    o = r.dims;
                s(i, "reverse");
                var u = i.shape.length,
                    d = a.util.parseAxisParam(o, i.shape);
                if (0 === u) return m({
                    inputs: {
                        x: i
                    },
                    backend: n
                });
                for (var p = new a.TensorBuffer(i.shape, i.dtype), l = n.bufferSync(i), c = function(e) {
                        var a = p.indexToLoc(e),
                            t = a.slice();
                        d.forEach((function(e) {
                            return t[e] = i.shape[e] - 1 - t[e]
                        })), p.set.apply(p, [l.get.apply(l, t)].concat(a))
                    }, h = 0; h < p.size; h++) c(h);
                return n.makeTensorInfo(p.shape, p.dtype, p.values)
            }
        },
        fr = {
            kernelName: a.RotateWithOffset,
            backendName: "cpu",
            kernelFunc: function(e) {
                for (var t = e.inputs, n = e.attrs, r = e.backend, i = t.image, s = n, o = s.radians, u = s.fillValue, d = s.center, p = r, l = a.util.getTypedArrayFromDType(i.dtype, a.util.sizeFromShape(i.shape)), c = i.shape, h = c[0], f = c[1], m = c[2], v = c[3], k = a.backend_util.getImageCenter(d, f, m), g = k[0], b = k[1], I = Math.sin(o), y = Math.cos(o), N = p.data.get(i.dataId).values, T = 0; T < h; T++)
                    for (var x = T * m * f * v, S = 0; S < f; S++)
                        for (var F = S * (m * v), M = 0; M < m; M++)
                            for (var A = M * v, w = 0; w < v; w++) {
                                var D = [h, S, M, w],
                                    _ = D[2],
                                    z = D[1],
                                    E = (_ - g) * y - (z - b) * I,
                                    W = (_ - g) * I + (z - b) * y;
                                E = Math.round(E + g), W = Math.round(W + b);
                                var C = u;
                                if ("number" != typeof u && (C = 3 === w ? 255 : u[w]), E >= 0 && E < m && W >= 0 && W < f) C = N[x + W * (m * v) + E * v + w];
                                l[x + F + A + w] = C
                            }
                return {
                    dataId: p.write(l, i.shape, i.dtype),
                    shape: i.shape,
                    dtype: i.dtype
                }
            }
        },
        mr = D(a.Round, (function(e) {
            var a = Math.floor(e);
            return e - a < .5 ? Math.floor(e) : e - a > .5 ? Math.ceil(e) : a % 2 == 0 ? a : a + 1
        })),
        vr = {
            kernelName: a.Round,
            backendName: "cpu",
            kernelFunc: mr
        };

    function kr(e, t, n, r, i, s, o, u, d, p) {
        var l = [r / i, i],
            c = e.values,
            h = t.values;
        if (0 === r) return a.buffer(n, t.dtype);
        var f = a.buffer(l, t.dtype);
        f.values.fill(d);
        for (var m = 0; m < s; m++) {
            for (var v = [], k = 0, g = 0; g < o; g++) {
                var b = c[m * o + g];
                v.push(b), k += b * u[g]
            }
            if (k < 0 || k >= r / i) throw new Error("Invalid indices: " + v + " does not index into " + n);
            for (var I = 0; I < i; I++) p ? f.values[k * i + I] += h[m * i + I] : f.values[k * i + I] = 0 === t.rank ? h[0] : h[m * i + I]
        }
        return f
    }
    var gr = {
        kernelName: a.ScatterNd,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.indices,
                s = t.updates,
                o = r.shape,
                u = a.backend_util.calculateShapes(s, i, o),
                d = u.sliceRank,
                p = u.numUpdates,
                l = u.sliceSize,
                c = u.strides,
                h = u.outputSize,
                f = kr(n.bufferSync(i), n.bufferSync(s), o, h, l, p, d, c, 0, !0);
            return n.makeTensorInfo(o, f.dtype, f.values)
        }
    };
    var br = {
            kernelName: a.Select,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = t.condition,
                    i = t.t,
                    o = t.e;
                s([r, i, o], "select");
                for (var u = r.shape.length, d = n.data.get(r.dataId).values, p = n.data.get(i.dataId).values, l = n.data.get(o.dataId).values, c = a.upcastType(i.dtype, o.dtype), h = a.util.makeZerosTypedArray(a.util.sizeFromShape(i.shape), c), f = 0, m = 0 === u || u > 1 || 1 === i.shape.length ? 1 : a.util.sizeFromShape(i.shape.slice(1)), v = 0; v < d.length; v++)
                    for (var k = 0; k < m; k++) 1 === d[v] ? h[f++] = p[v] : h[f++] = l[v];
                return n.makeTensorInfo(i.shape, c, h)
            }
        },
        Ir = a.backend_util.SELU_SCALEALPHA,
        yr = a.backend_util.SELU_SCALE,
        Nr = D(a.Selu, (function(e) {
            return e >= 0 ? yr * e : Ir * (Math.exp(e) - 1)
        })),
        Tr = {
            kernelName: a.Selu,
            backendName: "cpu",
            kernelFunc: Nr
        },
        xr = D(a.Sign, (function(e) {
            return e < 0 ? -1 : e > 0 ? 1 : 0
        })),
        Sr = {
            kernelName: a.Sign,
            backendName: "cpu",
            kernelFunc: xr
        },
        Fr = D(a.Sin, (function(e) {
            return Math.sin(e)
        })),
        Mr = {
            kernelName: a.Sin,
            backendName: "cpu",
            kernelFunc: Fr
        },
        Ar = D(a.Sinh, (function(e) {
            return Math.sinh(e)
        })),
        wr = {
            kernelName: a.Sinh,
            backendName: "cpu",
            kernelFunc: Ar
        },
        Dr = Math.log(1.1920928955078125e-7) + 2,
        _r = D(a.Softplus, (function(e) {
            var a = e > -Dr,
                t = e < Dr,
                n = Math.exp(e);
            return t ? n : a ? e : Math.log(1 + n)
        })),
        zr = {
            kernelName: a.Softplus,
            backendName: "cpu",
            kernelFunc: _r
        };
    var Er = {
        kernelName: a.SpaceToBatchND,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.blockShape,
                u = r.paddings;
            s([i], "spaceToBatchND");
            var d = a.util.sizeFromShape(o),
                p = [
                    [0, 0]
                ];
            p.push.apply(p, u);
            for (var l = 1 + o.length; l < i.shape.length; ++l) p.push([0, 0]);
            var c = tr.kernelFunc({
                    inputs: {
                        x: i
                    },
                    backend: n,
                    attrs: {
                        paddings: p,
                        constantValue: 0
                    }
                }),
                h = a.backend_util.getReshaped(c.shape, o, d, !1),
                f = a.backend_util.getPermuted(h.length, o.length, !1),
                m = a.backend_util.getReshapedPermuted(c.shape, o, d, !1),
                v = Ia({
                    inputs: {
                        x: c
                    },
                    backend: n,
                    attrs: {
                        shape: h
                    }
                }),
                k = we({
                    inputs: {
                        x: v
                    },
                    backend: n,
                    attrs: {
                        perm: f
                    }
                }),
                g = Ia({
                    inputs: {
                        x: k
                    },
                    backend: n,
                    attrs: {
                        shape: m
                    }
                });
            return n.disposeIntermediateTensorInfo(c), n.disposeIntermediateTensorInfo(v), n.disposeIntermediateTensorInfo(k), g
        }
    };
    var Wr = {
        kernelName: a.SparseFillEmptyRows,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = a.indices,
                r = a.values,
                i = a.denseShape,
                s = a.defaultValue;
            if (1 !== i.shape.length) throw new Error("Dense shape must be a vector, saw:\n        " + i.shape);
            if (2 !== n.shape.length) throw new Error("Indices must be a matrix, saw:\n        " + n.shape);
            if (1 !== r.shape.length) throw new Error("Values must be a vector, saw:\n        " + r.shape);
            if (0 !== s.shape.length) throw new Error("Default value must be a scalar, saw:\n        " + s.shape);
            var o = t.data.get(n.dataId).values,
                u = t.data.get(r.dataId).values,
                d = t.data.get(i.dataId).values,
                p = t.data.get(s.dataId).values[0],
                l = Ge(o, n.shape, n.dtype, u, r.dtype, d, p),
                c = l[0],
                h = l[1],
                f = l[2],
                m = l[3],
                v = l[4];
            return [t.makeTensorInfo(h, n.dtype, c), t.makeTensorInfo([h[0]], r.dtype, f), t.makeTensorInfo([m.length], "bool", new Uint8Array(m.map((function(e) {
                return Number(e)
            })))), t.makeTensorInfo([v.length], n.dtype, new Int32Array(v))]
        }
    };
    var Cr = {
        kernelName: a.SparseReshape,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = a.inputIndices,
                r = a.inputShape,
                i = a.newShape;
            if (2 !== n.shape.length) throw new Error("Input indices should be a matrix but received shape\n        " + n.shape);
            if (1 !== r.shape.length) throw new Error("Input shape should be a vector but received shape\n        " + r.shape);
            if (1 !== i.shape.length) throw new Error("Target shape should be a vector but received shape " + i.shape);
            var s = Array.from(t.data.get(r.dataId).values),
                o = t.data.get(n.dataId).values,
                u = Array.from(t.data.get(i.dataId).values),
                d = Oe(o, n.shape, n.dtype, s, u),
                p = d[0],
                l = d[1],
                c = d[2];
            return [t.makeTensorInfo(l, n.dtype, p), t.makeTensorInfo([c.length], i.dtype, new Int32Array(c))]
        }
    };
    var Hr = {
        kernelName: a.SparseSegmentMean,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = a.data,
                r = a.indices,
                i = a.segmentIds;
            if (n.shape.length < 1) throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== r.shape.length) throw new Error("Indices should be a vector but received shape\n          " + r.shape);
            if (1 !== i.shape.length) throw new Error("Segment ids should be a vector but received shape\n          " + i.shape);
            var s = t.data.get(n.dataId).values,
                o = t.data.get(r.dataId).values,
                u = t.data.get(i.dataId).values,
                d = Le(s, n.shape, n.dtype, o, u, !0),
                p = d[0],
                l = d[1];
            return t.makeTensorInfo(l, n.dtype, p)
        }
    };
    var Pr = {
        kernelName: a.SparseSegmentSum,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = a.data,
                r = a.indices,
                i = a.segmentIds;
            if (n.shape.length < 1) throw new Error("Data should be at least 1 dimensional but received scalar");
            if (1 !== r.shape.length) throw new Error("Indices should be a vector but received shape\n         " + r.shape);
            if (1 !== i.shape.length) throw new Error("Segment ids should be a vector but received shape\n         " + i.shape);
            var s = t.data.get(n.dataId).values,
                o = t.data.get(r.dataId).values,
                u = t.data.get(i.dataId).values,
                d = Le(s, n.shape, n.dtype, o, u),
                p = d[0],
                l = d[1];
            return t.makeTensorInfo(l, n.dtype, p)
        }
    };
    var Rr = {
        kernelName: a.SparseToDense,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.sparseIndices,
                s = t.sparseValues,
                o = t.defaultValue,
                u = r.outputShape,
                d = a.backend_util.calculateShapes(s, i, u),
                p = d.sliceRank,
                l = d.numUpdates,
                c = d.sliceSize,
                h = d.strides,
                f = d.outputSize,
                m = kr(n.bufferSync(i), n.bufferSync(s), u, f, c, l, p, h, n.data.get(o.dataId).values[0], !1);
            return n.makeTensorInfo(u, m.dtype, m.values)
        }
    };
    var Br = {
            kernelName: a.SplitV,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t.x,
                    s = r.numOrSizeSplits,
                    o = r.axis,
                    u = a.util.parseAxisParam(o, i.shape)[0],
                    d = a.backend_util.prepareSplitSize(i, s, u),
                    p = new Array(i.shape.length).fill(0),
                    l = i.shape.slice();
                return d.map((function(e) {
                    var a = l.slice();
                    a[u] = e;
                    var t = Re({
                        inputs: {
                            x: i
                        },
                        backend: n,
                        attrs: {
                            begin: p,
                            size: a
                        }
                    });
                    return p[u] += e, t
                }))
            }
        },
        Gr = D(a.Sqrt, (function(e) {
            return Math.sqrt(e)
        })),
        Or = {
            kernelName: a.Sqrt,
            backendName: "cpu",
            kernelFunc: Gr
        },
        Lr = {
            kernelName: a.Square,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.inputs,
                    t = e.backend,
                    n = a.x,
                    r = t;
                s(n, "square");
                for (var i = r.data.get(n.dataId).values, o = new Float32Array(i.length), u = 0; u < i.length; ++u) {
                    var d = i[u];
                    o[u] = d * d
                }
                return {
                    dataId: r.write(o, n.shape, n.dtype),
                    shape: n.shape,
                    dtype: n.dtype
                }
            }
        },
        Vr = D(a.Step, (function(e, a) {
            var t = a;
            return isNaN(e) ? NaN : e > 0 ? 1 : t.alpha
        })),
        qr = {
            kernelName: a.Step,
            backendName: "cpu",
            kernelFunc: Vr
        };
    var Ur = {
        kernelName: a.StridedSlice,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.backend,
                r = e.attrs,
                i = t.x,
                o = r.begin,
                u = r.end,
                d = r.strides,
                p = r.beginMask,
                l = r.endMask,
                c = r.ellipsisMask,
                h = r.newAxisMask,
                f = r.shrinkAxisMask;
            s(i, "stridedSlice");
            var m, v = a.slice_util.sliceInfo(i.shape, o, u, d, p, l, c, h, f),
                k = v.nonStrided,
                g = v.$begin,
                b = v.$strides,
                I = v.size,
                y = v.newShape,
                N = v.outShape,
                T = Ia({
                    inputs: {
                        x: i
                    },
                    backend: n,
                    attrs: {
                        shape: y
                    }
                });
            if (k) {
                var x = Re({
                    inputs: {
                        x: T
                    },
                    backend: n,
                    attrs: {
                        begin: g,
                        size: I
                    }
                });
                m = Ia({
                    inputs: {
                        x: x
                    },
                    backend: n,
                    attrs: {
                        shape: N
                    }
                }), n.disposeIntermediateTensorInfo(x)
            } else if (N.some((function(e) {
                    return 0 === e
                }))) m = n.makeTensorInfo(N, i.dtype, []);
            else {
                var S = Ze(N, n.bufferSync(T), b, g);
                m = n.makeTensorInfo(S.shape, S.dtype, S.values)
            }
            var F = Ia({
                inputs: {
                    x: m
                },
                backend: n,
                attrs: {
                    shape: N
                }
            });
            return n.disposeIntermediateTensorInfo(T), n.disposeIntermediateTensorInfo(m), F
        }
    };
    var Zr = {
        kernelName: a.StringNGrams,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = n.separator,
                i = n.nGramWidths,
                s = n.leftPad,
                o = n.rightPad,
                u = n.padWidth,
                d = n.preserveShortSequences,
                p = a.data,
                l = a.dataSplits,
                c = Ke(t.data.get(p.dataId).values, t.data.get(l.dataId).values, r, i, s, o, u, d),
                h = c[0],
                f = c[1];
            return [t.makeTensorInfo([h.length], "string", h), t.makeTensorInfo(l.shape, "int32", f)]
        }
    };
    var jr = {
        kernelName: a.StringSplit,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs.skipEmpty,
                r = a.input,
                i = a.delimiter;
            if ("string" !== r.dtype) throw new Error("Input must be of datatype string");
            if (1 !== r.shape.length) throw new Error("Input must be a vector, got shape: " + r.shape);
            if (0 !== i.shape.length) throw new Error("Delimiter must be a scalar, got shape: " + i.shape);
            var s = $e(t.data.get(r.dataId).values, t.data.get(i.dataId).values[0], n),
                o = s[0],
                u = s[1],
                d = s[2],
                p = u.length;
            return [t.makeTensorInfo([p, 2], "int32", o), t.makeTensorInfo([p], "string", u), t.makeTensorInfo([2], "int32", new Int32Array(d))]
        }
    };
    var Kr = {
            kernelName: a.StringToHashBucketFast,
            backendName: "cpu",
            kernelFunc: function(e) {
                var a = e.inputs,
                    t = e.backend,
                    n = e.attrs.numBuckets,
                    r = a.input;
                if ("string" !== r.dtype) throw new Error("Input must be of datatype string");
                if (n <= 0) throw new Error("Number of buckets must be at least 1");
                var i = Je(t.data.get(r.dataId).values, n);
                return t.makeTensorInfo(r.shape, "int32", i)
            }
        },
        Yr = D(a.Tan, (function(e) {
            return Math.tan(e)
        })),
        $r = {
            kernelName: a.Tan,
            backendName: "cpu",
            kernelFunc: Yr
        },
        Jr = D(a.Tanh, (function(e) {
            return Math.tanh(e)
        })),
        Qr = {
            kernelName: a.Tanh,
            backendName: "cpu",
            kernelFunc: Jr
        };
    var Xr = {
        kernelName: a.Tile,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = a.x,
                i = n.reps;
            s(r, "tile");
            var o = ta(t.bufferSync(r), i);
            return t.makeTensorInfo(o.shape, o.dtype, o.values)
        }
    };
    var ei = {
        kernelName: a.TopK,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = a.x,
                i = n.k;
            n.sorted, s(r, "topk");
            var o = na(t.data.get(r.dataId).values, r.shape, r.dtype, i),
                u = o[0],
                d = o[1];
            return [t.makeTensorInfo(u.shape, u.dtype, u.values), t.makeTensorInfo(d.shape, d.dtype, d.values)]
        }
    };
    var ai = {
        kernelName: a.Transform,
        backendName: "cpu",
        kernelFunc: function(e) {
            var t = e.inputs,
                n = e.attrs,
                r = e.backend,
                i = t.image,
                s = t.transforms,
                o = n.interpolation,
                u = n.fillMode,
                d = n.fillValue,
                p = n.outputShape,
                l = i.shape,
                c = l[0],
                h = l[1],
                f = l[2],
                m = l[3],
                v = null != p ? p : [h, f],
                k = v[0],
                g = v[1],
                b = [c, k, g, m],
                I = a.util.computeStrides(i.shape),
                y = I[0],
                N = I[1],
                T = I[2],
                x = a.util.getTypedArrayFromDType(i.dtype, a.util.sizeFromShape(b));
            x.fill(d);
            for (var S = r.data.get(i.dataId).values, F = r.data.get(s.dataId).values, M = 0; M < c; ++M) {
                for (var A = 1 === s.shape[0] ? F : F.subarray(8 * M, 8 * M + 8), w = 0; w < k; ++w)
                    for (var D = 0; D < g; ++D)
                        for (var _ = 0; _ < m; ++_) {
                            var z = void 0,
                                E = A[6] * D + A[7] * w + 1;
                            if (0 !== E) {
                                var W = (A[0] * D + A[1] * w + A[2]) / E,
                                    C = (A[3] * D + A[4] * w + A[5]) / E,
                                    H = ti(W, f, u),
                                    P = ti(C, h, u);
                                switch (o) {
                                    case "nearest":
                                        z = ri(S, h, f, y, N, T, M, P, H, _, d);
                                        break;
                                    case "bilinear":
                                        z = ii(S, h, f, y, N, T, M, P, H, _, d);
                                        break;
                                    default:
                                        throw new Error("Error in Transform: Expect 'nearest' or 'bilinear', but got " + o)
                                }
                                x[M * y + w * N + D * T + _] = z
                            }
                        }
                return r.makeTensorInfo(b, i.dtype, x)
            }
            return {
                dataId: r.write(x, b, i.dtype),
                shape: i.shape,
                dtype: i.dtype
            }
        }
    };

    function ti(e, t, n) {
        switch (n) {
            case "reflect":
                return function(e, t) {
                    var n = e;
                    if (n < 0) {
                        if (t <= 1) n = 0;
                        else n < (r = 2 * t) && (n = r * Math.trunc(-n / r) + n), n = n < -t ? n + r : -n - 1
                    } else if (n > t - 1) {
                        var r;
                        if (t <= 1) n = 0;
                        else(n -= (r = 2 * t) * Math.trunc(n / r)) >= t && (n = r - n - 1)
                    }
                    return a.util.clamp(0, n, t - 1)
                }(e, t);
            case "wrap":
                return function(e, t) {
                    var n = e;
                    if (n < 0)
                        if (t <= 1) n = 0;
                        else {
                            var r = t - 1;
                            n += t * (Math.trunc(-n / r) + 1)
                        }
                    else if (n > t - 1)
                        if (t <= 1) n = 0;
                        else {
                            r = t - 1;
                            n -= t * Math.trunc(n / r)
                        }
                    return a.util.clamp(0, n, t - 1)
                }(e, t);
            case "nearest":
                return function(e, t) {
                    return a.util.clamp(0, e, t - 1)
                }(e, t);
            case "constant":
            default:
                return function(e, a) {
                    return e
                }(e)
        }
    }

    function ni(e, a, t, n, r, i, s, o, u, d, p) {
        return 0 <= o && o < a && 0 <= u && u < t ? e[s * n + o * r + u * i + d] : p
    }

    function ri(e, a, t, n, r, i, s, o, u, d, p) {
        return ni(e, a, t, n, r, i, s, Math.round(o), Math.round(u), d, p)
    }

    function ii(e, a, t, n, r, i, s, o, u, d, p) {
        var l = Math.floor(o),
            c = Math.floor(u),
            h = l + 1,
            f = c + 1;
        return (h - o) * ((f - u) * ni(e, a, t, n, r, i, s, l, c, d, p) + (u - c) * ni(e, a, t, n, r, i, s, l, f, d, p)) + (o - l) * ((f - u) * ni(e, a, t, n, r, i, s, h, c, d, p) + (u - c) * ni(e, a, t, n, r, i, s, h, f, d, p))
    }
    var si = {
        kernelName: a.Unique,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.attrs,
                n = e.backend,
                r = t.axis,
                i = a.x;
            s(i, "unique");
            var o = ra(n.data.get(i.dataId).values, r, i.shape, i.dtype),
                u = o.outputValues,
                d = o.outputShape,
                p = o.indices;
            return [n.makeTensorInfo(d, i.dtype, u), n.makeTensorInfo([p.length], "int32", p)]
        }
    };
    var oi = {
        kernelName: a.Unpack,
        backendName: "cpu",
        kernelFunc: function(e) {
            var a = e.inputs,
                t = e.backend,
                n = e.attrs,
                r = a.value,
                i = n.axis;
            i < 0 && (i += r.shape.length);
            for (var s = r.shape.length, o = r.shape[i], u = new Array(s - 1), d = 0, p = 0; p < s; p++) p !== i && (u[d++] = r.shape[p]);
            var l = new Array(s).fill(0),
                c = r.shape.slice();
            c[i] = 1;
            var h = new Array(o);
            for (p = 0; p < h.length; p++) {
                l[i] = p;
                var f = Re({
                    inputs: {
                        x: r
                    },
                    backend: t,
                    attrs: {
                        begin: l,
                        size: c
                    }
                });
                h[p] = Ia({
                    inputs: {
                        x: f
                    },
                    backend: t,
                    attrs: {
                        shape: u
                    }
                }), t.disposeIntermediateTensorInfo(f)
            }
            return h
        }
    };
    for (var ui = {
            kernelName: a.UnsortedSegmentSum,
            backendName: "cpu",
            kernelFunc: function(e) {
                var t = e.inputs,
                    n = e.backend,
                    r = e.attrs,
                    i = t.x,
                    o = t.segmentIds,
                    u = r.numSegments;
                s(i, "unsortedSegmentSum");
                for (var d = [], p = [], l = i.shape.length - o.shape.length, c = o, h = 0; h < l; ++h) {
                    var f = Vt({
                        inputs: {
                            input: c
                        },
                        backend: n,
                        attrs: {
                            dim: h + 1
                        }
                    });
                    c = f, p.push(f)
                }
                for (h = 0; h < u; ++h) {
                    var m = a.util.createScalarValue(h, "int32"),
                        v = n.makeTensorInfo([], "int32", m),
                        k = P({
                            inputs: {
                                a: v,
                                b: c
                            },
                            backend: n
                        }),
                        g = b({
                            inputs: {
                                x: k
                            },
                            backend: n,
                            attrs: {
                                dtype: "float32"
                            }
                        }),
                        I = ye({
                            inputs: {
                                a: g,
                                b: i
                            },
                            backend: n
                        }),
                        y = _t({
                            inputs: {
                                x: I
                            },
                            backend: n,
                            attrs: {
                                axis: 0,
                                keepDims: !1
                            }
                        });
                    d.push(y), p.push(v), p.push(k), p.push(g), p.push(I), p.push(y)
                }
                var N = er({
                    inputs: d,
                    backend: n,
                    attrs: {
                        axis: 0
                    }
                });
                return p.forEach((function(e) {
                    return n.disposeIntermediateTensorInfo(e)
                })), N
            }
        }, di = 0, pi = [xa, p, Fa, Aa, F, wa, Da, _a, za, Ea, Ca, Pa, Ba, La, qa, Ka, Ya, $a, Ja, Ta, Qa, Xa, et, I, W, tt, h, nt, ot, pt, lt, dt, ht, ft, ct, vt, gt, bt, It, yt, Nt, xt, St, Ft, Mt, At, Dt, wt, jt, Et, oa, Wt, R, Lt, O, qt, q, $t, Qt, Xt, j, tn, nn, rn, sn, on, Q, ae, v, un, it, pn, cn, fn, da, re, oe, mn, le, kn, In, Nn, Sn, Fn, Mn, me, Dn, _n, zn, En, Wn, wn, Cn, Hn, ge, Pn, Gn, Vn, Ne, xe, Un, jn, Yn, Me, $n, Xn, ar, tr, ir, ca, ze, sr, g, ur, fa, va, ya, dr, pr, lr, cr, hr, fr, vr, He, gr, br, Tr, ga, Sr, Mr, wr, Be, Ln, zr, Er, Wr, Cr, Hr, Pr, Rr, Br, Or, Lr, Ue, qr, Ur, Zr, jr, Kr, aa, zt, $r, Qr, Xr, ei, De, ai, si, oi, ui, Qn]; di < pi.length; di++) {
        var li = pi[di];
        a.registerKernel(li)
    }
    e.MathBackendCPU = u, e.shared = ia, e.version_cpu = "3.7.0", Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));
//# sourceMappingURL=tf-backend-cpu.min.js.map