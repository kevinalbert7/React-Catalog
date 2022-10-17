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
                        <li>
                            <Link to={`/Films/${film.id}`}>{film.title}</Link> 
                        </li>
                    </ul>
                )}
            </>
        )
    }
}

export default Home