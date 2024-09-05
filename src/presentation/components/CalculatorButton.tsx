import React from "react";
import { Pressable, Text } from "react-native"
import { colors, globalStyles } from "../../config/theme/app-theme"
import { CalculatorButtonProps } from "../../domain/interfaces/components";

export const CalculatorButton = ({label,color = colors.darkGray,doubleSize = false,blackText = false, onPress}:CalculatorButtonProps) => {
  return (
    <Pressable
    onPress={()=>onPress()}
      style={({pressed})=>({
      ...globalStyles.button,
      backgroundColor: color,
      opacity: (pressed) ? 0.8 : 1,
      width: (doubleSize) ? 180 : 80,
    })}>
      <Text style={{
        ...globalStyles.buttonText,
        color: (blackText) ? 'black' : 'white'
      }}>{label}</Text>
    </Pressable>
  );
};