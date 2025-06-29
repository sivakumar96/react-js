import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount() {
        console.log("parent component did mount")
    }
    render(){
        console.log("parent render")
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is namaste react web series</h2>
                {/* <User name="siva"/> */}
                <UserClass name="first" location="kadapa"/>
            </div>
        )
    }
    
}

export default About;