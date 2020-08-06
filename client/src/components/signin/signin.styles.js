import styled from "styled-components";


export const SignInPageContainer = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px){
    width: 90vw;
    .googleSignIn{
        width: 130px
    }
    }
`;

export const SignInButton = styled.div`
      display: flex;
      justify-content: space-between;
`;