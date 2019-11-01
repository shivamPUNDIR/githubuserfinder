// import React from 'react';
import React, { Component } from 'react'
import Navbar from './components/layout/Navbar'
//import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import './App.css';
import axios from 'axios'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'

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
  state = {
    users: [],
    loading: false,//for spinner
    alert:null
  }
  
  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   //this.state.loading=true
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // .then(res=>{console.log(res.data)})

  //   this.setState({ loading: false, users: res.data })
  // }
  searchUsers = async text => {
    //console.log(text)
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ loading: false, users: res.data.items })
  }
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }
  setAlert=(msg,type)=>{
    //console.log(text)
    //console.log(this.state)
    this.setState({alert:{msg:msg,type:type}})
    // console.log(this.state)
    setTimeout(()=>{
      this.setState({alert:null})
    },2000)
  }
  render() {
    const {users,loading}=this.state
    return (<div className="App" >
      <Navbar></Navbar>

      <div className="container">
        <Alert alert={this.state.alert}></Alert>
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert}></Search>
        <Users loading={loading} users={users}></Users>
      </div>

    </div>)
  }
  //   return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello from React.'),React.createElement('div',{className:'HELLO'},React.createElement('h2',null,'This is nested h2.')))
}

export default App;
