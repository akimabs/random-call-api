import { useState, useEffect } from "react";
import { Card } from "../components";
import axios from "axios";

const RandomUserProfile = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  const getRandomUserProfile = async () => {
    setLoading(true);
    const response = await axios.get("https://randomuser.me/api/");
    if (response.status !== 200) {
      throw new Error("Fetching err");
    }
    setData(response?.data?.results[0])
    setLoading(false)
  }

  useEffect(() => {
    getRandomUserProfile();
    return () => {
      setLoading(false)
    }
  }, [])

  return (
    <Card
      data={{
        username: "ahmadkhairul",
        avatar: "https://avatars.githubusercontent.com/u/57492891?v=4",
        apiUrl: "https://randomuser.me/api/",
        apiName: "https://randomuser.me/",
        apiDescription: "generating random user data. Like Lorem Ipsum, but for people.",
      }}
    >
      {loading ? (
        <p className="text-m my-3 text-center">Loading...</p>
      ) : (
        <div className="flex flex-col">
          <img
            className="rounded-sm pt-2"
            src={data?.picture?.large}
            alt="profileImage"
          />
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{data?.name?.first} {data?.name?.last}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>:</td>
                <td>{data?.gender}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>:</td>
                <td>{data?.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};

export default RandomUserProfile;
