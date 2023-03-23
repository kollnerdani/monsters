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
  search = (event) =>{
      const searchField = event.target.value.toLowerCase()
      this.setState(
          () =>{
              return { searchField }
          }
      )
  }

  render (){
      const filteredMonsters = this.state.monsters.filter((monster) =>{
          return monster.name.toLowerCase().includes(this.state.searchField)
      })

      return (
        <div className="App">
            <input className='search-box' type="text" placeholder='search' onChange={this.search}/>
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
