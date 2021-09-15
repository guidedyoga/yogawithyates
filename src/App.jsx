import React from 'react';
import styled from 'styled-components';
import Links from './Links';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: 'Cinzel Decorative', cursive;
  font-weight: 400;
  font-size: 96px;
  margin-top: 0;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 54px;
    padding: 20px;
  }
`;

const Paragraph = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  border: 2px solid #000;
  border-radius: 8px;
  padding: 4px 16px;
  box-sizing: border-box;

  h3 {
    text-transform: uppercase;
  }

  a {
    color: rgba(0,0,0,0.87);
  }

  p {
    color: rgba(0,0,0,0.72);
    line-height: 14px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

function App() {
  return (
    <Container>
      <Title>Yoga With Yates</Title>
      <h2>Upcoming Classes</h2>
      <Paragraph>
        <h3>Saturdays @ 12pm</h3>
        <a
          href="https://www.deeplyrootedcafe.com/"
          title="Deeply Rooted Welness Cafe Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deeply Rooted Wellness Cafe
        </a>
        <p>14505 E Alameda Ave</p>
        <p>Aurora, CO 80012</p>
      </Paragraph>
      <Links />
    </Container>
  );
}

export default App;
