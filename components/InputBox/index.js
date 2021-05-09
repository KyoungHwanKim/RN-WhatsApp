import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InputBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>

            </View>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="microphone" size={24} color="white" />
            </View>
        </View>
    );
}

export default InputBox;