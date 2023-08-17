import styled from "styled-components";


export const MonitoringCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.2rem;
    flex-wrap: wrap;
    flex: 3;
    width: 30%;
    background-color: #11103a;
`;

export const TodayStatus = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const TodayDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

`

export const TodayDescriptionMessage = styled.span`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.grey10};
`;


export const CurrentTemperatureWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    margin: 10rem 0;
`;


export const CurrentTemperature = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 10rem;
    color: ${({ theme }) => theme.colors.grey10};
`;


export const MonitoredVariableWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    flex: 1;
`;

export const ImageWrapper = styled.div`
     width: 6rem;
     height: 6rem;
`

export const HumidityPicture = styled.img`
   width: 6rem;
    height: 6rem;
  object-fit: contain;
`;

export const MonitoredVariableData = styled.span`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.grey10};
`;