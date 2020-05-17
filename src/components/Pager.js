import React, { useRef, useCallback } from 'react'
import clamp from 'lodash-es/clamp'
import { useSpring, useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { useInView } from 'react-intersection-observer'

const Pager = () => {
  const data = useStaticQuery(graphql`
    query Postcard2Query {
      postcardSampleImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
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

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [cardProps, setCardProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  const ref = useRef()

  const [inViewRef, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true
  })

  const setRefs = useCallback(
    (node) => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef],
  )

  const pagerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  })

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
    <animated.div ref={setRefs} className="pp-container">
      { props.map(({ x, display, scale }, i) => (
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => setCardProps({ xys: calc(x, y) })}
          onMouseLeave={() => setCardProps({ xys: [0, 0, 1] })}
          className="pager-container"
          {...bind()}
          key={i}
          style={{ display, x, ...pagerSpring, transform: cardProps.xys.interpolate(trans) }}>
          <AnimatedImg style={{ scale }} draggable={false} className="pager-item" fluid={components[i]} />
        </animated.div>
      )) }
    </animated.div>
  )
}

export default Pager
