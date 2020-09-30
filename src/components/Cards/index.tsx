import React from 'react';
import styled from 'styled-components';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';
    
const Background = styled.div`
    background-color: white;
    padding: 120px 120px 250px 120px;
    // font-family: 'Poppins', sans-serif;
    font-family: 'Open Sans', sans-serif;
`;

class Cards extends React.Component {
    render() {
        return (
        <Background>
            <CardOne />
            <br></br>
            <CardTwo />
            <br></br>
            <CardThree />
        </Background>
        )
    }
}

export default Cards;