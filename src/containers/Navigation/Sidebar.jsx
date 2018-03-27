import React from 'react';


require('../../styles/components/sidebar.css');

const links = [
    "Home", "About", "Contact"
]


class Sidebar extends React.Component {

    state = {
        activeKey: 0,
    }

    handleSelectKey(activeKey) {
        this.setState({
            activeKey
        })
    }

    render() {

        let listItems = links.map((item, idx) => {
            return (
            <li key={idx} className={idx === this.state.activeKey ? "active" : ""}
                onClick={() => this.handleSelectKey(idx)}
            >
                    <a href="#home">{item}</a>
            </li>
            )
        })
        
        return (

            <div className="sidenav" style={{width: this.props.active ? 250 : 0}}>
                <ul className="sub-nav nav nav-pills nav-stacked">   
                    {listItems}
                </ul>

                <ul className="sub-nav nav nav-stacked nav-sit-bottom">
                    <li><a>Blog</a></li>
                    <li><a>Log Out</a></li>                    
                </ul>

            </div>


        );
    }
};

export default Sidebar;