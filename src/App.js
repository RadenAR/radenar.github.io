import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import { Route } from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Header data={this.state.resumeData.main}/>
        )} />
        <Route exact path='/' render={() => (
          <About data={this.state.resumeData.main}/>
        )} />
        <Route exact path='/' render={() => (
          <Resume data={this.state.resumeData.resume}/>
        )} />
        <Route exact path='/' render={() => (
          <Portfolio data={this.state.resumeData.portfolio}/>
        )} />
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Route exact path='/' render={() => (
          <Contact data={this.state.resumeData.main}/>
        )} />
        <Route exact path='/' render={() => (
          <Footer data={this.state.resumeData.main}/>
        )} />
      </div>
    );
  }
}

export default App;
