import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerLogo:{
        flex:4,
        width:  150,
        height: 150,
        justifyContent: "center",
        alignItems:'center'
    },
    containerFooter:{
        flex:1,
        width: 296,
        justifyContent: "center",
        alignItems:'flex-start'
    },
    containerIcon:{
        width:  296,
        height: 20,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15
    },
    nameApp: {
        color:'#11E69F',
        fontSize: 18,
        fontWeight: '500',
    },
    verApp: {
        color:'black',
        fontSize: 10,
        fontWeight: '100'
    },
    logo: {
        margin: 24,
        width:  120,
        height: 150,
        resizeMode: 'contain',
    },
    icon: {
        marginRight: 10,
        width:  20,
        height: 20,
        resizeMode: 'contain',
    },
    follow:{
        fontWeight: '500',
        color: '#636363',
        fontSize: 12
    },
    footer:{
        marginTop:15,
        width:296,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText:{
        fontSize:10,
        fontWeight:'100'
    },
  })

export default styles;