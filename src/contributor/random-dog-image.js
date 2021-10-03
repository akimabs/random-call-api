import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import axios from 'axios'

const RandomDogImage = () => {
    const [data, setData] = useState()
    const BASE_URL = 'https://dog.ceo/api/breeds/image/random'

    useEffect(() => {
        axios
        .get(BASE_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Card data={{
            username: "TaufikAkbar7",
            avatar: "https://avatars.githubusercontent.com/u/63723517?v=4",
            apiUrl: "https://dog.ceo/api/breeds/image/random",
            apiName: "random-dog",
            apiDescription: "a random api for display random dog image",
        }}>
            {data && (
                <img
                className="rounded-sm h-200 w-200 pt-2"
                src={data.message}
                alt="dogimage"
              />
            )}
        </Card>
    )
}

export default RandomDogImage
