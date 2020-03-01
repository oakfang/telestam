import React from 'react';
import { Flex } from '@rebass/grid';

import { useMessageService } from 'services/messages';
import { Response } from 'ui/Response';
import { Message } from 'ui/Message';

export function MessageBox() {
  const messages = useMessageService(state => state.messages);
  return (
    <Flex as="main" flex={1} flexDirection="column">
      {messages.map((msg, idx) => {
        if (msg.username) {
          return <Response key={idx} {...msg} />;
        }
        return <Message {...msg} key={idx} />;
      })}
    </Flex>
  );
}
