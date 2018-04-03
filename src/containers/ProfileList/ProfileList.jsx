import React, { Component } from 'react'

import {Profile} from '../../components/Profile.jsx';


class ProfileList extends Component {
state = {
  profiles : []
}

componentWillMount(){
  let testDataUrl = `${window.location.origin}/dummydata.json`;
  fetch(testDataUrl)
    .then(res => res.json())
    .then(result => this.setState({profiles:result})) 
}

  render() {
    let profiles = this.state.profiles.map(profile => {
      return <Profile id={profile.id} bio = {profile.bio} key={profile.id} username={profile.snapchat} gender={profile.gender}
        photo={profile.photos[0]} age={profile.age}/>
    })
    return (
      <div className="container">
        {profiles}        
      </div>
    )
  }
}



export default ProfileList;
