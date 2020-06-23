import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types';
import styles from "./styles"

class Onboard extends React.Component{
  // async componentDidMount(){
  //   const data= await this.performTimeConsumingTask();
  //   if(data !== null){
  //     this.props.navigation.navigate('Home')
  //   }
  // }
  // performTimeConsumingTask = async () =>
  // new Promise(resolve =>
  //   setTimeout(() => {
  //     resolve('result');
  //   }, 4000)
  // );
  render(){
    const Header= {
      on1:'Smart Payment Solutions',
      on2:'Assignment Payment',
      on3:'Ready To Start Journey'
    }
    const Desc= {
      on1:'Kami memudahkan semua pembayaran dan tabungan dengan hanya klik saja.',
      on2:'Assignment Payment keperluan yang akan membuat anda harus membayar semua prioritas kebutuhan sekolah ',
      on3:'Kami memudahkan semua pembayaran dan tabungan dengan cukup klik saja.'
    }

    const textBtn = 'Skip'
    // _button=()=>
    //   <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', backgroundColor: '#11E69F', width: 120, height: 60, borderRadius: 40}}>
    //     <Text style={{color: 'white', fontWeight: '300'}}>{textBtn}</Text>
    //   </TouchableOpacity>
    return(
      <View style={styles.containerStyle}>
        <View style={styles.partImage}>
          <Image source={require('../../../assets/onBoard/onBoard1.png')} style={styles.img}/>
        </View>
        <View style={styles.partText}>
          <Text style={styles.Header}>{Header.on1}</Text>
          <Text style={styles.Desc}>{Desc.on1}</Text>
        </View>
        <View style={{ flexDirection: 'row',width: 296, margin:0 }}>
          <View style={{flex: 3,justifyContent:'center', alignItems: 'center'}}><Text>sdasdasdasd</Text></View>
          <View style={{flex: 3,alignItems: 'flex-end'}}>
            <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', backgroundColor: '#11E69F', width: 160, height: 60, borderRadius: 40}}>
              <Text style={{color: 'white', fontWeight: '300'}}>{textBtn}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    )
  }
}
export default Onboard; 

