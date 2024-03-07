import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextInputComponent = ({ label, placeholder,value,mode, IconName,IconName2,securityTextEntry, placeholderTextColor,Icon,onChangeText}) => {
    return (
        <View>
            <TextInput
            securityTextEntry={securityTextEntry}

                style={styles.input}
                textColor='#e1e3e6'
                label={label}
                placeholder={placeholder}
                mode={mode}
                value={value}
                onChangeText= {onChangeText}
                left={<TextInput.Icon icon={IconName}/>}
                right={<TextInput.Icon icon={IconName2}/>}
                
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