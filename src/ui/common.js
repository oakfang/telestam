import styled from 'styled-components';

import { themed, primary, secondary } from 'theme';

export const Input = styled.input.attrs({ type: 'text' })`
  ${secondary}
  position: relative;
  display: block;
  padding: 5px;
  border-radius: 5px;
  flex: 1;
  margin-left: 15px;
  margin-right: 5px;
  border: 1px solid ${themed('palette.primary')};

  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  ${props => (props.primary ? primary : secondary)}

  cursor: pointer;
  :active {
    outline: none;
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const RoundButton = styled(Button)`
  padding: 10px;
  border-radius: 100%;
`;
