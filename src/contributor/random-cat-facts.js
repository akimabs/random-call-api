import { useState, useEffect } from "react";
import axios from "axios";
// components
import { Card } from "../components";
// baseurl api's
const BASE_URL = "https://meowfacts.herokuapp.com/";

const RandomMeowFacts = () => {
  const [dispatching, setDispatching] = useState(false);
  const [randomFact, setRandomFact] = useState("");

  const getRandomCat = async () => {
    setDispatching(true);
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setRandomFact(response?.data?.data[0]);
    setDispatching(false);
  };

  useEffect(() => {
    getRandomCat();
    return () => {
      setDispatching(false);
    };
  }, []);

  return (
    <Card
      data={{
        username: "RWeebz",
        avatar: "https://avatars.githubusercontent.com/u/75969194?v=4",
        apiUrl: `hhttps://meowfacts.herokuapp.com/`,
        apiName: "Random Meow Facts",
        apiDescription: "Roll a fact about CAT that you don't know",
      }}
    >
      {dispatching ? (
        <p className="text-m my-3 text-center">Loading...</p>
      ) : (
        <div className="quote-wrapper mt-3">
          <div class="w-full mb-5">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm text-gray-600 text-center px-5">{randomFact}</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-2">
              ”
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default RandomMeowFacts;
