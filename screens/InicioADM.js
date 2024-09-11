import { View, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import { useNavigation } from '@react-navigation/native';

import BotaoPrincipal from '../components/BotaoPrincipal';

import TituloCT from '../components/TituloCT';

export default function InicioADM() {

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }


    return (
        <View style={styles.container}>
            <LogoCacaTrampo />
            <TituloCT titulo="Olá adm!" />
            <LabelCT textoLabel="Selecione uma das opções abaixo :" />
            <BotaoPrincipal textoBotao="Cadastrar nova vaga" click={() => irPraTela("CadastrarVaga")} />
            <BotaoPrincipal textoBotao="Gerenciar vagas" click={() => irPraTela("GerenciarVagas")} />
            <BotaoPrincipal textoBotao="Sair" click={() => irPraTela("Login")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});