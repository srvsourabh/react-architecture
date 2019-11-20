import React, { Component } from 'react';
import Main from '../../components/main/Main'
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { changeTest } from './../../redux/actions';
import './home.css'

class Home extends Component {

  componentDidMount() {
  }

  changeText = () => {
    this.props.click("React JS");
  }

  render() {
    console.log(this.props.news);
    return (
      <Main>
        <div className='container' >
          <h1>{this.props.news}</h1>
        </div>
        <div className='container' >
          <button className='button button2' onClick={this.changeText}>CLICK HERE TO HIT API</button>
        </div>
      </Main>
    );
  }
}

export default connect((state) => {
  return {
    test: state.home.test,
    news : state.home.news
  };
}, (dispatch) => {
  return {
    click: (data) => dispatch(changeTest(data)) // bindActionCreators(changeTest,dispatch)
  }
})(Home);