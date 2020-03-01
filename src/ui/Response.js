import React from 'react';
import styled from 'styled-components';

import { themed, secondary } from 'theme';

export function Response({ username, text }) {
  return (
    <ForeignMessage>
      <small>{username}</small>
      <p>{text}</p>
    </ForeignMessage>
  );
}

export const ForeignMessage = styled.div`
  position: relative;
  border-radius: 10px;
  width: max-content;
  padding: 10px;
  margin: 10px;
  ${secondary} :after {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: ${themed('palette.secondary')};
    border-left: 0;
    border-top: 0;
    margin-left: -10px;
  }

  small {
    color: ${themed('palette.primaryL')};
  }

  p {
    margin: 0;
  }
`;
