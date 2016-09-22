import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import App from './App';
import Blog from './Blog/Blog';
import Resume from './Resume/Resume'
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Blog />
          <Resume />
          /*<DevTools />*/
        </div>
      </Provider>
    );
  }
}
