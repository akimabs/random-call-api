import { Card } from '../components';



const RandomLoremPixelImage =() => {
    return (
        <Card
      data={{
        username: "kfajarbowo",
        avatar: "https://avatars.githubusercontent.com/u/54922255?s=40&v=4",
        apiUrl: "http://lorempixel.com/200/300/nature",
        apiName: "lorempixel.com",
        apiDescription: "A random api for display nature image with custom dimention",
      }}
    >
      <img
        className="rounded-sm pt-2"
        src="http://lorempixel.com/200/300/nature"
        alt="natureImage"
      />
    </Card>
    )
}

export default RandomLoremPixelImage
