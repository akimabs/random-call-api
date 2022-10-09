import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../components";

const BASE_URL = "https://foodish-api.herokuapp.com/api/";

const RandomFoodImage = () => {
  const [data, setData] = useState({ image: "", link: "" });
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
        username: "alannugraha1",
        avatar: "https://avatars.githubusercontent.com/u/55216349?v=4",
        apiUrl: "https://foodish-api.herokuapp.com/api/",
        apiName: "floodish",
        apiDescription: "a random api for display random food image",
      }}
    >
      <img
        className="rounded-sm h-200 w-200 pt-2"
        src={data?.image}
        alt="food"
      />
    </Card>
  );
};

export default RandomFoodImage;
