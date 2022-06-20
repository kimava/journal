import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';
import StyledList from '../../styles/listStyle';
import TimeStamp from './timeStamp';
import { SelectedMood } from './moodIcons';
import {
  deleteJournal,
  fetchJournals,
  selectAllJournals,
} from './journalsSlice';
import { selectUserId } from '../users/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { open, close } from '../common/modalSlice';
import Modal from '../common/modal';

const JournalsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef();
  const userId = useSelector(selectUserId);
  const allJournals = useSelector(selectAllJournals);
  const modalShow = useSelector((state) => state.modal.show);
  const journalsStatus = useSelector((state) => state.journals.status);

  const showModal = (e) => {
    dispatch(open({ id: e.currentTarget.id }));
  };

  const closeModal = (e) => {
    if (modalShow) {
      dispatch(close());
    }
  };

  const onEdit = (id) => {
    dispatch(close());
    navigate(`/editJournal/${id}`);
  };

  const onDelete = (id) => {
    dispatch(deleteJournal({ userId, journalId: id }));
  };

  useEffect(() => {
    window.addEventListener('click', closeModal);
    return () => {
      window.removeEventListener('click', closeModal);
    };
  }, [modalShow]);

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
        <SelectedMood mood={orderedJournals[journal].mood} />
        <div>
          <h3>{orderedJournals[journal].title}</h3>
          <TimeStamp timestamp={orderedJournals[journal].date} />
          <p>{orderedJournals[journal].content.substring(0, 60)}</p>

          <Link to={`/journals/${orderedJournals[journal].id}`}>→ VIEW</Link>
        </div>
        <div>
          <button id={orderedJournals[journal].id} onClick={showModal}>
            <FontAwesomeIcon icon={faEllipsisV} size='2x' />
          </button>
          <div ref={modalRef}>
            <Modal journalId={orderedJournals[journal].id}>
              <span
                onClick={() => {
                  onEdit(orderedJournals[journal].id);
                }}
              >
                edit
              </span>
              <span
                onClick={() => {
                  onDelete(orderedJournals[journal].id);
                }}
              >
                delete
              </span>
            </Modal>
          </div>
        </div>
      </StyledList>
    ));
  } else {
    contents = <p>no posts yet</p>;
  }

  return <StyledSection>{contents}</StyledSection>;
};

const StyledSection = styled.section`
  ${({ theme }) => {
    const { paddings, border } = theme;
    return css`
      padding: ${paddings.large};
      flex: 1 1 40%;
      border: ${border.default};
      border-top: none;
      overflow-y: scroll;

      button {
        padding: 0.5rem;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: inherit;
        border: none;
        cursor: pointer;
      }
    `;
  }}
`;

export default JournalsList;
