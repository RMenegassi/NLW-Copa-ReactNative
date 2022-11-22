import React, {useEffect, useState} from 'react';

import {View, Text, Image, ListMatches, PartidaView, Gols} from './styles';

import {getMatches} from '../../../services/Matches';
import {images} from '../../../images';

const MatchesList = ({day}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const loadMatches = async () => {
      const matchesDay = await getMatches(day);
      setData(matchesDay);
    };
    loadMatches();
  }, [day]);

  return (
    <View>
      {data !== undefined && (
        <ListMatches
          data={data[0].jogos}
          renderItem={({item, index}) => (
            <PartidaView
              style={
                index != 0
                  ? {
                      borderTopColor: '#323238',
                      borderTopWidth: 1,
                      paddingTop: 24,
                    }
                  : ''
              }>
              <Image source={images[item.mandante]} />
              <Gols
                keyboardType="number-pad"
                maxLength={2}
                placeholder={item.golsMandante}
              />
              <Text>{item.horario}</Text>
              <Gols
                keyboardType="number-pad"
                maxLength={2}
                defaultValue={item.golsVisitante}
              />
              <Image source={images[item.visitante]} />
            </PartidaView>
          )}
        />
      )}
    </View>
  );
};

export default MatchesList;
