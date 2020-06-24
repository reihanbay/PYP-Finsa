import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        paddingVertical: 32,
        paddingHorizontal: 24,
        alignItems:'center',
        backgroundColor: 'white',
    },
    //header card
    containerCard:{
        marginBottom: 10,
        width: 312,
        height: 90,
        backgroundColor: '#11E69F',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    containerJoinClass:{
        width: 312,
        height: 64,
        padding:20,
        backgroundColor: '#11E69F',
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconJoin:{
        width:20,
        height:20,
        resizeMode:'contain'
    },
    sectionTop:{
        marginVertical:12,
        marginHorizontal:18,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    textClass:{
        flex:3,
        fontSize: 28,
        color: 'white',
        fontWeight: '500',
    },
    outClass:{
        width: 24,
        height: undefined,
        justifyContent:'center'
    },
    imgLogout:{
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    // efek shadow  
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
    // card Task
    containerTask:{
        marginTop: 17,
        margin: 8,
        width: 296,
        backgroundColor:'white',
        borderRadius: 10,
        paddingVertical: 9,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailCard:{
        flexDirection: 'column',
    },
    titleText:{
        fontSize: 16,
        color: '#636363'
    },
    dateTask:{
        fontSize:14,
        color:'#C0C6CF'
    },
    infoTask:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    textPrice:{
        fontSize:14,
        color: '#00F08F',
        fontWeight: 'normal'
    },
    iconCheck:{
        marginTop: 2,
        resizeMode: 'contain',
        width: 18,
        height: 18
    },
    //----------------------//

    // container menabung
    containerSave:{
        width: Dimensions.get("window").width=312,
        height: "85%",
        flexDirection:'column',
        justifyContent: 'space-between',
    },
    // deskripsi teks
    containerDesc: {
        width: Dimensions.get("window").width=296,
        marginVertical: 25,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    desc:{
        color: '#636363',
        fontSize: 16,
        fontWeight: '100'
    },
    // Input token menabung/ambil tabungan
    containerInputTabung:{
        position: 'relative',
        bottom:0,
        justifyContent: "space-between",
        alignItems:'center',
        width: 296,
        flexDirection: 'row'
    },
    // Input token masuk kelas
    containerInputJoin:{
        alignItems:'center',
        width: 254,
        flexDirection: 'row'
    },
    containerInput:{
        alignItems:'center',
        width: 192,
    },
    inputValue:{
        fontSize: 14,
        borderColor: '#11E69F',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
    },
    btnTabung:{
        alignItems: 'center',
        justifyContent:'center',
        height: 40,
        width: 100,
        borderRadius:10,
    },

    // shape of modal
    modal:  {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        padding: 20,
        width: 296,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 6,
        alignItems:'center',
    },
    contentModal:{
        justifyContent: 'center',
        alignItems:'center',
    },
    // header of modal
    headerModal:{
        color: '#203354',
        fontWeight: '500',
        fontSize: 16,
    },
    // button modal
    containerBtnModal:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        marginVertical: 28
    },
    containerBtnModalJoin:{
        flexDirection:'row',
        alignSelf:'flex-end',
        justifyContent: 'center',
        marginVertical: 20
    },
    btnModal:{
        alignItems: 'center',
        justifyContent:'center',
        height: 40,
        width: 88,
        borderRadius:10,

        marginHorizontal: 16
    },
    btn1:{
        backgroundColor: '#11E69F',
    },
    btn2:{
        borderColor: '#11E69F',
        borderWidth: 1,
    },
    // text putih
    txtBtn1:{
        color: 'white',
    },
    // text hijau
    txtBtn2:{
        color: '#11E69F'
    },
    // text abu abu
    txtBtnDecline:{
        color: '#C4C4C4',
    },
    txtBtnModal:{
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: '400'
    }
  })

export default styles;