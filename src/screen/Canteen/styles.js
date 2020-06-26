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
        marginBottom: 15
    },
    h1:{
        fontSize : 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    cardContainer: {
        width: 120,
        height: 200,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor:'white',
        justifyContent: 'space-evenly'
    },
    content: {
        alignItems: 'center'
    },
    shadowContainer:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    img: {
        resizeMode: 'contain',
        width: 40 ,
        height: 40,
        marginVertical: 15,
        alignItems: 'center'
    },
    icon: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        marginVertical: 15,
        alignItems: 'center'
    },
    text: {
        color: "gray",
        fontSize: 16
    },
    kantinContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardKantin: {
        width: 140,
        height: 155,
        borderRadius: 20,
        backgroundColor: 'white',
        marginVertical: 10,
        alignItems: 'center',
        overflow: 'hidden'
    },
    seeAll: {
        color: '#11E69F'
    },
    imgKantin: {
        resizeMode: 'contain',
        width: 140,
        height: 120,
        marginBottom: 5
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 68
    }
  })

export default styles;