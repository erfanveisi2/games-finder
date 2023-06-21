import React from 'react';
import { Component } from 'react';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';

class App extends Component <any , any>{
  constructor(){
    super(arguments)

    this.state={
      games:[],
      searchField:''
    }
  }

  componentDidMount(): void {
    fetch('https://api.rawg.io/api/platforms?key=660565b53b394a18b4d0769a3b527398')
    .then(response=>response.json())
    .then(response=>this.setState(()=> {return {games:response.results}}))
  }

  onSearchChange =(event:any)=>{
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(()=>{
      return{searchField}
    })
  }

  render(){
    const {games , searchField} = this.state
    const {onSearchChange} = this
    //we need to filter from full list everytiome so we cant use setState to change the actual value
    const filteredGames = games.filter((game:any)=>{
      return game.name.toLocaleLowerCase().includes(searchField)
     })
     console.log(filteredGames)
    return(
      <div className="App">
        <input type='search' placeholder='Search By Platfor' onChange={onSearchChange}/>
        {
          filteredGames.map((platform:any)=>{
            return <div>
                <h1>platform:{platform.name}</h1>
                {
                  platform.games.map((game:any)=>{
                    return <p>{game.name}</p>
                  })
                }
            </div>
          })
        }
      </div>
    )
  }
}

export default App;
