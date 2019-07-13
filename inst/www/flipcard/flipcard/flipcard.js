/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./srcjs/flipcard.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-card-flip/lib/react-card-flip.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-card-flip/lib/react-card-flip.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 2);
  }([function (e, t, r) {
    e.exports = r(5)();
  }, function (e, t, r) {
    "use strict";

    e.exports = r(3);
  }, function (e, t, r) {
    "use strict";

    r.r(t);
    var n = r(1),
        o = r.n(n),
        i = r(0),
        c = r.n(i);

    function u(e) {
      return (u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }))), n.forEach(function (t) {
          f(e, t, r[t]);
        });
      }

      return e;
    }

    function f(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function l(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function s(e, t) {
      return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }(e) : t;
    }

    function p(e) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function y(e, t) {
      return (y = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    var d = function (e) {
      function t(e) {
        var r;
        return function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, t), (r = s(this, p(t).call(this, e))).state = {
          isFlipped: r.props.isFlipped,
          rotation: 0
        }, r;
      }

      var r, n, i;
      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && y(e, t);
      }(t, o.a.Component), r = t, (n = [{
        key: "componentWillReceiveProps",
        value: function value(e) {
          e.isFlipped !== this.props.isFlipped && (this.setState({
            isFlipped: e.isFlipped
          }), this.setState({
            rotation: this.state.rotation + 180
          }));
        }
      }, {
        key: "getComponent",
        value: function value(e) {
          return this.props.children.filter(function (t) {
            return t.key === e;
          });
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.flipDirection,
              r = e.infinite,
              n = e.flipSpeedFrontToBack,
              i = e.flipSpeedBackToFront,
              c = e.cardStyles,
              u = c.front,
              f = c.back,
              l = e.containerStyle,
              s = e.cardZIndex,
              p = this.state,
              y = p.isFlipped,
              d = p.rotation,
              b = "rotateY(".concat(r ? d : y ? 180 : 0, "deg)"),
              h = "rotateY(".concat(r ? d + 180 : y ? 0 : -180, "deg)"),
              m = "rotateX(".concat(r ? d : y ? 180 : 0, "deg)"),
              v = "rotateX(".concat(r ? d + 180 : y ? 0 : -180, "deg)"),
              g = {
            container: {
              perspective: "1000px",
              zIndex: "".concat(s)
            },
            flipper: {
              position: "relative",
              width: "100%",
              height: "100%"
            },
            front: a({
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              left: "0",
              position: y ? "absolute" : "relative",
              top: "0",
              transform: "horizontal" === t ? b : m,
              transformStyle: "preserve-3d",
              width: "100%",
              height: "100%",
              zIndex: "2",
              transition: "".concat(i, "s")
            }, u),
            back: a({
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              left: "0",
              position: y ? "relative" : "absolute",
              transform: "horizontal" === t ? h : v,
              transformStyle: "preserve-3d",
              top: "0",
              width: "100%",
              height: "100%",
              transition: "".concat(n, "s")
            }, f)
          };
          return o.a.createElement("div", {
            className: "react-card-flip",
            style: a({}, g.container, l)
          }, o.a.createElement("div", {
            className: "react-card-flipper",
            style: g.flipper
          }, o.a.createElement("div", {
            className: "react-card-front",
            style: g.front
          }, this.getComponent("front")), o.a.createElement("div", {
            className: "react-card-back",
            style: g.back
          }, this.getComponent("back"))));
        }
      }]) && l(r.prototype, n), i && l(r, i), t;
    }();

    d.propTypes = {
      cardStyles: c.a.shape({
        front: c.a.object,
        back: c.a.object
      }),
      cardZIndex: c.a.string,
      children: function children(e, t, r) {
        if (2 !== o.a.Children.count(e[t])) return new Error("".concat(r, " requires two children."));
      },
      containerStyle: c.a.object,
      flipDirection: function flipDirection(e, t, r) {
        if (e[t]) return "string" == typeof e[t] || e[t] instanceof String ? "horizontal" !== e[t].toLowerCase() && "vertical" !== e[t].toLowerCase() ? new Error("".concat(t, " expects (horizontal|vertical), got ").concat(e[t].toLowerCase())) : void 0 : new Error("".concat(t, " requires a string."));
      },
      flipSpeedBackToFront: c.a.number,
      flipSpeedFrontToBack: c.a.number,
      infinite: c.a.bool,
      isFlipped: c.a.bool
    }, d.defaultProps = {
      containerStyle: {},
      cardStyles: {
        front: {},
        back: {}
      },
      cardZIndex: "auto",
      flipDirection: "horizontal",
      flipSpeedBackToFront: .6,
      flipSpeedFrontToBack: .6,
      infinite: !1,
      isFlipped: !1
    }, t["default"] = d;
  }, function (e, t, r) {
    "use strict";
    /** @license React v16.8.6
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var n = r(4),
        o = "function" == typeof Symbol && Symbol["for"],
        i = o ? Symbol["for"]("react.element") : 60103,
        c = o ? Symbol["for"]("react.portal") : 60106,
        u = o ? Symbol["for"]("react.fragment") : 60107,
        a = o ? Symbol["for"]("react.strict_mode") : 60108,
        f = o ? Symbol["for"]("react.profiler") : 60114,
        l = o ? Symbol["for"]("react.provider") : 60109,
        s = o ? Symbol["for"]("react.context") : 60110,
        p = o ? Symbol["for"]("react.concurrent_mode") : 60111,
        y = o ? Symbol["for"]("react.forward_ref") : 60112,
        d = o ? Symbol["for"]("react.suspense") : 60113,
        b = o ? Symbol["for"]("react.memo") : 60115,
        h = o ? Symbol["for"]("react.lazy") : 60116,
        m = "function" == typeof Symbol && Symbol.iterator;

    function v(e) {
      for (var t = arguments.length - 1, r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 0; n < t; n++) {
        r += "&args[]=" + encodeURIComponent(arguments[n + 1]);
      }

      !function (e, t, r, n, o, i, c, u) {
        if (!e) {
          if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
            var a = [r, n, o, i, c, u],
                f = 0;
            (e = Error(t.replace(/%s/g, function () {
              return a[f++];
            }))).name = "Invariant Violation";
          }
          throw e.framesToPop = 1, e;
        }
      }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", r);
    }

    var g = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
        S = {};

    function O(e, t, r) {
      this.props = e, this.context = t, this.refs = S, this.updater = r || g;
    }

    function _() {}

    function j(e, t, r) {
      this.props = e, this.context = t, this.refs = S, this.updater = r || g;
    }

    O.prototype.isReactComponent = {}, O.prototype.setState = function (e, t) {
      "object" != _typeof(e) && "function" != typeof e && null != e && v("85"), this.updater.enqueueSetState(this, e, t, "setState");
    }, O.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }, _.prototype = O.prototype;
    var k = j.prototype = new _();
    k.constructor = j, n(k, O.prototype), k.isPureReactComponent = !0;
    var w = {
      current: null
    },
        P = {
      current: null
    },
        x = Object.prototype.hasOwnProperty,
        E = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };

    function C(e, t, r) {
      var n = void 0,
          o = {},
          c = null,
          u = null;
      if (null != t) for (n in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (c = "" + t.key), t) {
        x.call(t, n) && !E.hasOwnProperty(n) && (o[n] = t[n]);
      }
      var a = arguments.length - 2;
      if (1 === a) o.children = r;else if (1 < a) {
        for (var f = Array(a), l = 0; l < a; l++) {
          f[l] = arguments[l + 2];
        }

        o.children = f;
      }
      if (e && e.defaultProps) for (n in a = e.defaultProps) {
        void 0 === o[n] && (o[n] = a[n]);
      }
      return {
        $$typeof: i,
        type: e,
        key: c,
        ref: u,
        props: o,
        _owner: P.current
      };
    }

    function T(e) {
      return "object" == _typeof(e) && null !== e && e.$$typeof === i;
    }

    var R = /\/+/g,
        $ = [];

    function F(e, t, r, n) {
      if ($.length) {
        var o = $.pop();
        return o.result = e, o.keyPrefix = t, o.func = r, o.context = n, o.count = 0, o;
      }

      return {
        result: e,
        keyPrefix: t,
        func: r,
        context: n,
        count: 0
      };
    }

    function I(e) {
      e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > $.length && $.push(e);
    }

    function B(e, t, r) {
      return null == e ? 0 : function e(t, r, n, o) {
        var u = _typeof(t);

        "undefined" !== u && "boolean" !== u || (t = null);
        var a = !1;
        if (null === t) a = !0;else switch (u) {
          case "string":
          case "number":
            a = !0;
            break;

          case "object":
            switch (t.$$typeof) {
              case i:
              case c:
                a = !0;
            }

        }
        if (a) return n(o, t, "" === r ? "." + M(t, 0) : r), 1;
        if (a = 0, r = "" === r ? "." : r + ":", Array.isArray(t)) for (var f = 0; f < t.length; f++) {
          var l = r + M(u = t[f], f);
          a += e(u, l, n, o);
        } else if (l = null === t || "object" != _typeof(t) ? null : "function" == typeof (l = m && t[m] || t["@@iterator"]) ? l : null, "function" == typeof l) for (t = l.call(t), f = 0; !(u = t.next()).done;) {
          a += e(u = u.value, l = r + M(u, f++), n, o);
        } else "object" === u && v("31", "[object Object]" == (n = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, "");
        return a;
      }(e, "", t, r);
    }

    function M(e, t) {
      return "object" == _typeof(e) && null !== e && null != e.key ? function (e) {
        var t = {
          "=": "=0",
          ":": "=2"
        };
        return "$" + ("" + e).replace(/[=:]/g, function (e) {
          return t[e];
        });
      }(e.key) : t.toString(36);
    }

    function q(e, t) {
      e.func.call(e.context, t, e.count++);
    }

    function D(e, t, r) {
      var n = e.result,
          o = e.keyPrefix;
      e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? L(e, n, r, function (e) {
        return e;
      }) : null != e && (T(e) && (e = function (e, t) {
        return {
          $$typeof: i,
          type: e.type,
          key: t,
          ref: e.ref,
          props: e.props,
          _owner: e._owner
        };
      }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + r)), n.push(e));
    }

    function L(e, t, r, n, o) {
      var i = "";
      null != r && (i = ("" + r).replace(R, "$&/") + "/"), B(e, D, t = F(t, i, n, o)), I(t);
    }

    function N() {
      var e = w.current;
      return null === e && v("321"), e;
    }

    var V = {
      Children: {
        map: function map(e, t, r) {
          if (null == e) return e;
          var n = [];
          return L(e, n, null, t, r), n;
        },
        forEach: function forEach(e, t, r) {
          if (null == e) return e;
          B(e, q, t = F(null, null, t, r)), I(t);
        },
        count: function count(e) {
          return B(e, function () {
            return null;
          }, null);
        },
        toArray: function toArray(e) {
          var t = [];
          return L(e, t, null, function (e) {
            return e;
          }), t;
        },
        only: function only(e) {
          return T(e) || v("143"), e;
        }
      },
      createRef: function createRef() {
        return {
          current: null
        };
      },
      Component: O,
      PureComponent: j,
      createContext: function createContext(e, t) {
        return void 0 === t && (t = null), (e = {
          $$typeof: s,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }).Provider = {
          $$typeof: l,
          _context: e
        }, e.Consumer = e;
      },
      forwardRef: function forwardRef(e) {
        return {
          $$typeof: y,
          render: e
        };
      },
      lazy: function lazy(e) {
        return {
          $$typeof: h,
          _ctor: e,
          _status: -1,
          _result: null
        };
      },
      memo: function memo(e, t) {
        return {
          $$typeof: b,
          type: e,
          compare: void 0 === t ? null : t
        };
      },
      useCallback: function useCallback(e, t) {
        return N().useCallback(e, t);
      },
      useContext: function useContext(e, t) {
        return N().useContext(e, t);
      },
      useEffect: function useEffect(e, t) {
        return N().useEffect(e, t);
      },
      useImperativeHandle: function useImperativeHandle(e, t, r) {
        return N().useImperativeHandle(e, t, r);
      },
      useDebugValue: function useDebugValue() {},
      useLayoutEffect: function useLayoutEffect(e, t) {
        return N().useLayoutEffect(e, t);
      },
      useMemo: function useMemo(e, t) {
        return N().useMemo(e, t);
      },
      useReducer: function useReducer(e, t, r) {
        return N().useReducer(e, t, r);
      },
      useRef: function useRef(e) {
        return N().useRef(e);
      },
      useState: function useState(e) {
        return N().useState(e);
      },
      Fragment: u,
      StrictMode: a,
      Suspense: d,
      createElement: C,
      cloneElement: function cloneElement(e, t, r) {
        null == e && v("267", e);
        var o = void 0,
            c = n({}, e.props),
            u = e.key,
            a = e.ref,
            f = e._owner;

        if (null != t) {
          void 0 !== t.ref && (a = t.ref, f = P.current), void 0 !== t.key && (u = "" + t.key);
          var l = void 0;

          for (o in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) {
            x.call(t, o) && !E.hasOwnProperty(o) && (c[o] = void 0 === t[o] && void 0 !== l ? l[o] : t[o]);
          }
        }

        if (1 === (o = arguments.length - 2)) c.children = r;else if (1 < o) {
          l = Array(o);

          for (var s = 0; s < o; s++) {
            l[s] = arguments[s + 2];
          }

          c.children = l;
        }
        return {
          $$typeof: i,
          type: e.type,
          key: u,
          ref: a,
          props: c,
          _owner: f
        };
      },
      createFactory: function createFactory(e) {
        var t = C.bind(null, e);
        return t.type = e, t;
      },
      isValidElement: T,
      version: "16.8.6",
      unstable_ConcurrentMode: p,
      unstable_Profiler: f,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: w,
        ReactCurrentOwner: P,
        assign: n
      }
    },
        z = {
      "default": V
    },
        A = z && V || z;
    e.exports = A["default"] || A;
  }, function (e, t, r) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */

    var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

        for (var t = {}, r = 0; r < 10; r++) {
          t["_" + String.fromCharCode(r)] = r;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          n[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
      } catch (e) {
        return !1;
      }
    }() ? Object.assign : function (e, t) {
      for (var r, c, u = function (e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e);
      }(e), a = 1; a < arguments.length; a++) {
        for (var f in r = Object(arguments[a])) {
          o.call(r, f) && (u[f] = r[f]);
        }

        if (n) {
          c = n(r);

          for (var l = 0; l < c.length; l++) {
            i.call(r, c[l]) && (u[c[l]] = r[c[l]]);
          }
        }
      }

      return u;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(6);

    function o() {}

    function i() {}

    i.resetWarningCache = o, e.exports = function () {
      function e(e, t, r, o, i, c) {
        if (c !== n) {
          var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw u.name = "Invariant Violation", u;
        }
      }

      function t() {
        return e;
      }

      e.isRequired = e;
      var r = {
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
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: i,
        resetWarningCache: o
      };
      return r.PropTypes = r, r;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./srcjs/flipcard.jsx":
/*!****************************!*\
  !*** ./srcjs/flipcard.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-card-flip */ "./node_modules/react-card-flip/lib/react-card-flip.js");
/* harmony import */ var react_card_flip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_card_flip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_1__);


var FlipCard = mobxReact.observer(function (_ref) {
  var configuration = _ref.configuration,
      value = _ref.value,
      setValue = _ref.setValue;
  var front = Object.assign({}, configuration.front);
  var back = Object.assign({}, configuration.back);
  var config = Object.assign({}, configuration);
  delete config.front;
  delete config.back;

  if (value !== "" && window.hasOwnProperty(value) && window[value].hasOwnProperty('isFlipped')) {
    config.isFlipped = window[value].isFlipped;
  }

  return React.createElement(react_card_flip__WEBPACK_IMPORTED_MODULE_0___default.a, config, [React.createElement('div', value !== "" && window.hasOwnProperty(value) && window[value].hasOwnProperty('isFlipped') ? {
    key: 'front',
    onClick: function onClick() {
      window[value].isFlipped = !window[value].isFlipped;
    }
  } : {
    key: 'front'
  }, React.createElement(front.tag, front.props, front.content)), React.createElement('div', value !== "" && window.hasOwnProperty(value) && window[value].hasOwnProperty('isFlipped') ? {
    key: 'back',
    onClick: function onClick() {
      window[value].isFlipped = !window[value].isFlipped;
    }
  } : {
    key: 'back'
  }, React.createElement(back.tag, back.props, back.content))]);
});
Object(reactR__WEBPACK_IMPORTED_MODULE_1__["reactShinyInput"])('.flipcard', 'flipcard.flipcard', FlipCard);

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.reactR;

/***/ })

/******/ });
//# sourceMappingURL=flipcard.js.map