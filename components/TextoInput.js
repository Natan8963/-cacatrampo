import { StyleSheet, TextInput } from 'react-native';

export default function TextoInput(props) {
  return (
    <TextInput style={styles.textoInput} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value} secureTextEntry={props.secureTextEntry} defaultValue={props.defaultValue} multiline={props.multiline} />

  )
}

const styles = StyleSheet.create({
  textoInput: {
    textAlign: 'center',
    backgroundColor: '#C6C6D0',
    borderWidth: 3,
    borderColor: '#000',
    width: '100%',
    borderRadius: 30,
    fontSize: 30,
    fontWeight: 'bold',
  }
});