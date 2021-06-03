import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Layout from '../layouts/index';
import OurPurpose from '../components/OurPurpose';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'calluna';
  color: #282828;
  gap: 128px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
}
`;

const HeaderImg = styled(Img)`
  width: 100%;
  height: 100vh;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  background: radial-gradient(#00000099 50%, #00000080 100%);
  width: 100%;
  height: 100%;
  z-index: 10;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(242, 235, 229);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  letter-spacing: 24px;
  text-shadow: 1px 2px 4px rgb(0 0 0 / 90%);
  text-align: center;
`;

const BodyContainer = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 128px;
`;

const TextImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  z-index: 10;
  overflow: hidden;

  @media (max-width: 1000px) {
    &:last-of-type {
      flex-direction: column;
    }
  }
}
`;

const ImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: pink;
  z-index: 20;
  max-width: 1000px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const RightImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: pink;
  z-index: 20;
  max-width: 1000px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const BodyImg = styled(Img)`
  width: 100%;
  max-width: 1000px;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const BodyTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;
`;

const BodyTextHeader = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-family: 'Montserrat';
  text-transform: uppercase;
  font-weight: bold;
`;

const BodyText = styled.div`
  line-height: 1.5;
  max-width: 60ch;
  font-size: 1.25rem;
`;

const PostcardWrapper = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const PostcardImg = styled(Img)`
  width: 100%;
  z-index: 10;

  @media (max-width: 1000px) {
    margin: 0 auto;
  }
`;

const FinalMessage = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 90%;
  max-width: 60ch;
  text-align: center;
  letter-spacing: 4px;
  margin-bottom: 200px;
  font-family: 'Montserrat';
  text-transform: uppercase;
`;

const Contact = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      headerImg: file(relativePath: { eq: "card_creation_pen_cup.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardScatterImg: file(relativePath: { eq: "postcard_scatter.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      harborPostcardImg: file(relativePath: { eq: "harbor_on_the_rocks.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      palmTreesImg: file(relativePath: { eq: "palm_trees.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardsFallingImg: file(
        relativePath: { eq: "postcards_falling_alt_4.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const overlayRef = useRef();
  const overlayRightRef = useRef();
  const imgWrapperRef = useRef();
  const overlayRef1 = useRef();
  const imgWrapperRef1 = useRef();

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 1000px)': function() {
        // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: imgWrapperRef1.current,
            start: 'top bottom',
            // markers: true,
          },
        });

        tl1
          .from('.img1', {
            xPercent: -100,
            ease: 'power1.inOut',
            duration: 0.5,
          })
          .to(overlayRef1.current, {
            scaleX: 0,
            transformOrigin: 'right',
            ease: 'power1.inOut',
            duration: 0.5,
          });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imgWrapperRef.current,
            start: 'top bottom',
            // markers: true,
          },
        });

        tl.from('.img', {
          xPercent: -100,
          ease: 'power1.inOut',
          duration: 0.5,
        }).to(overlayRef.current, {
          scaleX: 0,
          transformOrigin: 'right',
          ease: 'power1.inOut',
          duration: 0.5,
        });

        const tlRight = gsap.timeline({
          scrollTrigger: {
            trigger: '.imgRight',
            start: 'top bottom',
            // markers: true,
          },
        });

        tlRight
          .from('.imgRight', {
            xPercent: 100,
            ease: 'power1.inOut',
            duration: 0.5,
          })
          .to(overlayRightRef.current, {
            scaleX: 0,
            transformOrigin: 'left',
            ease: 'power1.inOut',
            duration: 0.5,
          });

        gsap.utils.toArray('.fadeIn').forEach((panel, i) => {
          gsap.from(panel, {
            scrollTrigger: {
              trigger: panel,
              start: 'top bottom-=200',
            },
            autoAlpha: 0,
            translateY: '20%',
          });
        });
      },
    });
  });

  const mobile = useMediaQuery('(max-width: 1000px)');

  return (
    <Layout site="kindpost" headerClass="Header">
      <Container>
        <HeaderContainer>
          <HeaderOverlay>OUR STORY</HeaderOverlay>
          <HeaderImg fluid={data.headerImg.childImageSharp.fluid} />
        </HeaderContainer>
        <BodyContainer>
          <OurPurpose />
          <TextImgWrapper>
            <ImgWrapper ref={imgWrapperRef1}>
              <ImgOverlay className="img1" ref={overlayRef1} />
              <BodyImg
                className="img1"
                fluid={data.palmTreesImg.childImageSharp.fluid}
              />
            </ImgWrapper>

            <BodyTextWrapper>
              <BodyTextHeader className="fadeIn">
                Life is fast, unpredictable, and beautiful.
              </BodyTextHeader>
              <BodyText className="fadeIn">
                Kindpost’s mission is to slow down and honor the special moments
                in life, from celebrating birthdays to sharing declarations of
                love, and from welcoming new babies to encouraging each other
                when we’re feeling down.
              </BodyText>
            </BodyTextWrapper>
          </TextImgWrapper>
          <TextImgWrapper
            style={{ flexDirection: mobile ? 'column-reverse' : 'row' }}
          >
            <BodyTextWrapper>
              <BodyTextHeader className="fadeIn">
                Let’s celebrate together.
              </BodyTextHeader>
              <BodyText className="fadeIn">
                Kindpost makes it easy for you to send some positivity to
                yourself or to a loved one.
              </BodyText>
              <BodyText className="fadeIn">
                Our goal is that Kindpost will inspire people to connect with
                each other by sharing and capturing these important life
                moments. A simple act of kindness can remind us that the feeling
                of love and being loved is essential to being human. We believe
                in self-care, self-love, and sharing the love. It’s at the heart
                of our company.
              </BodyText>
            </BodyTextWrapper>
            <PostcardWrapper>
              <RightImgOverlay className="imgRight" ref={overlayRightRef} />
              <PostcardImg
                className="imgRight"
                fluid={data.harborPostcardImg.childImageSharp.fluid}
              />
            </PostcardWrapper>
          </TextImgWrapper>
          <TextImgWrapper>
            <ImgWrapper ref={imgWrapperRef}>
              <ImgOverlay className="img" ref={overlayRef} />
              <BodyImg
                className="img"
                fluid={data.postcardScatterImg.childImageSharp.fluid}
              />
            </ImgWrapper>

            <BodyTextWrapper>
              <BodyTextHeader className="fadeIn">
                Curated positivity.
              </BodyTextHeader>
              <BodyText className="fadeIn">
                Our founder, Cate, has spent years thoughtfully collecting
                vintage postcards from around the world. For each Kindpost sent,
                our team selects one of these unique, vintage postcards and
                carefully crafts a handwritten message of positivity
                commemorating a special moment in life.
              </BodyText>
              <BodyText className="fadeIn">
                Each Kindpost is a tangible way to celebrate those special
                moments and carry them with you. We hope our postcards brighten
                your desk and your day.
              </BodyText>
            </BodyTextWrapper>
          </TextImgWrapper>
          <FinalMessage className="fadeIn">
            Thoughtfully Selected & Handcrafted With Positivity For You & Those
            You
            <span style={{ color: '#d4004c', fontWeight: 'bold' }}> Love</span>
          </FinalMessage>
        </BodyContainer>
      </Container>
    </Layout>
  );
};

export default Contact;
