(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    155: function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        o = n.n(r),
        a = n(8),
        l = n.n(a),
        c = n(157),
        u = n.n(c),
        i = n(36),
        s = n(159),
        f = n.n(s),
        p = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            l()(t, e),
            (t.prototype.render = function() {
              return u.a.createElement(
                "div",
                {
                  className: "col-md-12 banner-page",
                  style: {
                    backgroundImage: "url(" + f.a + ")",
                    height: "100vh",
                    backgroundSize: "cover"
                  }
                },
                u.a.createElement(
                  "div",
                  { className: "titles" },
                  u.a.createElement(
                    "div",
                    null,
                    u.a.createElement(
                      "h3",
                      null,
                      "4Geeks Academy Miami Coding"
                    ),
                    u.a.createElement("h1", null, "<Time to Code>"),
                    u.a.createElement(
                      "h2",
                      null,
                      "Learn coding skills that change you life"
                    ),
                    u.a.createElement(
                      "p",
                      { className: "w-75" },
                      "Learn to code and join than 500 graduates already working as coders. Get career support for life and a become a part of one of the biggest communities in the world"
                    ),
                    u.a.createElement(
                      "div",
                      { className: "pt-4" },
                      u.a.createElement(
                        "button",
                        { type: "button", className: "btn btn-lg btn-1" },
                        "Apply Now"
                      ),
                      u.a.createElement(
                        "button",
                        { type: "button", className: "btn btn-lg btn-2" },
                        "Request Syllabus"
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(c.Component),
        m = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            l()(t, e),
            (t.prototype.render = function() {
              return u.a.createElement(
                "div",
                { className: "row full-width justify-content-center" },
                u.a.createElement(
                  "div",
                  { className: "col-md-12 no-padding" },
                  u.a.createElement(
                    "nav",
                    {
                      className:
                        "navbar navbar-expand-lg navbar-light menu px-3 position-absolute w-100 pt-5"
                    },
                    u.a.createElement(
                      "a",
                      { className: "navbar-brand", href: "#" },
                      "Logo"
                    ),
                    u.a.createElement(
                      "button",
                      {
                        className: "navbar-toggler",
                        type: "button",
                        "data-toggle": "collapse",
                        "data-target": "#navbarText",
                        "aria-controls": "navbarText",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation"
                      },
                      u.a.createElement("span", {
                        className: "navbar-toggler-icon"
                      })
                    ),
                    u.a.createElement(
                      "div",
                      { className: "collapse navbar-collapse" },
                      u.a.createElement(
                        "ul",
                        { className: "navbar-nav ml-auto ul-menu" },
                        u.a.createElement(
                          "li",
                          { className: "nav-item item-menu" },
                          u.a.createElement(
                            i.Link,
                            { to: "www.google.co.ve" },
                            "The programs"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          { className: "nav-item item-menu" },
                          u.a.createElement(
                            i.Link,
                            { to: "www.google.co.ve" },
                            "4G Academy"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          { className: "nav-item item-menu" },
                          u.a.createElement(
                            i.Link,
                            { to: "www.google.co.ve" },
                            "Partners"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          { className: "nav-item item-menu" },
                          u.a.createElement(
                            i.Link,
                            { to: "www.google.co.ve" },
                            "Upcoming programs"
                          )
                        )
                      )
                    )
                  ),
                  u.a.createElement(p, null)
                )
              );
            }),
            t
          );
        })(c.Component);
      n.d(t, "query", function() {
        return d;
      });
      t.default = function(e) {
        e.data, e.location;
        return o.a.createElement(
          "div",
          null,
          o.a.createElement("p", null, "Page index.js"),
          o.a.createElement(m, null),
          o.a.createElement(RowEvent, {
            date: "Our next cohort starts on December 3, 2018"
          }),
          o.a.createElement(Goals, { title: "6 Goals to change your life" }),
          o.a.createElement(
            "div",
            { className: "col-md-12" },
            o.a.createElement("p", null, "Index.js")
          )
        );
      };
      var d = "454015475";
    },
    157: function(e, t, n) {
      "use strict";
      e.exports = n(158);
    },
    158: function(e, t, n) {
      "use strict";
      var r = n(56),
        o = "function" == typeof Symbol && Symbol.for,
        a = o ? Symbol.for("react.element") : 60103,
        l = o ? Symbol.for("react.portal") : 60106,
        c = o ? Symbol.for("react.fragment") : 60107,
        u = o ? Symbol.for("react.strict_mode") : 60108,
        i = o ? Symbol.for("react.profiler") : 60114,
        s = o ? Symbol.for("react.provider") : 60109,
        f = o ? Symbol.for("react.context") : 60110,
        p = o ? Symbol.for("react.concurrent_mode") : 60111,
        m = o ? Symbol.for("react.forward_ref") : 60112,
        d = o ? Symbol.for("react.suspense") : 60113,
        y = o ? Symbol.for("react.memo") : 60115,
        v = o ? Symbol.for("react.lazy") : 60116,
        b = "function" == typeof Symbol && Symbol.iterator;
      function h(e) {
        for (
          var t = arguments.length - 1,
            n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            r = 0;
          r < t;
          r++
        )
          n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        !(function(e, t, n, r, o, a, l, c) {
          if (!e) {
            if (((e = void 0), void 0 === t))
              e = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var u = [n, r, o, a, l, c],
                i = 0;
              (e = Error(
                t.replace(/%s/g, function() {
                  return u[i++];
                })
              )).name = "Invariant Violation";
            }
            throw ((e.framesToPop = 1), e);
          }
        })(
          !1,
          "Minified React error #" +
            e +
            "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
          n
        );
      }
      var g = {
          isMounted: function() {
            return !1;
          },
          enqueueForceUpdate: function() {},
          enqueueReplaceState: function() {},
          enqueueSetState: function() {}
        },
        E = {};
      function w(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = E),
          (this.updater = n || g);
      }
      function k() {}
      function _(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = E),
          (this.updater = n || g);
      }
      (w.prototype.isReactComponent = {}),
        (w.prototype.setState = function(e, t) {
          "object" != typeof e &&
            "function" != typeof e &&
            null != e &&
            h("85"),
            this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (w.prototype.forceUpdate = function(e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (k.prototype = w.prototype);
      var S = (_.prototype = new k());
      (S.constructor = _), r(S, w.prototype), (S.isPureReactComponent = !0);
      var x = { current: null, currentDispatcher: null },
        N = Object.prototype.hasOwnProperty,
        $ = { key: !0, ref: !0, __self: !0, __source: !0 };
      function P(e, t, n) {
        var r = void 0,
          o = {},
          l = null,
          c = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (c = t.ref),
          void 0 !== t.key && (l = "" + t.key),
          t))
            N.call(t, r) && !$.hasOwnProperty(r) && (o[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) o.children = n;
        else if (1 < u) {
          for (var i = Array(u), s = 0; s < u; s++) i[s] = arguments[s + 2];
          o.children = i;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: c,
          props: o,
          _owner: x.current
        };
      }
      function j(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a;
      }
      var C = /\/+/g,
        R = [];
      function O(e, t, n, r) {
        if (R.length) {
          var o = R.pop();
          return (
            (o.result = e),
            (o.keyPrefix = t),
            (o.func = n),
            (o.context = r),
            (o.count = 0),
            o
          );
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function A(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > R.length && R.push(e);
      }
      function L(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, o) {
              var c = typeof t;
              ("undefined" !== c && "boolean" !== c) || (t = null);
              var u = !1;
              if (null === t) u = !0;
              else
                switch (c) {
                  case "string":
                  case "number":
                    u = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case a:
                      case l:
                        u = !0;
                    }
                }
              if (u) return r(o, t, "" === n ? "." + T(t, 0) : n), 1;
              if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                for (var i = 0; i < t.length; i++) {
                  var s = n + T((c = t[i]), i);
                  u += e(c, s, r, o);
                }
              else if (
                ((s =
                  null === t || "object" != typeof t
                    ? null
                    : "function" == typeof (s = (b && t[b]) || t["@@iterator"])
                    ? s
                    : null),
                "function" == typeof s)
              )
                for (t = s.call(t), i = 0; !(c = t.next()).done; )
                  u += e((c = c.value), (s = n + T(c, i++)), r, o);
              else
                "object" === c &&
                  h(
                    "31",
                    "[object Object]" == (r = "" + t)
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : r,
                    ""
                  );
              return u;
            })(e, "", t, n);
      }
      function T(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function(e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function(e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function U(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function q(e, t, n) {
        var r = e.result,
          o = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? I(e, r, n, function(e) {
                return e;
              })
            : null != e &&
              (j(e) &&
                (e = (function(e, t) {
                  return {
                    $$typeof: a,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner
                  };
                })(
                  e,
                  o +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(C, "$&/") + "/") +
                    n
                )),
              r.push(e));
      }
      function I(e, t, n, r, o) {
        var a = "";
        null != n && (a = ("" + n).replace(C, "$&/") + "/"),
          L(e, q, (t = O(t, a, r, o))),
          A(t);
      }
      var M = {
          Children: {
            map: function(e, t, n) {
              if (null == e) return e;
              var r = [];
              return I(e, r, null, t, n), r;
            },
            forEach: function(e, t, n) {
              if (null == e) return e;
              L(e, U, (t = O(null, null, t, n))), A(t);
            },
            count: function(e) {
              return L(
                e,
                function() {
                  return null;
                },
                null
              );
            },
            toArray: function(e) {
              var t = [];
              return (
                I(e, t, null, function(e) {
                  return e;
                }),
                t
              );
            },
            only: function(e) {
              return j(e) || h("143"), e;
            }
          },
          createRef: function() {
            return { current: null };
          },
          Component: w,
          PureComponent: _,
          createContext: function(e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          },
          forwardRef: function(e) {
            return { $$typeof: m, render: e };
          },
          lazy: function(e) {
            return { $$typeof: v, _ctor: e, _status: -1, _result: null };
          },
          memo: function(e, t) {
            return { $$typeof: y, type: e, compare: void 0 === t ? null : t };
          },
          Fragment: c,
          StrictMode: u,
          Suspense: d,
          createElement: P,
          cloneElement: function(e, t, n) {
            null == e && h("267", e);
            var o = void 0,
              l = r({}, e.props),
              c = e.key,
              u = e.ref,
              i = e._owner;
            if (null != t) {
              void 0 !== t.ref && ((u = t.ref), (i = x.current)),
                void 0 !== t.key && (c = "" + t.key);
              var s = void 0;
              for (o in (e.type &&
                e.type.defaultProps &&
                (s = e.type.defaultProps),
              t))
                N.call(t, o) &&
                  !$.hasOwnProperty(o) &&
                  (l[o] = void 0 === t[o] && void 0 !== s ? s[o] : t[o]);
            }
            if (1 === (o = arguments.length - 2)) l.children = n;
            else if (1 < o) {
              s = Array(o);
              for (var f = 0; f < o; f++) s[f] = arguments[f + 2];
              l.children = s;
            }
            return {
              $$typeof: a,
              type: e.type,
              key: c,
              ref: u,
              props: l,
              _owner: i
            };
          },
          createFactory: function(e) {
            var t = P.bind(null, e);
            return (t.type = e), t;
          },
          isValidElement: j,
          version: "16.7.0",
          unstable_ConcurrentMode: p,
          unstable_Profiler: i,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentOwner: x,
            assign: r
          }
        },
        F = { default: M },
        G = (F && M) || F;
      e.exports = G.default || G;
    },
    159: function(e, t, n) {
      e.exports = n.p + "static/night-48cac7cf94ce00a32a5771744b7919ff.jpg";
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-b5f7c21b1392047f5d69.js.map
