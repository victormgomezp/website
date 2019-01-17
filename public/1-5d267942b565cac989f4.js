(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    176: function(e, t, a) {
      "use strict";
      var n = a(36),
        r = a(0),
        s = a.n(r);
      a(286);
      t.a = function(e) {
        var t = e.author,
          a = e.title;
        return s.a.createElement(
          "div",
          { className: "footer" },
          s.a.createElement(
            "div",
            { className: "container" },
            s.a.createElement("hr", { className: "border-primary" }),
            s.a.createElement(
              "p",
              null,
              a,
              s.a.createElement(
                n.Link,
                { to: "/profile/" },
                s.a.createElement("br", null),
                s.a.createElement("strong", null, t),
                " on Profile"
              )
            )
          )
        );
      };
    },
    178: function(e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        s = a(287),
        i = a.n(s),
        o = a(157),
        l = a.n(o);
      t.a = function(e) {
        var t = e.site,
          a = e.title,
          n = l()(t, "title");
        return (
          (a = a ? a + " | " + n : n),
          r.a.createElement(i.a, {
            title: a,
            meta: [
              { name: "twitter:card", content: "summary" },
              { name: "twitter:site", content: "@" + l()(t, "twitter") },
              { property: "og:title", content: a },
              { property: "og:type", content: "website" },
              { property: "og:description", content: l()(t, "description") },
              { property: "og:url", content: l()(t, "siteUrl") + "/profile" },
              {
                property: "og:image",
                content: l()(t, "siteUrl") + "/img/profile.jpg"
              }
            ]
          })
        );
      };
    },
    179: function(e, t, a) {
      "use strict";
      a(27);
      var n = a(7),
        r = a.n(n),
        s = a(0),
        i = a.n(s),
        o = a(295),
        l = a.n(o),
        c = a(36),
        m = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.location,
                a = e.title;
              return i.a.createElement(
                "nav",
                {
                  className:
                    "navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"
                },
                i.a.createElement(
                  "div",
                  { className: "container" },
                  i.a.createElement(
                    c.Link,
                    { className: "text-center", to: "/" },
                    i.a.createElement(
                      "h1",
                      { className: "navbar-brand mb-0" },
                      a
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: "navbar-nav-scroll" },
                    i.a.createElement(
                      "ul",
                      { className: "navbar-nav bd-navbar-nav flex-row" },
                      i.a.createElement(
                        "li",
                        {
                          className:
                            "/" === t.pathname ? "nav-item active" : "nav-item"
                        },
                        i.a.createElement(
                          c.Link,
                          { to: "/", className: "nav-link" },
                          "Home"
                        )
                      ),
                      i.a.createElement(
                        "li",
                        {
                          className:
                            "/profile/" === t.pathname
                              ? "nav-item active"
                              : "nav-item"
                        },
                        i.a.createElement(
                          c.Link,
                          { to: "/profile/", className: "nav-link" },
                          "Profile"
                        )
                      )
                    )
                  ),
                  i.a.createElement("div", {
                    className: "navbar-nav flex-row ml-md-auto d-none d-md-flex"
                  })
                )
              );
            }),
            t
          );
        })(i.a.Component),
        p = a(176),
        g = a(200),
        u = (a(296),
        a(297),
        a(298),
        a(299),
        a(300),
        (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          r()(t, e);
          var a = t.prototype;
          return (
            (a.componentDidMount = function() {
              l.a.init();
            }),
            (a.componentDidUpdate = function() {
              l.a.init();
            }),
            (a.render = function() {
              var e = this.props.children;
              return i.a.createElement(
                "div",
                null,
                i.a.createElement(
                  m,
                  Object.assign({ title: g.siteMetadata.title }, this.props)
                ),
                e,
                i.a.createElement(p.a, {
                  title: g.siteMetadata.title,
                  author: g.siteMetadata.author
                })
              );
            }),
            t
          );
        })(i.a.Component));
      t.a = u;
    },
    200: function(e, t) {
      (function(t) {
        e.exports = {
          siteMetadata: {
            title: "Gatstrap",
            description: "Gatsby starter for bootstrap a blog",
            siteUrl: "https://gatstrap.netlify.com",
            author: "jaxx2104",
            twitter: "jaxx2104",
            adsense: ""
          },
          pathPrefix: "/",
          plugins: [
            {
              resolve: "gatsby-source-filesystem",
              options: { path: t + "/content/posts/", name: "posts" }
            },
            {
              resolve: "gatsby-source-filesystem",
              options: { path: t + "/content/images/", name: "images" }
            },
            {
              resolve: "gatsby-transformer-remark",
              options: {
                plugins: [
                  {
                    resolve: "gatsby-remark-images",
                    options: {
                      maxWidth: 750,
                      linkImagesToOriginal: !1,
                      wrapperStyle: "margin-bottom: 1.0725rem;"
                    }
                  },
                  {
                    resolve: "gatsby-remark-responsive-iframe",
                    options: { wrapperStyle: "margin-bottom: 1.0725rem" }
                  },
                  "gatsby-remark-prismjs",
                  "gatsby-remark-copy-linked-files",
                  "gatsby-remark-smartypants"
                ]
              }
            },
            {
              resolve: "gatsby-plugin-manifest",
              options: {
                name: "Gatstrap",
                short_name: "Gatstrap",
                description: "Gatsby starter for bootstrap a blog",
                homepage_url: "https://gatstrap.netlify.com",
                start_url: "/",
                background_color: "#fff",
                theme_color: "#673ab7",
                display: "standalone",
                icons: [
                  {
                    src: "/img/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                  },
                  {
                    src: "/img/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                  }
                ]
              }
            },
            {
              resolve: "gatsby-plugin-google-analytics",
              options: { trackingId: "" }
            },
            {
              resolve: "gatsby-plugin-netlify",
              options: {
                mergeSecurityHeaders: !0,
                mergeLinkHeaders: !0,
                mergeCachingHeaders: !0
              }
            },
            "gatsby-plugin-catch-links",
            "gatsby-plugin-offline",
            "gatsby-plugin-react-helmet",
            "gatsby-plugin-react-next",
            "gatsby-plugin-sass",
            "gatsby-plugin-sharp",
            "gatsby-plugin-sitemap",
            "gatsby-plugin-twitter",
            "gatsby-transformer-sharp"
          ]
        };
      }.call(this, "/"));
    },
    286: function(e, t, a) {},
    298: function(e, t, a) {}
  }
]);
//# sourceMappingURL=1-5d267942b565cac989f4.js.map
