import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createUser, selectUserId } from './userSlice';
import styled from 'styled-components';
import Button from '../common/button';

const SignUp = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const [form, setForm] = useState({ email: '', password: '' });

  if (userId) {
    return <Navigate to='/journals' />;
  }

  const onChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSignUp = () => {
    dispatch(createUser(form));
    setForm({ email: '', password: '' });
  };

  return (
    <Container>
      <h1>Create a new account</h1>
      <input
        onChange={onChange}
        name='email'
        type='text'
        placeholder='Email'
        value={form.email}
      />
      <input
        onChange={onChange}
        name='password'
        type='password'
        placeholder='Password'
        value={form.password}
      />
      <Button onClick={onSignUp}>Sign Up</Button>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  margin: auto;
  padding: 2rem 0;
  width: 80%;
  text-align: center;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 70%;
    background-color: inherit;
    border: 1px solid black;
    outline: none;

    &:last-child {
      margin-bottom: 3rem;
    }
  }

  input:hover {
    border: 1px solid #e82f17;
    transition: 0.3s ease-in-out;
  }

  button {
    margin-top: 3rem;
  }
`;
