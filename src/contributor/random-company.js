import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components";

const BASE_URL = 'https://random-data-api.com/api/'

const RandomCompany = () => {
  const [data, setData] = useState({ logo: '' });
  const [loading, setLoading] = useState(false);

  const get = async () => {
    const { data } = await axios.get(`${BASE_URL}/company/random_company`);

    data ? setLoading(false) : setLoading(true);
    setData(data);
  }

  useEffect(() => {
    get().finally();
    return () => {
      setLoading(false);
    }
  }, [])

  return (
    <Card
      data={{
        username: "Daniel",
        avatar: "https://avatars.githubusercontent.com/u/28420302?v=4",
        apiUrl: "https://random-data-api.com/api/",
        apiName: "random-company",
        apiDescription: "a random api for display random company",
      }}
    >
      {
        loading ? (
          <p className="text-m my-3 text-center">Loading...</p>
        ) : (
          <img
            className="rounded-sm h-200 w-200 pt-2"
            src={data?.logo}
            alt="company-logo"
          />
        )
      }
    </Card>
  )
}


export default RandomCompany;
