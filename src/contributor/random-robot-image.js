import { Card } from "../components";
import {randomInteger} from './random-pokemon-image'

const RandomRobotImage = () => {
  return (
    <Card
      data={{
        username: "saefullohmaslul",
        avatar: "https://avatars.githubusercontent.com/u/20754023",
        apiUrl: "https://robohash.org/",
        apiName: "robohash",
        apiDescription: "Random API for displaying Robot",
      }}
    >
      <img
        className='rounded-sm pt-2 h-400 w-400'
        src={`https://robohash.org/${
          randomInteger(0, 150) + 1
        }.png?set=set1`}
        alt='robot'
        loading="lazy"
      />
    </Card>
  );
};

export default RandomRobotImage;
