import { useState, useEffect } from "react";
import axios from "axios";
// components
import { Card } from "../components";
// baseurl api's
const BASE_URL = "https://random-data-api.com/api/company/random_company";

const RandomCompany = () => {
  const [dispatching, setDispatching] = useState(false);
  const [data, setData] = useState();

  const getRandomCompany = async () => {
    setDispatching(true);
    const response = await axios.get(BASE_URL);
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setData(response.data);
    setDispatching(false);
  };

  useEffect(() => {
    getRandomCompany();
    return () => {
      setDispatching(false);
    };
  }, []);

  return (
    <Card
      data={{
        username: "anggaalfiansah",
        avatar: "https://avatars.githubusercontent.com/u/70573978?v=4",
        apiUrl: `https://random-data-api.com/api/company/random_company`,
        apiName: "Random Company",
        apiDescription: "generating random company.",
      }}
    >
      {dispatching ? (
        <p className="text-m my-3 text-center">Loading...</p>
      ) : data && (
        <div className="border p-2">
          <img className="rounded-sm pt-2 pl-5 pr-5 pb-1" src={data.logo} alt="techImage" />
          <div className="mt-1 text-lg text-center font-bold">{data.business_name}</div>
          <div className="text-center">{data.bs_company_statement}</div>
          <hr />
          <div className="mt-2 text-center">{data.full_address}</div>
          <div className="text-center font-bold">{data.phone_number}</div>
        </div>
      )}
    </Card>
  );
};

export default RandomCompany;
