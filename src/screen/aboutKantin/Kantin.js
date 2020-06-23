import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, H1} from 'native-base';
import styles from "./styles";

class Kantin extends React.Component{
  render(){
    const dots=<View style={styles.dots}/>
    return(
      <Container style={styles.containerStyle}>
        <Content style={styles.content}>
          <View>
            <Text style={[styles.header,styles.text]}>Cara memesan makanan </Text>
            
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Masuk pada menu kantin untuk memesan
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Pilih kategori restoran yang kamu inginkan atau ketik nama makanan yang mau kamu cari 
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Pilih menu dan tentukan jumlah pesanan
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Klik tombol item di bagian bawah ketika kamu selesai memesan
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Klik ‘Pesan’ untuk memesan makanan
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
export default Kantin; 

