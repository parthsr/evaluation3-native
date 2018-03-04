import React from 'react';
import { Text, View } from 'react-native';
import style from './YourScore.style';

class YourScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
    };
  }
  componentDidMount() {
    for (let i = 0; i < this.props.allScores.length; i++) {
      if (this.props.allScores[i].username === this.props.username) {
        this.setState({
          score: this.props.allScores[i].score,
        });
      }
    }
  }
  render() {
    const contentToDisplay = [];
    const scores = this.props.allScores;
    let temp = 0;
    for (let i = 0; i < scores.length - 1; i++) {
      for (let j = i + 1; j < scores.length; j++) {
        if (scores[i].score < scores[j].score) {
          temp = scores[i];
          scores[i] = scores[j];
          scores[j] = temp;
        }
      }
    }
    console.log('####', scores);
    for (let i = 0; i < Math.min(this.props.allScores.length, 5); i++) {
      console.log(scores);
      const content = (
        <View style={style.YourScoreScore}>
          <Text ><Text style={style.YourScoreNumber}>{i + 1}.</Text>  {scores[i].username}</Text>
          <Text >{scores[i].score}</Text>
        </View>);
      contentToDisplay.push(content);
      // console.log(content);
    }
    return (
      <View>
        <Text style={style.YourScoreText}>Your Score</Text>
        <View style={style.YourScoreMy}>
          <Text style={style.YourScoreNum}>{this.state.score}
            <Text style={style.YourScoreLength}>/{JSON.stringify(this.props.questions.length)}</Text>
          </Text>
        </View>
        <View>
          {contentToDisplay}
        </View>
      </View>
    );
  }
}


export default YourScore;
