import React  from 'react'
import PropTypes from 'prop-types'
import {Link}from 'react-router-dom'

// import './App.css'
// class Navbar extends Component {
//     static defaultProps={
//         title:'Github Finder',
//         icon:"fab fa-github"
//       }
//     static propTypes={
//         title:PropTypes.string.isRequired,
//         icon:PropTypes.string.isRequired
//     }
//     render() {
//         return (
//             <nav className="navbar bg-primary">
//                 <h1>{this.props.title}</h1>
//                 <i className={this.props.icon}></i>
//             </nav>
//         )
//     }
// }
// const defaultProps={
//     title:'Github Finder',
//     icon:"fab fa-github"
//   }
// const propTypes={
//     title:PropTypes.string.isRequired,
//     icon:PropTypes.string.isRequired
// }
// const Navbar=(props,defaultProps,propTypes)=>{
    
const Navbar=({title,icon})=>{
    
    return(
        <nav className="navbar bg-primary">
                <h1>{title}</h1>
                <i className={icon}></i>
                {/* <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul> RELOADS THE PAGE USE LINK FROM REACT-ROUTER-DOM*/}
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
    )
}
Navbar.defaultProps={
    title:'Github Finder',
    icon:"fab fa-github"
  }
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}
export default Navbar
