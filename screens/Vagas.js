import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet, ScrollView, FlatList } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import { useNavigation } from '@react-navigation/native';
import TituloCT from '../components/TituloCT';
import CardVaga from '../components/CardVaga';
import BotaoPrincipal from '../components/BotaoPrincipal';
import urlsAPI from '../api';
import { useEffect, useState } from 'react';


export default function Vagas({ route }) {

  const [idCandidato] = useState(route.params?.idCandidato);

  const navigation = useNavigation();
  const [listaozaovagas, setListaozaovagas] = useState([]);
  useEffect(() => {
    listarVagas()
      .then((response) => setListaozaovagas(response))
  }, [])

  let dadosParaEnviarCV = {
    idUsuario: 0,
    idVaga: 0
  }

  function irPraTela(tela) {
    navigation.navigate(tela);
  }

  function detalhesVaga(jsonVaga, dadosProEnvioCV) {
    navigation.navigate("DetalheVaga", { infosVaga: jsonVaga, dadosProEnvioCV: dadosProEnvioCV })
  }

  async function enviarCurriculo(dados) {
    const response = await fetch(urlsAPI.candidatarVaga, {
      method: 'POST',
      body: JSON.stringify(
        dados
      ), headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
    const respostaTransacao = response.status;
    console.log(respostaTransacao);
  }

  function MsgSucesso() {
    navigation.navigate("Mensagem", { mensagem: "Currículo Enviado", tela: "Vagas" });
  }

  async function carregarVagas() {
    const responseListaVagas = await fetch(urlsAPI.operacoesVagas);
    return await responseListaVagas.json();
  }
  async function listarVagas() {
    const vagasCarregadas = await carregarVagas();
    console.log(vagasCarregadas);
    return vagasCarregadas;
  }

  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <TituloCT titulo="Vagas de emprego" />
      <FlatList style={styles.containerScroll} data={listaozaovagas}
        renderItem={({ item }) =>
          <CardVaga tituloVaga={item.titulo} postagem={item.dataPostagem} salario={item.salario} contratacao={item.tipoContratacao} modelo={item.modeloTrabalho} local={item.local} empresa={item.nomeEmpresa} enviarCurriculo={() => {
            dadosParaEnviarCV.idUsuario = idCandidato;
            dadosParaEnviarCV.idVaga = item.id;
            enviarCurriculo(dadosParaEnviarCV)
              .then(() => MsgSucesso())
          }
          }
            detalhesVaga={() => {
              dadosParaEnviarCV.idUsuario = idCandidato;
              dadosParaEnviarCV.idVaga = item.id;
              detalhesVaga(item, dadosParaEnviarCV)
            }} />
        }
      />

      <BotaoPrincipal textoBotao="Voltar" click={() => irPraTela("Inicio")} />
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
    maxHeight: 450,
  }
});