import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Container,Content } from 'native-base';
import SwitchButton from '../../Component/SwitchButton/Switch';
// import Modal from 'react-native-modal';
import styles from "./styles";

class Payment extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
 
  render(){
    const kelas ='XI RPL 4'
    return(
      <Container style={styles.containerStyle}>
        <Content>
          <View style={styles.containerCard}>
            <View style={styles.sectionTop}>
              <Text style={styles.textClass}>{kelas}</Text>
              <View style={styles.outClass}><Image style={styles.imgLogout} source={require('../../../assets/icon/logoutClass.png')}/></View>
            </View>
            <View style={styles.switchButton}>
              <SwitchButton style={styles.switchButton}/>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
export default Payment; 

