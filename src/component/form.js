import React from "react";
import './css/style.css';

export default class Form extends React.Component{

    state ={
        title: 'javascript'
    }

    handleForm = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    render(){
        const {title} = this.state;
        return(
            <div>
                <from>
                    <input type="text" placeholder="however" value={title} onChange={this.handleForm}/>
                </from>
                <div>
                    <h1>{title}</h1>
                </div>
            </div>
        )
    }
} 