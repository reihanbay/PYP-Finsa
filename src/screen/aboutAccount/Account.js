import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, H1} from 'native-base';
import styles from "./styles";

class Account extends React.Component{
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
        <Content style={styles.content}>
          <View>
            <Text style={[styles.header,styles.text]}>Cara mengubah profil</Text>
            <Text style={[styles.desc,styles.text]}>
              Ubah nama dan email di aplikasi Finsa kamu
              pada menu <Text style={{fontWeight:'bold'}}>‘Profil Saya’</Text>, lalu klik icon pensil.
            </Text>
          </View>
        </Content>
      </Container>
    )
  }
}
export default Account; 

