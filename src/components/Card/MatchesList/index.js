import React from 'react';

import {View, Text, Image, ListMatches, PartidaView} from './styles';

import {images} from '../../../images';
import {matches} from '../../../assets/matches';

const MatchesList = ({day}) => {
  const dataFiltrada = matches.filter(item => {
    return item.dia === day;
  });

  return (
    <View>
      <ListMatches
        data={dataFiltrada[0].jogos}
        renderItem={({item, index}) => (
          <PartidaView
            style={
              index != 0
                ? {borderTopColor: '#323238', borderTopWidth: 1, paddingTop: 24}
                : ''
            }>
            <Image source={images[item.mandante]} />
            <Text>{item.horario}</Text>
            <Image source={images[item.visitante]} />
          </PartidaView>
        )}
      />
    </View>
  );
};

export default MatchesList;
