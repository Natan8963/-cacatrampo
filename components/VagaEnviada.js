import {Text, StyleSheet, View} from 'react-native';

export default function VagaEnviada(props){
  return(
    <View style={styles.container}>
    <Text style={styles.tituloVaga}>{props.tituloVaga} </Text>
    <Text style={styles.empresaVaga}>Empresa : {props.empresa} </Text>
    <Text style={styles.dataCandidatura}>Data candidatura : {props.dataCandidatura} </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090744',
    width: '100%',
    borderRadius: 30,
    padding: 15,
    marginBottom: 15
  },
  tituloVaga: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  empresaVaga:{
        color: '#13E969',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dataCandidatura:{
            color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }

});