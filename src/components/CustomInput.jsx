import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import { stylesInput } from '../styles/globalStyles';

const CustomInput = ({onChange, value}) => {

    return (
        <TextInput
            style={stylesInput.input}
            onChangeText={onChange}
            value={value}
            placeholder="Buscar por nombre"
            placeholderTextColor="gray"
        />
    )
}

export default CustomInput