import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  QuestionDiv: {
    marginTop: 0,
    marginLeft: '10%',
    marginRight: '10%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  Questionquestion: {
    backgroundColor: 'rgb(68,199,245)',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
  },
  QuestionTopPad: {
    fontWeight: 'bold',
  },

  QuestionOption: {
    fontWeight: 'bold',
  },

  QuestionP: {
    margin: 0,
    padding: 0,
  },
});
