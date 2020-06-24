import { StyleSheet, Dimensions } from 'react-native';

const y = Dimensions.get('window').height;

const styles = StyleSheet.create({
  fullScreen: {
    width: Dimensions.get('window').width=360,
    height: "100%"
  },
  containerStyle : {
    flex: 1,
    width: 360,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 32

    },
    container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  slide: {
    backgroundColor: 'transparent'
  },
  dot: {
    backgroundColor: '#E5E5E5',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  },

  activeDot: {
    width: 15,
    height: 15,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    resizeMode: 'contain'
  },

  buttonWrapper: {
    justifyContent: 'center',
    flex: 3,
    alignItems: 'flex-end'
  }
});

export default styles;
