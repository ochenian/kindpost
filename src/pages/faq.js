import React from 'react'
import Layout from '../layouts/index'
import Logo from '../assets/svg/KP_Thumbnail.svg'
import Accordion from '../components/Accordion'
import { useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 5em;

  text-transform: lowercase;
  font-family: 'Averia Serif Libre';

  background: #43546a;
  color: #fff;
`

const Title = styled.p`
  position: relative;
  text-align: center;
  margin: 0 auto;
  margin: 4em 0;
  font-size: 1.25em;
  text-transform: lowercase;
  letter-spacing: 4px;
  width: fit-content;
  font-style: italic;

  &:before {
    content: "";
    position: absolute;
    left: 33%;
    bottom: -8px;
    height: 1px;
    width: 25%;
    border-bottom: 2px solid #f5bc5e;
  }
`

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  /* margin-bottom: 2em; */
  margin-bottom: 120px;
`

const Faq = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <Layout site="kindpost" headerClass="Header">
      <Container>
        <Title>frequently asked questions</Title>
        <QuestionsContainer>
          {
              faqs.map(faq => (
                <Accordion
                  key={faq.id}
                  i={faq.id}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  headerText={faq.question}
                  bodyText={faq.answer}
                />
              ))
            }
          </QuestionsContainer>

      </Container>
    </Layout>
  )


}

const faqs = [
  {
    id: 0,
    question: 'How many Kindposts are available each day?',
    answer: 'Exactly 100 Kindposts will be made available each day starting at 8 AM PST.'
  },
  {
    id: 1,
    question: 'Can I send one to myself?',
    answer: 'Yes! And we absolutely encourage it!'
  },
  {
    id: 2,
    question: 'Why 5.99?',
    answer: 'This covers our cost to procure, customize, handwrite, stamp, and deliver your postcard.'
  },
  {
    id: 3,
    question: 'Do you offer international shipping?',
    answer: 'At the moment we can only offer shipping within the United States. Stay updated through our newsletter!'
  },
  {
    id: 4,
    question: 'How long will it take??',
    answer: 'Estimates vary based on current USPS mailing times!'
  },
];

export default Faq
