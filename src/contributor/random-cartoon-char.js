import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../components";

const randomizer = Math.floor(Math.random() * 826);
const BASE_URL = `https://rickandmortyapi.com/api/character/${randomizer}`;

const RandomFoodImage = () => {
  const [data, setData] = useState({ image: "" });
  const fetchData = async () => {
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setData(response?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card
      data={{
        username: "honestyan",
        avatar: "https://avatars.githubusercontent.com/u/37909888?v=4",
        apiUrl: "https://rickandmortyapi.com/api/",
        apiName: "rickandmortyapi",
        apiDescription:
          "a random api for display random cartoon character (rick and morty)",
      }}
    >
      <img
        className="rounded-sm h-200 w-200 pt-2"
        src={data?.image}
        alt="character"
      />
    </Card>
  );
};

export default RandomFoodImage;
