import { View, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BotaoCadastro from '../components/BotaoCadastro';

import TituloCT from '../components/TituloCT';
import { useState } from 'react';
import MarginBottom15 from '../components/MarginBottom15';
import urlsAPI from '../api';

export default function CadastrarVaga() {

    const data = new Date();
    let dataFormatada = data.getFullYear() + '-0' + (data.getMonth() + 1) + '-0' + data.getDate();

    let dadosNovaVaga = {
        dataPostagem: dataFormatada,
        descricaoVaga: "",
        local: "",
        modeloTrabalho: "",
        nomeEmpresa: "",
        salario: 0,
        tipoContratacao: "",
        titulo: "",
        administrador: {
            "id": 1
        }
    }

    const navigation = useNavigation();

    function irPraTela(tela) {
        navigation.navigate(tela);
    }

    async function cadastrarVaga(dados) {
        const response = await fetch(`${urlsAPI.operacoesVagas}`, {
            method: 'POST',
            body: JSON.stringify(
                dados
            ), headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

        const status = response.status;
        console.log(status);
    }

    function MsgSucesso(tela, mensagem) {
        navigation.navigate("Mensagem", { mensagem: mensagem, tela: tela });
    }

    return (
        <View style={styles.container}>
            <LogoCacaTrampo />
            <TituloCT titulo="Preencha os campos abaixo para cadastrar uma vaga:" />
            <ScrollView style={styles.containerScroll}>
                <LabelCT textoLabel="Título da vaga:" />
                <TextoInput onChangeText={(text) => dadosNovaVaga.titulo = text} />
                <LabelCT textoLabel="Salário:" />
                <TextoInput onChangeText={(text) => dadosNovaVaga.salario = text} />
                <LabelCT textoLabel="Tipo de contratação:" />
                <TextoInput placeholder="Ex..CLT,PJ..etc.." onChangeText={(text) => dadosNovaVaga.tipoContratacao = text} />
                <LabelCT textoLabel="Modelo de trabalho:" />
                <TextoInput placeholder="Ex..Presencial,Híbrido...etc" onChangeText={(text) => dadosNovaVaga.modeloTrabalho = text} />
                <LabelCT textoLabel="Local da empresa:" />
                <TextoInput onChangeText={(text) => dadosNovaVaga.local = text} />
                <LabelCT textoLabel="Nome da empresa:" />
                <TextoInput onChangeText={(text) => dadosNovaVaga.nomeEmpresa = text} />
                <LabelCT textoLabel="Descrição da vaga:" />
                <TextoInput onChangeText={(text) => dadosNovaVaga.descricaoVaga = text} multiline={true} />
                <MarginBottom15 />
                <BotaoCadastro textoBotao="Cadastrar" click={() => {
                    console.log(dataFormatada)
                    console.log(dadosNovaVaga)
                    cadastrarVaga(dadosNovaVaga)
                        .then(MsgSucesso("InicioADM", "Vaga\nCadastrada !"))
                }} />
                <BotaoCadastro textoBotao="Voltar" click={() => irPraTela("InicioADM")} />

            </ScrollView>
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15
    },
    containerScroll: {
        width: '100%',
        paddingRight: 15,
        paddingLeft: 15
    },
    botao: {
        display: 'flex',
        backgroundColor: '#090744',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 15
    }
});