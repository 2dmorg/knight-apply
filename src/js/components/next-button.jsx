import React from 'react';
var classNames = require('classnames');
export default class NextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickable: true, //按钮是否可点击，减少网络请求次数
      isClicked: false
    };
  }
  componentDidUpdate() {
//    console.log('ok');
    this.props.goNextStep();
  }
  onClick(e) {
    this.setState({
      clickable: false,
      isClicked: true
    });
  }
  render() {
    var buttonClass = classNames('next-button', this.props.className, {
      'next-button-disabled': !this.state.clickable
    });
    return (
      <a className={buttonClass} data-step={this.props.nextStep} onClick={e=>this.onClick(e)}>{this.props.name}</a>
    );
  }
}
