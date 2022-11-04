import {View, Text} from 'react-native';
import React from 'react';

import {DateView, Date, Day} from './styles';

const HeaderDate = () => {
  return (
    <DateView>
      <Date>20/11</Date>
      <Day>Domingo</Day>
    </DateView>
  );
};

export default HeaderDate;
