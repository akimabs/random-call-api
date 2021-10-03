import { Card } from "../components";

const RandomImageUnsplash = () => {
  return (
    <Card
      data={{
        username: "Risal Walangadi",
        avatar: "https://avatars.githubusercontent.com/u/32890714?v=4",
        apiUrl: "https://random.responsiveimages.io/",
        apiName: "random-image-unsplash",
        apiDescription: "Random image from unsplash",
      }}
    >
      <img
        className="rounded-sm pt-2"
        src="https://source.unsplash.com/random/400x400"
        alt="unsplashImage"
      />
    </Card>
  );
};

export default RandomImageUnsplash;
