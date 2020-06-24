import React from 'react';
import {View, Image, Text} from 'react-native';
// import PropTypes from 'prop-types';
import Swiper from '../../Component/Swiper/Swiper';
import styles from "./styles"

class Onboard extends React.Component{
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
    return(
      <Swiper onPress={()=> this.props.navigation.navigate('Intro')}>
        <View style={styles.containerStyle}>
          <View style={styles.partImage}>
            <Image source={require('../../../assets/onBoard/onBoard1.png')} style={styles.img}/>
          </View>
          <View style={styles.partText}>
            <Text style={styles.Header}>{Header.on1}</Text>
            <Text style={styles.Desc}>{Desc.on1}</Text>
          </View>
        </View>
        <View style={styles.containerStyle}>
          <View style={styles.partImage}>
            <Image source={require('../../../assets/onBoard/onBoard2.png')} style={styles.img}/>
          </View>
          <View style={styles.partText}>
            <Text style={styles.Header}>{Header.on2}</Text>
            <Text style={styles.Desc}>{Desc.on2}</Text>
          </View>
        </View>
        <View style={styles.containerStyle}>
          <View style={styles.partImage}>
            <Image source={require('../../../assets/onBoard/onBoard3.png')} style={styles.img}/>
          </View>
          <View style={styles.partText}>
            <Text style={styles.Header}>{Header.on3}</Text>
            <Text style={styles.Desc}>{Desc.on3}</Text>
          </View>
        </View>
      </Swiper>
    )
  }
}
export default Onboard; 
        {/* <View style={{ flexDirection: 'row',width: 296, margin:0 }}>
          <View style={{flex: 3,justifyContent:'center', alignItems: 'center'}}><Text>sdasdasdasd</Text></View>
          <View style={{flex: 3,alignItems: 'flex-end'}}>
            <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', backgroundColor: '#11E69F', width: 160, height: 60, borderRadius: 40}}>
              <Text style={{color: 'white', fontWeight: '300'}}>{textBtn}</Text>
            </TouchableOpacity>
          </View>
        </View> */}
