import { Component } from 'react';
import './monster_list.css'

class MonsterList extends Component {

    render () {
        const { monsters } = this.props
        return(
            <div>
                { monsters.map( (monster) => {
                    const { name, id, email } = monster
                    return(
                        <div className='card-container' key={id}>
                            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`}/>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MonsterList;