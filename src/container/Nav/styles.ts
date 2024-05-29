import styled from "styled-components";
import { Button } from "../../components/Button/style";

export const NavContainer = styled.div`
  width: 20.6vw;
  position: fixed;
  height: 100vh;
  margin-left: 40px;
  > :first-child {
    margin-top: 14px;
    svg {
      width: 32px;
    }
  }
  border-right: 1px solid rgb(47, 51, 54);
  ${Button} {
    display: block;
    margin: 0 16px 72px;
  }
`;
