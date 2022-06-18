import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  journalUpdated,
  saveJournal,
  selectAllJournals,
} from './journalsSlice';
import styled, { css } from 'styled-components';
import StyledForm from '../../styles/formStyle';
import Button from '../common/button';
import { selectUserId } from '../users/userSlice';
import { Moods } from './moodIcons';

const EditJournalForm = () => {
  const { journalId } = useParams();
  const userId = useSelector(selectUserId);
  const allJournals = useSelector(selectAllJournals);
  const key = Object.keys(allJournals).find(
    (journal) => allJournals[journal].id === journalId
  );
  const journal = allJournals[key];

  const [title, setTitle] = useState(journal.title);
  const [selectedMood, setSelectedMood] = useState(journal.mood);
  const [content, setContent] = useState(journal.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const isSelected = (value) => selectedMood === value;
  const handleMoodChange = (e) => {
    setSelectedMood(e.currentTarget.value);
  };

  const onSaveJournal = () => {
    if (title && content && selectedMood) {
      dispatch(
        saveJournal({
          ...journal,
          id: journalId,
          title,
          content,
          mood: selectedMood,
        })
      );
      navigate(`/journals/${journalId}`);
    }
  };

  return (
    <StyledSection>
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
      <Button type='button' onClick={onSaveJournal}>
        Save
      </Button>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  ${({ theme }) => {
    const { margins, paddings, fonts } = theme;
    return css`
      margin: auto;
      padding: ${paddings.large};
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 50rem;
      height: 90vh;

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
    margin-bottom: ${margins.small}
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

export default EditJournalForm;
