import { useStaticQuery, graphql } from "gatsby"

export const useInstagramFeedData = () => {
  const instaFeedQuery = useStaticQuery(
    graphql`
    query {
        allContentfulInstagramFeed {
            nodes {
              instagramFeedImg {
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
  return instaFeedQuery;
}