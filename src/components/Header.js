/* Component that shows the header & the header-box */

import styled from 'styled-components'

/* Styling for the div around the header box */
const TitleBox = styled.div`
    background: rgba(255, 255, 255, 0.2);
    padding: 0px 25px;
    border-radius: 16px;
    margin-right: 8%;
    margin-left: 8%;
    `;

/* Styling for the h1 around the header box */
const Title = styled.h1`
    color: rgb(238, 238, 238);
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
    text-align: center;
    cursor: default;
    font-weight: 450;

    @media only screen and (max-device-width: 480px) {
        font-size: 1.75rem;
    }

    @media only screen and (min-device-width: 481px) {
        font-size: 3.25rem;
    }
    `;

/* Header component */
const Header = () => {
    return (
        <TitleBox>
            <Title>
                Find the weather around the world!
            </Title> 
        </TitleBox>
    )
}

export default Header
