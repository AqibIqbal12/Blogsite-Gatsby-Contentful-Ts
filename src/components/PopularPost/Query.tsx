import { useStaticQuery, graphql } from "gatsby"

export const usePopularPostData = () => {
  const popularPostQuery = useStaticQuery(
    graphql`
    query {
        allContentfulPopularPost {
            nodes {
              popularPostImg {
                title
                fluid {
                  src
                }
              }
            }
          }
    }
        `
  )
  return popularPostQuery;
}