import React, { Component } from "react";

class Learning extends Component {
    constructor(props){
        super(props)
         this.state={
             fruits:[
                 {name:'Mango',weight:'120gm'},
                 {name:'Apple',weight:'20gm'},
                 {name:'Orange',weight:'60gm'},
             ]
            }
         }
  
  clickHandler=()=>{
      this.setState({
          fruits:[
              {name:"Samsung",weight:'120gm'},
              {name:'Apple',weight:'20gm'},
              {
                  name:'Nokia',weight:'60gm'
              },
          ]
      })
  }
  render() {
    return(
        <div>
            <button onClick={this.clickHandler}>Click Me</button>
            <h1>Fruit Name Is {this.state.fruits[0].name}</h1>
            <h1>Fruit Name Is {this.state.fruits[1].name}</h1>
            <h1>Fruit Name Is {this.state.fruits[2].name}</h1>
        </div>
    )
  }
}


export default Learning;
