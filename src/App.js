import './App.css';
import  { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
        monsters:[],
        searchField: ''
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
      const filteredMonsters = this.state.monsters.filter((monster) =>{ return monster.name.toLowerCase().includes(this.state.searchField)})
      const search = (search) =>{
        const searchField = search.toLowerCase()
        this.setState(
            () =>{
                return {searchField}
            }
        )
      }
      return (
        <div className="App">
            <input className='search-box' type="text" placeholder='search' onChange={(event) => { search(event.target.value)}}/>
            {filteredMonsters.map((monster) =>{
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
