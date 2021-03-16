import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Panel from './Panel';
import KPThumb from '../../assets/svg/KP_Thumbnail.svg';

const Container = styled.div`
  // background-color: #fdfaee;
  font-family: 'orpheuspro';
  background: linear-gradient(
    180deg,
    hsl(279deg 66% 90%),
    hsl(210deg 62% 90%),
    hsl(146deg 62% 90%),
    hsl(60deg 62% 90%)
  );
  position: relative;
  overflow: hidden;
  padding: 3em 0;

  // &:after {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 25vw;
  //   z-index: 1;
  //   background-image: linear-gradient(
  //     to bottom,
  //     #ededdd,
  //     #faefe6,
  //     #fef3f2,
  //     #fef9fc,
  //     #ffffff
  //   );

  //   pointer-events: none;
  // }
`;

const StyledKpThumb = styled(KPThumb)`
  position: absolute;
  top: 4%;
  left: 50%;
  opacity: 0.8;
`;

const Showcase = () => {
  // useEffect(() => {
  //   if (typeof window !== `undefined`) {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.core.globals('ScrollTrigger', ScrollTrigger);
  //   }
  // });
  const data = useStaticQuery(graphql`
    query Postcards3Query {
      postcardOrangesImg: file(relativePath: { eq: "Oranges.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardOrangesReveal: file(
        relativePath: { eq: "congrats_reveal_shadow.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCongratulationsImg: file(
        relativePath: { eq: "Congratulations.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardTwilightImg: file(relativePath: { eq: "Twilight.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveImg: file(relativePath: { eq: "Love.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardLoveReveal: file(relativePath: { eq: "love_reveal_shadow.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardRedwoodsImg: file(relativePath: { eq: "Redwoods.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementImg: file(
        relativePath: { eq: "Encouragement.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardEncouragementReveal: file(
        relativePath: { eq: "encourage_reveal_shadow.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardWavesImg: file(relativePath: { eq: "Waves.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      birthdayReveal: file(relativePath: { eq: "birthday_reveal_shadow.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardBirthdayImg: file(
        relativePath: { eq: "Birthday-no-border.jpg" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // useEffect(() => {
  //   if (typeof window !== `undefined`) {
  //     gsap.registerPlugin(ScrollTrigger);
  //     gsap.core.globals('ScrollTrigger', ScrollTrigger);
  //   }
  //   let panels = gsap.utils.toArray('.panel');

  //   panels.forEach((item, i) => {
  //     // Get the to be staggered elements
  //     const contentElements = item.querySelectorAll('.bg-text');

  //     // Set initial state on the to be staggered elements
  //     contentElements.forEach((el, i) => {
  //       gsap.set(el, {
  //         y: 0,
  //         opacity: 0,
  //       });
  //     });
  //     ScrollTrigger.create({
  //       trigger: item,
  //       markers: true,

  //       // pin: true,

  //       // start: "50% 50%",
  //       // end: "bottom+=50% 50%",

  //       start: 'top 50%',
  //       end: 'bottom 50%',

  //       snap: { snapTo: [0.5], duration: 1, delay: 0 },

  //       onEnter: ({ progress, direction, isActive }) => {
  //         console.log('onEnter', progress, direction, isActive);
  //         gsap.fromTo(
  //           contentElements,
  //           { y: 80, opacity: 0 },
  //           { y: 0, opacity: 1, stagger: 0.05 },
  //         );
  //       },
  //       onLeave: ({ progress, direction, isActive }) => {
  //         console.log('onLeave', progress, direction, isActive);
  //         gsap.fromTo(
  //           contentElements,
  //           { y: 0, opacity: 1 },
  //           { y: -80, opacity: 0, stagger: 0.05 },
  //         );
  //       },
  //       onLeaveBack: ({ progress, direction, isActive }) => {
  //         console.log('onLeaveBack', progress, direction, isActive);
  //         gsap.fromTo(
  //           contentElements,
  //           { y: 0, opacity: 1 },
  //           { y: -80, opacity: 0, stagger: 0.05 },
  //         );
  //       },
  //       onEnterBack: ({ progress, direction, isActive }) => {
  //         console.log('onEnterBack', progress, direction, isActive);
  //         gsap.fromTo(
  //           contentElements,
  //           { y: -80, opacity: 0 },
  //           { y: 0, opacity: 1, stagger: 0.05 },
  //         );
  //       },
  //     });
  //   });
  // });
  const [bgColor, setBgColor] = useState('#fff');
  const containerRef = useRef();
  const panel1Ref = useRef();
  const panel2Ref = useRef();
  const panel3Ref = useRef();
  const panel4Ref = useRef();

  useEffect(() => {
    // if (typeof window !== `undefined`) {
    //   gsap.registerPlugin(ScrollTrigger);
    //   gsap.core.globals('ScrollTrigger', ScrollTrigger);
    // }
    // const pcTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     scrub: 1,
    //     pin: true,
    //     start: 'top top',
    //     end: '+=600%',
    //     markers: true,
    //   },
    // });
    //   gsap.to(containerRef.current, {
    //     scrollTrigger: {
    //       trigger: panel2Ref.current,
    //       scroller: '.smooth-scroll',
    //       scrub: true,
    //       start: 'top center',
    //       markers: true,
    //     },
    //     backgroundColor: 'black',
    //   });
    //   gsap.to(containerRef.current, {
    //     scrollTrigger: {
    //       trigger: panel3Ref.current,
    //       scroller: '.smooth-scroll',
    //       scrub: true,
    //       start: 'top center',
    //       markers: true,
    //     },
    //     backgroundColor: 'yellow',
    //   });
    //   gsap.to(containerRef.current, {
    //     scrollTrigger: {
    //       trigger: panel4Ref.current,
    //       scroller: '.smooth-scroll',
    //       scrub: true,
    //       start: 'top center',
    //       markers: true,
    //     },
    //     backgroundColor: 'pink',
    //   });
  });

  return (
    <Container ref={containerRef}>
      {/* <StyledKpThumb /> */}
      <div ref={panel1Ref}>
        <Panel
          index="0"
          imgFront={data.postcardOrangesImg.childImageSharp.fluid}
          imgBack={data.postcardCongratulationsImg.childImageSharp.fluid}
          imgReveal={data.postcardOrangesReveal.childImageSharp.fluid}
        />
      </div>
      <div ref={panel2Ref}>
        <Panel
          // ref={panel2Ref}
          index="1"
          imgFront={data.postcardTwilightImg.childImageSharp.fluid}
          imgBack={data.postcardLoveImg.childImageSharp.fluid}
          imgReveal={data.postcardLoveReveal.childImageSharp.fluid}
        />
      </div>

      <div ref={panel3Ref}>
        <Panel
          // ref={panel3Ref}
          index="2"
          imgFront={data.postcardRedwoodsImg.childImageSharp.fluid}
          imgBack={data.postcardEncouragementImg.childImageSharp.fluid}
          imgReveal={data.postcardEncouragementReveal.childImageSharp.fluid}
        />
      </div>

      <div ref={panel4Ref}>
        <Panel
          // ref={panel4Ref}
          index="3"
          imgFront={data.postcardWavesImg.childImageSharp.fluid}
          imgBack={data.postcardBirthdayImg.childImageSharp.fluid}
          imgReveal={data.birthdayReveal.childImageSharp.fluid}
        />
      </div>
    </Container>
  );
};

export default Showcase;
