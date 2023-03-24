import { Component } from 'react';
import './search_bar.css'
class SearchBar extends Component {

    render () {
        const search= this.props
        return(
            <input
                className={`search-box ${this.props.className}`}
                type="text"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}/>
        )
    }
}

export default SearchBar;