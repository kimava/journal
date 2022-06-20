import React from 'react';
import { parseISO, format } from 'date-fns';

const TimeStamp = ({ timestamp }) => {
  let timePeriod;
  if (timestamp) {
    const date = parseISO(timestamp);
    timePeriod = format(date, `yyyy-MM-dd`);
  }

  return <span title={timestamp}>{timePeriod}</span>;
};

export default TimeStamp;
