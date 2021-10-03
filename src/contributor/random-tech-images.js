import { Card } from "../components";

// avatar can get from here(avatar_url)
// https://api.github.com/users/akimabs

const RandomTechImage = () => {
  return (
    <Card
      data={{
        username: "hasbimsdd27",
        avatar: "https://avatars.githubusercontent.com/u/58213577?v=4",
        apiUrl: "https://placeimg.com/1000/1000/tech",
        apiName: "placeimg.com",
        apiDescription: "generate random tech image with custom dimension",
      }}
    >
      <img
        className="rounded-sm pt-2"
        src="https://placeimg.com/1000/1000/tech"
        alt="techImage"
      />
    </Card>
  );
};

export default RandomTechImage;
