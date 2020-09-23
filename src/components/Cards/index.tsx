import React from 'react';
import styled from 'styled-components';
import CardOne from './CardOne';

const Background = styled.div`
    background-color: white;
    padding: 30px;
`;


class Cards extends React.Component {
    render() {
        return (
        <Background>
            <CardOne />
        </Background>
        )
    }
}

export default Cards;