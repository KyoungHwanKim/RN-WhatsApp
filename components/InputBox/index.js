import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

const InputBox = () => {

    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput 
                    placeholder={"Type a message"}
                    style={styles.textInput} 
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
                <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
            </View>
            <View style={styles.buttonContainer}>
                {!message
                    ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                    : <MaterialIcons name="send" size={28} color="white" />
                }
            </View>
        </View>
    );
}

export default InputBox;