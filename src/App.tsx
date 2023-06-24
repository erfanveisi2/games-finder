import React from 'react';
import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component <any , any>{
  constructor(){
    super(arguments)

    this.state={
      platforms:[],
      searchField:''
    }
  }

  componentDidMount(): void {
    fetch('https://api.rawg.io/api/platforms?key=660565b53b394a18b4d0769a3b527398')
    .then(response=>response.json())
    .then(response=>this.setState(()=> {return {platforms:response.results}}))
  }

  onSearchChange =(event:any)=>{
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(()=>({searchField}))
  }

  render(){
    const {platforms , searchField} = this.state
    const {onSearchChange} = this
    
    //we need to filter from full list everytiome so we cant use setState to change the actual value
    const filteredPlatforms = platforms.filter((platform:any)=>{
      return platform.name.toLocaleLowerCase().includes(searchField)
     })
    return(
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search by platform' type='search' className='search-box'/>
        <CardList platform={filteredPlatforms}/>
      </div>
    )
  }
}

export default App;
