import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: hsl(192, 100%, 9%);
    padding: 65px 50px;
    color: white;
`;

const HeaderText = styled.div`
    text-align: left;

    img {
        filter: brightness(0) invert(1);
        width: 22%;
    }
`;

const Content = styled.div`
    display: grid;
    text-align: left;
    width: 300px;
    padding: 20px;

    p {
        font-size: 12px;
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
                <img src={require('../../assets/logo.svg')} />
            </HeaderText>
            <Content>
                <p>Lorem ipsum</p>
            </Content>
            <Copyright>
                <p>Copyright 2018 Huddle. All rights reserved.</p>
            </Copyright>
        </Background>
        )
    }
}

export default Footer;