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
  justify-content: space-evenly;
  height: 75vh;
  @media (max-width: 800px) {
    height: 100%;
    padding: 96px 24px;
  }
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-family: 'Les Mores';
  margin: 0 auto;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Step = styled.div`
  padding: 24px;
  flex: 1;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 800px) {
    flex-basis: 100%;
    padding: 2em;
  }
`;

const Icon = styled.div`
  margin: 0 auto;
  background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));
  border-radius: 50%;
  width: 4vw;
  height: 4vw;
  min-width: 60px;
  min-height: 60px;
  background: rgba(255, 227, 227, 1);

  @media (max-width: 411px) {
    width: 8vw;
    height: 8vw;
  }
`;

const Type = styled.div`
  height: 15vh;
  text-transform: uppercase;
  font-size: 1.25em;
  font-family: 'proxima-nova';
  margin: 8px 0;

  @media (max-width: 800px) {
    height: auto;
    margin: 32px 0;
  }
`;

const Description = styled.div`
  font-family: 'calluna';
  max-width: 50ch;
  margin: 0 auto;
`;

const StyledBirthdaySvg = styled(BirthdaySvg)`
  position: absolute;
  width: 4vw;
  min-width: 60px;
`;

const StyledPostcardSvg = styled(PostcardSvg)`
  position: absolute;
  width: 4vw;
  min-width: 60px;
`;

const StyledTruckSvg = styled(MailTruckSvg)`
  position: absolute;
  width: 6vw;
  min-width: 90px;

  @media (max-width: 411px) {
    width: 24vw;
  }
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
        <StyledUnderline />
      </Header>
      <StepContainer>
        {items.map(item => (
          <Step key={item.id}>
            <Icon>{item.illustration}</Icon>
            <Type>{item.header}</Type>
            <Description>{item.description}</Description>
          </Step>
        ))}
      </StepContainer>
    </Container>
  );
};

export default How;
