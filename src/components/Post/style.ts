import styled from "styled-components";
import { ProfileContainer } from "../Profile/style";

export const PostContainer = styled.div`
  width: 51.8vw;
  margin: 0 auto;
  border: 1px solid rgb(47, 51, 54);
  > div {
    width: 43vw;
  }
  ${ProfileContainer} {
    div {
      display: flex;
      align-items: center;
      h3,
      h6 {
        margin-left: 4px;
        font-size: 15px;
      }
    }
    svg {
      margin-top: 8px;
      display: block;
      height: 100%;
    }
  }
`;
export const PostContent = styled.div`
  font-family: ChirpRegular;
  color: rgb(231, 233, 234);
  font-weight: 400;
  padding: 0 16px;
  display: block;
  margin: 0 auto;
`;
export const PostInterectsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  svg {
    fill: rgb(113, 118, 123);
    width: 18px;
  }
`;
