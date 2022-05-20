import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  userSet,
  emailLogin,
  providerLogin,
  selectUserId,
  onAuthChange,
} from './userSlice';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Button from '../common/button';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(selectUserId);

  const [form, setForm] = useState({ email: '', password: '' });

  const onFormChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onEmailSignIn = () => {
    dispatch(emailLogin(form));
    setForm({ email: '', password: '' });
  };

  const onSNSSignIn = ({ target: { className } }) => {
    dispatch(providerLogin(className));
  };

  const onSignup = () => {
    navigate('/signup');
  };

  const onResetFW = () => {
    navigate('/newpassword');
  };

  useEffect(() => {
    onAuthChange((user) => {
      user ? dispatch(userSet(user)) : dispatch(userSet(null));
    });
  }, [dispatch]);

  useEffect(() => {
    userId && navigate('/');
  }, [navigate, userId]);

  return (
    <Container>
      <h1>Sign in to Journal</h1>
      <SignInForm>
        <input
          onChange={onFormChange}
          name='email'
          type='text'
          placeholder='Email'
          value={form.email}
        />
        <input
          onChange={onFormChange}
          name='password'
          type='password'
          placeholder='Password'
          value={form.password}
        />
        <span onClick={onResetFW}>Forgot password?</span>
        <Button onClick={onEmailSignIn} className='email'>
          Sign in
        </Button>
      </SignInForm>
      <SignUpLink>
        <span onClick={onSignup}>Wanna sign up?</span>
      </SignUpLink>

      <h2>⎯ &nbsp;&nbsp; or sign in with &nbsp;&nbsp;⎯</h2>
      <SignInBtns>
        <Div onClick={onSNSSignIn} className='google'>
          <FcGoogle size='40' />
        </Div>
        <Div onClick={onSNSSignIn} className='twitter'>
          <AiFillTwitterCircle size='40' color='#1da1f2' />
        </Div>
      </SignInBtns>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 70vh;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);

  h1 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
`;

const SignInForm = styled.div`
  margin-bottom: 1rem;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fffef9;
  border: 1px solid black;

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 90%;
    background-color: inherit;
    border: 1px solid black;
    outline: none;
  }

  input:hover {
    border: 1px solid #e82f17;
    transition: 0.3s ease-in-out;
  }

  span {
    margin: auto;
    margin-bottom: 3rem;
    width: 90%;
    text-align: right;
    cursor: pointer;
  }
`;

const SignUpLink = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 1rem;
  background-color: #fffef9;
  border: 1px solid black;

  span {
    cursor: pointer;
  }
`;
const SignInBtns = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  display: inline-block;
  margin-right: 1rem;
  cursor: pointer;

  svg {
    pointer-events: none;
  }

  &:last-child {
    margin-right: 0;
  }
`;
export default Login;
