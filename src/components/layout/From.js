import React, { Component } from 'react'
import axios from 'axios'

export default class From extends Component {
    onclick = () => {
        console.log("11111");
        const config = {
            method: 'get',
            url: "http://localhost:8080/test2/add",
            headers: {
                
                // 'Access-Control-Allow-Origin': '*',
                // "Access-Control-Allow-Headers": "X-Requested-With",
                // 'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
                // "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
                // "X-Powered-By": '3.2.1',
                'Content-Type': '"text/plain; charset=UTF-8"',
            }
        }
        axios(config)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.onclick}>Buttonnnnnnnnnnnnn</button>
            </div>
        )
    }
}
