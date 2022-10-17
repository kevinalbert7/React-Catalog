import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import films from '../films.json'

class Home extends Component {
    render() {
        return (
            <>
                <h1>Home</h1>
                {films.map(film =>
                    <ul>
                        <li key={film.id} >
                            <Link 
                                to={`/films/${film.id}`}
                                onClick={this.handleChangePage}
                            >{film.title}</Link> 
                        </li>
                    </ul>
                )}
            </>
        )
    }
}

export default Home