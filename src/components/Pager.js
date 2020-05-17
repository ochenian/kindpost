import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Pager = () => {
  const data = useStaticQuery(graphql`
    query Postcard2Query {
      postcardSampleImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementImg: file(relativePath: { eq: "Encouragement.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const components = [
    data.postcardSampleImg.childImageSharp.fluid,
    data.postcardEncouragementImg.childImageSharp.fluid
  ]

  const AnimatedImg = animated(Img)

  const index = useRef(0)
  const [props, set] = useSprings(components.length, i => ({
    x: i * window.innerWidth,
    scale: 1,
    display: 'block'
  }))
  const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, components.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? mx : 0)
      const scale = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, scale, display: 'block' }
    })
  })
  return (
    <div className="pp-container">
      { props.map(({ x, display, scale }, i) => (
        <animated.div className="pager-container" {...bind()} key={i} style={{ display, x }}>
          <AnimatedImg style={{ scale }} draggable={false} className="pager-item" fluid={components[i]} />
        </animated.div>
      )) }
    </div>
  )
}

export default Pager
