import styled from "styled-components";


export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 800px){
    align-items: center;
}
`;

export const CollectionPageTitle = styled.div`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr 1fr;
}

`
