import { useState, useEffect } from 'react';
import { Card } from '../components';
import axios from 'axios';

// avatar can get from here(avatar_url)
// https://api.github.com/users/akimabs

const RandomQuotesApi = () => {
	const [data, setData] = useState(false);

	const getRandomQuote = async () => {
		const response = await axios.get('https://api.quotable.io/random');
		if (response.status !== 200) {
			throw Error('Error while fetching');
		}
		setData(response?.data);
		console.log(response.data);
	};

	useEffect(() => {
		getRandomQuote();
	}, []);

	return (
		<Card
			data={{
				username: 'Sigit Wahyudi',
				avatar: 'https://avatars.githubusercontent.com/u/44634025?v=4',
				apiUrl: 'https://api.quotable.io/random',
				apiName: 'random quotes api',
				apiDescription: 'free random quotes API',
			}}>
			<div className='quote-wrapper mt-3'>
				<div class='w-full mb-5'>
					<div class='text-3xl text-indigo-500 text-left leading-tight h-3'>
						“
					</div>
					<p class='text-sm text-gray-600 text-center px-5'>{data.content}</p>
					<div class='text-3xl text-indigo-500 text-right leading-tight h-3 -mt-2'>
						”
					</div>
				</div>
				<div class='w-full'>
					<p class='text-md text-indigo-500 font-bold text-center'>
						{data.author}
					</p>
				</div>
			</div>
		</Card>
	);
};

export default RandomQuotesApi;
