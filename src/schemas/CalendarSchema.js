const CalendarSchema = {
  name: 'Calendar',
  primaryKey: 'id',
  properties: {
    id: 'string',
    jogos: 'Matches[]',
  },
};

export default CalendarSchema;
