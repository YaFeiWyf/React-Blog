import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import App from './App';
import DevTools from './DevTools';
import routes from '../routes/routes';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router routes={routes} history={ hashHistory } />
      </Provider>
    );
  }
}
