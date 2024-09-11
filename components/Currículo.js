/*

import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Curriculo(props) {

    let infosParaCurriculo = {
        nome: props.nome,
        email: props.email,
        matricula: props.matricula,
        contato: props.contato,
        dataNascimento: "",
        localResidencia: "",
        conhecimentosTecnicos: "",
        experiencias: "",
        formacao: "",
        idiomas: "",
        cursos: ""
    }

    let conteudoCurriculo =
        `Informações pessoais \nNome: ${infosParaCurriculo.nome} \nE-mail: 202204186519@alunos.estacio.br \nMatrícula Estácio: 202204186519 \nContato: (11) 95435-7910 \nData de nascimento: 18/03/1996 \nLocal de Residência: Jd dos Álamos - São Paulo-SP\nConhecimentos técnicos : html, css, js, react,java, sql, api rest, git, react native\nExperiências : \nA2 works - suporte técnico \nDia - suporte técnico \nFormação \nAnálise e Desenvolvimento de Sistemas \nIdiomas \nInglês técnico\nCursos e certificações: \nEtec Irmã Agostina\n\n`;


    return (
        <View style={stylesCV.container}>
            <Text style={stylesCV.texto}>
                Informações pessoais
            </Text>
            <TextInput style={stylesCV.textInput} placeholder="Data de nascimento" />
            <TextInput style={stylesCV.textInput} placeholder="Local de residência" multiline={true} />
            <Text style={stylesCV.texto}>
                Conhecimentos técnicos
            </Text>
            <TextInput style={stylesCV.textInput} placeholder="Digite aqui seus conhecimentos técnicos" multiline={true} />
            <Text style={stylesCV.texto}>
                Experiências
            </Text>
            <TextInput style={stylesCV.textInput} placeholder="Digite aqui suas experiências profissionais" multiline={true} />
            <Text style={stylesCV.texto}>
                Formação
            </Text>
            <TextInput style={stylesCV.textInput} placeholder="Digite aqui suas informações sobre formação acadêmica" multiline={true} />

            <Text style={stylesCV.texto}>
                Idiomas
            </Text>
            <TextInput style={stylesCV.textInput} placeholder="Digite aqui sobre seu conhecimento em idiomas" multiline={true} />
            <Text style={stylesCV.texto}>
                Cursos e/ou certificações
            </Text>
            <TextInput style={stylesCV.textInput} placeholder="Digite aqui sobre seus cursos e certificações" multiline={true} />
            <TouchableOpacity style={stylesCV.botaoCurriculo} onPress={() => {
                console.log(infosParaCurriculo.nome)


                console.log("\n\nConteúdo do currículo\n\n" + conteudoCurriculo)
            }
            }>
                <Text style={stylesCV.textoBotao}>Ver currículo</Text>
            </TouchableOpacity>
        </View>
    );

}

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

*/