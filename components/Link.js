import {TouchableOpacity,Text, StyleSheet,View} from 'react-native';

export default function Link(props){
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
        color: '#13E969',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
        }    

});