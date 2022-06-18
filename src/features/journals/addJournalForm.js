import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { saveJournal } from './journalsSlice';
import styled, { css } from 'styled-components';
import StyledForm from '../../styles/formStyle';
import Button from '../common/button';
import { selectUserId } from '../users/userSlice';
import { Moods } from './moodIcons';

const AddJournalForm = () => {
  const userId = useSelector(selectUserId);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedMood, setSelectedMood] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const isSelected = (value) => selectedMood === value;
  const handleMoodChange = (e) => {
    setSelectedMood(e.currentTarget.value);
  };

  const onSaveJournal = () => {
    if (title && content && selectedMood) {
      dispatch(
        saveJournal({
          userId,
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
          mood: selectedMood,
        })
      );

      setTitle('');
      setContent('');
      setSelectedMood('');
    }
  };

  const able = Boolean(title) && Boolean(content) && Boolean(selectedMood);

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
          <Moods
            handleMoodChange={handleMoodChange}
            isSelected={isSelected}
            selected={selectedMood}
          />
        </StyledDiv>
      </StyledForm>

      <Button onClick={onSaveJournal} disabled={!able}>
        Save
      </Button>
    </StyledSection>
  );
};

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
