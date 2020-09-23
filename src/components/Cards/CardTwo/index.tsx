import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 65%;
  border: 1px solid grey;
  margin: auto;
  padding: 50px 20px;
  border-radius: 20px;
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 1px 1px #f2f2f2;
`;

const LeftImage = styled.div`
    img {
        height: 250px;
    }
`

const RightText = styled.div`
    text-align: left;
    width: 80%;
    margin-top: 70px;
    padding: 30px;
`

class CardOne extends React.Component {
    render() {
        return (
        <Background>
            <LeftImage>
            <img src={require('../../../assets/illustration-flowing-conversation.svg')} alt="two people working" />
            </LeftImage>
            <RightText>
                <h2>Flowing Conversation</h2>
                <p>Generate meaningful discussions</p>
            </RightText>
        </Background>
        )
    }
}

export default CardOne;