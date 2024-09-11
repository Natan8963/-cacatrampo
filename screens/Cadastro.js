import { View, StyleSheet, ScrollView, TouchableOpacity, Alert, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import urlsAPI from '../api';
import BotaoCadastro from '../components/BotaoCadastro';
import TituloCT from '../components/TituloCT';

export default function Cadastro() {

  const navigation = useNavigation();

  let dadosCandidato = {
    nome: "",
    email: "",
    senha: "",
    matricula: "",
    telContato: ""
  }

  let infosParaCurriculo = {
    dataNascimento: "",
    localResidencia: "",
    conhecimentosTecnicos: "",
    experiencias: "",
    formacao: "",
    idiomas: "",
    cursos: ""
  }

  let conteudoCurriculo = "";

  let cadastrarCurriculo = {
    conteudo: "",
    candidato: {
      id: 0
    }
  }

  function irPraTela(tela) {
    navigation.navigate(tela);
  }

  async function cadastrar() {
    const responseFetch = await fetch(urlsAPI.operacoesCandidatos, {
      method: 'POST',
      body: JSON.stringify(
        dadosCandidato
      ), headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
    );
    const idGerado = await responseFetch.json();
    cadastrarCurriculo.candidato.id = idGerado;
  }

  async function anexarCurriculo() {

    conteudoCurriculo = `Informações pessoais \n\nNome: ${dadosCandidato.nome} \nE-mail: ${dadosCandidato.email} \nMatrícula Estácio: ${dadosCandidato.matricula} \nContato: ${dadosCandidato.telContato} \nData de nascimento: ${infosParaCurriculo.dataNascimento} \nLocal de Residência: ${infosParaCurriculo.localResidencia}\n\nConhecimentos técnicos :\n\n ${infosParaCurriculo.conhecimentosTecnicos}\n\nExperiências :\n\n ${infosParaCurriculo.experiencias}\n\nFormação \n\n${infosParaCurriculo.formacao} \n\nIdiomas \n\n${infosParaCurriculo.idiomas}\n\nCursos e certificações: \n\n${infosParaCurriculo.cursos}`;
    cadastrarCurriculo.conteudo = conteudoCurriculo;

    const postCurriculo = await fetch(urlsAPI.operacoesCurriculos, {
      method: 'POST',
      body: JSON.stringify(
        cadastrarCurriculo
      ), headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });

    const respostaPostCurriculo = postCurriculo.status;
    console.log(respostaPostCurriculo);
  }


  function MsgSucesso(tela, mensagem) {
    navigation.navigate("Mensagem", { mensagem: mensagem, tela: tela });
  }

  // View

  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <TituloCT titulo="Preencha os campos abaixo para cadastrar-se:" />
      <ScrollView style={styles.containerScroll}>
        <LabelCT textoLabel="Nome:" />
        <TextoInput onChangeText={(text) => dadosCandidato.nome = text} />
        <LabelCT textoLabel="Matrícula Estácio (RA):" />
        <TextoInput onChangeText={(text) => dadosCandidato.matricula = text} />
        <LabelCT textoLabel="E-mail:" />
        <TextoInput onChangeText={(text) => dadosCandidato.email = text} />
        <LabelCT textoLabel="Cadastre uma senha:" />
        <TextoInput onChangeText={(text) => dadosCandidato.senha = text} secureTextEntry={true} />
        <LabelCT textoLabel="Celular:" />
        <TextoInput onChangeText={(text) => dadosCandidato.telContato = text} />
        <TituloCT titulo="Currículo" />
        <LabelCT textoLabel="Preencha os dados abaixo do currículo:" />

        <View style={stylesCV.container}>
          <Text style={stylesCV.texto}>
            Informações pessoais
          </Text>
          <TextInput style={stylesCV.textInput} placeholder="Data de nascimento" onChangeText={(text) => infosParaCurriculo.dataNascimento = text} />
          <TextInput style={stylesCV.textInput} placeholder="Local de residência" multiline={true} onChangeText={(text) => infosParaCurriculo.localResidencia = text} />
          <Text style={stylesCV.texto}>
            Conhecimentos técnicos
          </Text>
          <TextInput style={stylesCV.textInput} placeholder="Digite aqui seus conhecimentos técnicos" multiline={true} onChangeText={(text) => infosParaCurriculo.conhecimentosTecnicos = text} />
          <Text style={stylesCV.texto}>
            Experiências
          </Text>
          <TextInput style={stylesCV.textInput} placeholder="Digite aqui suas experiências profissionais" multiline={true} onChangeText={(text) => infosParaCurriculo.experiencias = text} />
          <Text style={stylesCV.texto}>
            Formação
          </Text>
          <TextInput style={stylesCV.textInput} placeholder="Digite aqui suas informações sobre formação acadêmica" multiline={true} onChangeText={(text) => infosParaCurriculo.formacao = text} />
          <Text style={stylesCV.texto}>
            Idiomas
          </Text>
          <TextInput style={stylesCV.textInput} placeholder="Digite aqui sobre seu conhecimento em idiomas" multiline={true} onChangeText={(text) => infosParaCurriculo.idiomas = text} />
          <Text style={stylesCV.texto}>
            Cursos e/ou certificações
          </Text>
          <TextInput style={stylesCV.textInput} placeholder="Digite aqui sobre seus cursos e certificações" multiline={true} onChangeText={(text) => infosParaCurriculo.cursos = text} />
        </View>

        <BotaoCadastro textoBotao="Cadastrar" click={async () => {
          await cadastrar();
          await anexarCurriculo();
          MsgSucesso("Login", "Cadastro feito!");
        }} />
        <BotaoCadastro textoBotao="Sair" click={() => irPraTela("Login")} />
      </ScrollView>
    </View>
  );
}

//Estilos

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