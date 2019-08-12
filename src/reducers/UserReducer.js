import { FETCH_USERS } from '../actions/Types';

const defaultState = {
  data: null,
  loading: false
};

export default function UserReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        data: action.users,
        loading: action.pending
      };

    default:
      return state;
  }
}