import React from 'react';
import ReactDOM from 'react-dom';
var classNames = require('classnames');
export default class ListSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'select',
      schoolEnterTime: ''
//      listItems : []
//      clickable: true, //按钮是否可点击，减少网络请求次数
//      isClicked: false
    };
  }
  componentWillUpdate() {
   
  }
  
  onClick(e) {
    this.setState({
      page: 'main',
      schoolEnterTime: e.target.innerHTML
    });
    this.props.callbackParent({page: 'main', schoolEnterTime: e.target.innerHTML});
  }
  render() {
    var listItems = [];
    switch (this.props.name) {
      case 'schoolEnterTime': {
        listItems = [{'name':'宿舍楼'},{'name':'东区'}];
        break;
      }
    }
    const listContect = listItems.map((item,i) =>
        <li key={i}>{item.name}</li>
        );
    return (
      <ul className='list-select' onClick={e=>this.onClick(e)} data-name={this.props.name}>{listContect}</ul>
    );
  }
}
