import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  background: #43546a;
  /* background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, #43546a 15%, #43546a 85%, rgba(0,0,0,0.8) 100%); */
  /* background: radial-gradient(farthest-corner, #43546a 60%, rgba(0,0,0,0.6) 100%); */
  color: #fff;
  font-size: 0.9em;
  /* padding: 8em 10em; */
  padding: 128px 64px;
  line-height: 2;
  letter-spacing: 1.25px;
  font-family: 'Averia Serif Libre';
`

const StyledTextHeader = styled.p`
  position: relative;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 4em;
  font-size: 1.25em;
  text-transform: lowercase;
  letter-spacing: 4px;
  width: fit-content;
  font-style: italic;

  &:before {
    content: "";
    position: absolute;
    left: 25%;
    bottom: -8px;
    height: 1px;
    width: 50%;
    border-bottom: 2px solid #f5bc5e;
  }
`

const TextBody = styled.div`
  margin: 0 auto;
  max-width: 550px;
`

const StyledTextSection = styled.p`
  margin-bottom: 2em;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const StyledTextSignature = styled.p`
  margin-bottom: 0;
  color: #f5bc5e;
  font-style: italic;
`

const Message = () => (
  <Container>
    <StyledTextHeader>the story of kindpost</StyledTextHeader>
    <TextBody>
      <StyledTextSection>
        Whether it's a pick-me-up, an empowerment, or an inspiration,
        our goal is promoting a sense of hope and building connection
        through the transformative nature of kindness.
      </StyledTextSection>

      <StyledTextSection>So what is Kindpost?</StyledTextSection>

      <StyledTextSection>Kindpost is a mission. It's a passion. It's a new way of supporting one another.</StyledTextSection>

      <StyledTextSection>We're all human. We all deserve it.</StyledTextSection>

      <StyledTextSection>Sending my love,</StyledTextSection>
      <StyledTextSignature>Cate</StyledTextSignature>
    </TextBody>
  </Container>
)

export default Message
