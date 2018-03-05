import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _sdk from './sdk/sdk';

export default class App extends React.Component {
  state = {
    data: {}
  }

  componentDidMount() {
    _sdk.DataBridge.bindPushData((data) => {
      this.setState({
        data: data.data
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
