import React from 'react';
import ReactDOM from 'react-dom';
import NextButton from './components/next-button.jsx';
//import InputValueChange from './components/input-value-change.jsx';
import FormatInput from './components/format-input.jsx';
import ListSelect from './components/list-select.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main',
      listName: '',
      schoolEnterTime: ''
    };
    
  }

  whichPage() {
    console.log(this.state.page);
    if (this.state.page === 'main') {

    } else if (this.state.page === 'select') {

    }
  }
  getParameter(str) {
    var urlString = window.location.search.slice(1).split('&'), urlParam = {};
    for (var i = 0; i < urlString.length; i++) {
      var _param = urlString[i].split('=');
      urlParam[_param[0]] = _param[1];
    }
    return urlParam[str];
  }
  goNextStep() {
    if (true) {
      //表单验证
      var nextStep = ReactDOM.findDOMNode(this.refs.nextButton).getAttribute('data-step');
//      console.log(nextStep);
//      window.location.href = 'index.html?step=' + nextStep + '&token=' + this.getParameter('token');
    }
  }
  
  listSelect(e) {
    var listName = e.target.getAttribute('data-name');
    this.setState({
      page: 'select',
      listName: listName
    });
//    this.props.callbackParent({});
  }
  
  listSelected(listValue) {
    console.log(listValue);
    this.setState(listValue);
    console.log(this.state.schoolEnterTime);
  }

  
  render() {
    var buttonText,
        wrapperStyle = {},
        listWrapperStyle = {},
        actInfoStyle,
        infoContent = '',
        token = this.getParameter('token'),
        nextStep = 'introduce',
        currentStep = this.getParameter('step') ? this.getParameter('step') : 'start';
        
    

    
    
//    console.log(currentStep);
    if(['start', 'introduce', 'result'].indexOf(currentStep) === -1) {
      actInfoStyle = {padding:'30px 0 40px !important'};
      wrapperStyle = {width:'100%',height:'100%',backgroundColor:'#f5f6f7 !important'};
    }
        
    //which page
    if(this.state.page === 'select') {
      wrapperStyle.display = 'none';
      listWrapperStyle.display = 'block';
      //forceupdate
    } else if(this.state.page === 'main') {
      wrapperStyle.display = 'block';
      listWrapperStyle.display = 'none';
    } else {
      
    }
    
    
    switch (currentStep) {
      case 'start': {
        buttonText = '申请成为59骑士';
        nextStep = 'introduce';
        infoContent = <img src="../static/images/img_apply.png" alt="申请骑士" />;
        break;
      }
      case 'introduce': {
        buttonText = '下一步，填写资料';
        nextStep = 'fill';
        infoContent = <div className="intr-panel"><div className="intr-about"><div className="about-img"><img src="../static/images/img_kp1.png" alt="" /></div><div className="about-text">
          <div className="intr-title">关于59</div><p>以校园零售O2O高频刚需为切入点，深耕大学楼栋，为在校大学生提供包含生活零售品（夜猫店、饮品店等）购买，云打印，互联网金融，创业扶持等在内，以楼栋体系为核心的校园生活综合服务平台。</p>
        </div></div><div className="intr-join"><div className="intr-title">加入59骑士</div><div className="join-block"><div className="join-title">工作职责</div><p>负责59商铺订单配送，保证货品的“人身安全”，拯救广大死宅吃货们！</p></div><div className="join-block"><div className="join-title">薪酬待遇</div><p>59骑士按照单笔订单额收取佣金，除了固定佣金收入外，还有0.5元～2元的浮动奖金；除商铺配送业务收入外。骑士还可以自由接收诸如信息宣传，地面推广等任务，赚取更多报酬，走向人生巅峰。</p></div><div className="join-block join-block-last"><div className="join-title">骑士专属福利</div><div className="join-text"><div>59大学参观学习机会；</div><div>59store专属实习证明</div><div>59人才选拔晋升优先权利；</div><div>优秀团队夏令营－冬令营机会；</div>更多专属奖品礼物敬请期待哦～</div><img src="../static/images/img_kp2.png" alt="" /></div></div></div>;
        break;
      }
      case 'fill': {
        buttonText = '下一步，验证手机号';
        infoContent = <ul className="user-info-panel"><li><span>真实姓名</span><FormatInput type="text" dataName="name" placeholder="请填写"/></li><li><span>身份证号</span><FormatInput type="text" dataName="idCard" placeholder="请填写" /></li><li><span>所在学校</span><FormatInput type="text" dataName="school" placeholder="请填写学校全称，如：杭州师范大学"/></li><li onClick={e=>this.listSelect(e)}><span>入学年份</span><FormatInput type="text" dataName="schoolEnterTime" placeholder="请选择" value={this.state.schoolEnterTime}/><i></i></li><li onClick={e=>this.listSelect(e)}><span>就读学历</span><FormatInput type="text" dataName="eduBackground" placeholder="请选择"/><i></i></li><li onClick={e=>this.listSelect(e)}><span>服务学校</span><FormatInput type="text" dataName="schoolToServe" placeholder="请选择"/><i></i></li></ul>;
        break;
      }
      case 'captcha': {
        buttonText = '下一步，提交申请';
        infoContent = '表单验证码';
        break;
      }
      case 'select': {
        buttonText = '';
//        infoContent = <ListSelect name={listName} ref="listWrapper"/>;
        break;
      }
      case 'result': {
        buttonText = '下一步，填写资料';
        infoContent = '你大爷，好多字';
        break;
      }
      default: {
        buttonText = '下一步';
      }
    }
    
//    InputValueChange({
//      onChange: function(e) {
//        console.log(1);
//        console.log(e.target.value);
//      }
//    });
    
    return (
      <div ref="page">
        <div ref="wrapper" style={wrapperStyle}>
          <div className="act-info" ref="actInfo" style={actInfoStyle}>{infoContent}</div>
          <NextButton name={buttonText} nextStep={nextStep} ref="nextButton" goNextStep={this.goNextStep.bind(this)}/>
        </div>
      <ListSelect name={this.state.listName} ref="listWrapper" style={listWrapperStyle} callbackParent={this.listSelected.bind(this)}/>
      </div>
    );
  }
}
