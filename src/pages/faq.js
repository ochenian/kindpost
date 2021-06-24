import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../layouts/index';
import TwitterLogo from '../assets/svg/Twitter_Logo_White.svg';
import InstaLogo from '../assets/svg/insta_icon.svg';
import Accordion from '../components/Accordion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 5em;

  background: #fff;
  color: rgb(40, 40, 40);
  font-family: 'calluna';
`;

const Title = styled.p`
  position: relative;
  text-align: center;
  margin: 0 auto;
  margin-top: 200px;
  font-size: 1.75em;
  letter-spacing: 4px;
  width: fit-content;
  font-family: 'futura-pt';
`;

const Subtitle = styled.div`
  margin-bottom: 100px;
  font-family: 'futura-pt';
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 192px);
  height: 100%;
  margin-bottom: 200px;

  @media (max-width: 900px) {
    width: calc(100% - 64px);
  }
`;

const StyledTwitterLogo = styled(TwitterLogo)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin: 0 6px -6px 0;
  path {
    fill: rgb(40, 40, 40);
  }

  &:hover {
    path {
      // fill: #f5bc5e;
      fill: #d4004c;
    }
  }
`;

const StyledInstaLogo = styled(InstaLogo)`
  width: 20px;
  height: 20px;
  fill: rgb(40, 40, 40);
  cursor: pointer;
  margin-right: 12px;

  &:hover {
    // fill: #f5bc5e;
    fill: #d4004c;
  }
`;

const faqs = [
  {
    id: 0,
    question: 'How can I stay up to date on news regarding Kindpost?',
    answer: () => (
      <>
        <div>Follow Kindpost on social!</div>
        <a href="https://www.instagram.com/kindpostco">
          <StyledInstaLogo />
        </a>
        <a href="https://twitter.com/kindpostco">
          <StyledTwitterLogo />
        </a>
      </>
    ),
  },
  {
    id: 1,
    question: 'I love your work! Can I repost it?',
    answer: () => (
      <>
        We love to see our customers posting our products in action. When using
        images from our site or social media pages, we ask that you please
        credit Kindpost with a link back to our Site.
      </>
    ),
  },
  {
    id: 2,
    question: 'Who should I talk to about a business partnership?',
    answer: () => (
      <>
        You can drop us a line at&nbsp;
        <a href="mailto:media@kindpostco.com">media@kindpostco.com</a>
      </>
    ),
  },
  {
    id: 'design',
    question: 'Can I select my own postcard design?',
    answer: () => (
      <div id="design">
        Due to the nature of our vast collection of vintage postcards, each and
        every postcard is unique, just like you! We take joy in personally
        selecting a postcard for each and every customer. At this time, our
        website does not allow for customers to select their own postcard
        design.
      </div>
    ),
  },
  {
    id: 4,
    question:
      'I want to share the love.  Can you send a postcard to one of my loved ones?',
    answer: () => (
      <>
        Of course! We’re all about spreading the love and expanding our
        community. When you order the postcard, be sure to list your loved one’s
        contact information for the “Shipping Address,” and be sure to list your
        own contact information for the “Billing Address.”
      </>
    ),
  },
  {
    id: 5,
    question: 'Why does my postcard have discolorations or imperfections?',
    answer: () => (
      <>
        Due to the age of the postcards and hand-lettered nature of each message
        we send, each postcard is unique and will vary. Each postcard is vintage
        and has its own unique distressing that it has acquired over its years.
        Individual features, conditions, and appearances of actual products may
        differ from the items depicted. Any distressing, inconsistencies, and
        imperfections are normal and are to be expected. In other words, each of
        our postcards has its own character and personality. How beautiful is
        that?
      </>
    ),
  },
  {
    id: 6,
    question: 'Where can I find shipping information?',
    answer: () => (
      <>
        Orders are typically processed and shipped within 5 business days.
        Please note that Kindpost does not ship on Sundays or U.S. nationally
        observed holidays. All orders are shipped from Southern California, and
        your delivery date is dependent upon the shipping address. Orders are
        typically shipped via U.S. Postal Service. Standard Delivery estimates
        are provided below: Orders to West Coast addresses typically take 2 to 3
        business days. Orders to Southern states and Midwestern states typically
        take 3 to 4 business days. Orders to East Coast addresses typically take
        4 to 5 business days. Kindpost is not responsible for delivery delays
        via the U.S. Postal Service or other delivery methods, including but not
        limited to those delays related to COVID-19. For more information,
        please see our Terms of Service.
      </>
    ),
  },
  {
    id: 7,
    question: 'What is your return policy?',
    answer: () => (
      <>
        Because all items are handwritten to order, we are unable to accept
        returns or exchanges. All orders are final sale and cannot be cancelled,
        exchanged, or returned under any circumstances. Any items returned to
        Kindpost without prior notification will not be accepted and may be
        returned to sender. If you feel that there was a mistake on our end that
        caused a problem with your order, please email us at&nbsp;
        <a href="mailto:help@kindpostco.com">help@kindpostco.com</a>
      </>
    ),
  },
  {
    id: 8,
    question: 'I changed my mind.  Am I able to cancel my Kindpost order?',
    answer: () => (
      <>
        Your Kindpost order cannot be canceled once it is placed. If you have
        entered the wrong mailing address, please contact us at&nbsp;
        <a href="mailto:help@kindpostco.com">help@kindpostco.com</a>
        &nbsp;immediately, and our team will make that change for you, if your
        order has not yet been prepared and shipped.
      </>
    ),
  },
];

const Faq = ({ location }) => {
  const [expanded, setExpanded] = useState(0);
  const [hash, setHash] = useState(location.hash.substr(1));

  useEffect(() => {
    if (hash) {
      setExpanded(hash);
    }
  }, [hash, setExpanded]);

  return (
    <Layout site="kindpost" headerClass="Header light">
      <Container>
        <Title>FAQ</Title>
        <Subtitle>Questions + Answers</Subtitle>
        <QuestionsContainer>
          {faqs.map(faq => (
            <Accordion
              id={faq.id}
              key={faq.id}
              i={faq.id}
              expanded={expanded}
              setExpanded={setExpanded}
              headerText={faq.question}
              bodyText={faq.answer}
            />
          ))}
        </QuestionsContainer>
      </Container>
    </Layout>
  );
};

export default Faq;
