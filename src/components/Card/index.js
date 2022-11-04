import React, {useState} from 'react';
import {CardContainer} from './styles';
import moment from 'moment';

import HeaderDate from './HeaderDate';
import MatchesList from './MatchesList';

const Card = () => {
  const [day, setDay] = useState(
    moment('20112022', 'DDMMYYYY') - moment() > 0
      ? '20/11'
      : moment('03122022', 'DDMMYYYY') - moment() < 0
      ? '02/12'
      : moment().format('DD/MM'),
  );

  const addDay = () => {
    const forwardDay = moment(`${day}`, 'DD/MM').add(1, 'days').format('DD/MM');
    setDay(forwardDay);
  };

  const subDay = () => {
    const backDay = moment(`${day}`, 'DD/MM')
      .subtract(1, 'days')
      .format('DD/MM');
    setDay(backDay);
  };

  return (
    <CardContainer style={{borderBottomColor: '#047c3f', borderBottomWidth: 2}}>
      <HeaderDate day={day} addDay={addDay} subDay={subDay} />
      <MatchesList day={day} />
    </CardContainer>
  );
};

export default Card;
