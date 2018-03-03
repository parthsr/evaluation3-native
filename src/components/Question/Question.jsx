import React from 'react';
import './Question.css';
import Options from '../Options/Options';

class Question extends React.Component {
  componentDidMount() {
    console.log('REACHED');
  }
  handleChange(event) {
    const val = event.target.value;
    this.props.handleChange(val, this.props.question.questionid, this.props.qid);
  }
  render() {
    const option = this.props.question.options;
    const questionid = this.props.question.questionid;
    const optionArray = option.split(',');

    const contentToDisplay = [];
    for (let i = 0; i < optionArray.length - 1; i += 1) {
      if (this.props.userQuestions.indexOf(questionid) >= 0) {
        const index = this.props.userQuestions.indexOf(questionid);
        const newcontentToDisplay =
         (
           <div className="option" key={i}>
             <Options
               questionid={questionid}
               handleChange={(event, id, id2) => { this.handleChange(event, id, id2); }}
               option={optionArray[i]}
               userAnswers={this.props.userAnswers[index]}
             />
           </div>
         );
        contentToDisplay.push(newcontentToDisplay);
      } else {
        const newcontentToDisplay =
         (
           <div className="option" key={i}>
             <Options
               questionid={questionid}
               handleChange={(event, id, id2) => { this.handleChange(event, id, id2); }}
               option={optionArray[i]}
               userAnswers={0}
             />
           </div>
         );
        contentToDisplay.push(newcontentToDisplay);
      }
    }
    return (
      <div className="Question-div">
        <p className="Question-topPad">
           Question {this.props.qid}
        </p>
        <p className="Question-p">
          <div className="Question-question">
            {this.props.question.question}
          </div>
        </p>
        <p>
          <div className="Question-option">
            { contentToDisplay }
          </div>
        </p>
      </div>
    );
  }
}

export default Question;
