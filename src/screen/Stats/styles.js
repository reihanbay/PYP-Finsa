import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex:1,
        paddingVertical: 32,
        paddingHorizontal: 20,
        alignItems:'center',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    containerProfile:{
        width: 296,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    thumb:{
        width: 50,
        height: 50
    },
    opening:{
        margin:18,
        fontWeight: 'bold',
        fontSize: 18
    },
    shadowContainer:{
        shadowColor: "#F1F1F1",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,

        elevation: 2,
    },
    containerCardSaldo:{
        width: 312,
        height: 92,
        marginVertical: 32,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor:'white',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    containerSaldo:{
        flexDirection:'column',
        justifyContent: 'center'
    },
    textSaldo:{
        fontWeight:'500',
        fontSize: 16
    },
    valueSaldo:{
        fontSize: 20,
        fontWeight: '500'
    },
    containerOutCost:{
        marginTop: 32,
        width: 312,
        padding: 20,
        borderRadius: 20,
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'white'
    },
    headerContainer:{
        width:270,
        marginBottom: 15,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textHeader: {
        fontSize: 16,
        color: '#636363',
        fontWeight:'500'
    },
    textSeeAll:{
        fontSize:14,
        fontWeight: '500',
        color: '#11E69F'
    },
    historyContainer:{
        width:270,
        marginVertical: 12,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    section:{
        flexDirection: 'column',
        flex:1,
    },
    dateHistory:{
        color: '#C0C6CF',
        fontSize: 12
    }
  })

export default styles;