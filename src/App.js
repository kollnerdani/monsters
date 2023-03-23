import './App.css';
import  { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[]
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response => response.json()))
        .then((users) =>{
               this.setState(
                   () => {
                       return { monsters: users }
                   }
               )
        }
        )
  }
  render (){
    const search = (search) =>{
        console.log(search)
        const searchString = search.toLowerCase()
        const filteredMonsters = this.state.monsters.filter((monster) =>{ return monster.name.toLowerCase().includes(searchString)})
        this.setState(() =>{ return {monsters: filteredMonsters}})
      }
      return (
        <div className="App">
            <input className='search-box' type="text" placeholder='search' onChange={(event) => { search(event.target.value)}}/>
            {this.state.monsters.map((monster) =>{
               return (
                   <div key={monster.id}>
                       <h1>{monster.name}</h1>
                   </div>
               )
           })}
       </div>
   );
 }
}

export default App;
