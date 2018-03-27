import React, { Component } from 'react'

export default class Message extends Component {

  styles = {
    para:{
      background:"#eee",
      width:"40%"
    },
    close:{
      float:"right"
    }
    
  }

  handleClick(msg){
    this.props.handleCloseClick(this.props.children);
  }

  render() {
    return (
      <p style={this.styles.para}>
        {this.props.children}
        <i onClick={() => this.handleClick()}style={this.styles.close}>&times;</i>  
      </p>
    )
  }
}
