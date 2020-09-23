import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneVolume, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Background = styled.div`
    color: white;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    padding: 20px 0px;
    font-size: 14px;
    margin-left: -50px;
    
    ul {
        list-style-type: none;
    }

    li {
        padding: 10px;
    }
`;

const ContactText = styled.div`
    text-align: left;
    display: grid;
    grid-template-columns: auto auto;

    .text {
        margin-left: -45px;
    }

    p {
        width: 70%;
    }
`

const Text = styled.div`
    text-align: left;

    img {
        filter: brightness(0) invert(1);
        width: 22%;
    }
`;

const Socials = styled.div`
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 0px;
    }

    .icons {
        border: 1px solid white;
        border-radius: 50px;
        width: 12px;
        height: 12px;
        padding: 5px;
    }
`;


class Content extends React.Component {
    render() {
        return (
        <Background>
            <ContactText>
                <div>
                    <ul>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} className="icons" /></li>
                        <br></br><br></br>
                        <li><FontAwesomeIcon icon={faPhoneVolume} className="icons" /></li>
                        <li><FontAwesomeIcon icon={faEnvelopeSquare} className="icons" /></li>
                    </ul>
                </div>
                <div className="text">
                    <ul>
                        <li><span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></span></li>
                        <li>+1-543-123-4567</li>
                        <li>example@huddle.com</li>
                    </ul>
                </div>
            </ContactText>
            <Text>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
            </Text>
            <Text>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </Text>
            <Socials>
                <ul>
                    <li><FontAwesomeIcon icon={faFacebookF} className="icons" /></li>
                    <li><FontAwesomeIcon icon={faTwitter} className="icons" /></li>
                    <li><FontAwesomeIcon icon={faInstagram} className="icons" /></li>
                </ul>
            </Socials>
        </Background>
        )
    }
}

export default Content;