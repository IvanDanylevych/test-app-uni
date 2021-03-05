import * as actionTypes from './actionTypes';

import { getUsersRequest, getUserRequest } from '../../api/index';

export const fetchUsersStart = () => {
  return {
    type: actionTypes.START_FETCHING_USERS
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: actionTypes.SUCCESSFUL_FETCHING_USERS,
    payload: users
  };
};

export const fetchUsersFail = (error) => {
  return {
    type: actionTypes.FAIL_FETCHING_USERS,
    payload: error
  }
}

export const fetchUserStart = () => {
  return {
    type: actionTypes.START_FETCHING_USER
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: actionTypes.SUCCESSFUL_FETCHING_USER,
    payload: user
  };
};

export const fetchUserFail = (error) => {
  return {
    type: actionTypes.FAIL_FETCHING_USER,
    payload: error
  }
}

export const fetchUser = (username) => {
  return dispatch => {
    dispatch(fetchUserStart())
    getUserRequest(username)
    .then(res => {
      dispatch(fetchUserSuccess(res.data))
    })
    .catch(err => {
      dispatch(fetchUserFail(err))
    })
  }
}

export const cleanFetchedUser = () => {
  return {
    type: actionTypes.CLEANUP_FETCHED_USER,
    payload: {}
  }
}

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart())
    getUsersRequest()
    .then(res => {
      dispatch(fetchUsersSuccess(res.data))
    })
    .catch(err => {
      dispatch(fetchUsersFail(err))
    })
  }
}