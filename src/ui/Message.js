import React from 'react';
import styled from 'styled-components';
import { ForeignMessage } from 'ui/Response';

import { themed, primary } from 'theme';

export function Message({ text }) {
  return (
    <LocalMessage>
      <p>{text}</p>
    </LocalMessage>
  );
}

export const LocalMessage = styled(ForeignMessage)`
  position: relative;
  border-radius: 10px;
  width: max-content;
  padding: 10px;
  margin: 10px;
  align-self: flex-end;
  ${primary} :after {
    content: '';
    position: absolute;
    left: calc(100% + 10px);
    top: 10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-left-color: ${themed('palette.primary')};
    border-right: 0;
    border-top: 0;
    margin-right: -10px;
  }
`;
