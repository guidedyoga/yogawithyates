import React from 'react';
import styled from 'styled-components';

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
`;

const Paragraph = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  font-weight: 300;
`;

function App() {
  return (
    <Container>
      <Title>Yoga With Yates</Title>
      <Paragraph>namaste tuned for more...</Paragraph>
    </Container>
  );
}

export default App;
