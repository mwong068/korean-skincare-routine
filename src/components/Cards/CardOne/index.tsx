import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  width: 100%;
  border: 1px solid grey;
  margin: auto;
  padding: 50px 20px;
  border-radius: 20px;
  border: 1px solid #f2f2f2;
  box-shadow: 1px 1px 1px 1px #f2f2f2;
`;

const LeftText = styled.div`
    text-align: left;
    width: 100%;
    margin-top: 40px;
    padding: 30px;

    p {
        width: 70%;
    }
`

const RightImage = styled.div`
    img {
        height: 300px;
    }
`

class CardOne extends React.Component {
    render() {
        return (
        <Background>
            <div></div>
            <LeftText>
                <h2>Grow Together</h2>
                <br></br>
                <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
            </LeftText>
            <RightImage>
                <img src={require('../../../assets/illustration-grow-together.svg')} alt="two people working" />
            </RightImage>
            <div></div>
        </Background>
        )
    }
}

export default CardOne;