import { useStaticQuery, graphql } from "gatsby"

export const useBannerData = () => {
  const bannerQuery = useStaticQuery(
    graphql`
    query {
        allContentfulBanner {
            nodes {
              bannerImg {
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
  return bannerQuery
}