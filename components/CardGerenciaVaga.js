import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CardGerenciaVaga(props) {

    const navigation = useNavigation();

    function MsgSucesso() {
        navigation.navigate("Mensagem", { mensagem: "Vaga excluída", tela: "GerenciarVagas" });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.tituloVaga}>{props.tituloVaga} </Text>
            <Text style={styles.empresaVaga}>Empresa : {props.empresa} </Text>
            <Text style={styles.dataPostagem}>Data postagem : {props.dataPostagem} </Text>
            <TouchableOpacity style={styles.botao} onPress={props.onPress}>
                <Text style={styles.textoBotao}>Excluir vaga</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#090744',
        width: '100%',
        borderRadius: 30,
        padding: 15,
        marginBottom: 15
    },
    tituloVaga: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    empresaVaga: {
        color: '#13E969',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    dataPostagem: {
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    botao: {
        backgroundColor: '#fa6132',
        marginBottom: 15,
        padding: 10,
        borderRadius: 30
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }

});