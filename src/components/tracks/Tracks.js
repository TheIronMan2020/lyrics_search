import React, { Component } from 'react'
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Track from './Track'

export default class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value =>{
                    const { track_list, heading } = value;
                    if(track_list === undefined || track_list.length ===0){
                        return <Spinner></Spinner>
                    }else{
                        return (
                            <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>
                            <div className="row">
                                {track_list.map(item => {
                                    return <Track key={item.track.track_id} track={item.track}></Track>
                                })}
                            </div>
                            </React.Fragment>
                        )
                    }
                } }
            </Consumer>
        )
    }
}
