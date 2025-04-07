// State are data will change (modify)
// state :- const as a object 
// this.state access use 
// method fix this.setstate Function inbuilt
// as object same file modify


import React, { Component } from 'react'
import Image_compo from './Image_compo';

class Class_state extends Component {
    constructor(){
        super();
        this.state = {
            name : "Vishu patel",
            count : 0,
            isImage : true ,
            course : {
                front : "Front-end",
                back : "Back-end"
            }
        }

    }

    changename=()=>{
        this.setState({name : "jiger sir"})
    }

    incrment=()=>{
        this.setState({count : this.state.count + 2})
    }

  render() {
    return (
      <div>
        <h1>Hello class in  state</h1>
        <h1>Hello name : {this.state.name}</h1>

        <button className='btn btn-info' onClick={()=>{this.setState({name : "himani patel"})}}>Change name</button>
      
        <button onClick={()=>this.setState({name : "Shubham jadav"})}> Change name2</button>

        <button onClick={this.changename}>Change name 3</button>

        <h1>Hello count : {this.state.count}</h1>

        <button onClick={()=>{this.setState({count : this.state.count + 1})}}>incrment</button>
        <button onClick={this.incrment}>Incremenrt 2</button>

        <button onClick={()=>this.setState({count : this.state.count - 1})}>decrement</button>


        <button onClick={()=>this.setState({count : 0})}>Zero</button>
        {/* <button onClick={()=>this.setState({count : this.state.count = 0})}>Zero</button> */}
        {/* <button onClick={()=>this.setState({count : this.state.count * 0})}>Zero</button> */}

        <br />
        <button className='mt-3' onClick={()=>{this.setState({isImage : false})}}>Hide</button>

        <button className='mt-3' onClick={()=>{this.setState({isImage : true})}}>Show</button>
        <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>

        {(this.state.isImage)? <Image_compo /> : false}

        <h1>hello course :- {this.state.course.front}</h1>

      </div>
    )
  }
}

export default Class_state
