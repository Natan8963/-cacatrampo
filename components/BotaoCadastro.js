import { Text, TouchableOpacity,StyleSheet} from 'react-native';

export default function BotaoCadastro(props){
  return(
  <TouchableOpacity style={styles.botao}onPress={props.click}>
  <Text style={styles.botaoTexto}>{props.textoBotao}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao:{
    backgroundColor: '#090744',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginBottom: 15

  },
  botaoTexto:{
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
});