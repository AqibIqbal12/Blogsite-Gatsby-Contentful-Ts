import { useStaticQuery, graphql } from "gatsby"

export const useBlogPostData = () => {
  const blogPostQuery = useStaticQuery(
    graphql`
    query {
      allContentfulBlogPost {
        nodes {
          blogPostId
          blogPostImage {
            
            fluid {
              src
            }
            title
        }
          blogPostTag
          blogPostHeading
          blogPostCategory  
          blogPostComments
          blogPostDate(formatString: "YYYY/MM/DD")
          blogPostDesc {
            raw
          }
        }
      }
    }
        `
  )
  return blogPostQuery
}