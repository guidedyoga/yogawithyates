import React from 'react';
import styled from 'styled-components';

const Space = styled.div`
  height: 2rem;
`;

const Row = styled.a`
  display: block;
  text-decoration: none;
  min-width: 240px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin-top: 1rem;
  color: #fff;
  background: #000;
  border-radius: 0.4rem;
`;

const Text = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 200;
`;

const instagramLink = 'https://www.instagram.com/audrey_yoga_co/?hl=en';
const facebookLink = 'https://www.facebook.com/yogawithyates/';

function Links() {
  return (
    <>
      <Space />
      <Row title="Facebook" href={facebookLink}>
        <Text>@yogawithyates</Text>
      </Row>
      <Row title="Instagram" href={instagramLink}>
        <Text>@audrey_yoga_co</Text>
      </Row>
    </>
  );
}

export default Links;
