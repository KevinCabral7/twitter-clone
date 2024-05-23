import * as S from "./style";
type Props = {
  children: string;
};
const Button = ({ children }: Props) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
