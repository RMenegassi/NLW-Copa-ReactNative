import Realm from 'realm';

import CalendarSchema from '../schemas/CalendarSchema';
import MatchesSchema from '../schemas/MatchesSchema';
import {getDefaultCalendar} from './Calendar';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CalendarSchema, MatchesSchema],
    schemaVersion: 2,
  });

  //dropDB(realm);
  initDB(realm);
  return realm;
};

export const initDB = realm => {
  const matchesLength = realm.objects('Calendar').length;

  if (matchesLength === 0) {
    const calendar = getDefaultCalendar();
    try {
      realm.write(() => {
        calendar.forEach(day => {
          console.log('day :: ', day);
          realm.create('Calendar', day, true);
        });
      });
    } catch (error) {
      console.error(`Error existente :: ${error}`);
    }
  } else {
    console.log('initDB :: Calendar already exist');
  }
};

export const dropDB = realm => {
  realm.write(() => {
    realm.deleteAll();
  });
};
