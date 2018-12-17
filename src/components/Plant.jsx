import React from "react";
import PropTypes from 'prop-types';
import '../styles/Plant.css';
import { Card, CardImg, CardTitle } from 'reactstrap';

function Plant(props){
  return (
    <Card className="grid-item">
        <CardImg top width="100%" src={props.imageURL} alt="plantImageURL" />
        <CardTitle>{props.commonName}</CardTitle>
      </Card>
  );
}

Plant.propTypes = {
  commonName: PropTypes.string,
  scientificName: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Plant;
