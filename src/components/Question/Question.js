import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './Question.style';
import Options from '../Options/Options';

class Question extends React.Component {
  constructor(props) {
    super(props);
    Question.propTypes = {
      handleChange: PropTypes.func.isRequired,
      question: PropTypes.instanceOf({}).isRequired,
      iterator: PropTypes.number.isRequired,
      userQuestions: PropTypes.array.isRequired,
      userAnswers: PropTypes.array.isRequired,
    };
  }
  componentDidMount() {
    console.log('REACHED@@@@@');
  }
  handleChange(val) {
    this.props.handleChange(val, this.props.question.questionid, this.props.iterator);
  }
  render() {
    const option = this.props.question.options;
    const { questionid } = this.props.question;
    const optionArray = option.split(',');

    const contentToDisplay = [];
    for (let i = 0; i < optionArray.length - 1; i += 1) {
      if (this.props.userQuestions.indexOf(questionid) >= 0) {
        const index = this.props.userQuestions.indexOf(questionid);
        const newcontentToDisplay =
         (
           <View style={style.option} key={i}>
             <Options
               questionid={questionid}
               handleChange={(event, id, id2) => { this.handleChange(event, id, id2); }}
               option={optionArray[i]}
               userAnswers={this.props.userAnswers[index]}
             />
           </View>
         );
        contentToDisplay.push(newcontentToDisplay);
      } else {
        const newcontentToDisplay =
         (
           <View style={style.option} key={i}>
             <Options
               questionid={questionid}
               handleChange={(event, id, id2) => { this.handleChange(event, id, id2); }}
               option={optionArray[i]}
               userAnswers={0}
             />
           </View>
         );
        contentToDisplay.push(newcontentToDisplay);
      }
    }
    return (
      <View style={style.QuestionDiv}>
        <Text style={style.QuestionTopPad}>
           Question {this.props.iterator}
        </Text>
        <Text style={style.QuestionP}>
          {this.props.question.question}
        </Text>
        <View >
          { contentToDisplay }
        </View>
      </View>
    );
  }
}

export default Question;
