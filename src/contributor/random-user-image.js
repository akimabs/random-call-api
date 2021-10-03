import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../components";

const RandomUserImage = () => {
  const [img, setImg] = useState('');
  const fetchData = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setImg(response?.data.results[0].picture.large);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card
      data={{
        username: "kingkinfajarr",
        avatar: "https://avatars.githubusercontent.com/u/70751731?v=4",
        apiUrl: "https://randomuser.me/api/",
        apiName: "random-user-image",
        apiDescription: "Getting random user image",
      }}
    >
      <img
        className="rounded-sm pt-2"
        src={img}
        alt="user-image"
      />
    </Card>
  );
};

export default RandomUserImage;