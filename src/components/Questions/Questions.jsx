import React from 'react';
import axios from 'axios';
import './Questions.css';
import Question from '../Question/Question';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: '',
      userQuestions: this.props.userQuestions,
      userAnswers: this.props.userAnswers,
      score: 0,
    };
  }

  componentDidMount() {
    axios.get('/sendAll').then((response) => {
      if (Object.keys(response.data).length === 0) {
        axios.post('/getAll').then(() => {
          axios.get('/sendAll').then((responseInner) => {
            this.setState({
              questions: responseInner.data,
            });
            this.props.setQuestions(responseInner.data);
          });
        });
      } else {
        console.log(response.data);
        this.setState({
          questions: response.data,
        });
        this.props.setQuestions(response.data);
      }
    });
  }
  handleChange = (value, qid, iterator) => {
    const userQ = this.state.userQuestions.slice();
    const userA = this.state.userAnswers.slice();
    let scoreGarb = 0;
    if (this.state) {
      if (userQ.indexOf(qid) >= 0) {
        const index = userQ.indexOf(qid);
        if (userA[index] === (this.state.questions[iterator - 1].rightans)) {
          scoreGarb = 1;
        }
        userQ.splice(index, 1);
        userA.splice(index, 1);
        console.log(userQ);
      }
    }
    console.log(scoreGarb);
    console.log(this.state.score);
    userQ.push(qid);
    userA.push(value);
    console.log(userQ);
    console.log(userA);
    let commaAns = '';
    let commaQues = '';
    for (let i = 0; i < userA.length; i++) {
      commaAns += `${userA[i]},`;
      commaQues += `${userQ[i]},`;
    }
    console.log(commaAns);
    const options = {

      username: this.props.username,
      answers: commaAns,
      questions: commaQues,
    };
    axios.post('/updateUser', options).then(() => {
      if (value === (this.state.questions[iterator - 1].rightans)) {
        const options2 = {
          username: this.props.username,
          score: this.state.score + 1 - scoreGarb,
        };
        axios.post('/score', options2).then(() => {
          this.setState({
            userQuestions: userQ,
            userAnswers: userA,
            score: this.state.score + 1 - scoreGarb,
          });
        });
      } else {
        const options2 = {
          username: this.props.username,
          score: this.state.score - scoreGarb,
        };
        axios.post('/score', options2).then(() => {
          this.setState({
            userQuestions: userQ,
            userAnswers: userA,
            score: this.state.score - scoreGarb,
          });
        });
      }
    });
  };
  render() {
    const contentToDisplay = [];
    for (let i = 0; i < this.state.questions.length; i += 1) {
      const newcontentToDisplay =
         (<div
           className="Question"
           key={new Date() + i}
         ><Question
           handleChange={(value, id, id2) => { this.handleChange(value, id, id2); }}
           qarray={this.state.userQuestions}
           qid={i + 1}
           question={this.state.questions[i]}
           userAnswers={this.state.userAnswers}
           userQuestions={this.state.userQuestions}
         />
         </div>);
      contentToDisplay.push(newcontentToDisplay);
    }
    return (
      <div className="Questions-content">
        {contentToDisplay}
      </div>
    );
  }
}

export default Questions;
