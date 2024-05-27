import InfoCard from "../../components/InfoCard";
import * as S from "./style";
const Tread = () => {
  return (
    <S.TreadContainer>
      <InfoCard category={"dolor"} title={"ipsum"} posts={"lorem"} />
      <InfoCard category={"dolor"} title={"ipsum"} posts={"lorem"} />
      <InfoCard category={"dolor"} title={"ipsum"} posts={"lorem"} />
      <InfoCard category={"dolor"} title={"ipsum"} posts={"lorem"} />
    </S.TreadContainer>
  );
};

export default Tread;
