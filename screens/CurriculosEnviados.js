import { Text, TouchableOpacity, View, Button, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LogoCacaTrampo from '../components/LogoCacaTrampo';
import TituloCT from '../components/TituloCT';
import CardVaga from '../components/CardVaga';
import VagaEnviada from '../components/VagaEnviada';
import LabelCT from '../components/LabelCT';
import TextoInput from '../components/TextoInput';
import BotaoPrincipal from '../components/BotaoPrincipal';
import LinkVermelho from '../components/LinkVermelho';
import Link from '../components/Link';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import urlsAPI from '../api';
import Globais from '../Globais';

export default function CurriculosEnviados({ route }) {

  const idCandidato = route.params?.idCandidato;
  const [listaVagasEnviadas, setListaVagasEnviadas] = useState([]);
  useEffect(() => {
    prepararListaVagas()
      .then((response) => setListaVagasEnviadas(response))
  }, [])


  const navigation = useNavigation();

  function irPraTela(tela) {
    navigation.navigate(tela);
  }

  async function prepararListaVagas() {
    const response = await fetch(`${urlsAPI.operacoesCandidatos}/${idCandidato}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const jsonPreparado = jsonResponse.vagas;
    console.log("Json preparado: \n")
    console.log(jsonPreparado);
    return jsonPreparado;
  }


  return (
    <View style={styles.container}>
      <LogoCacaTrampo />
      <TituloCT titulo="Currículos enviados" />
      <FlatList data={listaVagasEnviadas} style={styles.containerScroll} renderItem={({ item }) => <VagaEnviada tituloVaga={item.titulo} dataCandidatura="Hoje" empresa={item.nomeEmpresa} />} />
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