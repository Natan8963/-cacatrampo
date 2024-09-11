import RecuperarSenha from './screens/RecuperarSenha';
import Mensagem from './screens/Mensagem';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import Cadastro from './screens/Cadastro';
import Vagas from './screens/Vagas';
import CurriculosEnviados from './screens/CurriculosEnviados';
import AlterarCadastro from './screens/AlterarCadastro';
import DetalheVaga from './screens/DetalheVaga';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import InicioADM from './screens/InicioADM';
import CadastrarVaga from './screens/CadastrarVaga';
import GerenciarVagas from './screens/GerenciarVagas';
import AlterarVaga from './screens/AlterarVaga';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="InicioADM" component={InicioADM} options={{ headerShown: false }} />
      <Stack.Screen name="DetalheVaga" component={DetalheVaga} options={{ headerShown: false }} />
      <Stack.Screen name="CurriculosEnviados" component={CurriculosEnviados} options={{ headerShown: false }} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false }} />
      <Stack.Screen name="Mensagem" component={Mensagem} options={{ headerShown: false }} />
      <Stack.Screen name="Vagas" component={Vagas} options={{ headerShown: false }} />
      <Stack.Screen name="AlterarCadastro" component={AlterarCadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
      <Stack.Screen name="CadastrarVaga" component={CadastrarVaga} options={{ headerShown: false }} />
      <Stack.Screen name="GerenciarVagas" component={GerenciarVagas} options={{ headerShown: false }} />
      <Stack.Screen name="AlterarVaga" component={AlterarVaga} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}


