(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    151: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function() {
          return m;
        });
      var n = a(0),
        r = a.n(n),
        o = a(157),
        c = a.n(o),
        l = a(180),
        i = a(178),
        s = a(179);
      t.default = function(e) {
        var t = e.data,
          a = e.location,
          n = c()(t, "remark.posts");
        return r.a.createElement(
          s.a,
          { location: a },
          r.a.createElement(
            "div",
            {
              className:
                "row justify-content-center full-width descriptions-skills"
            },
            r.a.createElement(
              "div",
              { className: "col-4" },
              r.a.createElement("p", null, "Hola!")
            )
          ),
          r.a.createElement(i.a, { site: c()(t, "site.meta") }),
          n.map(function(e, t) {
            var a = e.post;
            return r.a.createElement(l.a, {
              data: a,
              options: { isIndex: !0 },
              key: t
            });
          })
        );
      };
      var m = "3940782376";
    },
    177: function(e, t, a) {},
    180: function(e, t, a) {
      "use strict";
      a(78), a(37), a(77);
      var n = a(36),
        r = a(157),
        o = a.n(r),
        c = a(0),
        l = a.n(c),
        i = a(188),
        s = a.n(i),
        m = a(175),
        d = a.n(m),
        u = a(7),
        p = a.n(u),
        f = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          p()(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function() {
              this.props.clientId &&
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            }),
            (a.render = function() {
              var e = this.props,
                t = e.clientId,
                a = e.slotId,
                n = e.format;
              return t
                ? l.a.createElement(
                    "div",
                    { className: "ad" },
                    l.a.createElement("ins", {
                      className: "adsbygoogle",
                      style: { display: "block" },
                      "data-ad-client": t,
                      "data-ad-slot": a,
                      "data-ad-format": n
                    })
                  )
                : "";
            }),
            t
          );
        })(l.a.Component),
        y = (a(176),
        a(177),
        (t.a = function(e) {
          var t = e.data,
            a = e.options,
            r = t.frontmatter,
            c = r.category,
            i = r.tags,
            s = r.description,
            m = r.title,
            u = r.path,
            p = r.date,
            f = r.image,
            h = a.isIndex,
            g = a.adsense,
            k = o()(t, "html"),
            w = h && !!k.match("\x3c!--more--\x3e"),
            N = o()(f, "childImageSharp.fixed");
          return l.a.createElement(
            "div",
            { className: "article", key: u },
            l.a.createElement(
              "div",
              { className: "container" },
              l.a.createElement(
                "div",
                { className: "info" },
                l.a.createElement(
                  n.Link,
                  { style: { boxShadow: "none" }, to: u },
                  l.a.createElement("h1", null, m),
                  l.a.createElement("time", { dateTime: p }, p)
                ),
                v({ items: [c], primary: !0 }),
                v({ items: i })
              ),
              l.a.createElement(
                "div",
                { className: "content" },
                l.a.createElement("p", null, s),
                N
                  ? l.a.createElement(d.a, {
                      fixed: N,
                      style: { display: "block", margin: "0 auto" }
                    })
                  : ""
              ),
              l.a.createElement("div", {
                className: "content",
                dangerouslySetInnerHTML: { __html: w ? E(k) : k }
              }),
              w ? b({ path: u, label: "MORE", primary: !0 }) : "",
              y(h, g)
            )
          );
        }),
        function(e, t) {
          return e
            ? ""
            : l.a.createElement(f, { clientId: t, slotId: "", format: "auto" });
        }),
        E = function(e) {
          return (e = e.replace(
            /<blockquote>/g,
            '<blockquote class="blockquote">'
          )).match("\x3c!--more--\x3e") &&
            void 0 !== (e = e.split("\x3c!--more--\x3e"))[0]
            ? e[0]
            : e;
        },
        b = function(e) {
          var t = e.path,
            a = e.label,
            r = e.primary;
          return l.a.createElement(
            n.Link,
            { className: "readmore", to: t },
            l.a.createElement(
              "span",
              {
                className:
                  "btn btn-outline-primary btn-block " +
                  (r ? "btn-outline-primary" : "btn-outline-secondary")
              },
              a
            )
          );
        },
        v = function(e) {
          var t = e.items,
            a = e.primary;
          return s()(t, function(e, t) {
            return l.a.createElement(
              "span",
              {
                className: "badge " + (a ? "badge-primary" : "badge-secondary"),
                key: t
              },
              e
            );
          });
        };
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-55dcbdec3a3d811a2588.js.map
