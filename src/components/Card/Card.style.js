import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  CardTop: {
    backgroundColor: 'rgb(68,195,249)',
    height: '50%',
    paddingTop: '25%',
  },
  CardFlex: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  CardBottom: {
    backgroundColor: 'white',
    padding: 0,
  },
  CardWelcome: {
    textAlign: 'center',
    fontSize: 40,
  },
  CardTo: {
    textAlign: 'center',
    fontSize: 40,
  },
  CardQuizzy: {
    textAlign: 'center',
    fontSize: 50,
  },

  CardLogin: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 15,
  },
  CardUsername: {
    paddingTop: 50,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  CardInput: {
    width: '90%',
    height: '15%',
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 20,
    marginTop: 5,
  },
  CardButton: {
    backgroundColor: '#ffffff',
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    width: '50%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  CardTouchView: {
    justifyContent: 'center',
    flexDirection: 'row',

  },
});
