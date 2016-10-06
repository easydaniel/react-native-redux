import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator,
  TouchableHighlight
} from 'react-native';


import createStore from './stores/createStore';
import { Provider } from 'react-redux';

import Base from './containers/Base';


const store = createStore()

export default class iOSApp extends Component {
  _handleNavigationRequest() {
    this.refs.nav.push({
      component: Base,
      title: 'Genius',
      passProps: { navigator: this.refs.nav },
    });
  }
  
  render() {
    return (
      <Provider store={store}>
        <NavigatorIOS
          ref='nav'
          initialRoute={{
            component: Base,
            title: 'Base',
            passProps: { navigator: this.refs.nav },
            rightButtonSystemIcon: 'search',
            onRightButtonPress: () => this._handleNavigationRequest(),
          }}
          style={{flex: 1}}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
