import { useState, useEffect } from "react";
import axios from "axios";
// components
import { Card } from "../components";
// baseurl api's
const BASE_URL = "https://picsum.photos/200"

const RandomImage200 = () => {
  const [dispatching, setDispatching] = useState(false)
  const [randomImg, setRandomImg] = useState('')

  const getRandomCat = async () => {
    setDispatching(true)
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setRandomImg(response?.data?.file)
    setDispatching(false)
  }

  useEffect(()=> { 
    getRandomCat();
    return () => {
      setDispatching(false)
    }
  },[])
  
  return (
    <Card
      data={{
        username: "Yazid Akbar",
        avatar: "https://avatars.githubusercontent.com/u/31529898?s=96&v=4",
        apiUrl: `https://picsum.photos/200`,
        apiName: "Random Image from picsum photos 200",
        apiDescription: "Random Api for displaying Image from picsum photos 200",
      }}
    >
      {
        dispatching ? (
          <p className="text-m my-3 text-center">Loading...</p>
        ) : (
          <img
            className="rounded-sm pt-2"
            src={randomImg}
            alt="techImage"
          />
        )
      }
    </Card>
  );
};

export default RandomImage200;
