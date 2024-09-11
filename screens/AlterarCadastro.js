import { View, StyleSheet, ScrollView, TouchableOpacity, Alert, Text, TextInput } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import MarginBottom15 from '../components/MarginBottom15';
import TextoInput from '../components/TextoInput';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BotaoCadastro from '../components/BotaoCadastro';
import TituloCT from '../components/TituloCT';
import { useEffect, useState } from 'react';
import urlsAPI from '../api';
import Globais from '../Globais';
export default function AlterarCadastro() {

  const [dadosCandidato, setDadosCandidato] = useState([]);
  const [curriculo, setCurriculo] = useState([]);
  let prepararDadosAlteracao = {
    id: Globais.idCandidatoLogado,
    nome: "",
    email: "",
    senha: "",
    matricula: "",
    telContato: ""
  }

  useEffect(() => {
    console.log(Globais.idCandidatoLogado)
    carregarDadosCandidato()
      .then((response) => setDadosCandidato(response))

    carregarDadosCurriculo()
      .then((response) => setCurriculo(response))
  }, [])

  const navigation = useNavigation();

  function irPraTela(tela) {
    navigation.navigate(tela);
  }

  async function carregarDadosCandidato() {
    const response = await fetch(`${urlsAPI.operacoesCandidatos}/${Globais.idCandidatoLogado}`);
    const json = await response.json();
    return json;
  }

  async function carregarDadosCurriculo() {
    const response = await fetch(`${urlsAPI.buscarCurriculoCandidato}/${Globais.idCandidatoLogado}`);
    const json = await response.json();
    return json;
  }

  async function alterarDados(dados) {
    const response = await fetch(`${urlsAPI.operacoesCandidatos}`, {
      method: 'PUT',
      body: JSON.stringify(
        dados
      ), headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });

    const status = response.status;
    MsgSucesso("Inicio", "Dados Alterados!")
  }

  function MsgSucesso(tela, mensagem) {
    navigation.navigate("Mensagem", { mensagem: mensagem, tela: tela });
  }

  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <TituloCT titulo="Altere os dados que precisar abaixo:" />
      <ScrollView style={styles.containerScroll}>
        <LabelCT textoLabel="Nome:" />
        <TextoInput defaultValue={dadosCandidato.nome} multiline={true}
          onChangeText={text => {
            prepararDadosAlteracao["nome"] = text;
            Globais.nomeCandidato = text;
            console.log(prepararDadosAlteracao);
          }} />
        <LabelCT textoLabel="Matrícula Estácio (RA):" />
        <TextoInput defaultValue={dadosCandidato.matricula} onChangeText={text => {
          prepararDadosAlteracao["matricula"] = text;
          console.log(prepararDadosAlteracao);
        }} />
        <LabelCT textoLabel="E-mail:" />
        <TextoInput defaultValue={dadosCandidato.email} onChangeText={text => {
          prepararDadosAlteracao["email"] = text;
          console.log(prepararDadosAlteracao);
        }} />
        <LabelCT textoLabel="Cadastre uma nova senha:" />
        <TextoInput secureTextEntry={true} onChangeText={text => {
          prepararDadosAlteracao["senha"] = text;
          console.log(prepararDadosAlteracao);
        }} />
        <LabelCT textoLabel="Celular:" />
        <TextoInput defaultValue={dadosCandidato.telContato} onChangeText={text => {
          prepararDadosAlteracao["telContato"] = text;
          console.log(prepararDadosAlteracao);
        }} />
        <MarginBottom15 />
        <View style={stylesCV.container}>
          <Text style={stylesCV.texto}>
            Currículo:
            {"\n\n" + curriculo.conteudo}
          </Text>

        </View>
        <BotaoCadastro textoBotao="Alterar" click={() => {
          alterarDados(prepararDadosAlteracao);
        }} />
        <BotaoCadastro textoBotao="Voltar" click={() => navigation.navigate("Inicio")} />

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

const stylesCV = StyleSheet.create({
  container: {
    backgroundColor: '#090744',
    width: '100%',
    marginBottom: 15,
    borderRadius: 30,
    padding: 10,
    paddingBottom: 20
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textInput: {
    backgroundColor: '#C6C6D0',
    width: '100%',
    fontSize: 25,
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 15,
    padding: 10
  },
  botaoCurriculo: {
    backgroundColor: '#fa6132',
    width: '100%',
    borderRadius: 20
  },
  textoBotao: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10
  }
});

