import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { saveJournal } from './journalsSlice';

import {
  faGrinStars,
  faSmile,
  faMeh,
  faFrown,
  faAngry,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled, { css } from 'styled-components';
import StyledForm from '../../styles/formStyle';
import Button from '../common/button';
import { selectUserId } from '../users/userSlice';

const AddJournalForm = () => {
  const userId = useSelector(selectUserId);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [moodSelected, setMoodSelected] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const isSelected = (value) => moodSelected === value;
  const handleClick = (e) => {
    setMoodSelected(e.currentTarget.value);
  };

  const onSaveJournal = () => {
    if (title && content && moodSelected) {
      dispatch(
        saveJournal({
          userId,
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          mood: moodSelected,
        })
      );

      setTitle('');
      setContent('');
      setMoodSelected('');
    }
  };

  const able = Boolean(title) && Boolean(content) && Boolean(moodSelected);

  return (
    <StyledSection>
      <h2>How was your day?</h2>
      <StyledForm>
        <label htmlFor='journalTitle'></label>
        <input
          type='text'
          id='journalTitle'
          name='journalTitle'
          placeholder='Title goes here'
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor='journalContent'></label>
        <textarea
          id='journalContent'
          name='journalContent'
          value={content}
          onChange={onContentChange}
        />
        <StyledDiv>
          {moods.map((mood) => (
            <div key={mood.mood}>
              <input
                type='radio'
                name='mood'
                value={mood.mood}
                id={mood.mood}
                checked={isSelected(mood.mood)}
                onChange={handleClick}
              />
              <label htmlFor={mood.mood}>
                <FontAwesomeIcon
                  icon={mood.icon}
                  size='2x'
                  style={
                    moodSelected === mood.mood
                      ? { color: 'e82f17' }
                      : { color: '#5e5c5a' }
                  }
                />
              </label>
            </div>
          ))}
        </StyledDiv>
      </StyledForm>

      <Button onClick={onSaveJournal} disabled={!able}>
        Save
      </Button>
    </StyledSection>
  );
};

const moods = [
  { icon: faGrinStars, mood: 'super' },
  { icon: faSmile, mood: 'good' },
  { icon: faMeh, mood: 'soso' },
  { icon: faFrown, mood: 'bad' },
  { icon: faAngry, mood: 'angry' },
];

const StyledSection = styled.section`
  ${({ theme }) => {
    const { margins, paddings, fonts, border } = theme;
    return css`
      padding: ${paddings.large};
      flex: 1 1 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: ${border.default};
      border-top: none;
      border-right: none;

      h2 {
        margin-bottom: ${margins.large};
        font-size: ${fonts.size.medium};
      }
    `;
  }}
`;

const StyledDiv = styled.div`
  ${({ theme }) => {
    const { margins, paddings } = theme;
    return css`
      padding: ${paddings.small};
      padding-left: 0;
      display: flex;
      input {
        display: none;
      }
      label {
        margin-right: ${margins.small};
      }
    `;
  }}
`;

export default AddJournalForm;
