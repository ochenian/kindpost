import React, { useRef, useCallback } from 'react'
import BirthdaySvg from '../assets/svg/Occasion.svg'
import PostcardSvg from '../assets/svg/Postcard.svg'
import MailTruckSvg from '../assets/svg/Truck.svg'
import HappyFaceSvg from '../assets/svg/Happy-Face.svg'
import {useSpring, useTrail, animated} from 'react-spring'
import { useInView } from 'react-intersection-observer'

const How = () => {

  const ref = useRef()

  // const props = useSpring({ opacity: 1, from: {opacity: 0}, delay: 1000})
  const items = ['pick an occasion', 'we\'ll write a note', 'we\'ll send your postcard', 'happy friend']
  const components = [
    <BirthdaySvg className="occasion"/>,
    <PostcardSvg className="postcard"/>,
    <MailTruckSvg className="truck"/>,
    <HappyFaceSvg className="happy-face"/>
  ]
  const config = { mass: 25, tension: 10000, friction: 1000 }

  const [inViewRef, inView] = useInView({
    // rootMargin: '-100px 0px',
    threshold: 0.75,
    triggerOnce: true
  })

   // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
   const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)
    },
    [inViewRef],
  )

  const props = useSpring({ opacity: inView ? 1 : 0 })
  const trail = useTrail(components.length, {
    config,
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    height: inView ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <animated.div id="howTo" className="how-container">
      <animated.div
      ref={setRefs}
      style={{...props}}
      className="how-title">how it works</animated.div>
      <animated.div
      ref={setRefs}
      style={props}
      className="step-container">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className="how-step"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{components[index]}</animated.div>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </animated.div>
    </animated.div>
  )
}

export default How
