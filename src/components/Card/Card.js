import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import style from './Card.style';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <View style={style.CardFlex}>
        <View style={style.CardTop}>
          <Text style={style.CardWelcome}>Welcome</Text>
          <Text style={style.CardTo}>to</Text>
          <Text style={style.CardQuizzy}>Quizzy!</Text>
        </View>
        <View style={style.CardBottom}>
          <Text style={style.CardLogin}>Login</Text>
          <Text style={style.CardUsername}>UserName</Text>
          <TextInput style={style.CardInput} onChange={event => this.props.nameUser(event)} />
          <Button style={style.CardButton} onClick={() => this.props.onClick()} title="Login" />
        </View>
      </View>
    );
  }
}

export default Card;
