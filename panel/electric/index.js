import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import TouchButton from '../../components/TouchButton';

const styles = {
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgb(111, 203, 185)',
        height: '100%'
    },
    bottomControl: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 114,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnIcon: {
        width: '23%',
        marginLeft: '1%',
        marginRight: '1%'
    }
}

class SocketPanel extends Component {
    ctrlFn = () => {
        console.log('run');
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>插座面板</Text>
                <View style={styles.bottomControl}>
                    <View style={styles.btnIcon}>
                        <TouchButton 
                            title="按钮1"
                            onPress={this.ctrlFn}
                        />
                    </View>
                    <View style={styles.btnIcon}>
                        <TouchButton 
                            title="按钮2"
                            onPress={this.ctrlFn}
                        />
                    </View>
                    <View style={styles.btnIcon}>
                        <TouchButton 
                            title="按钮3"
                            onPress={this.ctrlFn}
                        />
                    </View>
                    <View style={styles.btnIcon}>
                        <TouchButton 
                            title="按钮4"
                            onPress={this.ctrlFn}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default SocketPanel;