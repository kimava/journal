import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Modal = ({ journalId, children }) => {
  const show = useSelector((state) => state.modal.show);
  const id = useSelector((state) => state.modal.id);

  if (!show || journalId !== id) {
    return null;
  }

  return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 3rem;
  width: 15rem;
  height: 6rem;
  background-color: #fffef9;
  text-align: center;
  z-index: 1;

  span {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
  }

  span:hover {
    background-color: #ffccbc;
  }
`;

export default Modal;
