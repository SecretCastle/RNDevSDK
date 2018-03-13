import React, { Component } from 'react';
import classnames from 'classnames';
import { View, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';

const styles = {
    bgBox: {
        position: 'relative'
    },
    container: {
        width: Dimensions.get('window').width,
        height: 300,
        position: 'absolute',
        backgroundColor: '#fff',
        zIndex: 999,
        top: Dimensions.get('window').height - 300
    },
    shadow: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#000',
        opacity: 0.5,
        top: 0,
        left: 0,
        zIndex: 100
    },
    showModal: {
        display: 'flex'
    },
    hideModal: {
        display: 'none'
    }
}

class Scroll extends Component {
    render () {
        const { show, close } = this.props;
        return (
            <View style={styles.bgBox} style={show ? styles.showModal : styles.hideModal}>
                <TouchableWithoutFeedback onPress={close(false)}>
                    <View style={styles.shadow}/>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <Text>Hello World</Text>
                    <Text>Hello Worldxasxasxasxas</Text>
                    <Text>Hello Worldxasxasxasxas</Text>
                    <Text>Hello Worldxasxasxasxas</Text>
                </View>
            </View>
        )
    }
}

export default Scroll;