import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
 
const App = () => {
  const [mencao, setMencao] = useState('');
  const [nota, setNota] = useState('');
 
  const Conversao = () => {
    let conversor;
 
    if (mencao === "MB") {
      conversor = 10;
    } else if (mencao === "B") {
      conversor = 7.5;
    } else if (mencao === "R") {
      conversor = 6;
    } else {
      conversor = 0;
    }
 
    setNota(conversor);
  };
 
  return (
    <View>
      <Text style={styles.titulo}>CONVERSOR DE MENÇÕES</Text>
      <TextInput
        placeholder="Insira a menção aqui"
        value={mencao}
        onChangeText={setMencao}
      />
      <Button title="Converter" onPress={Conversao} />
      <Text>{nota}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  
    titulo: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 105,
    }
    
});
 
 
export default App;