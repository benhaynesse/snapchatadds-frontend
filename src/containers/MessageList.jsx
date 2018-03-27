import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MessageActions from '../actions/message';

import Message from '../components/Message.jsx';
import AddMessage from '../components/AddMessage.jsx';

class MessageList extends Component {
  
  componentDidMount(){    
    this.props.action.getMessages();      
  }

  handleCloseClick(msg){
    this.props.action.deleteMessage(msg);
  }
  
  render() {
   
    return (
      <div>
        {
           this.props.messages
            .map(
              (message, idx) => {
                return <Message key={idx} handleCloseClick={(msg) => this.handleCloseClick(msg)}>{message}</Message>
              }
            )
        }
        <AddMessage handleClick = {(message) => this.props.action.addMessage(message)}/>
      </div>
    )
  }
}

function mapStateToProps(state, prop){  
  return {
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch){
  return {
    action:bindActionCreators(MessageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);