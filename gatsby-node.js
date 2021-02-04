var path = require('path');
// require('dotenv').config();



exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    const result = await graphql(`
    {
        allContentfulBlogPost {
            nodes {
              blogPostId
              blogPostHeading
              blogPostCategory
              blogPostComments
              blogPostDate(formatString: "YYYY/MM/DD")
              blogPostImage {
                fluid {
                  src
                }
                title
              }
              blogPostDesc {
                raw
              }
            }
          }
    }
    `)

    //console.log(JSON.stringify(result));

    result.data.allContentfulBlogPost.nodes.forEach((obj)=>{
        createPage({
            path: `/blog/${obj.blogPostId}`,
            component: path.resolve('./src/template/Blog.tsx'),
            context: {
                blogDetails: obj
            }
        })
    })
}
// gatsby-node.js
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /@firebase/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }
