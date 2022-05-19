import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  journalUpdated,
  saveJournal,
  selectAllJournals,
} from './journalsSlice';

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

const EditJournalForm = () => {
  const { journalId } = useParams();
  const userId = useSelector(selectUserId);
  const allJournals = useSelector(selectAllJournals);
  const key = Object.keys(allJournals).find(
    (journal) => allJournals[journal].id === journalId
  );
  const journal = allJournals[key];

  const [title, setTitle] = useState(journal.title);
  const [content, setContent] = useState(journal.content);
  const [moodSelected, setMoodSelected] = useState(journal.mood);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const isSelected = (value) => moodSelected === value;
  const handleClick = (e) => {
    setMoodSelected(e.currentTarget.value);
  };

  const onSaveJournal = () => {
    if (title && content && moodSelected) {
      dispatch(
        saveJournal({
          ...journal,
          id: journalId,
          title,
          content,
          mood: moodSelected,
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
      <Button type='button' onClick={onSaveJournal}>
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
