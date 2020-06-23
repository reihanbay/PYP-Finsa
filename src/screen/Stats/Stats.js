import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import Chart from '../../Component/ChartKit/Chart';
import Modal from 'react-native-modal';
import styles from "./styles";

class Stats extends React.Component{

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
  _saldo =()=>{
    const saldo= 450000
    const tabung= 850000
    return(
      <View style={[styles.containerCardSaldo,styles.shadowContainer]}>
        <TouchableOpacity style={styles.containerSaldo}>
          <Text style={styles.textSaldo}>Saldo Saku</Text>
          <Text style={styles.valueSaldo}>Rp.{saldo}</Text>
        </TouchableOpacity>
        <View style={{height:92,width: 2,backgroundColor:'#F1F1F1'}}/>
        <TouchableOpacity style={styles.containerSaldo} onPress={()=> this.props.navigation.navigate('Tabungan')}>
          <Text style={styles.textSaldo}>Tabungan</Text>
          <Text style={styles.valueSaldo}>Rp. {tabung}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  render(){
    const nama=' Sindy '
    return(
        // <ScrollView style={{backgroundColor: 'white'}}>
        <Container style={styles.containerStyle}>
            <View style={styles.containerProfile}>
              <Thumbnail style={styles.thumb} source={require('../../../assets/icon/hAkun.png')}/>
              <Text style={styles.opening}>Hallo {nama},</Text>
            </View>
            {this._saldo()}
            <Chart/>
            <View style={[styles.containerOutCost,styles.shadowContainer]}>
              <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Pengeluaran</Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Riwayat')}><Text style={styles.textSeeAll}>See All</Text></TouchableOpacity>
              </View>
              {this.componentList()}
            </View>
        </Container>
      // </ScrollView>
    ) 
  }
}
export default Stats; 

