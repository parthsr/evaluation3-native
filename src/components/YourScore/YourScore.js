import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './YourScore.style';

class YourScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
      username: '',
    };
    YourScore.propTypes = {
      allScores: PropTypes.array.isRequired,
      username: PropTypes.string.isRequired,
      questions: PropTypes.instanceOf({}).isRequired,
    };
  }

  componentDidMount() {
    for (let i = 0; i < this.props.allScores.length; i += 1) {
      if (this.props.allScores[i].username === this.props.username) {
        this.setState({
          score: this.props.allScores[i].score,
          username: this.props.username,
        });
      }
    }
  }
  render() {
    const contentToDisplay = [];
    const scores = this.props.allScores;
    let temp = 0;
    for (let i = 0; i < scores.length - 1; i += 1) {
      for (let j = i + 1; j < scores.length; j += 1) {
        if (scores[i].score < scores[j].score) {
          temp = scores[i];
          scores[i] = scores[j];
          scores[j] = temp;
        }
      }
    }
    console.log('####', scores);
    for (let i = 0; i < Math.min(this.props.allScores.length, 5); i += 1) {
      if (scores[i].username === this.state.username) {
        const content = (
          <View style={style.YourScoreScoreSelect}>
            <Text ><Text style={style.YourScoreNumber}>{i + 1}.</Text>  {scores[i].username}</Text>
            <Text >{scores[i].score}</Text>
          </View>);
        contentToDisplay.push(content);
      } else {
        console.log(scores);
        const content = (
          <View style={style.YourScoreScore}>
            <Text ><Text style={style.YourScoreNumber}>{i + 1}.</Text>  {scores[i].username}</Text>
            <Text >{scores[i].score}</Text>
          </View>);
        contentToDisplay.push(content);
        // console.log(content);
      }
    }
    return (
      <View style={style.YourScoreTotal}>
        <Text style={style.YourScoreText}>Your Score</Text>
        <View style={style.YourScoreMy}>
          <Text style={style.YourScoreNum}>{this.state.score}
            <Text
              style={style.YourScoreLength}
            >/{JSON.stringify(this.props.questions.length)}
            </Text>
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
