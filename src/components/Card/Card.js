import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
          <Text style={style.CardLogin}>Login</Text>sdadasd
          <Text style={style.CardUsername}>UserName</Text>
          <TextInput style={style.CardInput} onChangeText={event => this.props.nameUser(event)} />
          <View style={style.CardTouchView}><TouchableOpacity style={style.CardButton} onPress={() => this.props.onClick()}><Text>Login</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Card;
