import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/button';

const StyledSection = styled.section`
  height: 100vh;
  flex: 1 1 70%;
  border: 1px solid black;
`;

const AddJournalForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  return (
    <StyledSection>
      <h2>Add a New Journal</h2>
      <form>
        <label htmlFor='journalTitle'>Title: </label>
        <input
          type='text'
          id='journalTitle'
          name='journalTitle'
          value={title}
          onChange={onTitleChange}
        />
      </form>
      <label htmlFor='journalContent'>Content: </label>
      <textarea
        id='journalContent'
        name='journalContent'
        value={content}
        onChange={onContentChange}
      />
      <Button>Save</Button>
    </StyledSection>
  );
};

export default AddJournalForm;
