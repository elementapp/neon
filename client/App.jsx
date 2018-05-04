/**
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import {getStore} from 'store/getStore';


const store = getStore();

export class App extends React.Component<void> {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Neon</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">

          </div>
        </div>
      </Provider>
    );
  }
}
