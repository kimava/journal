import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from './userSlice';
import Button from '../common/button';
import styled from 'styled-components';

const ResetPW = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const onSend = () => {
    dispatch(resetPassword(email));
    setEmail('');
  };

  const onChange = ({ target: { value } }) => {
    setEmail(value);
  };

  return (
    <Container>
      <h1>Forgot your Password?</h1>
      <p>
        Enter the email you signed up with and we will send you reset
        instructions.
      </p>
      <input
        onChange={onChange}
        name='email'
        type='text'
        placeholder='Email'
        value={email}
      />
      <Button onClick={onSend}>Send</Button>
    </Container>
  );
};

export default ResetPW;

const Container = styled.div`
  margin: auto;
  padding: 2rem 0;
  width: 80%;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  p {
    margin-bottom: 3rem;
  }

  input {
    margin-bottom: 3rem;
    padding: 0.5rem;
    width: 70%;
    background-color: inherit;
    border: 1px solid black;
    outline: none;
  }

  input:hover {
    border: 1px solid #e82f17;
    transition: 0.3s ease-in-out;
  }
`;
