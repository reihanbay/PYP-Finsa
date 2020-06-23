import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        padding: 32,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerLogo: {
        marginTop: 180,
        marginBottom: 164,
        width: 130, 
        height: 130, 
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        width:  undefined,
        height: undefined,
        resizeMode: 'contain'
    },
    containerButton:{
        alignItems:'center',
        justifyContent: 'center',
        width: 296,
    },
    button1:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#11E69F',
        width: 296,
        height: 60,
        marginVertical: 10,
        borderRadius: 30,
    },
    button2:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderColor: '#11E69F',
        borderWidth: 1,
        width: 296,
        height: 60,
        marginVertical: 10,
        borderRadius: 30,
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
    },
    textBtn1:{
        color: 'white'
    },
    textBtn2:{
        color: '#11E69F'
    },
  })

export default styles;