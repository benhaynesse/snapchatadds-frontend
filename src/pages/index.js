import React, { Component } from 'react'
import Navigation from '../containers/Navigation/Navigation.jsx'

import ProfileList from '../containers/ProfileList/ProfileList.jsx';


export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <hr/>
        <hr/>
        <hr/>
            <ProfileList/>
      </div>
    )
  }
}


