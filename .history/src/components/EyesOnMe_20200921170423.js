// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component{


    render(){
        return(
            <button
            onFocus={console.log("something")}
            >Enter</button>
        )
    }
}