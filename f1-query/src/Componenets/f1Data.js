import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SingleRace from './singleRace';

function F1Data() {
  const [raceResults, setRaceResults] = useState([]);

  const fetchdata = () => {
    axios
      .get(`http://ergast.com/api/f1/current/last/results.json`)
      .then((res) => setRaceResults(res.data.MRData.RaceTable.Races))
      .catch((err) => console.log(err.response));
    console.log(raceResults);
  };

  useEffect(() => {
    fetchdata();
    console.log(raceResults);
  }, []);

  console.log(raceResults);

  return (
    <div className='f1-data'>
      <div className='individual-data'>
        <p>F1Data</p>
        {raceResults.map((raceRound, index) => (
          <SingleRace key={index} raceRound={raceRound} />
        ))}
      </div>
    </div>
  );
}

export default F1Data;
