import React, { Component } from 'react'

import MessageList from '../containers/MessageList.jsx';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        This is the home page
        <MessageList/>
      </div>
    )
  }
}
