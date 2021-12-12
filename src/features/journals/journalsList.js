import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';
import StyledList from '../../styles/listStyle';
import TimeStamp from './timeStamp';
import MoodIcons from './moodIcons';

const StyledSection = styled.section`
  ${({ theme }) => {
    const { paddings, border } = theme;
    return css`
      padding: ${paddings.large};
      flex: 1 1 40%;
      border: ${border.default};
      overflow-y: scroll;
    `;
  }}
`;

const JournalsList = () => {
  const journals = useSelector((state) => state.journals);

  const orderJournals = journals
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedJournals = orderJournals.map((journal) => (
    <StyledList key={journal.id}>
      <MoodIcons mood={journal.mood} />
      <div>
        <h3>{journal.title}</h3>
        <TimeStamp timestamp={journal.date} />
        <p>{journal.content.substring(0, 100)}</p>

        <Link to={`/journals/${journal.id}`}>→ VIEW</Link>
      </div>
    </StyledList>
  ));

  return <StyledSection>{renderedJournals}</StyledSection>;
};

export default JournalsList;
