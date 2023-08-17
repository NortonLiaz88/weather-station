import WbSunny from "@mui/icons-material/WbSunny";
import styled from "styled-components";

export const Logo = styled(WbSunny)`
  cursor: pointer;
  color: #ffbf5e;
  margin-right: 1rem;
  width: 4.2rem;
  height: 4.2rem;
`;


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-bottom: 0.2rem solid ${({theme}) => theme.colors.grey20};
`