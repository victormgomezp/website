// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-course-template-js": () => import("/Users/rafaelesaa/workspaces/website/src/templates/course-template.js" /* webpackChunkName: "component---src-templates-course-template-js" */),
  "component---src-templates-location-template-js": () => import("/Users/rafaelesaa/workspaces/website/src/templates/location-template.js" /* webpackChunkName: "component---src-templates-location-template-js" */),
  "component---src-templates-apply-template-js": () => import("/Users/rafaelesaa/workspaces/website/src/templates/apply-template.js" /* webpackChunkName: "component---src-templates-apply-template-js" */),
  "component---src-templates-about-us-template-js": () => import("/Users/rafaelesaa/workspaces/website/src/templates/about-us-template.js" /* webpackChunkName: "component---src-templates-about-us-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/rafaelesaa/workspaces/website/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/Users/rafaelesaa/workspaces/website/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/rafaelesaa/workspaces/website/.cache/data.json")

