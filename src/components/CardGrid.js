import Card from './Card';
import imagesInformation from './ImagesInfo';

const CardGrid = (props) => {
  return imagesInformation.map((item) => {
    return <Card digimon={item} onClick={props.onClick} />;
  });
};

export default CardGrid;
