import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Container,Content, Form, Item, Input, Label, H1, Icon, Picker } from 'native-base';
import Modal from 'react-native-modal';
import styles from "./styles";

class Forgot extends React.Component{
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
    return(
      <Container style={styles.containerStyle}>
        <View style={styles.containerLogo}>
          <Image  source={require('../../../assets/forget/forget.png')} style={styles.icon}/>
        </View>
        <Content>
          <View style={styles.containerDesc}>
            <Text style={styles.desc}>
              Kami akan mengirim email untuk mengganti password anda
            </Text>
          </View>
          <Form style={styles.containerForm}>
            <Item stackedLabel style={styles.marginForm}>
              <Label style={styles.colorLabel}>Email</Label>
              <Input style={{color: "#C0C6CF"}}/>
            </Item>
          </Form>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
              <Text style={[styles.text,styles.textBtn]}>TEMUKAN AKUN ANDA</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
              <View style={styles.modalBox}>
                <Text style={styles.headerModal}>Email Tidak Terkirim</Text>
                <Text style={styles.textModal}>Pastikan Anda telah memasukkan email</Text>
                <TouchableOpacity style={styles.btnModal} onPress={this.toggleModal}> 
                  <Text style={styles.txtBtnModal}>COBA LAGI</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </Content>
      </Container>
    )
  }
}
export default Forgot; 

