import React, { Component } from 'react';

export default class Task extends Component{
    constructor(){
        super();
        this.state = {};
    }

    render(){

        return(
            <div>
                <input type="checkbox" />
                Nome da Task
                <button type="button">Remover</button>
            </div>
        )
    }
}