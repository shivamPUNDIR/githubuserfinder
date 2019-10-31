// import React from 'react';
import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
//import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import './App.css';
import axios from 'axios'
//default app

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello from react.</h1>
//     </div>
//   );
// }
//React.Fragment===Ghost elementor===<>  <>
class App extends Component {
  state={
    users:[],
    loading:false//for spinner
  }
  async componentDidMount(){
    //this.state.loading=true
    this.setState({loading:true})
    const res=await axios.get('https://api.github.com/users')
    // .then(res=>{console.log(res.data)})
    this.setState({loading:false,users:res.data})
  }
  render() {
    return (<div className="App" >
      <Navbar></Navbar>
      <div className="container">
        <Users loading={this.state.loading} users={this.state.users}></Users>
      </div>

    </div>)
  }
  //   return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello from React.'),React.createElement('div',{className:'HELLO'},React.createElement('h2',null,'This is nested h2.')))
}

export default App;
