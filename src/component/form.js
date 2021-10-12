import React from "react";
import './css/style.css';

export default class Form extends React.Component{

    state ={
        title: 'javascript',
        textarea: 'Textarea is awesome',
        select: 'react',
        ChekeBox: true
    }

    handleForm = (e) => {
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value
            })
        }
        else if(e.target.type === 'textarea'){
            this.setState({
                textarea: e.target.value
            })
        }
        else if(e.target.type === 'select-one'){
            this.setState({
                select: e.target.value
            })
        }
        else if(e.target.type === 'checkbox'){
            this.setState({
                ChekeBox: e.target.checked
            })
        }
        else{
            console.log("nothing")
        }
    }

    handleSubmit = (e) => {
        const {title, textarea, select, ChekeBox} = this.state;
        e.preventDefault();
        console.log(title, textarea, select, ChekeBox)
    }

    render(){
        const {title, textarea, select, ChekeBox} = this.state;
        return(
            <div className="form">
                <div>
                    <h1>My React Form</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="however" value={title} onChange={this.handleForm}/>
                    <div>
                        <textarea type="textarea" name="hello" value={textarea} onChange={this.handleForm}></textarea>
                    </div>
                    <div>
                        <select value={select} onChange={this.handleForm}>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                        </select>
                    </div>
                    <div>
                        <input type="checkbox" checked={ChekeBox} onChange={this.handleForm} /> I agree all tearms and Condition.
                    </div>
                    <div>
                        <input type="submit" value="Submit Form" /> 
                    </div>
                </form>
            </div>
        )
    }
} 