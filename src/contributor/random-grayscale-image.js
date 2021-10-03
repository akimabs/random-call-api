import { Card } from '../components';

const RandomGrayscaleImage = () => {
  return (
    <Card
      data={{
        username: 'ddikodroid',
        avatar: 'https://avatars.githubusercontent.com/u/4207774?v=4',
        apiUrl: 'https://picsum.photos',
        apiName: 'lorem picsum',
        apiDescription: 'the lorem ipsum for photos, but in grayscale only',
      }}>
      <img
        className='rounded-sm pt-2 h-400 w-400'
        src='https://picsum.photos/400/400?grayscale'
        alt='grayscale'
      />
    </Card>
  );
};

export default RandomGrayscaleImage;
