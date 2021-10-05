import { Card } from '../components';

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RandomPokemonImage = () => {
  return (
    <Card
      data={{
        username: 'ddikodroid',
        avatar: 'https://avatars.githubusercontent.com/u/4207774?v=4',
        apiUrl: 'https://pokeapi.co/api/v2/',
        apiName: 'pokeapi-v2',
        apiDescription: 'shows random pokemon sprite',
      }}>
      <img
        className='rounded-sm pt-2 h-400 w-400'
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          randomInteger(0, 150) + 1
        }.png`}
        alt='pokemon'
      />
    </Card>
  );
};

export default RandomPokemonImage;
export {
  randomInteger
}