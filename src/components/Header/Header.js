import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './Header.style';

const Header = props => (
  <View style={style.HeaderTitleWrapper}>
    <Text style={style.p}>{props.name}</Text>
  </View>
);
Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
