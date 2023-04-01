import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';



export default function App(){
  const [nome, setNome] = useState('Raphael')
  const [valor, setValor] = useState(0)
  
  function aumentar(){
    var ok = valor + 1
    setValor((ok))
  }

  function diminuir(){
    var ok = valor - 1
    if(valor>0){
      setValor((ok))
    }
  }


    return(
      <View style={{ margin: 20, backgroundColor: 'black' }}>
        <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
          Contador de pessoas
        </Text>
        <Text style={{fontSize: 200, color: 'red', textAlign: 'center'}}>
           {valor}
        </Text>


        <Button title="+" onPress={aumentar} />
        <Text style={{fontSize: 28, textAlign: 'center'}}>
          -
        </Text>
        <Button title="-" onPress={diminuir} />


        <Text style={{fontSize: 40, color: 'red', textAlign: 'center'}}>
          {nome}
        </Text>

      </View>
    )
  
}


