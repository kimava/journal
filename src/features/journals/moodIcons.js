import React from 'react';
import {
  faGrinStars,
  faSmile,
  faMeh,
  faFrown,
  faAngry,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const moods = [
  { icon: faGrinStars, mood: 'super' },
  { icon: faSmile, mood: 'good' },
  { icon: faMeh, mood: 'soso' },
  { icon: faFrown, mood: 'bad' },
  { icon: faAngry, mood: 'angry' },
];

export const Moods = ({ handleMoodChange, isSelected, selected }) => {
  return moods.map((mood) => (
    <div key={mood.mood}>
      <input
        type='radio'
        name='mood'
        value={mood.mood}
        id={mood.mood}
        checked={isSelected(mood.mood)}
        onChange={handleMoodChange}
      />
      <label htmlFor={mood.mood}>
        <FontAwesomeIcon
          icon={mood.icon}
          size='2x'
          style={
            selected === mood.mood ? { color: 'e82f17' } : { color: '#5e5c5a' }
          }
        />
      </label>
    </div>
  ));
};

export const SelectedMood = (selected) => {
  const rendered = moods.filter((mood) => mood.mood === selected.mood);
  const icon = rendered[0].icon;

  return <FontAwesomeIcon icon={icon} size='2x' color='#e82f17' />;
};
