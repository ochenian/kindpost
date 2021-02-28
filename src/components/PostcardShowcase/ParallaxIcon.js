import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  motion,
  useTransform,
  useSpring,
  useViewportScroll,
} from 'framer-motion';

const ParallaxIcon = props => {
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const [offsetTop, setOffsetTop] = useState(0);

  const y = useSpring(
    useTransform(scrollY, [offsetTop, offsetTop - 100], [offsetTop, 200]),
  );

  // eslint-disable-next-line consistent-return
  useLayoutEffect(() => {
    if (!ref.current) return undefined;
    setOffsetTop(ref.current.getBoundingClientRect().top);
    return undefined;
  }, [ref]);
  return (
    <motion.div ref={ref}>
      {props.svgIcon ? <props.svgIcon /> : null}
    </motion.div>
  );
};

export default ParallaxIcon;
