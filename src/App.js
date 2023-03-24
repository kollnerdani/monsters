import './App.css';
import  { Component } from 'react';
import MonsterList from "./components/monster_list";
import SearchBar from "./components/search_bar";

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
    onSearch = (event) =>{
      const searchField = event.target.value.toLowerCase()
      this.setState(
          () =>{
              return { searchField }
          }
      )
  }

  render (){
      const { monsters, searchField } = this.state
      const { onSearch } = this
      const filteredMonsters = monsters.filter((monster) =>{
          return monster.name.toLowerCase().includes(searchField)
      })

      return (
        <div className="App">
            <h1 className="app-title">Monsters</h1>
            <SearchBar onChangeHandler = {onSearch} placeholder='search' className='monsters-search-box'/>
            <MonsterList  monsters= {filteredMonsters} />
       </div>
   );
 }
}

export default App;
