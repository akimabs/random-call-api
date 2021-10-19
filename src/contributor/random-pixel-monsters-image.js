import React from "react";
import { Card } from "../components";

const RandomPixelMonstersImage = () => {
  return (
    <Card
      data={{
        username: "anggaprytn",
        avatar: "https://avatars.githubusercontent.com/u/20864493?v=4",
        apiUrl: "https://pixelencounter.com/Api",
        apiName: "Pixel Encounter API",
        apiDescription: "Get a monster with random pattern as image.",
      }}
    >
      <img
        className="pt-2 rounded mx-auto d-block"
        src="https://app.pixelencounter.com/api/basic/monsters/random/png?size=100"
        alt="monsters"
      />
    </Card>
  );
};

export default RandomPixelMonstersImage;
