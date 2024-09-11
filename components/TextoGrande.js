import {Text, StyleSheet} from 'react-native';

export default function TextoGrande(props){
  return(
  <Text style={styles.textoGrande}>
  {props.texto}
  </Text>
  )
}

const styles = StyleSheet.create({
  textoGrande:{
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'  
  }
});