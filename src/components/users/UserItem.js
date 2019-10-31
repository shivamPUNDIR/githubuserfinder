import React from 'react'

//1)WE CAN USE CONSTRUCTORS TO ADD STATE TO CLASS BASED COMPONENTS
//2)STATE IS JUST AN JAVASCRIPT OBJECT
//3)USE INLINE STYLE AS style={{backgroundColor:"red"}}
//4)USE STATE AS A CLASS VARIABLE
//5)CONVERTED TO FUNCTIONAL COMPONENT AS IT WAS STATELESS
//-------------------------------------------------------------------
//class UserItem extends Component {
    // constructor(){
    //     super();
    //     console.log("hello")
    //     this.state={
    //         id:'id',
    //         login:'mojombo',
    //         avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //         html_url:'https://github.com/mojombo'
    //     }
    // } 
    // state={
    //     id:'id',
    //     login:'mojombo',
    //     avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
    //     html_url:'https://github.com/mojombo'
    // }

    // render() {
    //     const {login,avatar_url,html_url}=this.props.user
    //     return (
    //         <div className="card text-center">
    //             <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}></img>
    //             <h3>{login}</h3>
    //             <div><a className="btn btn-dark btn-sm my-1" href={html_url}>More</a></div>
    //         </div>
    //     )
    // }
//}
//---------------------------------------------------------------------------

import PropTypes from 'prop-types'

const UserItem=({user:{login,avatar_url,html_url}})=>{
    //const {login,avatar_url,html_url}=props.user
        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}></img>
                <h3>{login}</h3>
                <div><a className="btn btn-dark btn-sm my-1" href={html_url}>More</a></div>
            </div>
        )
}
UserItem.propTypes={
    user:PropTypes.object.isRequired,
}
export default UserItem