import React from 'react';
import { View, Text, Image,Linking,Platform } from 'react-native';
import { Container, Content, List, ListItem, Left, Right } from 'native-base';
import styles from "./styles";

class CallUs extends React.Component{
  dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${081229377348}';
    }
    else {
      phoneNumber = 'telprompt:${081229377348}';
    }

    Linking.openURL(phoneNumber);
  };
  render(){
    const icon = <Image  style={styles.arrow} resizeMode='contain' source={require('../../../assets/icon/arrow.png')}/>
    return(
      <Container style={styles.containerStyle}>
        <Content style={styles.Content}>
          {/* List */}
          <List style={styles.leftContainerList}>
            <ListItem style={styles.listItem} onPress={()=> Linking.openURL(`https://www.instagram.com/finsanian/`)}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../../../assets/icon/insta.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Instagram</Text>
                </View>
              </Left>
              <Right>
                {icon}
              </Right>
            </ListItem>
            <ListItem style={styles.listItem} onPress={this.dialCall}>
              <Left>
                <Image  style={styles.icon} resizeMode='contain' source={require('../../../assets/icon/whatsapp.png')}/>
                <View style={styles.textContainerList}>
                  <Text style={styles.textList}>Telepon</Text>
                </View>
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
export default CallUs; 

