import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

export default class Search extends Component {
    state = {
        trackTitle: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=3307f0656e983e2ca126d51eb80dec9d`)
        .then(res => {
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });
        })
        .catch(err => console.log(err))
    }

    
    render() {
        return (
            <Consumer>
                {value =>{
                    return (
                        <div className="card card-body mb-4 p4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music">
                                    Search for a song
                                </i>
                            </h1>
                            <form onSubmit={this.findTrack.bind(this, value.dispatch)}>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control form-control-lg"
                                        name="trackTitle"
                                        placeholder="Song title"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange}
                                        />
                                </div>
                                '<button className="btn btn-primary btn-lg btn-block mb-5"
                                    type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
