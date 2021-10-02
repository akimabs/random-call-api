import { Card } from "../components";

// avatar can get from here(avatar_url)
// https://api.github.com/users/akimabs

const RandomFoxImage = () => {
  return (
    <Card
      data={{
        username: "yourname",
        avatar: "your url avatar",
        apiUrl: "https://public-api.com",
        apiName: "random-api",
        apiDescription: "description your api",
      }}
    >
      {/* Add ypur component here */}
    </Card>
  );
};

export default RandomFoxImage;
