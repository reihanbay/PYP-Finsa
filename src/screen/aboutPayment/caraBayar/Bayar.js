import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, H1} from 'native-base';
import styles from "./styles";

class Bayar extends React.Component{
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
    const dots=<View style={styles.dots}/>
    return(
      <Container style={styles.containerStyle}>
        <Content style={styles.content}>
          <View>
            <Text style={[styles.header,styles.text]}>Cara membayar pada task kelas</Text>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Masuk pada menu kelas pay
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Klik icon yang ada pada kanan atas untuk join kelas, lalu masukkan kode kelas
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Masuk pada bagian task kelas
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Lihat list yang akan dibayar
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Klik bayar untuk membayar
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
export default Bayar; 

