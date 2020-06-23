import React from 'react';
import {View, Image, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
// import PropTypes from 'prop-types';
import styles from "./styles"

class Intro extends React.Component{
  render(){
    return(
      <View style={styles.containerStyle}>
          <View style={styles.containerLogo}>
            <Image  source={require('../../../assets/logo2.png')} style={styles.icon}/>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button1} onPress={()=>this.props.navigation.navigate('SignUp')}>
              <Text style={[styles.text,styles.textBtn1]}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={()=>this.props.navigation.navigate('SignIn')}>
              <Text style={[styles.text,styles.textBtn2]}>Sign In</Text>
            </TouchableOpacity>
          </View>    
      </View>
    )
  }
}
export default Intro; 

