import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import BirthdaySvg from '../assets/svg/Occasion.svg';
import PostcardSvg from '../assets/svg/Postcard.svg';
import MailTruckSvg from '../assets/svg/Truck2.svg';
import Underline from '../assets/svg/marker_underline.svg';

const StyledUnderline = styled(Underline)`
  width: 12%;
  margin: 0 auto;
  position: relative;
  top: -8px;

  path: {
    fill: #f2d4d7;
    opacity: 0.11;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 48px 96px 96px;

  @media (max-width: 800px) {
    height: 100%;
    padding: 96px 64px;
    margin: 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 96px;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: 'Les Mores';
  margin: 0 auto;
  position: relative;

  &:after {
    content: '';
    height: 5px;
    width: 50%;
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
    display: block;
    margin: 0 auto;
    border-radius: 12px;
  }
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 32px;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  position: relative;

  @media (max-width: 800px) {
    flex-basis: 100%;
    padding: 2em;
  }
`;

const VerticalLine = styled.div`
  width: 5px;
  height: 50%;
  border-radius: 12px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
`;

const Icon = styled.div`
  // margin: 0 auto;
  // background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  border-radius: 50%;
  background: transparent;
  width: 4vw;
  height: 4vw;
  min-width: 60px;
  min-height: 60px;
  background: #d4004c12;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 411px) {
    width: 8vw;
    height: 8vw;
  }
`;

const CopyContainer = styled.div`
  margin-top: 32px;

  @media (min-width: 800px) {
    text-align: left;
  }
`;

const IconContainer = styled.div`
  width: fit-content;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

const Type = styled.div`
  text-transform: uppercase;
  font-size: 1em;
  font-family: 'tk-futura-pt-n7';
  height: 72px;
  color: #d4004c;

  @media (max-width: 800px) {
    height: auto;
    margin: 32px 0;
  }
`;

const Description = styled.div`
  max-width: 50ch;
  margin: 0 auto;
  font-family: 'futura-pt';
  color: #282828;

  @media (max-width: 800px) {
    max-width: 25ch;
  }
`;

const StyledBirthdaySvg = styled(BirthdaySvg)`
  // position: absolute;
  width: 4vw;
  min-width: 60px;
`;

const StyledPostcardSvg = styled(PostcardSvg)`
  // position: absolute;
  width: 4vw;
  min-width: 60px;
`;

const StyledTruckSvg = styled(MailTruckSvg)`
  // position: absolute;
  width: 6vw;
  min-width: 90px;

  @media (max-width: 411px) {
    width: 24vw;
  }
`;

const Stamp = styled.div`
  width: 50%;
  height: 50%;
  max-width: 160px;
  min-width: 60px;
  background: radial-gradient(
    transparent 0%,
    transparent 50%,
    #fff 50%,
    #fff 100%
  );
  background-size: 10% 10%;
  background-position: 6% 6%;
  padding: 2%;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  margin: 0 auto;
`;

const StampImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 3%;
  left: 3%;
  width: 95%;
  height: 95%;
  background: #fff;
  overflow: hidden;
  border: 2px solid rgba(0, 0, 0, 0.1);
`;

const StampBackground = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 5%;
`;

const How = () => {
  const items = [
    {
      id: 1,
      illustration: <StyledBirthdaySvg />,
      header: 'pick an occasion',
      description:
        'Select an occasion that conveys the message you want to send',
    },
    {
      id: 2,
      illustration: <StyledPostcardSvg />,
      header: `we'll handwrite a message of positivity`,
      description:
        'We will hand-select a postcard and write a positive message on the back for your chosen occasion',
    },
    {
      id: 3,
      illustration: <StyledTruckSvg />,
      header: `we'll mail your postcard`,
      description:
        'Our delivery specialists will address, stamp, & handle the mailing of your postcard to either you or your intended recipient',
    },
  ];

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);
    }
  });

  return (
    <Container id="howTo">
      <Header>
        <Title>how it works</Title>
        {/* <StyledUnderline /> */}
      </Header>
      <StepContainer>
        {items.map((item, index) => (
          <>
            <Step key={item.id}>
              {/* <Stamp>
                <StampBackground>
                  <StampImageBackground> */}
              <IconContainer>
                <Icon>{item.illustration}</Icon>
              </IconContainer>
              {/* </StampImageBackground>
                </StampBackground>
              </Stamp> */}
              <CopyContainer>
                <Type>{item.header}</Type>
                <Description>{item.description}</Description>
              </CopyContainer>
            </Step>
            {/* {index !== items.length - 1 && <VerticalLine />} */}
          </>
        ))}
      </StepContainer>
    </Container>
  );
};

export default How;
