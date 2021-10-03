import { Card } from '../components';

const RandomUnsplashImage = () => {
  return (
    <Card
      data={{
        username: 'mhmdbhsk',
        avatar: 'https://github.com/mhmdbhsk.png',
        apiUrl: 'https://source.unsplash.com/random/800x600',
        apiName: 'random-unsplash-image',
        apiDescription:
          'A simple way to embedding random Unsplash photo with custom parameter like size and Unsplash user',
      }}
    >
      <img
        className='rounded-sm pt-2'
        src='https://source.unsplash.com/random/800x600'
        alt='unsplashImage'
      />
    </Card>
  );
};

export default RandomUnsplashImage;
