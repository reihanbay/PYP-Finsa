import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Container,Content,Item,Input } from 'native-base';
import SwitchButton from '../../Component/SwitchButton/Switch';
import Modal from 'react-native-modal';
import styles from "./styles";

class Payment extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isToken:''
    };
  }

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  toggleModal2 = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  modalNabung = () =>{
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
            <Text style={styles.headerModal}>Apakah Anda Ingin Menabung?</Text>
            <Text style={{fontSize:14, color:'#C8CDD5',textAlign:'center',width:260,marginTop: 10,marginBottom: -10}}>Saldo anda akan dikurangkan sebagian untuk menabung</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={this.toggleModal}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Bayar</Text>
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
  modalOut = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={styles.modalBox}>
          <View style={styles.contentModal}>
            <Text style={styles.headerModal}>Apakah Anda Ingin Keluar Kelas?</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={()=> this.outClass()}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Keluar</Text>
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
  modalBayar = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={styles.modalBox}>
          <View style={styles.contentModal}>
            <Text style={styles.headerModal}>Apakah Anda Ingin Membayar?</Text>
              <View style={styles.containerBtnModal}>
                <TouchableOpacity style={[styles.btnModal,styles.btn1]} onPress={this.toggleModal}> 
                  <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Bayar</Text>
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
  modalJoin = () =>{
    return(
      <Modal isVisible={this.state.isModalVisible} style={styles.modal}>
        <View style={styles.modalBox}>
          <View style={styles.contentModal}>
            <View style={styles.containerInputJoin}>
              {this.textInputJoin()}
            </View>
            <View style={styles.containerBtnModalJoin}>
              <TouchableOpacity onPress={this.toggleModal}> 
                <Text style={[styles.txtBtnModal,styles.txtBtnDecline]}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.inClass()}> 
                <Text style={[styles.txtBtnModal,styles.txtBtn2]}>Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
  textInput = () => {
    return (
        <Item style={{borderColor:'transparent'}} >
          <Input style={styles.inputValue} placeholderTextColor='#CBD1D7' placeholder='Masukan Nominal' />
        </Item>
    );
  }
  textInputJoin = () => {
    return (
        <Item style={{borderColor:'transparent'}} >
          <Input style={styles.inputValue} placeholderTextColor='#CBD1D7' placeholder='Masukan Token' />
        </Item>
    );
  }
  _save = () =>{
    return(
      <View style={styles.containerSave}>
        <View style={styles.containerDesc}>
          <Text style={styles.desc}>{"Minimal saldo yang bisa diambil sebesar Rp. 10.000 \n\nSaldo utama akan terpotong sejumlah saldo yang anda tarik"}</Text>
        </View>
        <View style={styles.containerInputTabung}> 
          <View style={styles.containerInput}>
            {this.textInput()}
          </View>
          <TouchableOpacity style={[styles.btnTabung,styles.btn1]} onPress={this.toggleModal}> 
            <Text style={[styles.txtBtnModal,styles.txtBtn1]}>Tabung</Text>
          </TouchableOpacity>
            {this.modalNabung()} 
        </View>
      </View>
    )
  }
  _task = () =>{
    const titleTask= 'Kegiatan HUT Stematel'
    const deadlineTask= 'Last 25 January 2020'
    const price= 20000
    return(
      <TouchableOpacity onPress={this.toggleModal}style={[styles.containerTask,styles.shadowContainer]}>
        {/* {this.modalBayar()}  */}
        <View style={styles.detailCard}>
          <Text style={styles.titleText}>{titleTask}</Text>
          <Text style={styles.dateTask}>{deadlineTask}</Text>
        </View>
        <View style={styles.infoTask}>
          <Text style={styles.textPrice}>Rp. {price}</Text>
          <View style={styles.iconCheck}>
            {this.state.isChecked === true ? 
            <Image style={styles.iconCheck} source={require('../../../assets/icon/bayarActive.png')}/>
            :
            <Image style={styles.iconCheck} source={require('../../../assets/icon/bayarInActive.png')}/>}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  inClass=()=>{
    const kelas ='XI RPL 4'
    return(
    <Container style={styles.containerStyle}>
      <View style={styles.containerCard}>
        <View style={styles.sectionTop}>
          <Text style={styles.textClass}>{kelas}</Text>
          <View style={styles.outClass}>
            <TouchableOpacity onPress={this.toggleModal}>
              <Image style={styles.imgLogout} source={require('../../../assets/icon/logoutClass.png')}/>
            </TouchableOpacity>
            {/* {this.modalOut()} */}
          </View>
        </View>
      </View>
      <SwitchButton view1={this._task()} view2={this._save()} />
    </Container>
    )
  }
  outClass=()=>{
    const kelas ='XI RPL 4'
    return(
    <Container style={styles.containerStyle}>
      <View style={styles.containerJoinClass}>
        <Text style={{fontWeight:'bold',color:'white',fontSize: 28}}>Masuk Kelas</Text>
        <TouchableOpacity onPress={this.toggleModal}>
          <Image source={require('../../../assets/icon/plus.png')} style={styles.iconJoin}/>
        </TouchableOpacity>
        {this.modalJoin()}
      </View>
      <View style={styles.containerDesc}>
          <Text style={styles.desc}>
            {"Masukan kode kelas yang diberikan guru untuk masuk ke kelasmu"}
          </Text>
        </View>
    </Container>
    )
  }
  render(){
    this.state.isToken='727ue8'
    return(
      this.state.isToken==='727ue8'? this.inClass(): this.outClass()
    )
  }
}
export default Payment; 

