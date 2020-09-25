import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Background = styled.div`
    background-color: hsl(192, 100%, 9%);
    padding: 150px 90px 65px 90px;
    color: white;
`;

const HeaderText = styled.div`
    text-align: left;

    img {
        filter: brightness(0) invert(1);
        width: 15%;
    }
`;

const Copyright = styled.div`
    font-size: 10px;
    text-align: right;
`;

class Footer extends React.Component {
    render() {
        return (
        <Background>
            <HeaderText>
                <img src={require('../../assets/logo.svg')} alt="huddle logo" />
            </HeaderText>
            <Content />
            <Copyright>
                <p>Copyright 2018 Huddle. All rights reserved.</p>
            </Copyright>
        </Background>
        )
    }
}

export default Footer;