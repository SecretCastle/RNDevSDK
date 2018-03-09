import React from 'react';
import { View } from 'react-native';
import SocketPanel from './panel/electric';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <SocketPanel />
      </View>
    );
  }
}

