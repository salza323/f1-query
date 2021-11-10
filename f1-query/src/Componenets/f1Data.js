import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SingleRace from './singleRace';

function F1Data(props) {
  const [raceResults, setRaceResults] = useState([]);

  const fetchdata = () => {
    axios
      .get(`http://ergast.com/api/f1/current/last/results.json`)
      .then((res) => setRaceResults(res.MRData.RaceTable.Races))
      .catch((err) => console.log(err.response));
    console.log(raceResults);
  };

  useEffect(() => {
    fetchdata();
    console.log(raceResults);
  });

  return (
    <div className='f1-data'>
      <div className='individual-data'>
        {raceResults.map((raceRound, index) => (
          <SingleRace key={index} singleRace={raceRound} />
        ))}
      </div>
    </div>
  );
}

export default F1Data;
