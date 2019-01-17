(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    150: function(e, n, a) {
      "use strict";
      a.r(n),
        a.d(n, "query", function() {
          return l;
        });
      var r = a(0),
        t = a.n(r),
        c = a(156);
      n.default = function(e) {
        var n = e.data;
        console.log(n);
        var a = n.coursesYaml;
        return t.a.createElement(
          c.a,
          null,
          t.a.createElement(
            "div",
            null,
            "Hello course",
            t.a.createElement("p", null, "Info: ", a.info)
          )
        );
      };
      var l = "2437580635";
    },
    156: function(e, n, a) {
      "use strict";
      var r = a(0),
        t = a.n(r);
      n.a = function(e) {
        var n = e.children;
        return t.a.createElement("div", { className: "container" }, n);
      };
    }
  }
]);
//# sourceMappingURL=component---src-templates-course-template-js-96e83e82ed3dbfa0be27.js.map
