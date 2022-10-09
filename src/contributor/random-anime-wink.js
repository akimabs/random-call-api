import axios from "axios";
import { useEffect, useState } from "react";

import { Card } from "../components";

const BASE_URL = "https://some-random-api.ml/animu/wink";

const RandomAnimeWink = () => {
    const [data, setData] = useState({ link: "" });
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
                username: "bayue48",
                avatar: "https://avatars.githubusercontent.com/u/70324722?v=4",
                apiUrl: "https://some-random-api.ml/animu/wink",
                apiName: "some random api",
                apiDescription: "Responds with randomly generated anime wink.",
            }}
        >
            <img
                className="rounded-sm h-200 w-200 pt-2"
                src={data?.link}
                alt="food"
            />
        </Card>
    );
};

export default RandomAnimeWink;