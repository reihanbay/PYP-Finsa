import React from 'react';
import { View,TouchableOpacity, Text } from 'react-native';
import { Container,Content, Form, Item, Input, Label, H1, Icon, Picker } from 'native-base';
import Modal from 'react-native-modal';
import styles from "./styles";

class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value= String) {
    this.setState({
      selected2: value
    });
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
            <H1 style={styles.h1}>Hello,</H1>
            <Text style={styles.subHeader}>Create your account now</Text>
          </View>
        <Content>
          <Form style={styles.containerForm}>
            <Item stackedLabel style={styles.marginForm}>
              <Label style={styles.colorLabel}>Email</Label>
              <Input style={{color: "#C0C6CF"}}/>
            </Item>
            <Item stackedLabel style={styles.marginForm}>
              <Label style={styles.colorLabel}>Username</Label>
              <Input style={{color: "#C0C6CF"}}/>
            </Item>
            <Item stackedLabel style={styles.marginForm}>
              <Label style={styles.colorLabel}>Password</Label>
              <Input style={{color: "#C0C6CF"}}/>
              <Icon active={true} name='eye'/>
            </Item>
            <Item picker style={styles.marginForm}>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Gender"
                placeholderStyle={{ color: "#C0C6CF" }}
                placeholderIconColor="#C0C6CF"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                style={{marginHorizontal: 10, color: "#C0C6CF"}}
              >
                <Picker.Item label="Laki - Laki" value="key0" />
                <Picker.Item label="Perempuan" value="key1" />
              </Picker>
            </Item>
          </Form>
          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
              <Text style={[styles.text,styles.textBtn]}>Get Started</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
              <View style={styles.modalBox}>
                <Text style={styles.headerModal}>Registrasi Gagal</Text>
                <Text style={styles.textModal}>Pastikan Anda telah memasukkan  semua kolom dengan benar</Text>
                <TouchableOpacity style={styles.btnModal} onPress={this.toggleModal}> 
                  <Text style={styles.txtBtnModal}>COBA LAGI</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <View style={styles.footer}>
            <Text style={{color: '#C0C6CF', fontWeight: '400'}}>
              Already have an account?
            </Text>  
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
              <Text style={{color: '#11E69F', fontWeight: '400'}}> 
                Sign In 
              </Text>
            </TouchableOpacity>
          </View>    
        </Content>
      </Container>
    )
  }
}
export default SignUp; 

