import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../components';

const RandomMonkeyUserComic = () => {
  const url = 'https://monkeyuser-api-ridvanaltun.vercel.app/api/comics/random';
  const [image, setImage] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(url);

      setImage(data.image_url);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Card
      data={{
        username: 'arifwidianto08',
        avatar: 'https://github.com/arifwidianto08.png',
        apiUrl:
          'https://monkeyuser-api-ridvanaltun.vercel.app/api/comics/random',
        apiName: 'random-monkeyuser-api',
        apiDescription: 'Random monkeyuser comic strip',
      }}
    >
      {isLoading ? (
        <p className='text-m my-3 text-center'>Loading...</p>
      ) : (
        <img className='rounded-sm pt-2' src={image} alt='techImage' />
      )}
    </Card>
  );
};

export default RandomMonkeyUserComic;
