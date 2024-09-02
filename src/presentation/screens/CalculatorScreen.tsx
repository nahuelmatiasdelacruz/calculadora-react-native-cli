import { Pressable, Text, View } from "react-native"
import { colors, globalStyles } from "../../config/theme/app-theme"
import { CalculatorButton } from "../components/CalculatorButton"

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton blackText label='C' color={colors.lightGray}/>
        <CalculatorButton blackText label='+/-' color={colors.lightGray}/>
        <CalculatorButton blackText label='del' color={colors.lightGray}/>
        <CalculatorButton label='/' color={colors.orange}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='7'/>
        <CalculatorButton label='8'/>
        <CalculatorButton label='9'/>
        <CalculatorButton label='X' color={colors.orange}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='4'/>
        <CalculatorButton label='5'/>
        <CalculatorButton label='6'/>
        <CalculatorButton label='-' color={colors.orange}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='1'/>
        <CalculatorButton label='2'/>
        <CalculatorButton label='3'/>
        <CalculatorButton label='+' color={colors.orange}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='0' doubleSize/>
        <CalculatorButton label='.'/>
        <CalculatorButton label='=' color={colors.orange}/>
      </View>
    </View>
  )
}