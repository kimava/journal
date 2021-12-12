import React from 'react';
import {
  faGrinStars,
  faSmile,
  faMeh,
  faFrown,
  faAngry,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MoodIcons = (select) => {
  const moods = [
    { icon: faGrinStars, mood: 'super' },
    { icon: faSmile, mood: 'good' },
    { icon: faMeh, mood: 'soso' },
    { icon: faFrown, mood: 'bad' },
    { icon: faAngry, mood: 'angry' },
  ];

  const rendered = moods.filter((mood) => mood.mood === select.mood);
  const icon = rendered[0].icon;

  return <FontAwesomeIcon icon={icon} size='2x' color='#e82f17' />;
};

export default MoodIcons;
