import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { journalUpdated, saveJournal, selectById } from './journalsSlice';
import { JournalForm, StyledSection } from '../common/journalForm';

const EditJournalForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { journalId } = useParams();
  const journal = useSelector((state) => selectById(state, journalId));

  const [title, setTitle] = useState(journal.title);
  const [content, setContent] = useState(journal.content);
  const [selectedMood, setSelectedMood] = useState(journal.mood);

  const handleSave = () => {
    if (title && content && selectedMood) {
      dispatch(
        journalUpdated({ id: journalId, title, content, mood: selectedMood })
      );
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
