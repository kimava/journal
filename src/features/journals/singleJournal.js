import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styled, { css } from 'styled-components';
import Button from '../common/button';
import { selectUserId } from '../users/userSlice';
import { deleteJournal, selectAllJournals } from './journalsSlice';

import TimeStamp from './timeStamp';

const SingleJournal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { journalId } = useParams();
  const userId = useSelector(selectUserId);
  const allJournals = useSelector(selectAllJournals);
  const key = Object.keys(allJournals).find(
    (journal) => allJournals[journal].id === journalId
  );
  const journal = allJournals[key];

  const onDeleteJournal = () => {
    dispatch(deleteJournal({ userId, journalId }));
    navigate(`/`);
  };

  if (!journal) {
    return <h1>page not found</h1>;
  }
  return (
    <StyledSection>
      <h1>{journal.title}</h1>
      <TimeStamp timestamp={journal.date} />
      <p>{journal.content}</p>

      <ButtonGroup>
        <Link to={`/editJournal/${journal.id}`}>
          <Button>Edit</Button>
        </Link>

        <Button onClick={onDeleteJournal}>Delete</Button>
      </ButtonGroup>
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
        white-space: pre-wrap;
      }

      a:hover {
        color: black;
      }
    `;
  }}
`;

const ButtonGroup = styled.div`
  margin: auto;
  max-width: 50%;
  display: flex;
  justify-content: flex-end;

  button {
    width: 8rem;
  }
`;

export default SingleJournal;
