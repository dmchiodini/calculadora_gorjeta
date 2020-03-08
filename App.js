import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;

const HeaderText = styled.Text`
  font-size:25px;
`;
const Input = styled.TextInput`
  width: 60%;
  height:50px;
  font-size:18px;
  background-color:#EEE;
  margin-top:20px;
  margin-bottom:10px;
  border-radius:10px;
  padding:10px;
`;
const CalcButton = styled.Button``;

const ResultArea = styled.View`
  width:60%;
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
`;
const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weight:bold;
`;
const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:30px;
`;
const PorcArea = styled.View`
  flex-direction:row;
  margin:20px;
`;
const PorcItem = styled.Button``;

export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [porc, setPorc] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill) {
      setTip((porc/100) * nBill);    // (10/100) * nBill
    } 
  }

  useEffect(()=>{
    calc();
  }, [porc]);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input 
        placeholder="Valor da conta: "
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />
      <PorcArea>
        <PorcItem title="5%" onPress={()=>setPorc(5)} />
        <PorcItem title="10%" onPress={()=>setPorc(10)} />
        <PorcItem title="15%" onPress={()=>setPorc(15)} />
        <PorcItem title="20%" onPress={()=>setPorc(20)} />
      </PorcArea>
      <CalcButton title={`Calcular ${porc}%`} onPress={calc} />
      {tip > 0 &&
      <ResultArea>
        <ResultItemTitle>Valor da Conta</ResultItemTitle>
        <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

        <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
        <ResultItem>R$ {tip.toFixed(2)} ({porc}%)</ResultItem>

        <ResultItemTitle>Valor Total</ResultItemTitle>
        <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
      </ResultArea>
      }
    </Page>
  );
}