import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../components";

const RandomMemeImage = () => {
  const [img, setImg] = useState('');
  const fetchData = async () => {
    const response = await axios.get('https://meme-api.herokuapp.com/gimme/1');
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setImg(response?.data.memes[0].preview[2]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card
      data={{
        username: "Re-Creators",
        avatar: "https://avatars.githubusercontent.com/u/51537231?v=4",
        apiUrl: "https://github.com/D3vd/Meme_Api",
        apiName: "random-meme",
        apiDescription: "Getting random meme from reddit",
      }}
    >
      <img
        className="rounded-sm pt-2"
        src={img}
        alt="foximage"
      />
    </Card>
  );
};

export default RandomMemeImage;