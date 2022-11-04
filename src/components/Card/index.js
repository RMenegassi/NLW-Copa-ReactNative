import React from 'react';
import {CardContainer} from './styles';

import HeaderDate from './HeaderDate';
import MatchesList from './MatchesList';

const Card = () => {
  return (
    <CardContainer style={{borderBottomColor: '#047c3f', borderBottomWidth: 2}}>
      <HeaderDate />
      <MatchesList />
    </CardContainer>
  );
};

export default Card;
