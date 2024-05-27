import * as S from "./style";

type Props = {
  category: string;
  title: string;
  posts: string;
};
const InfoCard = ({ category, posts, title }: Props) => {
  return (
    <>
      <S.InfoContainer>
        <S.SubTitle>{category}</S.SubTitle>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{posts}</S.SubTitle>
      </S.InfoContainer>
    </>
  );
};

export default InfoCard;
