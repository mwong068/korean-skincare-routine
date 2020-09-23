import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
    padding: 20px;

    ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding: 15px 20px;
    }
`;

const Logo = styled.div`
    img {
        width: 150px;
    }
`;

const Button = styled.button`
    height: 30px;
    width: 115px;
    border-radius: 50px;
    background-color: white;
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 1px 1px #f2f2f2;
`;

class Nav extends React.Component {
    render() {
        return (
        <Navigation>
            <ul>
                <li><Logo><img src={require('../../assets/logo.svg')} alt="huddle logo"/></Logo></li>
                <li><Button>Try It Free</Button></li>
            </ul>
        </Navigation>
        )
    }
}

export default Nav;