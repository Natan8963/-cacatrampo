import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import TituloCT from '../components/TituloCT';
import CardVaga from '../components/CardVaga';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';
import CardGerenciaVaga from '../components/CardGerenciaVaga';
import { useEffect, useState } from 'react';
import urlsAPI from '../api';

export default function GerenciarVagas() {
    const [listaVagas, setListaVagas] = useState({});

    useEffect(() => {
        console.log("Testando useEffect !!!")
        carregarVagas()
            .then((resposta) => setListaVagas(resposta))
    }, [])

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }

    function Msg() {
        navigation.navigate("Mensagem", { mensagem: "Vaga excluída", tela: "InicioADM" })
    }

    async function carregarVagas() {
        const response = await fetch(urlsAPI.operacoesVagas);
        const vagas = response.json();
        return vagas;
    }

    async function excluirVaga(id) {

        //limpando candidatos antes de excluir a vaga
        const limpandoCandidatos = () => fetch(`${urlsAPI.limparCandidatosVaga}/${id}`, {
            method: 'DELETE'
        }).then((response) => console.log(response.status))
            .catch((e) => console.log(e))

        const excluindoVaga = () => fetch(`${urlsAPI.operacoesVagas}/${id}`, {
            method: "DELETE"
        })
            .then((response) => console.log(response.status))
            .catch((e) => console.log(e))

        await limpandoCandidatos();
        await excluindoVaga();
    }

    return (
        <View style={styles.container}>
            <LogoCacaTrampo />
            <TituloCT titulo="Gerencia de vagas" />
            <FlatList style={styles.containerScroll} data={listaVagas} renderItem={({ item }) =>
                <CardGerenciaVaga tituloVaga={item.titulo} empresa={item.nomeEmpresa} dataPostagem={item.dataPostagem} onPress={() => excluirVaga(item.id).then(Msg())} />
            }>
            </FlatList>

            <BotaoPrincipal textoBotao="Voltar" click={() => irPraTela("InicioADM")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    containerScroll: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        maxHeight: 450
    }
});