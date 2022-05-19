import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import StyledList from '../../styles/listStyle';
import TimeStamp from './timeStamp';
import MoodIcons from './moodIcons';
import { fetchJournals, selectAllJournals } from './journalsSlice';
import { selectUserId } from '../users/userSlice';

const StyledSection = styled.section`
  ${({ theme }) => {
    const { paddings, border } = theme;
    return css`
      padding: ${paddings.large};
      flex: 1 1 40%;
      border: ${border.default};
      border-top: none;
      overflow-y: scroll;
    `;
  }}
`;

const JournalsList = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const allJournals = useSelector(selectAllJournals);

  const journalsStatus = useSelector((state) => state.journals.status);

  useEffect(() => {
    if (journalsStatus === 'idle') {
      dispatch(fetchJournals(userId));
    }
  }, [journalsStatus, dispatch, userId]);

  let contents;

  if (allJournals) {
    const orderedJournals = Object.values(allJournals).sort((a, b) =>
      b.date.localeCompare(a.date)
    );
    contents = Object.keys(orderedJournals).map((journal) => (
      <StyledList key={orderedJournals[journal].id}>
        <MoodIcons mood={orderedJournals[journal].mood} />
        <div>
          <h3>{orderedJournals[journal].title}</h3>
          <TimeStamp timestamp={orderedJournals[journal].date} />
          <p>{orderedJournals[journal].content.substring(0, 60)}</p>

          <Link to={`/journals/${orderedJournals[journal].id}`}>→ VIEW</Link>
        </div>
      </StyledList>
    ));
  } else {
    contents = <p>no posts yet</p>;
  }

  return <StyledSection>{contents}</StyledSection>;
};

export default JournalsList;
