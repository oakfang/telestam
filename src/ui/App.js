import React from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { Flex, Box } from '@rebass/grid';

import carbonURL from 'assets/Carbon.svg';
import { MessageBox } from 'ui/MessageBox';
import { MessageAdder } from 'ui/MessageAdder';
import { AppBar } from 'ui/AppBar';

export function App() {
  return (
    <Div100vh>
      <Flex flexDirection="column" width="100%" height="100%">
        <Background />
        <AppBar />
        <MessageBox />
        <Box as="footer" pb="5px">
          <MessageAdder />
        </Box>
      </Flex>
    </Div100vh>
  );
}

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("${carbonURL}");
  z-index: -1;
`;
