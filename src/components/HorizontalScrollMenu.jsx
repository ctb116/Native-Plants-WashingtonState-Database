import React from 'react';
import PropTypes from 'prop-types';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../styles/HorizontalScrollMenu.css';
import Family from './Family';

//the styling in family will feed into this scroll has the items

const masterFamilyList = [
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
  },
  {
    commonName: 'rose',
    scientificName: 'Rubus',
    symbol: 'RUBUS',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Blackberries_on_bush.jpg'
  }
];

const MenuItem = ({ commonName, scientificName, imageURL, selected }) => {
  return(
    <div className={`menu-item ${selected ? "active" : ""}`}>
      <style jsx>{`
          img {
            width: 200px;
            height: 100px;
            border: 1px solid blue;
          }

          div {
            display: inline-block;
            border: 1px solid black;
            margin-left: 10px;
          }
          p {
            margin: 2px;
          }
      `}</style>
        <img src={imageURL} alt="familyImageURL"/>
        <p>{commonName}</p>
    </div>
  );
};

export const Menu=() =>
  masterFamilyList.map(el => {
    const { commonName } = el;
    const { scientificName } = el;
    const { imageURL } = el;

    return <MenuItem
              commonName={commonName}
              scientificName={scientificName}
              imageURL={imageURL}
            />;
  });


export default class HorizontalScrollMenu extends React.Component {
  state = {
    dragging: true,
    selected: "item1"
  }

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(masterFamilyList.slice(0, masterFamilyList.length), this.state.selected);
  }

  render() {

    const menu = this.menuItems;

    return (
      <ScrollMenu
        data={menu}
      />
    );
  }
}
