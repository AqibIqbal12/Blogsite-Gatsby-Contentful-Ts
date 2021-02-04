import { useStaticQuery, graphql } from "gatsby"

export const useCarouselData = () => {
  const carouselQuery = useStaticQuery(
    graphql`
    query {
        allContentfulCarousel {
            nodes {
              carouselImg {
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
  return carouselQuery;
}