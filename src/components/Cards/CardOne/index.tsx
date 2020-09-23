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
  border: 1px solid hsl(208, 11%, 55%);
  box-shadow: 1px 1px 1px 1px hsl(208, 11%, 55%);
`;

const LeftText = styled.div`
    text-align: left;
    width: 80%;
    margin-top: 70px;
    padding: 30px;
`

const RightImage = styled.div`
    img {
        height: 250px;
    }
`

class CardOne extends React.Component {
    render() {
        return (
        <Background>
            <LeftText>
                <h2>Grow Together</h2>
                <p>Generate meaningful discussions</p>
            </LeftText>
            <RightImage>
                <img src={require('../../../assets/illustration-grow-together.svg')} alt="two people working" />
            </RightImage>
        </Background>
        )
    }
}

export default CardOne;