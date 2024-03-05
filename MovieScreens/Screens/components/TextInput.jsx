import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputComponent = ({ label, placeholder, mode, IconName, placeholderTextColor,Icon,onChangeText}) => {
    return (
        <View>
            <TextInput

                style={styles.input}
                textColor='#e1e3e6'
                label={label}
                placeholder={placeholder}
                mode={mode}
                onChangeText= {onChangeText}
              
                left={<TextInput.Icon icon={IconName}/>}
                

            />
        </View>
    )
}
export default TextInputComponent;
const styles = StyleSheet.create({
    input: {
        borderWidth: 0,
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#303234'

    },

})