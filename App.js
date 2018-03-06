import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import _sdk from './sdk/sdk';

export default class App extends React.Component {
  state = {
    data: {},
    power: '0'
  }

  componentDidMount() {
    _sdk.DataBridge.bindPushData((data) => {
      this.setState({
        data: data
      })
    })
  }

  sendMsg = () => {
    _sdk.DataBridge.setDeviceStatus({
      "Switch": this.state.power === '0' ? '1' : '0'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.data)}</Text>
        <Button 
          title="我是一个开关"
          onPress={this.sendMsg}
        />
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
