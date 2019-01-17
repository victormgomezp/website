(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    152: function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        c = (t(36), t(156));
      a.default = function(e) {
        var a = e.data.markdownRemark;
        return r.a.createElement(
          c.a,
          null,
          r.a.createElement(
            "div",
            { className: "row" },
            r.a.createElement(
              "div",
              { class: "col-md-12" },
              r.a.createElement("h1", null, a.frontmatter.title),
              r.a.createElement("div", {
                className: "col-md-12",
                dangerouslySetInnerHTML: { __html: a.html }
              })
            )
          )
        );
      };
    },
    156: function(e, a, t) {
      "use strict";
      var n = t(0),
        r = t.n(n);
      a.a = function(e) {
        var a = e.children;
        return r.a.createElement("div", { className: "container" }, a);
      };
    }
  }
]);
//# sourceMappingURL=component---src-templates-about-us-template-js-ef8af4c86da9512a0ac9.js.map
