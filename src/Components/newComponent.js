import React, { Component } from 'react';
import { updateUser } from '../Redux/actions/authActions'
import { connect } from 'react-redux'

class newComponent extends Component {
  
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
     console.log('******props',this.props)
     this.props.updateUser({name : "Muhammad Hoti" ,age :20})
  }  

  componentWillReceiveProps(nextProps){
      console.log('from component will reciev props',nextProps.user)
  }

  render() {
    return (
        <div className="App">

        </div>
    );
  }
}

//Updated State Is Function Me Milegi JO K Store Se Hui WI Hogi
//Is Se Hume Global state props Me Milegi
const mapStateToProps= (state) => {
    console.log('state from component', state)
    return{
        user : state.authReducer.user
        //Jo B Return krenge Yaha Se Wo is component k props me milega
    }
}

//Is Se Saare Action Component K Props Me Milenge 
const mapDispatchToProps= (dispatch) => {
    return{
        updateUser : (user) => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newComponent)
