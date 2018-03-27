import React, { Component } from 'react'
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';

require ('../../styles/components/hamburger.css');

const NavButton = (props) => {
    let buttonClass = !props.active ? "hamburger" : "hamburger is-active";
    return (
    <div>
        <Button onClick={props.clicked} style={{marginRight:12}}> 
        <div className={buttonClass} id="hamburger-6">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
        </Button>
        <p className="text-primary" style={{display:'inline'}}>Menu</p>
    </div>
    )
}


export default class _Navbar extends Component {
    state = {
        active : false
    }

    handleClick(){
        this.props.updateActive();
    }
    render() {
        
        return (
            
            <Navbar inverse fluid style={{zIndex:100}}>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <NavButton active={this.props.active}
                            clicked = {() => this.handleClick()} > 
                        </NavButton>                        
                    </NavItem>       
                </Nav>
            </Navbar>
        )
    }
}
