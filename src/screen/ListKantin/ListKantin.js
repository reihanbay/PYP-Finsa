import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Container, Content, H1} from 'native-base';
import styles from "./styles";

class ListKantin extends React.Component{
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
        <Content style={styles.contentStyle}>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
              <Image source={require('../../../assets/kantin18.png')} style={styles.imgKantin}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textJudul}>Kantin Qyta</Text>
              <Text style={styles.textDesc}>Aneka Soto, Minuman</Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
export default ListKantin; 

