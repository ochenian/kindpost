import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'

const ButtonLink = ({ children }) => {

  const [isHovered, setIsHovered] = useState(false);

  const underlineSpring = useSpring({
    to: { opacity: isHovered ? 1: 0, width: isHovered ? '100%': '0%', backgroundColor: isHovered ? 'rgba(255,22,84,1)': 'rgba(255,22,84,0.4)' },
    from: { opacity: 0, height: 2, position: 'relative', top: '6px' }
  })

  return (
    <div className="link">
      { React.cloneElement(children, { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }) }
      <animated.div style={{ ...underlineSpring }}></animated.div>
    </div>
  )
}

export default ButtonLink
