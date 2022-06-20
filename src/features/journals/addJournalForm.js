import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { saveJournal } from './journalsSlice';
import { selectUserId } from '../users/userSlice';
import { JournalForm } from '../common/journalForm';

const AddJournalForm = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedMood, setSelectedMood] = useState('');

  const handleSave = () => {
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

  return (
    <>
      <JournalForm
        title={title}
        content={content}
        selectedMood={selectedMood}
        setTitle={setTitle}
        setContent={setContent}
        setSelectedMood={setSelectedMood}
        handleSave={handleSave}
      />
    </>
  );
};

export default AddJournalForm;
