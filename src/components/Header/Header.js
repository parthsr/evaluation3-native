import React from 'react';
import { View, Text } from 'react-native';
import style from './Header.style';

const Header = props => (
  <View style={style.HeaderTitleWrapper}>
    <Text style={style.p}>Quizzy</Text>
    <Text style={style.p}>{props.name}</Text>
  </View>
);

export default Header;
