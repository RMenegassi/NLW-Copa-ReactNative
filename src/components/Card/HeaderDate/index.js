import React from 'react';

import moment from 'moment';
import '../../../../node_modules/moment/locale/pt-br.js';

import {
  BlockView,
  DateView,
  ButtonLeft,
  ButtonRight,
  Date,
  Day,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

const HeaderDate = ({day, addDay, subDay}) => {
  const dayWeek = moment(`${day}`, 'DD/MM')
    .locale('pt-br')
    .format('dddd')
    .replace('-feira', '');

  return (
    <BlockView>
      {day !== '20/11' && (
        <ButtonLeft onPress={subDay}>
          <Icon name="caret-back" size={30} color={'#e1e1e6'} />
        </ButtonLeft>
      )}

      <DateView>
        <Date>{day}</Date>
        <Day>{dayWeek}</Day>
      </DateView>

      {day !== '02/12' && (
        <ButtonRight onPress={addDay}>
          <Icon name="caret-forward" size={30} color={'#e1e1e6'} />
        </ButtonRight>
      )}
    </BlockView>
  );
};

export default HeaderDate;
