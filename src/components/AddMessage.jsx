import React, { Component } from 'react';

class AddMessage extends Component {

    state = {
        inputText : ""
    }

    

    handleClick(event){        
        this.props.handleClick(this.state.inputText);
        this.setState({
            inputText : ""
        })
    }

    handleChange(event){        
        this.setState({
            inputText : event.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={(event) => this.handleChange(event)} type="text" value={this.state.inputText}/>
                <button onClick={(event) => this.handleClick(event)}>Add Message</button>
            </div>
        );
    }
}

export default AddMessage;