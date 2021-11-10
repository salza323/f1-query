// @flow
import * as React from 'react';

function SingleRace(raceRound) {
  return (
    <>
      <p>{raceRound.round}</p>
      <p>{raceRound.raceName}</p>
    </>
  );
}

export default SingleRace;
