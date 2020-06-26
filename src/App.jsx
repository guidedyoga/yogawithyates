import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  background: #333;
`;

function App() {
  return (
    <Container>
      <h1>Word</h1>
    </Container>
  );
}

export default App;
