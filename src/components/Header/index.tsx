import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import img from '../../assets/bg-hero-desktop.svg';

const Background = styled.div`
    background-image: url(${img});
    background-color: hsl(193, 100%, 96%);
`;

const HeaderText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0 30px 0;
`;

const LeftText = styled.div`
    display: grid;
    text-align: left;
    width: 300px;
    padding: 20px;

    p {
        font-size: 12px;
    }
`;

const RightImages = styled.div`
    width: 450px;
    img {
        width: 100%;
    }
`;

const Button = styled.button`
    height: 40px;
    width: 205px;
    border-radius: 50px;
    background-color: hsl(322, 100%, 66%);
    color: white;
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 1px 1px #f2f2f2;
`;

class Header extends React.Component {
    render() {
        return (
        <Background>
            <Nav />
            <HeaderText>
                <LeftText>
                    <h2>Build The Community<br></br>Your Fans Will Love</h2>
                    <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>
                    <Button>Get Started For Free</Button>
                </LeftText>
                <RightImages>
                    <img src={require('../../assets/illustration-mockups.svg')} alt="huddle logo" />
                </RightImages>
            </HeaderText>
        </Background>
        )
    }
}

export default Header;