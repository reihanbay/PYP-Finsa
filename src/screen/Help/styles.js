import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingVertical: 20,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    Content:{
        width: 296,
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
  })

export default styles;