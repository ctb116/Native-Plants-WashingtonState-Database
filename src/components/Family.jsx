import React from "react";
import PropTypes from 'prop-types';

function Family(props){
  return (
    <div>
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
      <img src={props.imageURL} alt="familyImageURL"/>
      <p>{props.commonName}</p>
    </div>
  );
}

Family.propTypes = {
  commonName: PropTypes.string,
  scientificName: PropTypes.string,
  symbol: PropTypes.string,
  imageURL: PropTypes.string,
};

export default Family;
