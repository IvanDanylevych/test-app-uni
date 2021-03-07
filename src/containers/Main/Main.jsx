import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';

import Button from '../../components/button/button'
import UserCard from '../../components/userCard/userCard';
import Spinner from '../../components/spinner/spinner';
import Pagination from '../../components/pagination/pagination';

import styles from './Main.module.scss';

const Main = ({onGetUsers, onGetUser, users, user, cleanUser, loading}) => {
  const [selectedUser, setSelectedUser] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const handleToSelectUser = (login) => {
      setSelectedUser(login);
  }

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    if (selectedUser) {
      onGetUser(selectedUser);
    }
    return () => {
      cleanUser()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser])
  
  useEffect(() => {
    if (!user.length) {
      onGetUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {loading 
      ? <Spinner />
      : (!selectedUser 
        ? 
        <div className={styles.usersWrapper}>
          {currentUsers.map(i => (
          <UserCard key={i.id} {...i} onChangeUser={handleToSelectUser} />))}
          <Pagination 
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            currentPage={currentPage}
            />
        </div>
        : (
        <div className={styles.usersWrapper}>
          <Button btnText='Назад' onClick={handleToSelectUser} />
            <UserCard 
              selectedUser={selectedUser}
              onChangeUser={handleToSelectUser}
              avatar_url={user.avatar_url}
              login={user.login} 
              html_url={user.html_url}
              name={user.name}
              bio={user.bio}
              created={user.created_at}
            />
        </div>
      ))}
    </>
  )}

PropTypes.Main = {
  onGetUsers: PropTypes.func,
  onGetUser: PropTypes.func,
  users: PropTypes.array,
  user: PropTypes.object,
  cleanUser: PropTypes.func,
  loading: PropTypes.bool
}

export default Main;