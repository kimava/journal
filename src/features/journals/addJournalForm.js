import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { journalAdded } from './journalsSlice';

import styled, { css } from 'styled-components';
import StyledForm from '../../styles/formStyle';
import Button from '../common/button';

const AddJournalForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const onSaveJournal = () => {
    if (title && content) {
      dispatch(
        journalAdded({
          id: nanoid(),
          date: new Date().toISOString(),
          title,
          content,
        })
      );

      setTitle('');
      setContent('');
    }
  };

  const able = Boolean(title) && Boolean(content);

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
      height: 100vh;
      flex: 1 1 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: ${border.default};
      border-right: none;

      h2 {
        margin-bottom: ${margins.large};
        font-size: ${fonts.size.medium};
      }
    `;
  }}
`;

export default AddJournalForm;
