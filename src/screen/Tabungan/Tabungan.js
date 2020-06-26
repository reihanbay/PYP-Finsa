import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Input, Item } from 'native-base';
import Modal from 'react-native-modal';
import styles from "./styles";

class Tabungan extends React.Component{
  textInput = () => {
    return (
        <Item style={{borderColor:'transparent'}} >
          <Input style={styles.inputValue} placeholderTextColor='#CBD1D7' placeholder='Masukan Nominal' />
        </Item>
    );
  }
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  modal = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={{
        padding: 20,
        width: 296,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems:'center',
        }}>
          <View style={styles.contentModal}>
            <Text style={styles.headerModal}>Apakah Anda Ingin Mengambil?</Text>
            <Text style={{fontSize:14, color:'#C8CDD5',textAlign:'center',width:260,marginTop: 10,marginBottom: -10}}>Silahkan beritahukan riwayat kepada admin di sekolahmu jika menabung</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={this.toggleModal}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Ambil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnModal,styles.btn2]} onPress={this.toggleModal}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn2]}>Tidak</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </Modal>
    )
  }
  render(){
    const nominalTabungan = 850000
    return(
      <Container style={styles.containerStyle}>
        <View>
          <View style={[styles.containerCardSaldo, styles.shadowContainer]}>
            <View> 
              <Text style={[styles.textCardColor,styles.titleTabungan]}>Saldo Tabungan</Text>
              <Text style={[styles.textCardColor,styles.saldoTabungan]}>Rp. {nominalTabungan}</Text>
            </View>
          </View>
          <View style={styles.containerDesc}>
            <Text style={styles.desc}>{"Minimal saldo yang bisa diambil sebesar Rp. 10.000 \n\nSaldo utama akan terpotong sejumlah saldo yang anda tarik"}</Text>
          </View>
        </View>

        {/* Input Ambil Tabungan */}
        <View style={styles.containerInputTabung}> 
          <View style={styles.containerInput}>
            {this.textInput()}
          </View>
          <TouchableOpacity style={[styles.btnTabung,styles.btn1]} onPress={this.toggleModal}> 
            <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Ambil</Text>
          </TouchableOpacity>
            {this.modal()} 
        </View>
      </Container>
    ) 
  }
}
export default Tabungan; 

