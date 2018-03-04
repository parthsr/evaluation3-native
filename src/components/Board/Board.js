import React from 'react';
import { View, Button } from 'react-native';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Questions from '../Questions/Questions';
import YourScore from '../YourScore/YourScore';
import style from './Board.style';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pageNo: 1,
      userAnswers: [],
      userQuestions: [],
      scoresAll: '',
      questions: '',
    };
  }

  onLogin = () => {
    console.log('hi');
    fetch('http://localhost:8080/user', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */s*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: this.state.username }),
    }).then(res => res.json())
      .then((res) => {
        console.log(res);
        // console.log(JSON.stringify(response.json()));
        if (res[0] != null) {
          console.log(res.data);
          let userAnswers = (res[0].answers).split(',');
          userAnswers = userAnswers.slice(0, userAnswers.length - 1);
          let userQuestions = (res[0].questions).split(',');
          userQuestions = userQuestions.slice(0, userQuestions.length - 1);
          userQuestions = userQuestions.map(userQuestion => Number(userQuestion));
          console.log(userAnswers);
          console.log(userQuestions);
          this.setState({
            pageNo: 2,
            userAnswers,
            userQuestions,
          });
        } else {
          this.setState({
            pageNo: 2,
          });
        }
      });
  }

  setQuestions = (questions) => {
    console.log('......', questions);
    this.setState({
      questions,
    });
  }

  nameUser = (event) => {
    this.setState({
      username: event,
    });
  }
  bringScores = () => {
    fetch('http://localhost:8080/getAllScores').then(response => response.json()).then((response) => {
      console.log(response);
      this.setState({
        scoresAll: response,
        pageNo: 3,
      });
    });
  }
  playAgain = () => {
    this.setState({
      pageNo: 1,
    });
  }
  render() {
    if (this.state.pageNo === 1) {
      return (
        <View style={style.BoardBody}>
          <Card
            onClick={() => this.onLogin()}
            nameUser={event => this.nameUser(event)}
          />
        </View>);
    } else if (this.state.pageNo === 2) {
      return (
        <View>
          <Header name={`Hello ${this.state.username}`} />
          <Questions
            userQuestions={this.state.userQuestions}
            userAnswers={this.state.userAnswers}
            username={this.state.username}
            setQuestions={(ques) => { this.setQuestions(ques); }}
          />
          <Button onPress={() => this.bringScores()} title="Calculate" />
        </View>
      );
    }
    return (
      <View>
        <YourScore
          username={this.state.username}
          allScores={this.state.scoresAll}
          questions={this.state.questions}
        />
        <Button onPress={() => this.playAgain()} title="Play Again" />
      </View>
    );
  }
}
export default Board;
