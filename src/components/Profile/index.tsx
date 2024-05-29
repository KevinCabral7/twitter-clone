import { ReactElement } from "react";
import * as S from "./style";

type Props = {
  children?: ReactElement;
  name: string;
  id: string;
};
const Profile = ({ children, name, id }: Props) => {
  return (
    <S.ProfileContainer>
      {children}
      <div>
        <S.ProfileName>{name}</S.ProfileName>
        <S.ProfileId>{id}</S.ProfileId>
      </div>
    </S.ProfileContainer>
  );
};

export default Profile;
