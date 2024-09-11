import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import TituloCT from '../components/TituloCT';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import MarginBottom15 from '../components/MarginBottom15';
import { useNavigation } from '@react-navigation/native';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';

export default function RecuperarSenha(){

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }

    function MsgSucesso(tela,mensagem){
        navigation.navigate("Mensagem",{mensagem: mensagem, tela: tela });
    }
  
  return(
        <View style={styles.container}>
        <LogoCacaTrampo/>
        <TituloCT titulo="Recuperar Senha"/>
        <LabelCT textoLabel="Digite o e-mail cadastrado para recuperar a senha"/>
        <MarginBottom15/>
        <TextoInput/>
        <BotaoPrincipal textoBotao="Recuperar" click={()=>MsgSucesso("Login","Verifique seu e-mail!")}/>
        <BotaoPrincipal textoBotao="Sair" click={()=>irPraTela("Login")}/>   
        
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
  }
});