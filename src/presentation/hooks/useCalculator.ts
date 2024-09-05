import { useEffect, useRef, useState } from "react"
import { Operator } from "../../domain/enums/Operators";

export const useCalculator = () => {
  const [formula,setFormula] = useState('');
  const [number,setNumber] = useState('0');
  const [prevNumber,setPrevNumber] = useState('0');
  const lastOperation = useRef<Operator>();

  useEffect(()=>{
    if(lastOperation.current){
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    }else{
      setFormula(number);
    }
  },[number]);

  useEffect(()=>{
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult.toString()}`);
  },[formula]);

  const buildNumber = (numberString: string) => {
    if(number.includes('.') && numberString === '.') return;
    if(number.startsWith('0') || number.startsWith('-0')) {
      if(numberString==='.') return setNumber(number + numberString);
      if(numberString === '0' && number.includes('.')) return setNumber(number + numberString);
      if(numberString !== '0' && !number.includes('.')) return setNumber(numberString);
      if(numberString === '0' && number.includes('.')) return;
      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };
  const setLastNumber = () => {
    calculateResult();
    if(number.endsWith('.')){
      setPrevNumber(number.slice(0,-1))
    }else{
      setPrevNumber(number);
    };
    setNumber('0');
  }
  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  }
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  }
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  }
  const clean = () =>{
    setNumber('0');
    setPrevNumber('0');
    lastOperation.current = undefined;
    setFormula('');
  };
  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result.toString()}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  }
  const calculateSubResult = (): number => {
    const [firstValue,operation,secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if(isNaN(num2)) return num1;

    switch(lastOperation.current) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error('Not implemented operation');
    };
  }
  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;

    if(number.includes('-')){
      currentSign = '-';
      temporalNumber = number.substring(1);
    }
    if(temporalNumber.length>1) return setNumber(currentSign + temporalNumber.slice(0,-1));
    setNumber('0');
  };
  const toggleSign = () => {
    if(number.includes('-')) return setNumber(number.replace('-',''));
    setNumber('-'+number);
  };
  return {
    addOperation,
    buildNumber,
    calculateResult,
    clean,
    deleteOperation,
    divideOperation,
    formula,
    multiplyOperation,
    number,
    prevNumber,
    subtractOperation,
    toggleSign,
  }
}