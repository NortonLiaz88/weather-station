import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const CardTitle = styled.span`
  font-family: ${({theme}) => theme.fonts.secondaryRegular};
  font-size: 1.6rem;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  /* text-indent: 3.2rem; */

  color: ${({theme}) => theme.colors.grey70};
  margin-bottom: 2.6rem;
`;

export const CardContent = styled.div`
  padding: 1.2rem;
  display: flex;
  flex: 1;
  height: 100%;
`;
