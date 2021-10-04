import { Card } from "../components";

// avatar can get from here(avatar_url)
// https://api.github.com/users/akimabs

const RandomCarImage = () => {
  return (
    <Card
      data={{
        username: "kingkinfajarr",
        avatar: "https://avatars.githubusercontent.com/u/70751731?v=4",
        apiUrl: "https://loremflickr.com/",
        apiName: "random car image",
        apiDescription: "generate a random car image",
      }}
    >
      <img
        className="rounded-sm h-200 w-200 pt-2"
        src="https://loremflickr.com/320/240/car"
        alt="random-pict"
      />
    </Card>
  );
};

export default RandomCarImage;
