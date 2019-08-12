import { FETCH_USERS } from './Types';

const _users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Tid'}
];

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersPending());
    setTimeout(() => {
      dispatch(fetchUsersSuccess(_users));
    }, 1500);
  }
};

export const fetchUsersPending = () => {
  return {
    type: FETCH_USERS,
    pending: true
  }
};

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS,
    pending: false,
    users
  }
};