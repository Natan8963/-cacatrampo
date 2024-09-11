import { View, StyleSheet } from 'react-native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import LabelCT from '../components/LabelCT';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import BotaoPrincipal from '../components/BotaoPrincipal';
import TituloCT from '../components/TituloCT';
import { useEffect, useState } from 'react';
import urlsAPI from '../api';
import Globais from '../Globais';

export default function Inicio() {

  const [nomeCandidato, setNomeCandidato] = useState("");

  useFocusEffect(() => {
    carregarNomeAtualizado()
      .then(response => setNomeCandidato(response))
  })

  const navigation = useNavigation();

  function irPraTela(tela) {
    navigation.navigate(tela);
  }

  function irParaVagas() {
    navigation.navigate("Vagas", { idCandidato: Globais.idCandidatoLogado })
  }

  function irParaCvsEnviados() {
    navigation.navigate("CurriculosEnviados", { idCandidato: Globais.idCandidatoLogado })
  }

  function irParaAlterarCadastro() {
    navigation.navigate("AlterarCadastro")
  }

  async function carregarNomeAtualizado() {
    const response = await fetch(`${urlsAPI.operacoesCandidatos}/${Globais.idCandidatoLogado}`);
    const json = await response.json();
    const nome = json.nome;
    console.log(nome);
    return nome;
  }

  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <TituloCT titulo={`Olá ! ${nomeCandidato}`} />
      <LabelCT textoLabel="Selecione uma das opções abaixo :" />
      <BotaoPrincipal textoBotao="Ver vagas" click={() => irParaVagas()} />
      <BotaoPrincipal textoBotao="Currículos Enviados" click={() => {
        irParaCvsEnviados()
      }
      } />
      <BotaoPrincipal textoBotao="Alterar Cadastro" click={() => {
        irParaAlterarCadastro()
      }} />
      <BotaoPrincipal textoBotao="Sair" click={() => {
        irPraTela("Login");
        Globais.logado = false;
        Globais.idCandidatoLogado = null;
      }} />
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