import './App.css';
import  { Component } from 'react';
import MonsterList from "./components/monster-list";

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
  search = (event) =>{
      const searchField = event.target.value.toLowerCase()
      this.setState(
          () =>{
              return { searchField }
          }
      )
  }

  render (){
      const { monsters, searchField } = this.state
      const { search } = this
      const filteredMonsters = monsters.filter((monster) =>{
          return monster.name.toLowerCase().includes(searchField)
      })

      return (
        <div className="App">
            <input className='search-box' type="text" placeholder='search' onChange={search}/>
            <MonsterList  monsters= {filteredMonsters} />
       </div>
   );
 }
}

export default App;
