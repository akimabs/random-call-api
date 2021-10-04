import { Card } from "../components";

const RandomAiArtImage = () => {
  return (
    <Card
      data={{
        username: "sansekai",
        avatar: "https://avatars.githubusercontent.com/u/34540627?v=4",
        apiUrl: "https://thisartworkdoesnotexist.com/",
        apiName: "ai-artwork",
        apiDescription: "Responds with randomly generated artwork.",
      }}
    >
      <img
        className="rounded-sm pt-2"
        src="https://thisartworkdoesnotexist.com/"
        alt="aiart"
      />
    </Card>
  );
};

export default RandomAiArtImage;
