import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import Chart from '../../Component/ChartKit/Chart';
import Modal from 'react-native-modal';
import styles from "./styles";

class Riwayat extends React.Component{

  componentList=()=>{
    const nominalPengeluaran= 14000
    return(
      <View style={styles.historyContainer}>
        <View style={styles.section}>
          <Text style={styles.textHeader}>Buku Tulis</Text>
          <Text style={styles.dateHistory}>09.05.2020</Text>
        </View>
          <Text style={styles.textHeader}>Rp. {nominalPengeluaran}</Text>
      </View>
    )
  }
  render(){
    const nama=' Sindy '
    return(
        <ScrollView style={{backgroundColor: 'white'}}>
        <Container style={styles.containerStyle}>
          <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>Pengeluaran</Text>
            <TouchableOpacity><Text style={styles.textSeeAll}>Clear All</Text></TouchableOpacity>
          </View>
          {this.componentList()}
        </Container>
      </ScrollView>
    ) 
  }
}
export default Riwayat; 

