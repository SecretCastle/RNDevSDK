import React, { Component } from 'react'
import { TouchableWithoutFeedback, Text, View } from 'react-native';

class TouchButton extends Component {
    render () {
        return (
            <TouchableWithoutFeedback
                onPress={this.props.onPress}
            >
                <View
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#f00'
                    }}
                >
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default TouchButton;