//import { useNavigation } from '@react-navigation/native';
//import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const CardVaga = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloVaga}>{props.tituloVaga}</Text>

      <View style={styles.infosVaga}>
        <Text style={[styles.textoInfo, { color: 'yellow', margin: 5 }]}>Postagem : {props.postagem}</Text>
        <Text style={styles.textoInfo}>Salário : {props.salario} R$</Text>
        <Text style={styles.textoInfo}>Contratação : {props.contratacao}</Text>
        <Text style={styles.textoInfo}>Modelo : {props.modelo}</Text>
        <Text style={styles.textoInfo}>Local : {props.local}</Text>
        <Text style={[styles.textoInfo, { marginBottom: 15 }]}>Empresa : {props.empresa}</Text>
      </View>
      <TouchableOpacity style={styles.botaoRosa} onPress={props.detalhesVaga}>
        <Text style={styles.textoBotao}>Detalhes da vaga</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVerde} onPress={props.enviarCurriculo}>
        <Text style={styles.textoBotao}>Enviar Currículo</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090744',
    marginTop: 15,
    width: 360,
    borderRadius: 30,
    padding: 15,
  },
  tituloVaga: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  infosVaga: {
    width: '100%',
    marginTop: 15
  },
  textoInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#13E969'
  },
  botaoRosa: {
    marginTop: 10,
    backgroundColor: '#fa6132',
    padding: 10,
    borderRadius: 30
  },
  botaoVerde: {
    marginTop: 15,
    backgroundColor: '#13E969',
    padding: 10,
    borderRadius: 30
  },
  textoBotao: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});

export default CardVaga;