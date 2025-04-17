import React, { Component } from 'react'

class UseLife extends Component {

    constructor(){
        super();
        this.state = {
            name : "himani patel"
        }
    }

    // mouting phase 1
    componentDidMount(){
        console.log("Compoent mouting phase.. 1!")
    }

    // shouldComponentUpdate(){
    //     console.log(";data")
    // }
    componentDidUpdate(){
        console.log("Component updating phase.. 2")
    }

    componentWillUnmount(){
        console.log("unmouting phase.. 3!")
    }

  render() {
    return (
      <div>
        {/* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */}
        {/* life cycle */}
        {/* 1) mouting :- initial state/props ,costr ,reder, componentmouting */}
        {/* 2) updataing :- state change , re-redner ,componentdidupdate */}
        {/* 3) unmouting  */}
        
        <h1>hello name :- {this.state.name}</h1>

        <button onClick={()=>this.setState({name : "vishu patel"})}>Change name</button>

      </div>
    )
  }
}

export default UseLife
