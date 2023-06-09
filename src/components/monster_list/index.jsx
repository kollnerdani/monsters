import Monster from '../monster';
import './monster_list.css'

const MonsterList = ({ monsters }) => {
    return(
        <div className='card-list'>
            { monsters.map( (monster) => {
                const {name, email, id} = monster;
                return <Monster monster={monster} key={monster.id}/>
            })}
        </div>
    )

}

export default MonsterList;