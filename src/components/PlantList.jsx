import React from 'react';
import Plant from './Plant';


var masterPlantList = [
  {
    commonName: 'bigleaf maple',
    scientificName: 'Acer macrophyllum',
    imageURL: 'https://green2.kingcounty.gov/gonative/PhotoFileDir/AcermacrophyllumwholSPUGR.jpg',
  },
  {
    commonName: 'bitter cherry',
    scientificName: ' Prunus emarginata',
    imageURL: 'https://green2.kingcounty.gov/gonative/PhotoFileDir/prunusemarginataflowEMTNS.jpg',
  },
  {
    commonName: 'black cottonwood',
    scientificName: ' Populus balsamifera',
    imageURL: 'https://green2.kingcounty.gov/gonative/PhotoFileDir/populusbalsamiferatrNFLAE.JPG',
  },
  {
    commonName: 'Douglas Fir',
    scientificName: 'Pseudotsuga menziesii',
    imageURL: 'https://green2.kingcounty.gov/gonative/PhotoFileDir/PseudotsugamenziesiiSEJYU.JPG',
  },
  {
    commonName: 'Hookers willow',
    scientificName: 'Salix hookeriana',
    imageURL: 'http://www.nwplants.com/images/trees/sal_hoo_jko_hooker_willow3small.jpg',
  },
  {
    commonName: 'salmonberry',
    scientificName: 'Rubus spectabilis',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Salmonberry_with_leaves.jpg',
  },
];

function PlantList(props){
  return (
  <div>
    <style jsx>{`
      `}</style>
      {masterPlantList.map((plant, index) =>
        <Plant commonName={plant.commonName}
          scientificName={plant.scientificName}
          imageURL={plant.imageURL}
          key={index}/>
      )}
    </div>
    );
  }

  export default PlantList;
