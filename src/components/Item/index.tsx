import { ReactElement } from "react";
import * as S from "./style";

type Props = {
  children: ReactElement;
  title: string;
};
const Item = ({ children, title }: Props) => {
  return (
    <S.ItemContainer>
      {children}
      <S.ItemTitle>{title}</S.ItemTitle>
    </S.ItemContainer>
  );
};

export default Item;
