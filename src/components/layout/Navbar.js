import React  from 'react'
import PropTypes from 'prop-types'

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
