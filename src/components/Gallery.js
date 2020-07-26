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
          fixed(width: 900) {
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

  const GalleryText = styled.div`
    display: flex;
    font-family: 'Montserrat';
    font-weight: 300;
    background: rgb(255, 227, 227);
    justify-content: center;
    align-items: center;
    font-size: 3em;
    letter-spacing: 0.10em;
    /* padding-top: 1em;
    padding-left: 6em;
    padding-right: 6em; */
    margin: 2em 0;
    /* text-align: center; */
  `

  const GalleryContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #ffe3e3;
  `

  const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;
    margin-bottom: 6em;
    background: #ffe3e3;
  `

  return (
    <GalleryContainer>
      <GalleryText>VINTAGE LINENS + CHROMES</GalleryText>
      <CarouselContainer style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "65vh",
        marginBottom: "9em",
        background: '#ffe3e3',
        }}>
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
        />
      </CarouselContainer>
    </GalleryContainer>
  )

}

export default Gallery
