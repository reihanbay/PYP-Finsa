import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingVertical: 32,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    header:{
        width: 296,
        flexDirection: 'column',
        margin: 0,
        marginBottom: 20
    },
    h1:{
        fontSize : 20,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    containerIdentity:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 46
    },
    identityThumbnail:{
        width: 32,
        height: 32,
    },
    textContainerIdentity:{
        flex: 5,
        flexDirection:'column',
    },
    identityTextColor:{
        color:'#636363',
    },
    name:{
        fontSize: 18,
        fontWeight: '900'
    },
    email:{
        fontSize: 14,
        fontWeight: '300'
    },
    iconEdit:{
        width:16,
        height: 16,
    },
    icon:{
        width: 24,
        height: 24,
    },
    arrow: {
        width: 14,
        height: 14,
    },
    listItem:{
        borderColor:'transparent'
    },
    leftContainerList:{
        marginHorizontal: -18
    },
    textContainerList:{
        marginHorizontal: 10,
    },
    textList:{
        fontSize: 16,
        color: '#636363',
        fontWeight: '300'
    },
    modal:  {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        paddingVertical:16,
        paddingHorizontal:18,
        width: 296,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems:'center',
    },
    contentModal:{
        marginHorizontal:18,
        marginVertical:16,
        justifyContent: 'center',
        alignItems:'center',
    },
    headerModal:{
        color: '#203354',
        fontWeight: '500',
        fontSize: 16,
    },
    containerBtnModal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginVertical: 28
    },
    btnModal:{
        alignItems: 'center',
        justifyContent:'center',
        height: 40,
        width: 88,
        borderRadius:10,

        marginHorizontal: 16
    },
    btn1:{
        backgroundColor: '#11E69F',
    },
    btn2:{
        borderColor: '#11E69F',
        borderWidth: 1,
    },
    txtBtn1:{
        color: 'white',
    },
    txtBtn2:{
        color: '#11E69F'
    },
    txtBtnModal:{
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    }
  })

export default styles;