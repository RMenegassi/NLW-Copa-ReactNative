import {Header} from './styles';

import HeaderSVG from '../../components/Header';
import Card from '../../components/Card';

import LinearGradient from 'react-native-linear-gradient';

import {getMatches} from '../../services/Matches';

const MatchesPage = () => {
  return (
    <LinearGradient colors={['#073702', '#062802', '#000']} style={{flex: 1}}>
      <Header>
        <HeaderSVG />
      </Header>
      <Card />
    </LinearGradient>
  );
};

export default MatchesPage;
