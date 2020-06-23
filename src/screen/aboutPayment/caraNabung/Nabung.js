import React from 'react';
import { View, Text } from 'react-native';
import { Container, Content, H1} from 'native-base';
import styles from "./styles";

class Nabung extends React.Component{
  render(){
    const dots=<View style={styles.dots}/>
    return(
      <Container style={styles.containerStyle}>
        <Content style={styles.content}>
          <View>
            <Text style={[styles.header,styles.text]}>Cara menabung di aplikasi Finsa</Text>
            
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
                Masuk pada bagian tabungan
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Masukkan jumlah nominal yang akan ditabung, dengan minimal saldo yang bisa di deposit ke saldo tabungan sebesar Rp. 500,-
              </Text>
            </View>
            <View style={styles.container}>
              {dots}
              <Text style={[styles.desc,styles.text]}>
                Klik Tabung untuk menabung
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}
export default Nabung; 

