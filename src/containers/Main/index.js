import Main from './Main';
import { connect } from 'react-redux';
import { fetchUsers, fetchUser, cleanFetchedUser } from '../../store/actions/user';
import { userSelector, usersSelector, loadingSelector } from '../../store/selectors';

const mapStateToProps = state => {
  return {
    users: usersSelector(state),
    user: userSelector(state),
    loading: loadingSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUsers: () => dispatch(fetchUsers()),
    onGetUser: (username) => dispatch(fetchUser(username)),
    cleanUser: () => dispatch(cleanFetchedUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)