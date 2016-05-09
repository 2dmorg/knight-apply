import React from 'react';
import ReactDOM from 'react-dom';
export default class InputValueChange extends React.Component {
  componentDidUpdate() {
    console.log('ok');
  }
  render() {
    var options = this.props;
    options.onBlur = options.onChange;
    return (ReactDOM.input.call(React.DOM, options));
  }
}
  