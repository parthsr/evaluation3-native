import React from 'react';
import axios from 'axios';
import { View } from 'react-native';
// import Header from '../Header/Header';
import Card from '../Card/Card';
// import Questions from '../Questions/Questions';
// import YourScore from '../YourScore/YourScore';
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
    axios.post('/user', { username: this.state.username }).then((response) => {
      console.log(response.data);
      if (response.data[0] != null) {
        console.log(response.data);
        let userAnswers = (response.data[0].answers).split(',');
        userAnswers = userAnswers.slice(0, userAnswers.length - 1);
        let userQuestions = (response.data[0].questions).split(',');
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
    console.log(questions);
    this.setState({
      questions,
    });
  }

  nameUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  }
  bringScores = () => {
    axios.get('/getAllScores').then((response) => {
      console.log(response.data);
      this.setState({
        scoresAll: response.data,
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
          {/* <Questions
            userQuestions={this.state.userQuestions}
            userAnswers={this.state.userAnswers}
            username={this.state.username}
            setQuestions={(ques) => { this.setQuestions(ques); }}
          />
          <button onClick={() => this.bringScores()}>Calculate</button> */}
        </View>
      );
    }
    return (
      <View>
        {/* <YourScore username={this.state.username}allScores={this.state.scoresAll} questions={this.state.questions} /> */}
        {/* <button onClick={() => this.playAgain()}>Play Again</button> */}
      </View>
    );
  }
}
export default Board;
