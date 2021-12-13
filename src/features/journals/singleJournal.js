import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import styled, { css } from 'styled-components';
import Button from '../common/button';

import TimeStamp from './timeStamp';

const SingleJournal = () => {
  const { journalId } = useParams();
  const journal = useSelector((state) =>
    state.journals.find((journal) => journal.id === journalId)
  );

  if (!journal) {
    return <h1>page not found</h1>;
  }
  return (
    <StyledSection>
      <h1>{journal.title}</h1>
      <TimeStamp timestamp={journal.date} />
      <p>{journal.content}</p>
      <Button>
        <Link to={`/editJournal/${journal.id}`}>Edit</Link>
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
      max-width: 50rem;

      h1 {
        margin-bottom: ${margins.large};
        font-size: ${fonts.size.large};
      }

      span {
        margin-bottom: ${margins.large};
        display: block;
        font-style: italic;
      }

      p {
        margin-bottom: ${margins.large};
        font-size: ${fonts.size.medium};
      }

      a:hover {
        color: black;
      }
    `;
  }}
`;

export default SingleJournal;
