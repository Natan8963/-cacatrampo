import { View, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import TituloCT from '../components/TituloCT';
import CaixaDescricao from '../components/CaixaDescricao';
import urlsAPI from '../api';

import BotaoPrincipal from '../components/BotaoPrincipal';

import { useNavigation } from '@react-navigation/native';

export default function DetalheVaga({ route }) {

  const infosVaga = route.params?.infosVaga;
  const dadosProEnvioCV = route.params?.dadosProEnvioCV;

  const navigation = useNavigation();

  function irPraTela(tela) {
    navigation.navigate(tela);
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

  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <TituloCT titulo={infosVaga.titulo} />
      <CaixaDescricao descricao={"Informações da vaga: " + infosVaga.descricaoVaga} />
      <BotaoPrincipal textoBotao="Enviar currículo" click={() => {
        enviarCurriculo(dadosProEnvioCV)
          .then(() => MsgSucesso());
      }
      }
      />
      <BotaoPrincipal textoBotao="Voltar" click={() => irPraTela("Vagas")} />
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
  }
});