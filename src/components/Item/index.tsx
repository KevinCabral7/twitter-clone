type Props = {
  image: string;
  title: string;
};
const Item = ({ image, title }: Props) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default Item;
