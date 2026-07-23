import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { stylesButton } from "../styles/globalStyles";

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={stylesButton.button} onPress={onPress}>
      <Text style={stylesButton.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;