import { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../components";

const BASE_URL = "https://randomfox.ca/floof/";

const RandomFoxImage = () => {
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
        username: "akimabs",
        avatar: "https://avatars.githubusercontent.com/u/46390089?v=4",
        apiUrl: "https://randomfox.ca/floof/",
        apiName: "random-fox",
        apiDescription: "a random api for display random fox image",
      }}
    >
      <img
        className="rounded-sm h-200 w-200 pt-2"
        src={data?.image}
        alt="foximage"
      />
    </Card>
  );
};

export default RandomFoxImage;
