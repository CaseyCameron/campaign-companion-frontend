import { client, checkError } from './client.js';

const getUser = () => {
  return client.auth.session();
}

const signupUser = async (email, password) => {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

const signInUser = async (email, password) => {
  const { user, error } = await client.auth.signIn({email, password });
  if (error) throw error;
  return user;
}

const logout = async () => {
  const res = await client.auth.signOut();
  return checkError(res);
}

export { getUser, signupUser, signInUser, logout };
