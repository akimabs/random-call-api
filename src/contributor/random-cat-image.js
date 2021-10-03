import { useState, useEffect } from "react";
import axios from "axios";
// components
import { Card } from "../components";
// baseurl api's
const BASE_URL = 'https://aws.random.cat/meow'

const RandomCatImage = () => {
  const [randomImg, setRandomImg] = useState('')

  const getRandomCat = () => {
    axios.get(BASE_URL)
    .then(response =>{
      setRandomImg(response?.data?.file)
    })
    .catch(error =>{
      console.log("erroe when fetch", error)
    })
  }

  useEffect(()=>{ 
    getRandomCat() 
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
      <img
        className="rounded-sm pt-2"
        src={randomImg}
        alt="techImage"
      />
    </Card>
  );
};

export default RandomCatImage;
