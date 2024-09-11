import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LogoGrande from '../components/LogoGrande';
import TextoGrande from '../components/TextoGrande';
import { useNavigation } from '@react-navigation/native';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';

export default function Mensagem({ route }){

const navigation = useNavigation();

    const telaParaCarregar = route.params?.tela;

    const timeoutId = () => setTimeout(() => {
        navigation.navigate(telaParaCarregar);
    }, 3000);

    timeoutId();


  return(
        <View style={styles.container}>
        <LogoGrande/>
        <TextoGrande texto={route.params?.mensagem}/>        
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
        backgroundColor: '#13E969',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
  }
});