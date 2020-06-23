import React from 'react';
import { View, Text, Image} from 'react-native';
import { Container, Content, List,ListItem,Left,Right} from 'native-base';
import styles from "./styles";

class Pay extends React.Component{
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
    const icon = <Image  style={styles.arrow} resizeMode='contain' source={require('../../../assets/icon/arrow.png')}/>
    return(
      <Container style={styles.containerStyle}>
        <Content style={styles.content}>
        <List style={styles.leftContainerList}>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Cara Membayar')}>
              <Left>
                  <Text style={[styles.header,styles.text]}>Cara membayar pada task kelas</Text>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={()=> this.props.navigation.navigate('Cara Menabung')}>
              <Left>
                  <Text style={[styles.header,styles.text]}>Cara menabung di aplikasi Finsa</Text>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
export default Pay; 

