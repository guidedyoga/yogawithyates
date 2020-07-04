import React from 'react';
import styled from 'styled-components';
import EmailField from './EmailField';

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
  font-size: 34px;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

function App() {
  return (
    <Container>
      <Title>Yoga With Yates</Title>
      <Paragraph>namaste tuned for more...</Paragraph>
      <EmailField />
    </Container>
  );
}

export default App;
