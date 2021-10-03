import { useState, useEffect } from "react";
import axios from "axios";
// components
import { Card } from "../components";
// baseurl api's
const BASE_URL = "https://aws.random.cat/meow"

const RandomCatImage = () => {
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
        username: "Anggasayogo",
        avatar: "https://avatars.githubusercontent.com/u/31529898?s=96&v=4",
        apiUrl: `https://aws.random.cat/meow`,
        apiName: "Random Cat Image",
        apiDescription: "Random Api for displaying cat Image",
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

export default RandomCatImage;
