import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid #f5bc5e;
  padding: 40px 0;

  &:first-of-type {
    border-top: 1px solid #f5bc5e;
  }
`;

const Header = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  cursor: pointer;
  font-size: 1.25rem;
`;
const Section = styled(motion.section)`
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Body = styled(motion.div)`
  padding-top: 20px;
  transform-origin: top left;

  a {
    margin: 1px;
    color: #f5bc5e;
  }
`;

const Icon = styled.span`
  color: #f5bc5e;
  font-size: 2rem;
`;

const Accordion = ({ id, i, expanded, setExpanded, headerText, bodyText }) => {
  const isOpen = i === expanded;

  return (
    <Container id={id}>
      <Header initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
        <p>{headerText}</p>
        <Icon>{isOpen ? '-' : '+'}</Icon>
      </Header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Body
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              {bodyText()}
            </Body>
          </Section>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Accordion;
