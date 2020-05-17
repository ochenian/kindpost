import React from 'react'
import BgVideo from '../assets/KPVideo.mp4'
import Waves from '../assets/svg/waves.svg'
import {useSpring, useTrail, animated, config} from 'react-spring'

const Hero = () => {
  let trailConfig = { mass: 5, tension: 1000, friction: 100 }

  const textSpring = useSpring({ to: {opacity: 1}, from: {opacity: 0}, delay: 1000 })

  const videoText = ['send', 'your', 'love'];
  const trail = useTrail(videoText.length, {
    config: trailConfig,
    opacity: 1,
    from: {
      opacity: 0,
    },
    delay: 1500
  })

  const buttonAnimation = useSpring({ opacity: 1, transform: 'scale(1)', from: {opacity: 0, transform: 'scale(0.5)'}, delay: 2500})

  return (
    <div className="Hero">
      <div className="video-text">
        <div className="text-container">
          <animated.div style={{...textSpring}} className="small-text">a new way to</animated.div>
          <div className="large-text">
            {
              trail.map(({opacity, ...rest}, index) => (
                <animated.span
                  key={index}
                  style={{ ...rest, opacity }}>
                  {videoText[index]}
                </animated.span>
              ))
            }
          </div>
          <animated.button
            style={buttonAnimation}
            className="snipcart-add-item"
            data-item-id="1"
            data-item-name="Custom Postcard"
            data-item-price="5.99"
            data-item-description="Custom handwritten postcard for someone special"
            // data-item-image={CartImg}
            data-item-custom1-name="Message type"
            data-item-custom1-options="Birthday|Inspiration|Just Because"
          >
            send a postcard
          </animated.button>
        </div>
        <video muted src={BgVideo} autoPlay loop playsInline></video>
        {/* <div className="beach">
          <div className="waves">
            <Waves/>
          </div>
        </div> */}
      </div>

    </div>

  )
}


export default Hero
