import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleJournal = () => {
  const { journalId } = useParams();
  const journal = useSelector((state) =>
    state.journals.find((journal) => journal.id === journalId)
  );

  if (!journal) {
    return <h1>page not found</h1>;
  }
  return <h1>{journal.title}</h1>;
};

export default SingleJournal;
