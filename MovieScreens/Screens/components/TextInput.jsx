import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputComponent = ({ label, placeholder, mode, IconName, placeholderTextColor,Icon}) => {
    return (
        <View>
            <TextInput

                style={styles.input}
                label={label}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                mode={mode}
                // right={<TextInput.Icon icon={Icon}/>}
                left={<TextInput.Icon icon={IconName}/>}
                value=''

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
        backgroundColor: '#303234',


    },

})