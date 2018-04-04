import React, { Component } from 'react'

require('../../styles/components/profile-list.css')

class ProfileList extends Component {
  
  state = {
    profiles: [],
    show:false
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }
  
  updateWindowDimensions() {
    this.setState({show:window.innerWidth > 768})   
  }

  componentWillMount() {
    let testDataUrl = `${window.location.origin}/dummydata.json`;
    fetch(testDataUrl)
      .then(res => res.json())
      .then(result => this.setState({ profiles: result }))
  }

  render() {

    let profiles = [];
    for(let i = 7; i < this.state.profiles.length; i++){
      if(i > 60){        
        return profiles;
      }
      const p = this.state.profiles[i]
      profiles.push(<ProfileListItem show={this.state.show} snapchat={p.snapchat}
           photos={p.photos[0]} gender={p.gender} openImage={() => this.setState({show:!this.state.show})}/>)
    }

    console.log(profiles)
    return (
      <div className="container">
        {profiles}
      </div>
    )
  }
}


const ProfileListItem = (props) => {

  
  return (
    <div className="col-xs-12 col-md-4 col-sm-6">
      <div className="profilelist--item" style={{borderColor:props.gender === "0" ? 'aqua' : 'pink'}}>
        <div className="profilelist--main-content">
          <div className="profilelist--img-container" onClick={() => props.openImage()}>
            <img src={props.photos} alt="" className="profilelist--img"/>
          </div>
          <div className="profilelist--info">
            <div className="profilelist--mini">
              <p>Snapchat User</p>
            </div>
            <div className="profilelist--header">
              <p>{props.snapchat}</p>
            </div>
            <div className="profilelist--subheader">
              <p>POSTED 5 Mins ago</p>
            </div>
          </div>        
        </div>
        <div className="profilelist--showable-image" style={{display:props.show ? "block" : "none"}}>
            <img src={props.photos} alt="" id="src"/>
          </div>
        <div className="profilelist--options"> 
          <i className="far fa-comments"></i>Comments
          <i className="far fa-heart like"></i>
          <i className="fa fa-heart like"></i>
        </div>
      </div>
    </div>
  )
}


export default ProfileList;
