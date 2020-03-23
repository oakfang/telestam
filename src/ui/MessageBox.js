import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import { useMessageService } from 'services/messages';
import { Response } from 'ui/Response';
import { Message } from 'ui/Message';

export function MessageBox() {
  const { messages } = useMessageService();
  const container = useRef();
  useEffect(() => {
    if (container.current) {
      const lastMessage = container.current.querySelector('div:last-of-type');
      if (lastMessage && lastMessage.scrollIntoView) {
        lastMessage.scrollIntoView();
      }
    }
  }, [messages]);
  return (
    <Container ref={container}>
      {messages.map((msg, idx) => {
        if (msg.username) {
          return <Response key={idx} {...msg} />;
        }
        return <Message {...msg} key={idx} />;
      })}
    </Container>
  );
}

const Container = styled(Flex).attrs({
  as: 'main',
  flex: 1,
  flexDirection: 'column',
})`
  overflow: auto;
  z-index: -1;
`;
