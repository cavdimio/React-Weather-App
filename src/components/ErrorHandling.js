/* Component that handles the error messages */

import styled from "styled-components"

/* Styling for error messages */
const ErrorMessageStyle = styled.h3`
    color: rgb(238, 238, 238);
    font-size: 32px;
    font-weight: 500;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.8);
    text-align: center;
    margin-bottom: 2rem;
`;

/* Error Handling component */
const ErrorHandling = ( { errorMessage }) => {
    return (
        <ErrorMessageStyle> 
            {errorMessage} 
        </ErrorMessageStyle>
    )
}

export default ErrorHandling
