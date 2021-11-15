// @flow
import * as React from 'react';

function SingleRace(raceRound) {
  return (
    <>
      <p>SingleRace</p>
      {/* <p>{raceRound.raceRound.date}</p> */}
      <p>{raceRound.raceRound.raceName}</p>
    </>
  );
}

export default SingleRace;
