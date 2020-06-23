import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingHorizontal: 32,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    containerForm:{
        marginHorizontal: -15
    },
    colorLabel:{
        color: '#C0C6CF',
        marginBottom: -5
    },
    marginForm:{
        marginBottom: 16
    },
    containerBtn:{
        alignItems:'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    button:{
        alignItems: 'center',
        justifyContent:'center',
        height: 40,
        width: 88,
        borderRadius:10,
        backgroundColor: '#11E69F'
    },
    textBtn:{
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    }
  })

export default styles;