import React from 'react';
import { Text, View } from 'react-native';
import RadioButton from 'react-native-radio-button';
import PropTypes from 'prop-types';
import style from './Options.style';

const Options = (props) => {
  console.log(props.selectOption);
  return (
    <View style={style.OptionsDiv}>
      <RadioButton
        isSelected={props.option === props.userAnswers}
        onPress={() => { props.handleChange(props.option); }}
        buttonWrapStyle={{ marginLeft: 10 }}
      />
      <Text style={style.OptionsText}>{props.option}</Text>
    </View>
  );
};

Options.propTypes = {
  selectOption: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  userAnswers: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};
export default Options;

