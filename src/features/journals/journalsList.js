import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100vh;
  flex: 1 1 30%;
  border: 1px solid black;
`;

const JournalsList = () => {
  const journals = useSelector((state) => state.journals);

  const renderedJournals = journals.map((journal) => (
    <article>
      <h3>{journal.title}</h3>
      <p>{journal.content}</p>
    </article>
  ));

  return (
    <StyledSection>
      <h2>My Journal</h2>
      {renderedJournals}
    </StyledSection>
  );
};

export default JournalsList;
