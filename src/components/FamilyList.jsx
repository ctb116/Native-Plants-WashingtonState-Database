import React from 'react';
import Family from './Family';

var masterFamilyList = [
  {
    commonName: 'fir',
    scientificName: 'Abies',
    symbol: 'ABIES',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Abies_holophylla_Manchurian_Fir_cones.jpg',
  },
  {
    commonName: 'maple',
    scientificName: 'Acer',
    symbol: 'ACER',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Acer_pseudoplatanus_002.jpg/800px-Acer_pseudoplatanus_002.jpg',
  },
  {
    commonName: 'rose',
    scientificName: 'Rubus',
    symbol: 'RUBUS',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Blackberries_on_bush.jpg'
  },
  {
    commonName: 'rose',
    scientificName: 'Rubus',
    symbol: 'RUBUS',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Blackberries_on_bush.jpg'
  }
];

function FamilyList(props){
  return (
    <div>
      <style jsx>{`
          div {
            width: 100%;
            list-style-type: none;
            border: 1px solid green;
          }
      `}</style>
      {masterFamilyList.map((family, index) =>
        <Family commonName={family.commonName}
          scientificName={family.scientificName}
          symbol={family.symbol}
          imageURL={family.imageURL}
          key={index}/>
      )}
    </div>
  );
}

export default FamilyList;
