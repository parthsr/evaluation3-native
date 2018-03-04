import React from 'react';
import { View, ScrollView } from 'react-native';
import style from './Questions.style';
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
    fetch('http://localhost:8080/sendAll', {
      method: 'get',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then((res) => {
        console.log(res);
        if (Object.keys(res).length === 0) {
          fetch('http://localhost:8080//getAll', {
            method: 'post',
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
          }).then(() => {
            fetch('http://localhost:8080/sendAll', {
              method: 'get',
              headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
              },
            }).then(res => res.json())
              .then((res) => {
                this.setState({
                  questions: res,
                });
                this.props.setQuestions(res);
              });
          });
        } else {
          console.log('#####', res);
          this.props.setQuestions(res);
          this.setState({
            questions: res,
          });
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
    fetch('http://localhost:8080/updateUser', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.username,
        answers: commaAns,
        questions: commaQues,
      }),
    }).then(() => {
      if (value === (this.state.questions[iterator - 1].rightans)) {
        const options2 = {
          method: 'post',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.props.username,
            score: this.state.score + 1 - scoreGarb,
          }),
        };
        fetch('http://localhost:8080/score', options2).then(() => {
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
        fetch('http://localhost:8080/score', options2).then(() => {
          this.setState({
            userQuestions: userQ,
            userAnswers: userA,
            score: this.state.score + 1 - scoreGarb,
          });
        });
      }
    });
  }


  render() {
    const contentToDisplay = [];
    for (let i = 0; i < this.state.questions.length; i += 1) {
      const newcontentToDisplay =
         (<View
           style={style.QuestionsView}
           key={new Date() + i}
         ><Question
           handleChange={(value, id, id2) => { this.handleChange(value, id, id2); }}
           qarray={this.state.userQuestions}
           iterator={i + 1}
           question={this.state.questions[i]}
           userAnswers={this.state.userAnswers}
           userQuestions={this.state.userQuestions}
         />
          </View>);
      contentToDisplay.push(newcontentToDisplay);
    }
    return (
      <ScrollView>
        <View style={style.QuestionsContent}>
          {contentToDisplay}
        </View>
      </ScrollView>
    );
  }
}

export default Questions;
