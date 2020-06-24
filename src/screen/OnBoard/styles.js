import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 32
    },
    partImage:{
        marginBottom: 40,
        alignItems:'center',
        justifyContent: 'center',
    },
    img: {
        resizeMode: 'contain',
        width: 300 ,
        height: 260, 
    },
    partText: {
        alignItems:'center',
        flexDirection: 'column',
        marginTop: -100,
    },
    Header: {
        width: 296,
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
        margin: 0,
        marginBottom: 16,
    },
    Desc: {
        width: 296,
        fontSize: 14,
        color: '#636363',
        fontWeight: '100',
        margin: 0
    }
  })

export default styles;