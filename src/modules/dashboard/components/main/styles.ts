import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    height: 100vh;
`

export const Header = styled.div`
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    margin-bottom:2.4rem;
`;


export const ChartContentWrapper = styled.div`
    display: flex;
    flex: 7;
    flex-direction: column;
    background-color: #f2fbff;
    padding: 1.6rem;
`


export const ChartContentTitle = styled.h1`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 4rem;
    color: ${({theme}) => theme.colors.grey70};
    margin-bottom: 3.2rem;
`;

export const CardWrapper = styled.div`
    gap: 2rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    filter: drop-shadow(0px 3.500000238418579px 5.500000476837158px rgba(0, 0, 0, 0.02));
`;

