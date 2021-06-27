import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Modal from 'react-modal';
import BirthdaySvg from '../assets/svg/Occasion.svg';
import PostcardSvg from '../assets/svg/Postcard.svg';
import MailTruckSvg from '../assets/svg/Truck2.svg';
import CtaButton from './shared/Button';
import PlayIcon from '../assets/svg/play_icon.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 48px 96px 96px;

  @media (max-width: 900px) {
    height: 100%;
    padding: 96px 32px;
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

  @media (max-width: 900px) {
    font-size: 4rem;
  }
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 32px;
  margin-bottom: 32px;
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

const Icon = styled.div`
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
  width: 4vw;
  min-width: 60px;
`;

const StyledPostcardSvg = styled(PostcardSvg)`
  width: 4vw;
  min-width: 60px;
`;

const StyledTruckSvg = styled(MailTruckSvg)`
  width: 6vw;
  min-width: 90px;
  height: fit-content;

  @media (max-width: 411px) {
    width: 24vw;
  }
`;

const StyledPlayIcon = styled(PlayIcon)`
  fill: #d4004c;
`;

const StyledCtaButton = styled(CtaButton)`
  border: 2px solid #d4004c;
  background: transparent;
  color: #d4004c;
  width: 200px;
  align-self: center;

  &:hover {
    background: linear-gradient(100deg, rgb(248, 7, 89), rgb(188, 78, 156));

    ${StyledPlayIcon} {
      fill: #fff;
    }
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

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalReady, setModalReady] = useState(false);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.config({
        nullTargetWarn: false,
      });
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals('ScrollTrigger', ScrollTrigger);

      setModalReady(true);
      Modal.setAppElement(document.body);
    }
  }, []);

  const customStyles = {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: 'fit-content',
      width: '80%',
    },
    overlay: {
      zIndex: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  };

  return (
    <Container id="howTo">
      <Header>
        <Title>how it works</Title>
      </Header>
      <StepContainer>
        {items.map((item, index) => (
          <>
            <Step key={item.id}>
              <IconContainer>
                <Icon>{item.illustration}</Icon>
              </IconContainer>
              <CopyContainer>
                <Type>{item.header}</Type>
                <Description>{item.description}</Description>
              </CopyContainer>
            </Step>
          </>
        ))}
      </StepContainer>
      {modalReady && (
        <>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
          >
            <video
              onEnded={() => setModalOpen(false)}
              autoPlay
              controls
              style={{ width: '100%' }}
            >
              <source
                src="https://res.cloudinary.com/dbjyccq4x/video/upload/v1624770046/videos/how_it_works_website_compressed_qktaq4.mp4"
                type="video/mp4"
              />
            </video>
          </Modal>
          <StyledCtaButton onClick={() => setModalOpen(true)}>
            WATCH
            <StyledPlayIcon />
          </StyledCtaButton>
        </>
      )}
    </Container>
  );
};

export default How;
