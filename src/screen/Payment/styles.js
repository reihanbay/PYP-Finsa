import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerCard:{
        width: 312,
        height: 140,
        backgroundColor: '#11E69F',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sectionTop:{
        marginVertical:12,
        marginHorizontal:18,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    textClass:{
        flex:3,
        fontSize: 28,
        color: 'white',
        fontWeight: '500',
    },
    outClass:{
        width: 24,
        height: undefined,
        justifyContent:'center'
    },
    imgLogout:{
        width: 24,
        height: 24,
        resizeMode: 'contain'
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
    footer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 68
    },
    switchButton:{
        backgroundColor:'#13D494',
        width: 312,
        height: 40,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }
  })

export default styles;