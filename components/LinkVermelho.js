import {TouchableOpacity,Text, StyleSheet} from 'react-native';

export default function LinkVermelho(props){
  return(
        <TouchableOpacity onPress={props.click}>
      <Text style={styles.link}>
  {props.textoLink}
  </Text>
    </TouchableOpacity>
  ); 
  }

const styles = StyleSheet.create({
        link:{
        textDecorationLine: 'underline',
        color: '#FF0000',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
        }    

});