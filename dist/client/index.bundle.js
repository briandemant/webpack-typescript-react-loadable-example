!function (e) {
	var t = {}

	function n(o) {
		if (t[o]) return t[o].exports
		var r = t[o] = { i: o, l: !1, exports: {} }
		return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}

	n.m = e, n.c = t, n.d = function (e, t, o) {
		n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o })
	}, n.r = function (e) {
		'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
	}, n.t = function (e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e
		if (4 & t && 'object' == typeof e && e && e.__esModule) return e
		var o = Object.create(null)
		if (n.r(o), Object.defineProperty(o, 'default', {
			enumerable: !0,
			value: e,
		}), 2 & t && 'string' != typeof e) {
			for (var r in e) {
				n.d(o, r, function (t) {
					return e[t]
				}.bind(null, r))
			}
		}
		return o
	}, n.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		}
		return n.d(t, 'a', t), t
	}, n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = '/dist/client/', n(n.s = 9)
}([function (e, t) {
	e.exports = React
}, function (e, t, n) {
	'use strict'
	Object.defineProperty(t, '__esModule', { value: !0 })
	const o = n(0)
	t.default = class extends o.Component {
		render() {
			return o.createElement('div', null, 'Hello ', this.props.target, '!')
		}
	}
}, function (e, t, n) {
	'use strict'
	e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
}, function (e, t, n) {
	'use strict'
	var o = function (e) {
	}
	e.exports = function (e, t, n, r, i, u, a, l) {
		if (o(t), !e) {
			var s
			if (void 0 === t) {
				s = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.')
			} else {
				var c = [n, r, i, u, a, l], d = 0;
				(s = new Error(t.replace(/%s/g, function () {
					return c[d++]
				}))).name = 'Invariant Violation'
			}
			throw s.framesToPop = 1, s
		}
	}
}, function (e, t, n) {
	'use strict'

	function o(e) {
		return function () {
			return e
		}
	}

	var r = function () {
	}
	r.thatReturns = o, r.thatReturnsFalse = o(!1), r.thatReturnsTrue = o(!0), r.thatReturnsNull = o(null), r.thatReturnsThis = function () {
		return this
	}, r.thatReturnsArgument = function (e) {
		return e
	}, e.exports = r
}, function (e, t, n) {
	'use strict'
	var o = n(4), r = n(3), i = n(2)
	e.exports = function () {
		function e(e, t, n, o, u, a) {
			a !== i && r(!1, 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types')
		}

		function t() {
			return e
		}

		e.isRequired = e
		var n = {
			array: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
		}
		return n.checkPropTypes = o, n.PropTypes = n, n
	}
}, function (e, t, n) {
	e.exports = n(5)()
}, function (e, t, n) {
	'use strict'
	var o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
	}

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
	}

	function i(e, t) {
		if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')
		return !t || 'object' != typeof t && 'function' != typeof t ? e : t
	}

	function u(e, t) {
		if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0,
			},
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	var a = n(0), l = n(6), s = [], c = []

	function d(e) {
		var t = e(), n = { loading: !0, loaded: null, error: null }
		return n.promise = t.then(function (e) {
			return n.loading = !1, n.loaded = e, e
		}).catch(function (e) {
			throw n.loading = !1, n.error = e, e
		}), n
	}

	function f(e) {
		var t = { loading: !1, loaded: {}, error: null }, n = []
		try {
			Object.keys(e).forEach(function (o) {
				var r = d(e[o])
				r.loading ? t.loading = !0 : (t.loaded[o] = r.loaded, t.error = r.error), n.push(r.promise), r.promise.then(function (e) {
					t.loaded[o] = e
				}).catch(function (e) {
					t.error = e
				})
			})
		} catch (e) {
			t.error = e
		}
		return t.promise = Promise.all(n).then(function (e) {
			return t.loading = !1, e
		}).catch(function (e) {
			throw t.loading = !1, e
		}), t
	}

	function p(e, t) {
		return a.createElement((n = e) && n.__esModule ? n.default : n, t)
		var n
	}

	function h(e, t) {
		var d, f
		if (!t.loading) throw new Error('react-loadable requires a `loading` component')
		var h = Object.assign({ loader: null, loading: null, delay: 200, timeout: null, render: p, webpack: null, modules: null }, t), y = null

		function m() {
			return y || (y = e(h.loader)), y.promise
		}

		return s.push(m), 'function' == typeof h.webpack && c.push(function () {
			if (e = h.webpack, 'object' === o(n.m) && e().every(function (e) {
				return void 0 !== e && void 0 !== n.m[e]
			})) {
				return m()
			}
			var e
		}), f = d = function (t) {
			function n(o) {
				r(this, n)
				var u = i(this, t.call(this, o))
				return u.retry = function () {
					u.setState({ error: null, loading: !0 }), y = e(h.loader), u._loadModule()
				}, m(), u.state = { error: y.error, pastDelay: !1, timedOut: !1, loading: y.loading, loaded: y.loaded }, u
			}

			return u(n, t), n.preload = function () {
				return m()
			}, n.prototype.componentWillMount = function () {
				this._mounted = !0, this._loadModule()
			}, n.prototype._loadModule = function () {
				var e = this
				if (this.context.loadable && Array.isArray(h.modules) && h.modules.forEach(function (t) {
					e.context.loadable.report(t)
				}), y.loading) {
					'number' == typeof h.delay && (0 === h.delay ? this.setState({ pastDelay: !0 }) : this._delay = setTimeout(function () {
						e.setState({ pastDelay: !0 })
					}, h.delay)), 'number' == typeof h.timeout && (this._timeout = setTimeout(function () {
						e.setState({ timedOut: !0 })
					}, h.timeout))
					var t = function () {
						e._mounted && (e.setState({ error: y.error, loaded: y.loaded, loading: y.loading }), e._clearTimeouts())
					}
					y.promise.then(function () {
						t()
					}).catch(function (e) {
						t()
					})
				}
			}, n.prototype.componentWillUnmount = function () {
				this._mounted = !1, this._clearTimeouts()
			}, n.prototype._clearTimeouts = function () {
				clearTimeout(this._delay), clearTimeout(this._timeout)
			}, n.prototype.render = function () {
				return this.state.loading || this.state.error ? a.createElement(h.loading, {
					isLoading: this.state.loading,
					pastDelay: this.state.pastDelay,
					timedOut: this.state.timedOut,
					error: this.state.error,
					retry: this.retry,
				}) : this.state.loaded ? h.render(this.state.loaded, this.props) : null
			}, n
		}(a.Component), d.contextTypes = { loadable: l.shape({ report: l.func.isRequired }) }, f
	}

	function y(e) {
		return h(d, e)
	}

	y.Map = function (e) {
		if ('function' != typeof e.render) throw new Error('LoadableMap requires a `render(loaded, props)` function')
		return h(f, e)
	}
	var m = function (e) {
		function t() {
			return r(this, t), i(this, e.apply(this, arguments))
		}

		return u(t, e), t.prototype.getChildContext = function () {
			return { loadable: { report: this.props.report } }
		}, t.prototype.render = function () {
			return a.Children.only(this.props.children)
		}, t
	}(a.Component)

	function b(e) {
		for (var t = []; e.length;) {
			var n = e.pop()
			t.push(n())
		}
		return Promise.all(t).then(function () {
			if (e.length) return b(e)
		})
	}

	m.propTypes = { report: l.func.isRequired }, m.childContextTypes = { loadable: l.shape({ report: l.func.isRequired }).isRequired }, y.Capture = m, y.preloadAll = function () {
		return new Promise(function (e, t) {
			b(s).then(e, t)
		})
	}, y.preloadReady = function () {
		return new Promise(function (e, t) {
			b(c).then(e, e)
		})
	}, e.exports = y
}, function (e, t) {
	e.exports = ReactDOM
}, function (e, t, n) {
	'use strict'
	Object.defineProperty(t, '__esModule', { value: !0 })
	const o = n(0), r = n(8), i = n(7)
	t.LoadableHello = i({
		                    loader: () => (console.log('loader'), Promise.resolve().then(() => n(1))),
		                    loading: () => (console.log('loading'), o.createElement('div', null, 'loading ...')),
	                    })
	'undefined' != typeof window ? r.render(o.createElement(t.LoadableHello, { target: 'qwe' }), document.getElementById('app')) : console.log(Promise.resolve().then(() => n(1)))
}])
//# sourceMappingURL=index.bundle.js.map