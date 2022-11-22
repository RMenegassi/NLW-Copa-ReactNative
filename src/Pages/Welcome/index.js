import {LoadingCircle, Header} from './styles';
import React, {useEffect} from 'react';

import HeaderSVG from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';

import {images} from '../../images';

const Welcome = ({navigation}) => {
  useEffect(() => {
    async function makeRedirect() {
      images ? navigation.navigate('Matches') : '';
    }
    makeRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinearGradient colors={['#073702', '#062802', '#000']} style={{flex: 1}}>
      <Header>
        <HeaderSVG />
      </Header>
      <LoadingCircle color={'#e1e1e6'} size={60} />
    </LinearGradient>
  );
};

export default Welcome;
