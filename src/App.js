import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/store'
import NewComponent from './Components/newComponent'

class App extends Component {
  
  constructor(props){
    super(props)
    this.state={
      // Check : false,

    }
  }

  componentDidMount(){
    // var {check} = this.state
    // check = !check
    // this.setState({check},() => {console.log("state Asynchronus",this.state.check)})
    // console.log(this.state.Check)
  }  

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NewComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
