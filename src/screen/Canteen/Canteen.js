import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Container,Content, Form, Item, Input, Label, H1, Icon, Picker } from 'native-base';
import Modal from 'react-native-modal';
import styles from "./styles";

class Canteen extends React.Component{
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
        <Content>
          <View style={styles.header}> 
            <H1 style={styles.h1}>Pilih Kategori</H1>
          </View>
          <View style={styles.contentContainer}>
            <TouchableOpacity>
              <View style={[styles.cardContainer, styles.shadowContainer]}>
                <View style={styles.content}>
                  <Image source={require('../../../assets/icon/kantin.png')} style={styles.img}/>
                  <Text style={styles.text}>Kantin</Text>
                  <Image source={require('../../../assets/icon/next.png')} style={styles.icon}/>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.cardContainer, styles.shadowContainer]}>
                <View style={styles.content}>
                  <Image source={require('../../../assets/icon/kantin1.png')} style={styles.img}/>
                  <Text style={styles.text}>Koperasi</Text>
                  <Image source={require('../../../assets/icon/next.png')} style={styles.icon}/>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.kantinContainer}>
            <View> 
              <H1 style={styles.h1}>Kantin</H1>
            </View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('List Kantin')}>
              <Text style={styles.seeAll}>Lihat semua</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.kantinContainer}>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin 18</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin Qyta</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.kantinContainer}>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin 18</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.cardKantin, styles.shadowContainer]}>
                <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
                <Text>Kantin Qyta</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    )
  }
}
export default Canteen; 

