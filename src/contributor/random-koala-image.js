import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import axios from 'axios'

const RandomKoalaImage = () => {
    const [data, setData] = useState()
    const BASE_URL = 'https://some-random-api.ml/img/koala'

    useEffect(() => {
        axios
            .get(BASE_URL)
            .then(res => setData(res.data.link))
            .catch(err => console.log(err))
    }, [])

    return (
        <Card data={{
            username: "mfauzanamzar",
            avatar: "https://avatars.githubusercontent.com/u/79294189?v=4",
            apiUrl: "https://some-random-api.ml/img/koala",
            apiName: "RandomKoala",
            apiDescription: "Random pictures of koala",
        }}>
            {data && (
                <img
                    className="rounded-sm h-200 w-200 pt-2"
                    src={data}
                    alt="koalaimage"
                />
            )}

        </Card>
    )
}

export default RandomKoalaImage
