import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import style from './Card.style';

const Card = props => (
  <View style={style.CardFlex}>
    <View style={style.CardTop}>
      <Text style={style.CardWelcome}>Welcome</Text>
      <Text style={style.CardTo}>to</Text>
      <Text style={style.CardQuizzy}>Quizzy!</Text>
    </View>
    <View style={style.CardBottom}>
      <Text style={style.CardLogin}>Login</Text>sdadasd
      <Text style={style.CardUsername}>UserName</Text>
      <TextInput style={style.CardInput} onChangeText={event => props.nameUser(event)} />
      <View style={style.CardTouchView}><TouchableOpacity style={style.CardButton} onPress={() => props.onClick()}><Text>Login</Text></TouchableOpacity>
      </View>
    </View>
  </View>
);

Card.propTypes = {
  nameUser: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Card;
