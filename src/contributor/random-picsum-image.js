import { Card } from "../components";

// avatar can get from here(avatar_url)
// https://api.github.com/users/akimabs

const RandomPicsumImage = () => {
  return (
    <Card
      data={{
        username: "hendraaagil",
        avatar: "https://avatars.githubusercontent.com/u/54741166?v=4",
        apiUrl: "https://picsum.photos",
        apiName: "random lorem picsum",
        apiDescription: "generate a random image with custom dimension",
      }}
    >
      <img
        className="rounded-sm h-200 w-200 pt-2"
        src="https://picsum.photos/200"
        alt="random-pict"
      />
    </Card>
  );
};

export default RandomPicsumImage;
