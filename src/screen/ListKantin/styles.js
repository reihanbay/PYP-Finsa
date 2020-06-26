import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        backgroundColor: 'white'
    },
    contentStyle:{
        paddingHorizontal: 20,
    },
    cardContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 10
    },
    imgContainer: {
        width: '15%', 
        height: 110
    },
    imgKantin: {
        width: 110,
        height: 110,
        borderRadius: 20
    },
    textContainer: {
        width: '30%',
        right: 90,
        top: 5,
        height: 90
    },
    textJudul: {
        fontSize: 17, 
        fontWeight: 'bold',
        marginBottom: 5
    },
    textDesc: {
        fontSize: 15, 
        color: 'gray'
    }
  })

export default styles;