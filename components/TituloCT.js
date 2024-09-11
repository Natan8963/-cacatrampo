import {Text, StyleSheet} from 'react-native';

export default function TituloCT(props){
  return(
  <Text style={styles.tituloct}>
  {props.titulo}
  </Text>
  )
}

const styles = StyleSheet.create({
  tituloct:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'  
  }
});