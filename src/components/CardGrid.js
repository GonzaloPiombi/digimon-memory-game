import Card from './Card';

const CardGrid = (props) => {
  return props.imagesInformation.map((item) => {
    return <Card key={item.id} digimon={item} onClick={props.onClick} />;
  });
};

export default CardGrid;
