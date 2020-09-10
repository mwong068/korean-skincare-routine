import React from 'react';

class Nav extends React.Component {
    render() {
        return (
        <div className="nav">
            <ul>
                <li>Huddle</li>
                <li><button>Try It Free</button></li>
            </ul>
        </div>
        )
    }
}

export default Nav;