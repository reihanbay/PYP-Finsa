import React from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';
// import PropTypes from 'prop-types';
import styles from "./styles"

class Splash extends React.Component{
  async componentDidMount(){
    const data= await this.performTimeConsumingTask();
    if(data !== null){
      this.props.navigation.navigate('Intro')
    }
  }
  performTimeConsumingTask = async () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve('result');
    }, 4000)
  );
  render(){
    return(
      <View style={styles.containerStyle}>
          <View style={{width: 150, height: 150}}>
            <Image  source={require('../../../assets/logo.png')} style={styles.icon}/>
          </View>    
      </View>
    )
  }
}
export default Splash; 

