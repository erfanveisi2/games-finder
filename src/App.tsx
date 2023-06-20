import React from 'react';
import { Component } from 'react';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

class App extends Component <any , any>{
  constructor(){
    super(arguments)

    this.state={
      games:[]
    }
  }

  componentDidMount(): void {
    fetch('https://api.rawg.io/api/platforms?key=660565b53b394a18b4d0769a3b527398')
    .then(response=>response.json())
    .then(response=>this.setState(()=> {return {games:response.results}} ,()=>{console.log(this.state.games)}))
  }

  render(){
    return(
      <div className="App">
        
      </div>
    )
  }
}

export default App;
