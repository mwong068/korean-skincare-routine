import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  display: grid;
  grid-template-columns: auto auto;
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
    width: 80%;
    margin-top: 40px;
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
                <h2>Your Users</h2>
                <p>It takes no time at all to integrate Huddle with your app's authenticiation solution. This means, once signed in to your app, your users can start chatting immediately.</p>
            </LeftText>
            <RightImage>
                <img src={require('../../../assets/illustration-your-users.svg')} alt="two people working" />
            </RightImage>
        </Background>
        )
    }
}

export default CardOne;