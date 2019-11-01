import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:'',
        //email:''
    }
//in vase of multiple input,use [e.target.name]:e.target.value
    onChange=e=>{
        //this.setState({[e.target.name]:e.target.value})
        this.setState({text:e.target.value})
    }
    // onSubmit(e){
    //     e.preventDefault()
    //     console.log(this.state)
    // }
    //TO USE THIS SYNTAX WE HAVE TO WRITE EHILE CALLING => <form onSubmit={this.onSubmit.bind(this)}action="form" className="form">
    //so we use arrrow function which uses parent's this keyword
    onSubmit=e=>{
        e.preventDefault()
        //console.log(this.state)
        this.props.searchUsers(this.state.text)
        //WE ARE SENDIND A PROP UP INSTEAD OF SENDING IT DOWN
        this.setState({text:''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}action="form" className="form">
                    <input type="text" name="text"placeholder="Search Users"value={this.state.text} onChange={this.onChange}/>
                    {/* <input type="email" name="email"placeholder="Search emails"value={this.state.email} onChange={this.onChange}/> */}
                    <input type="submit" value="Search"className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
