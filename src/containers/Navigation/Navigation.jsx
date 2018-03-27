import React, { Component } from 'react'
import Navbar from './Navbar.jsx'
import Sidebar from './Sidebar.jsx'

export default class Navigation extends Component {

    state = {
        active : false
    }

    updateActive(){
        this.setState((prevState) => {
            return {active : !prevState.active};
          });
    }


    render() {
        return (
            <div>
                <Navbar updateActive = {() => this.updateActive()} active={this.state.active}/>
                <Sidebar active={this.state.active} />
            </div>
        )
    }
}