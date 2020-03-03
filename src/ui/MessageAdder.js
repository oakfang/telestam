import React, { useState } from 'react';
import { Flex } from '@rebass/grid';

import { username } from 'services/username';
import { Input, RoundButton } from 'ui/common';
import { useMessageService } from 'services/messages';

export function MessageAdder() {
  const [text, setText] = useState('');
  const { add } = useMessageService();
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    add({ text });
    setText('');
  };
  return (
    <Flex as="form" justifyContent="space-between" onSubmit={onSubmit}>
      <Input
        autoFocus
        placeholder={`Message as ${username}`}
        value={text}
        onChange={onChange}
      />
      <RoundButton primary required disabled={!text}>
        <i className="gg-add" />
      </RoundButton>
    </Flex>
  );
}
