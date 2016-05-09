import React from 'react';
var classNames = require('classnames');
export default class FormatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  componentDidUpdate() {
//    console.log('ok');
  }
  
  formatChecking(value, type) {
    var valueCheck = {
      type: type,
      value: value,
      pass: true,
      maxlength: 100
    };
    switch(type) {
      case 'name': {
        if(!/^[\u0391-\uFFE5]+$/.test(value)) {
          valueCheck.pass = false;
        }
        break;
      }
      case 'idCard': {
        valueCheck.maxlength = 18;
        if(!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/.test(value)) {
          valueCheck.pass = false;
        }
        break;
      }
      case 'school': {
        if(!/^[\u0391-\uFFE5]+$/.test(value)) {
          valueCheck.pass = false;
        }
        break;
      }
//      case 'schoolEnterTime': {
//        correctValue = value;
//      }
//      case 'eduBackground': {
//        correctValue = value;
//      }
//      case 'schoolToServe': {
//        correctValue = value;
//      }
      default: {}
    }
    return valueCheck;
  }
  handleChange(e) {
    var valueCheck = this.formatChecking(e.target.value, e.target.getAttribute('data-name'));
    this.setState({
      value: valueCheck.value
    });
    e.target.setAttribute('maxlength', valueCheck.maxlength);
    console.log(valueCheck);
    if (valueCheck.type === 'idCard') {
      if (valueCheck.pass === false) {
        e.target.style.color = '#f00';
      } else {
        e.target.style.color = '#666';
      }
    } else {
        if (valueCheck.pass === false) {
          e.target.style.color = '#f00';
        } else {
          e.target.style.color = '#666';
        }
      }
    
  }
  render() {
    var inputClass = classNames('format-input', this.props.className, {
      'next-button-disabled': false
    });
    return (
      <input className={inputClass} type={this.props.type} placeholder={this.props.placeholder} data-name={this.props.dataName} value={this.props.value} onChange={e=>this.handleChange(e)}/>
    );
  }
}
