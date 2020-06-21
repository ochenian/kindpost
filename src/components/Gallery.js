import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

const StyledImg = styled(Img)`
    width: 100%;
  `

const Gallery = () => {

  const [state, setState] = useState({
    goToSlide: 0,
  })

  const data = useStaticQuery(graphql`
    query Postcard5Query {
      postcardSampleImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      postcardEncouragementImg: file(relativePath: { eq: "Encouragement.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const slides = [
    {
      key: 1,
      content: <StyledImg fixed={data.postcardSampleImg.childImageSharp.fixed} />
    },
    {
      key: 2,
      content: <StyledImg fixed={data.postcardSampleImg.childImageSharp.fixed} />
    },
    {
      key: 3,
      content: <StyledImg fixed={data.postcardSampleImg.childImageSharp.fixed} />
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      height: "500px",
      margin: "0 auto",
      background: '#ffe3e3',
      padding: '2em',
       }}>
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
      />
    </div>
  )

}

export default Gallery
