import React from 'react';


const Options = (props) =>
  //   handleChange(event) {
  //     this.setState({
  //       checkedOption: event.target.value,
  //     });
  //     this.props.handleChange(event, this.props.qid, this.props.iterator);
  //   }
{
  console.log(props.selectOption);
  return (
    <div>
      <label>
        <input type="radio" checked={props.option === props.userAnswers} value={props.option} onChange={(event) => { props.handleChange(event); }} />
        {props.option}
      </label>
    </div>
  );
};
export default Options;
