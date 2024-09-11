import {Image,StyleSheet} from 'react-native';

export default function LogoCacaTrampo(props){
  return(
  <Image style={styles.logo} source={require('../assets/cacatrampo-logo.png')}>
  </Image>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: 200,
    height: 150
  }
});