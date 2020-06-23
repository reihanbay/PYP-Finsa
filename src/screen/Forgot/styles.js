import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        padding: 32,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    header:{
        width: 296,
        flexDirection: 'column',
        margin: 0,
        marginBottom: 16
    },
    h1:{
        fontSize : 28,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    subHeader:{
        fontSize: 16,
        color: '#C0C6CF'
    },
    containerLogo: {
        marginVertical: 16,
        width: 275, 
        height: 160,
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        width:  undefined,
        height: undefined,
        resizeMode: 'contain'
    },
    containerDesc:{
        width: 296,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
    },
    desc:{
        color: '#636363',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:'center'
    },
    containerForm:{
        marginTop: 16,
        marginHorizontal: -15
    },
    colorLabel:{
        color: '#C0C6CF',
        marginBottom: -5
    },
    marginForm:{
        marginBottom: 16
    },
    containerButton:{
        alignItems:'center',
        justifyContent: 'center',
        width: 296,
        marginVertical: 20
    },
    button:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#11E69F',
        width: 296,
        height: 60,
        borderRadius: 30,
    },
    textBtn: {
        fontWeight: '400',
        fontSize: 16,
        color: 'white'
    },
    modal:  {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        paddingVertical:29,
        paddingHorizontal:17,
        width: 296,
        height: 198,
        backgroundColor: 'white',
        borderRadius: 6
    },
    headerModal:{
        color: '#203354',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 20
    },
    textModal:{
        color: '#636363',
        fontWeight: '400',
        fontSize: 16,
        marginBottom: 20
    },
    btnModal:{
        width: 262,
        alignItems: 'flex-end',
        marginTop: 20
    },
    txtBtnModal:{
        color: '#11E69F',
        fontWeight: '400',
        fontSize: 16,
    },
  })

export default styles;