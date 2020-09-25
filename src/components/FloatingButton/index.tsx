import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
    width: 50%;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 1px 1px #f2f2f2;
    position: absolute;
    margin-top: -120px;
    margin-left: 24%;
`;

const HeaderText = styled.div`
    padding: 40px;
`;

const Button = styled.button`
    height: 100%;
    width: 50%;
    border-radius: 50px;
    background-color: hsl(322, 100%, 66%);
    border: 1px solid #f2f2f2;
    box-shadow: 1px 1px 1px 1px #f2f2f2;
    padding: 20px;
    color: white;
`;

class FloatingButton extends React.Component {
    render() {
        return (
        <Navigation>
            <HeaderText>
                <h2>Ready To Build Your Community?</h2>
                <br></br>
                <Button>Get Started For Free</Button>
            </HeaderText>
        </Navigation>
        )
    }
}

export default FloatingButton;