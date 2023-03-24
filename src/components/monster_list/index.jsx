import { Component } from 'react';
import Monster from '../monster';
import './monster_list.css'

class MonsterList extends Component {

    render () {
        const { monsters } = this.props
        return(
            <div className='card-list'>
                { monsters.map( (monster) => {
                    const {name, email, id} = monster;
                    return <Monster monster={monster} key={monster.id}/>
                })}
            </div>
        )
    }
}

export default MonsterList;