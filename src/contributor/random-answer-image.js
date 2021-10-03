import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../components";

// BASEURL: https://yesno.wtf/api

const BASE_URL = "https://yesno.wtf/api";

export default function RandomAnswerImage() {
	const [answer, setAnswer] = useState([]);
	const getAnswerRandom = async () => {
		try {
			const response = await axios.get(BASE_URL);
			setAnswer(response.data);
		} catch (error) {
			throw new Error(error.message);
		}
	};
	useEffect(() => {
		getAnswerRandom();
	}, []);
	return (
		<>
			<Card
				data={{
					username: "riyaraa",
					avatar: "https://avatars.githubusercontent.com/u/50629099?v=4",
					apiUrl: "https://yesno.wtf/api",
					apiName: "answer-image-random-api",
					apiDescription: "this api generate random answer image",
				}}
			>
				<img src={answer.image} alt={answer.answer} />
			</Card>
		</>
	);
}
