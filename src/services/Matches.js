import Realm from 'realm';

import {getRealm} from './Realm';

export const getMatches = async day => {
  let realm = await getRealm();

  realm = realm.objects('Calendar');

  realm = realm.filtered('id == $0', day);

  return realm;
};
