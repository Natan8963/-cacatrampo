import { Text, View, StyleSheet} from 'react-native';

export default function CaixaDescricao(props){
  return(
  <View style={styles.caixaCinza}>
  <Text style={styles.textoCaixa}>
{props.descricao}    
  </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  caixaCinza:{
    backgroundColor: '#C6C6D0',
    width: '90%',
    borderRadius: 30,
    borderWidth: 3,
    padding: 15    
  },
  textoCaixa: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32
  }

});