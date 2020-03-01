import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import { Theme } from 'theme';
import { GlobalStyle } from 'global-style';
import App from 'ui';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Theme>
      <App />
    </Theme>
  </>,
  document.getElementById('root'),
);
