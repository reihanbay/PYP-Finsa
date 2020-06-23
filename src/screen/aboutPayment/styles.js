import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        paddingVertical: 20,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    content:{
        width: 320,
    },
    arrow: {
        width: 14,
        height: 14,
    },
    text:{
        color: '#636363',
    },
    header:{
        fontWeight:'bold',
        fontSize: 16,
    },
    desc:{
        fontWeight:'500',
        fontSize: 14,
    },
    listItem:{
        borderColor:'transparent',
        margin:5,
        height: 10,
    },
    leftContainerList:{
        marginHorizontal: -18
    }
  })

export default styles;