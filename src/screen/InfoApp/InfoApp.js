import React from 'react';
import {View, Image, Linking} from 'react-native';
import styles from "./styles"
import { Text } from 'native-base';

class InfoApp extends React.Component{
  render(){
    return(
      <View style={styles.containerStyle}>
          <View style={styles.containerLogo}>
            <Text style={styles.nameApp}>Finsa Application</Text>
            <Image  source={require('../../../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.verApp}>Version 0.1.0</Text>
          </View>
          <View style={styles.containerFooter}>
            <Text style={styles.follow}>Follow us and keep updated!</Text>
            <View style={styles.containerIcon}>
              <Image  source={require('../../../assets/icon/insta2.png')} style={styles.icon}/>
              <Text style={styles.follow} onPress={()=> Linking.openURL(`https://www.instagram.com/finsanian/`)} >@Finsanian</Text>
            </View>
            <View style={styles.footer}>
            <Text style={styles.footerText}>© 2020  Finsa</Text>
            </View>
          </View>     
      </View>
    )
  }
}
export default InfoApp; 

