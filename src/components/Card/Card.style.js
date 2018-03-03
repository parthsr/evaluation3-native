import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  CardLeft: {
    backgroundColor: 'rgb(68,195,249)',
    flex: 1,
  },
  CardFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingTop: '17%',
    paddingLeft: '35%',
    paddingRight: '35%',
    flexWrap: 'wrap',
  },
  CardRight: {
    backgroundColor: 'white',
    flex: 1,
    width: 250,
    padding: 0,
  },
  CardWelcome: {
    fontSize: 30,
    paddingTop: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },
  CardTo: {
    fontSize: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  CardQuizzy: {
    color: 'white',
    fontSize: 30,
    paddingBottom: 100,
    paddingLeft: 50,
    paddingRight: 50,
  },

  CardLogin: {
    fontSize: 30,
    textAlign: 'left',
    paddingTop: 20,
    padding: 10,
  },
  CardUsername: {
    textAlign: 'left',
    paddingTop: 70,
    paddingLeft: 10,
  },
  CardInput: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
  },
  CardButton: {
    margin: 0,
    display: 'none',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 3,
    paddingBottom: 3,
    marginTop: 50,
    marginLeft: 60,
    marginBottom: 30,
    textAlign: 'center',
  },
});
