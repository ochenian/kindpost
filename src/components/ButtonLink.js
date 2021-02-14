import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ButtonLink = ({ children, className, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const lineColor = color || 'rgba(255,22,84,1)';
  const underlineSpring = useSpring({
    to: {
      opacity: isHovered ? 1 : 0,
      width: isHovered ? '100%' : '0%',
      backgroundColor: isHovered ? lineColor : 'rgba(255,22,84,0.4)',
    },
    from: { opacity: 0, height: 2, position: 'relative', top: '6px' },
  });

  return (
    <div className={className}>
      {React.cloneElement(children, {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })}
      <animated.div style={{ ...underlineSpring }} />
    </div>
  );
};

export default ButtonLink;
