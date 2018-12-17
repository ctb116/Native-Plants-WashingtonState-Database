import { Button } from 'reactstrap';
import React from 'react';
import FamilyList from './FamilyList';

function FamilyPresentation(){
  return (
    <div>
      <style jsx>{`
          div {
            margin-bottom: 20px;
          }
      `}</style>
      <Button outline color="success" size="lg">+ More Families</Button>{' '}
      <FamilyList/>
    </div>
  );
}

export default FamilyPresentation;
