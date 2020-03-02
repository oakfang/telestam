import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import { Theme } from 'theme';
import { GlobalStyle } from 'global-style';
import { Provider } from 'services/messages';
import App from 'ui';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Theme>
      <Provider>
        <App />
      </Provider>
    </Theme>
  </>,
  document.getElementById('root'),
);
