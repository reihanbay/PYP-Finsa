import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Container,Content, Form, Item, Input, Label, H1, Icon, Picker } from 'native-base';
import Modal from 'react-native-modal';
import styles from "./styles";

class SignIn extends React.Component{
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
        <View style={styles.header}>
            <H1 style={styles.h1}>Welcome Back,</H1>
            <Text style={styles.subHeader}>Sign in to continue</Text>
        </View>
        <View style={styles.containerLogo}>
          <Image  source={require('../../../assets/logo2.png')} style={styles.icon}/>
        </View>
        <Content>
          <Form style={styles.containerForm}>
            <Item stackedLabel style={styles.marginForm}>
              <Label style={styles.colorLabel}>Username</Label>
              <Input style={{color: "#C0C6CF"}}/>
            </Item>
            <Item stackedLabel style={styles.marginForm}>
              <Label style={styles.colorLabel}>Password</Label>
              <Input style={{color: "#C0C6CF"}}/>
              <Icon active={true} name='eye'/>
            </Item>
          </Form>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Bottom Tabs')}>
              <Text style={[styles.text,styles.textBtn]}>Sign In</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
              <View style={styles.modalBox}>
                <Text style={styles.headerModal}>Sign In Gagal</Text>
                <Text style={styles.textModal}>Pastikan Anda telah memasukkan  semua kolom dengan benar</Text>
                <TouchableOpacity style={styles.btnModal} onPress={this.toggleModal}> 
                  <Text style={styles.txtBtnModal}>COBA LAGI</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <View>
            <TouchableOpacity style={{justifyContent: 'flex-start'}} onPress={()=> this.props.navigation.navigate('Temukan Akun Anda')}>
              <Text style={{color: '#636363', fontWeight: '400'}}> 
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={{color: '#C0C6CF', fontWeight: '400'}}>
              Don’t have an account? 
            </Text>  
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignUp')}>
              <Text style={{color: '#11E69F', fontWeight: '400'}}> 
              Create Now 
              </Text>
            </TouchableOpacity>
          </View>    
        </Content>
      </Container>
    )
  }
}
export default SignIn; 

