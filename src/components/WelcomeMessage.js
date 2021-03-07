/* Component that handles the welcome title & message */

import styled from "styled-components"

/* Styling for the h1 around the welcome title */
const WelcomeTitleStyle = styled.h1`
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
    text-align: center;
`;

/* Styling for the h3 around the welcome message */
const WelcomeMessageStyle = styled.h3`
    color: rgb(238, 238, 238);
    font-size: 32px;
    font-weight: 500;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.8);
    text-align: center;
    margin-bottom: 2rem;
`;

/* Welcome message component */
const WelcomeMessage = () => {
    return (
        <div>
            <WelcomeTitleStyle> Welcome! </WelcomeTitleStyle>
            <WelcomeMessageStyle> Start by typing a city!! </WelcomeMessageStyle>
        </div>
    )
}

export default WelcomeMessage
