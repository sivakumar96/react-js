import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(props.name + "child constructor")
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

   async componentDidMount() {
        console.log(this.props.name + "Child component did mount")
        const data = await fetch("https://api.github.com/users/ssangapa");
        const json = await data.json();
        console.log("json", json)
        this.setState({
            userInfo: json
        })
    }

componentDidUpdate(){
    console.log("component DidUpdate")
}
componentWillUnmount(){
    console.log("component componentWillUnmount")
}

    render(){
       
        // const {name, location} = this.props
         console.log("child render")
        const { name, location } = this.state.userInfo
        return (
            <div className="user-card">
                {/* <h1>Count : {count}</h1>
                <button onClick={() => {
                    // never update state variables directly
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increase</button> */}
                <img src="https://avatars.githubusercontent.com/u/118977915?v=4" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>contact: @akshay07</h4>
            </div>
        )
    }
}

export default UserClass;