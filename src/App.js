// import React from 'react';
import React,{Component} from 'react'
import Navbar from './components/layout/Navbar'
import './App.css';
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
    
     render(){
      return(<div className = "App" > 
      <Navbar></Navbar>
      </div>)
     }
    //   return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello from React.'),React.createElement('div',{className:'HELLO'},React.createElement('h2',null,'This is nested h2.')))
  }

export default App;
