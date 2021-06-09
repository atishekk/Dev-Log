import React from 'react';
import {useSpring, animated, config} from "react-spring";


export default function Fade({children}) {
  const styles = useSpring({
    opacity: 0,
    from: {opacity: 0},
    to: {opacity: 1},
    config: config.molasses,
  });

  return(
    <animated.div style={styles}>
      {children}
    </animated.div>
  )
}
