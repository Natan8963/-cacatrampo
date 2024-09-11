import {Text, StyleSheet} from 'react-native';

export default function LabelCT(props){
  return(
  <Text style={styles.labelct}>
  {props.textoLabel}
  </Text>
  )
}

const styles = StyleSheet.create({
  labelct: {
    fontSize: 30,
    fontWeight: 'bold', 
    color: '#090744',
    textAlign: 'center'
  }
});