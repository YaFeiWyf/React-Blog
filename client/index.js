import React from 'react';
import { render } from 'react-dom';
/*import { AppContainer } from 'react-hot-loader';*/
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
  /*<AppContainer>*/
    <Root
      store={ store }
    />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root').default;
    render(
        <RootContainer
          store={ store }
        />,
      document.getElementById('root')
    );
  });
}
