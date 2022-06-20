import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { saveJournal, selectAllJournals } from './journalsSlice';
import { JournalForm, StyledSection } from '../common/journalForm';

const EditJournalForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { journalId } = useParams();
  const allJournals = useSelector(selectAllJournals);
  const key = Object.keys(allJournals).find(
    (journal) => allJournals[journal].id === journalId
  );
  const journal = allJournals[key];

  const [title, setTitle] = useState(journal.title);
  const [selectedMood, setSelectedMood] = useState(journal.mood);
  const [content, setContent] = useState(journal.content);

  const handleSave = () => {
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
    <StyledDiv>
      <JournalForm
        title={title}
        content={content}
        selectedMood={selectedMood}
        setTitle={setTitle}
        setContent={setContent}
        setSelectedMood={setSelectedMood}
        handleSave={handleSave}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.section`
  margin: auto;
  max-width: 50rem;

  ${StyledSection} {
    height: 90vh;
    border: none;
  }
`;

export default EditJournalForm;
