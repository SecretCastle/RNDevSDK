import React, { Component } from 'react';
import { 
    View,
    Dimensions, 
    Text, 
    TouchableWithoutFeedback,
    Button,
    Modal,
    PickerIOS,
    Platform
} from 'react-native';

import PickerAndroid from 'react-native-picker-android';
let Picker = Platform.OS === 'ios' ? PickerIOS : PickerAndroid;

const styles = {
    bgBox: {
        position: 'relative'
    },
    container: {
        width: Dimensions.get('window').width,
        height: 300,
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
    pressFn = () => {
        const { closefn } = this.props;
        closefn(false);
    }

    confirmFn = () => {
        const { closefn } = this.props;
        closefn(false);
    }

    render () {
        const { show } = this.props;
        return (
            <View>
                <Modal
                    visible={show}
                    transparent={true}
                    animationType={"slide"}
                    onRequestClose={() => {}}
                >
                    <View
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            position: 'relative', 
                            height:  Dimensions.get('window').height
                        }}
                    >
                        <View style={styles.container}>
                            {/* <Picker
                                selectedValue={'java'}
                                onValueChange={() => {}}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker> */}
                            <Button
                                title={'确定'}
                                onPress={this.confirmFn}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Scroll;