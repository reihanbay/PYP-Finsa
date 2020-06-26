import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Container, Content, List, ListItem, Left, Right, Icon, H1, Thumbnail } from 'native-base';
import Modal from 'react-native-modal';
import styles from "./styles";

class Profile extends React.Component{
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
    const name = 'Sindy Lailasari';
    const email = 'akudi@test.in';
    const icon = <Image  style={styles.arrow} resizeMode='contain' source={require('../../../assets/icon/arrow.png')}/>
    return(
      <Container style={styles.containerStyle}>
        <Content>
          {/*Header*/}
          <View style={styles.header}> 
            <H1 style={styles.h1}>Profile</H1>
          </View>
          {/* Identity */}
          <View style={styles.containerIdentity}>
            <Left style={styles.identityThumbnail}>
              <Thumbnail small source={require('../../../assets/icon/thumb.png')}/>
            </Left>
            <View style={styles.textContainerIdentity}>
              <Text style={[styles.identityTextColor,styles.name]}>{name}</Text>
              <Text style={[styles.identityTextColor,styles.email]}>{email}</Text>
            </View>
            <TouchableOpacity style={styles.iconEdit} onPress={()=> this.props.navigation.navigate('Ubah Akun')}>
              <Right>
              <Image  style={styles.arrow} resizeMode='contain' source={require('../../../assets/icon/edit.png')}/>
              </Right>
            </TouchableOpacity>
            
          </View>
          {/* List */}
          <List style={styles.leftContainerList}>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Bantuan')}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../../../assets/icon/help.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Bantuan</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Info Aplikasi')}>
              <Left>
                <Image style={styles.icon} resizeMode='contain' source={require('../../../assets/icon/info.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Info Aplikasi</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={this.toggleModal}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../../../assets/icon/logoutAccount.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Log Out</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
              <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
                <View style={styles.modalBox}>
                  <View style={styles.contentModal}>
                  <Text style={styles.headerModal}>Apakah Anda Ingin Keluar?</Text>
                    <View style={styles.containerBtnModal}>
                      <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={()=> this.props.navigation.navigate('SignIn')}> 
                        <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Keluar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.btnModal,styles.btn2]} onPress={this.toggleModal}> 
                        <Text style={[styles.txtBtnModal,styles.txtBtn2]}>Tidak</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Modal>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
export default Profile; 

