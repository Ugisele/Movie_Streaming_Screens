import React from 'react';
import { View,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputComponent = (label,placeholder,mode,IconName,secureTextEntry) => {
    return(
        <View>
            <TextInput 
            style={styles.input}
            label={label}
            placeholder={placeholder}
            mode={mode}
            secureTextEntry={secureTextEntry}
            left={<TextInput.Icon icon={IconName} color='#867f3f' />}
            right={<TextInput.Icon icon={IconName} color='#867f3f' />}
            
            />
        </View>
    )
}
export default TextInputComponent;
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'transparent',
    },
    inputext: {
        fontSize: 15,
        paddingVertical: 10,
        color: '#98999c',

    },
})