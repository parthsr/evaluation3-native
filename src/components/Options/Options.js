import React from 'react';
import { Text, View } from 'react-native';
import RadioButton from 'react-native-radio-button';
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
export default Options;

