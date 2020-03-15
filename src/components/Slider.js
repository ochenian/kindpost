import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

const Slider = ({ slides }) => (
  <AwesomeSlider
    cssModule={ AwesomeSliderStyles }
    transitionDelay={ 0 }
    play={ false }
  >
    { slides.map((slide, index) => (
      <div key={ index } data-src={ slide.childImageSharp.fluid.src }>
      </div>
    ))}
  </AwesomeSlider>
);

export default Slider;
