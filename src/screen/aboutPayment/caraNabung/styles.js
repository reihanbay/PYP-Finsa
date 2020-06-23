import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingVertical: 20,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    content:{
        paddingHorizontal: 20,
    },
    arrow: {
        width: 14,
        height: 14,
    },
    text:{
        color: '#636363',
        marginVertical: 10,
    },
    header:{
        fontWeight:'bold',
        fontSize: 16,
    },
    container:{
        height: 15,
        flexDirection: 'row',
        alignItems:'center',
        marginVertical:10
    },
    desc:{
        width: 320,
        fontWeight:'500',
        fontSize: 14,
    },
    dots:{
        marginRight:5,
        width:5,
        height: 5,
        borderRadius:5,
        backgroundColor: '#636363',
    },
  })

export default styles;