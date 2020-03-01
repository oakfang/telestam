import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import { themed } from 'theme';
import carbonURL from 'assets/Carbon.svg';
import { MessageBox } from 'ui/MessageBox';
import { MessageAdder } from 'ui/MessageAdder';

export function App() {
  return (
    <Flex flexDirection="column" width="100vw" height="100vh">
      <Background />
      <Header>
        <h1>TeleStam</h1>
      </Header>
      <MessageBox />
      <Box as="footer" pb="5px">
        <MessageAdder />
      </Box>
    </Flex>
  );
}

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("${carbonURL}");
  z-index: -1;
`;

const Header = styled(Box).attrs({
  as: 'header',
  px: '10px',
  py: '5px',
})`
  background-color: ${themed('palette.primary')};
  color: ${themed('palette.textP')};

  h1 {
    margin: 0;
  }
`;
