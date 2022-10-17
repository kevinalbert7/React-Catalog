import React, { Component } from 'react'
import films from '../films.json'

class Film extends Component {
    render() {
        const { id } = this.props.match.params
        const filmListed = films.find(film => film.id === Number(id))

        return (
            <div className="container">
                <p>{filmListed.title}</p>
                <p>{filmListed.directory}</p>
                <p>{filmListed.stars}</p>
                <img src={filmListed.image} alt={filmListed.title}/>
                <p>{filmListed.description}</p>
            </div>
        )         
    }
}

export default Film