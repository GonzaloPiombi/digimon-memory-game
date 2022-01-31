import Card from './Card';

const CardGrid = (props) => {
  return props.imagesInformation.map((item) => {
    if (item.level === 1 && props.level === 1) {
      return <Card key={item.id} digimon={item} onClick={props.onClick} />;
    } else if (item.level === 2 && props.level === 2) {
      return <Card key={item.id} digimon={item} onClick={props.onClick} />;
    } else if (item.level === 3 && props.level === 3) {
      return <Card key={item.id} digimon={item} onClick={props.onClick} />;
    }
  });
};

export default CardGrid;
