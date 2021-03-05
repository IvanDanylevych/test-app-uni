import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
  user: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.START_FETCHING_USERS:
      return {...state, loading: true};
    case actionTypes.SUCCESSFUL_FETCHING_USERS:
      return {...state, users: action.payload, loading: false};
    case actionTypes.FAIL_FETCHING_USERS:
      return {...state, error: action.payload, loading: false};
    case actionTypes.START_FETCHING_USER:
      return {...state, loading: true};
    case actionTypes.SUCCESSFUL_FETCHING_USER:
      return {...state, user: action.payload, loading: false}
    case actionTypes.FAIL_FETCHING_USER:
      return {...state, error: action.payload, loading: false}
    case actionTypes.CLEANUP_FETCHED_USER:
      return {...state, user: action.payload}
    default:
      return state;
  }
};

export default reducer;