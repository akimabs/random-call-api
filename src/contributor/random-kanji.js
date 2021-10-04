import axios from 'axios';
import { useEffect, useState } from 'react';

import { Card } from '../components';


const API_URL = 'https://kanjiapi.dev/v1/kanji';
const generateRandomIndex = dataLength => {
  return Math.floor(Math.random() * dataLength);
}

const RandomKanji = () => {
  const [currentKanji, setCurrentKanji] = useState('');


  const getKanji = async () => {
    try {
      const { data: allKanji, status } = await axios.get(`${API_URL}/all`)
      if (status == 200) {
        getKanjiInformation(allKanji[generateRandomIndex(allKanji?.length)]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getKanjiInformation = async kanji => {
    try {
      const { data: kanjiInformation } = await axios.get(`${API_URL}/${kanji}`);

      setCurrentKanji(kanjiInformation);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => getKanji(), []);

  return (
    <Card 
      data={{
        username: "ziunadev",
        avatar: "https://avatars.githubusercontent.com/u/71458677?v=4",
        apiUrl: "https://kanjiapi.dev/",
        apiName: "random-kanji",
        apiDescription: `
          This api generate random kanji, with some of its informations.
        `,
      }}
    > 
      {
        currentKanji && 
        <KanjiCard 
        data={{
          kanji: currentKanji.kanji,
          stroke_count: currentKanji.stroke_count,
          meanings: currentKanji.meanings,
          kun_readings: currentKanji.kun_readings,
          on_readings: currentKanji.on_readings
        }}
        />
      }
    </Card>
  );
}

export default RandomKanji;

const KanjiCard = ({ data }) => {
  return (
    <div className="w-full flex flex-col space-y-4 items-center">
      <div id="kanji" className="h-48 lg:h-48 w-full 2xl:h-64 bg-gray-200 flex items-center justify-center relative rounded">
        <div className="absolute top-1 right-1 flex items-center flex-col justify-center">
          <p className="text-xs">Strokes</p>
          <span className="text-lg font-bold">{data.stroke_count}</span>
        </div>
        <span className="text-9xl">
          { data.kanji }
        </span>
      </div>
      <div id="kanji-informations" className="w-full flex flex-col space-y-4">
        <div id="on-readings" className="w-full flex flex-row space-x-4 md:space-x-3">
          <span className="text-sm font-semibold w-16">On'yomi</span>
          <div className="flex-grow h-full grid grid-cols-3 gap-4">
            {
              data.on_readings && data.on_readings.map((reading, idx) => (
                <div key={idx} className="py-1 px-2 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-sm">{ reading }</span>
                </div>
              ))
            }
          </div>
        </div>
        <div id="kun-readings" className="w-full flex flex-row space-x-4 md:space-x-3">
          <span className="text-sm font-semibold w-16">Kun'yomi</span>
          <div className="flex-grow h-full grid grid-cols-2 gap-4">
            {
              data.kun_readings && data.kun_readings.map((reading, idx) => (
                <div key={idx} className="py-1 px-2 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-sm">{reading}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div id="meanings" className="w-full flex flex-row space-x-4 md:space-x-3">
          <span className="text-sm font-semibold w-16">Meanings</span>
          <div className="flex-grow h-full grid grid-cols-1 gap-x-4 gap-y-2">
            {
              data.meanings && data.meanings.map((reading, idx) => (
                <div key={idx} className="py-1 px-2 bg-blue-100 flex items-center justify-center rounded">
                  <span className="text-sm text-center">{reading}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}