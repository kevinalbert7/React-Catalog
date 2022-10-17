import React, { Component } from 'react'

import films from '../films.json'

class Films extends Component {
    render() {
        const { id } = this.props.match.params
        const film = films.find( film => film.id === Number(id))

        return (
            <div className="container">
                <p>{film.title}</p>
                <p>{film.directory}</p>
                <p>{film.stars}</p>
                <img src={film.image} alt={film.title}/>
                <p>{film.description}</p>
            </div>
        )         
    }
}

export default Films