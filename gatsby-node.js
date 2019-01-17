const each = require("lodash/each");
const Promise = require("bluebird");
const path = require("path");
const PostTemplate = path.resolve("./src/templates/index.js");

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
//               edges {
//                 node {
//                   id
//                   name: sourceInstanceName
//                   path: absolutePath
//                   remark: childMarkdownRemark {
//                     id
//                     frontmatter {
//                       layout
//                       path
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(({ errors, data }) => {
//         if (errors) {
//           console.log(errors)
//           reject(errors)
//         }

//         // Create blog posts & pages.
//         const items = data.allFile.edges
//         const posts = items.filter(({ node }) => /posts/.test(node.name))
//         each(posts, ({ node }) => {
//           if (!node.remark) return
//           const { path } = node.remark.frontmatter
//           createPage({
//             path,
//             component: PostTemplate,
//           })
//         })

//         const pages = items.filter(({ node }) => /page/.test(node.name))
//         each(pages, ({ node }) => {
//           if (!node.remark) return
//           const { name } = path.parse(node.path)
//           const PageTemplate = path.resolve(node.path)
//           createPage({
//             path: name,
//             component: PageTemplate,
//           })
//         })
//       })
//     )
//   })
// }

const createPagesfromYml = () => {
  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allCoursesYaml {
            edges {
              node {
                info
                basic_info {
                  slug
                }
              }
            }
          }
          allLocationsYaml {
            edges {
              node {
                info
                basic_info {
                  slug
                }
              }
            }
          }
          allDataYaml {
            edges {
              node {
                basic_info {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        //Create page courses
        result.data.allCoursesYaml.edges.forEach(({ node }) => {
          createPage({
            path: node.basic_info.slug,
            component: path.resolve(`./src/templates/course-template.js`),
            context: {
              slug: node.basic_info.slug
            }
          });
        });
        //Create page locations
        result.data.allLocationsYaml.edges.forEach(({ node }) => {
          createPage({
            path: node.basic_info.slug,
            component: path.resolve(`./src/templates/location-template.js`),
            context: {
              slug: node.basic_info.slug
            }
          });
        });
        //Create page in folder /data
        result.data.allDataYaml.edges.forEach(({ node }) => {
          if (node.basic_info.slug == "about-us") {
            createPage({
              path: node.basic_info.slug,
              component: path.resolve(`./src/templates/about-us-template.js`),
              context: {
                slug: node.basic_info.slug
              }
            });
          }
          if (node.basic_info.slug == "apply") {
            createPage({
              path: node.basic_info.slug,
              component: path.resolve(`./src/templates/apply-template.js`),
              context: {
                slug: node.basic_info.slug
              }
            });
          }
        });
        resolve();
      });
    });
  };
};

createPagesfromYml();

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        templates: path.resolve(__dirname, "src/templates"),
        scss: path.resolve(__dirname, "src/scss")
      }
    }
  });
};
