import {Image,StyleSheet} from 'react-native';

export default function LogoGrande(){
  return(
  <Image style={styles.logo} source={require('../assets/cacatrampo-logo.png')}>
  </Image>
  )
}

const styles = StyleSheet.create({
  logo:{
    width: 400,
    height: 200
  }
});