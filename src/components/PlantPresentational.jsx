import React from 'react';
import PlantList from './PlantList';
import FilterPlantButton from './FilterPlantButton';

function PlantPresentational(){
  return (
    <div>
        <style jsx>{`
        `}</style>
      <FilterPlantButton/>
        <PlantList/>
    </div>
  );
}

export default PlantPresentational;
