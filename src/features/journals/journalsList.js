import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import StyledList from '../../styles/listStyle';
import Modal from '../common/modal';
import TimeStamp from '../common/timeStamp';
import { SelectedMood } from '../common/moodIcons';
import {
  deleteJournal,
  fetchJournals,
  selectById,
  selectIds,
} from './journalsSlice';
import { selectUserId } from '../users/userSlice';
import { open, close } from '../common/modalSlice';

let ListItem = ({ postId }) => {
  const post = useSelector((state) => selectById(state, postId));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalRef = useRef();
  const userId = useSelector(selectUserId);

  const showModal = (e) => {
    dispatch(open({ id: e.currentTarget.id }));
  };

  const onEdit = (id) => {
    dispatch(close());
    navigate(`/editJournal/${id}`);
  };

  const onDelete = (id) => {
    dispatch(deleteJournal({ userId, journalId: id }));
  };

  return (
    <StyledList key={post.id}>
      <SelectedMood mood={post.mood} />
      <div>
        <h3>{post.title}</h3>
        <TimeStamp timestamp={post.date} />
        <p>{post.content.substring(0, 60)}</p>

        <Link to={`/journals/${post.id}`}>→ VIEW</Link>
      </div>
      <div>
        <button id={post.id} onClick={showModal}>
          <FontAwesomeIcon icon={faEllipsisV} size='2x' />
        </button>
        <div ref={modalRef}>
          <Modal journalId={post.id}>
            <span
              onClick={() => {
                onEdit(post.id);
              }}
            >
              edit
            </span>
            <span
              onClick={() => {
                onDelete(post.id);
              }}
            >
              delete
            </span>
          </Modal>
        </div>
      </div>
    </StyledList>
  );
};

const JournalsList = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const allJournals = useSelector(selectIds);
  const modalShow = useSelector((state) => state.modal.show);
  const journalsStatus = useSelector((state) => state.journals.status);

  const closeModal = useCallback(
    (e) => {
      if (modalShow) {
        dispatch(close());
      }
    },
    [dispatch, modalShow]
  );

  useEffect(() => {
    window.addEventListener('click', closeModal);
    return () => {
      window.removeEventListener('click', closeModal);
    };
  }, [closeModal]);

  useEffect(() => {
    if (journalsStatus === 'idle') {
      dispatch(fetchJournals(userId));
    }
  }, [journalsStatus, dispatch, userId]);

  let contents;

  if (allJournals.length > 0) {
    contents = allJournals.map((postId) => (
      <ListItem key={postId} postId={postId} />
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
