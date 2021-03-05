import React from 'react';

import PropTypes from 'prop-types';

import Button from '../button/button';

import styles from './userCard.module.scss';
import cn from 'classnames';

import { formatDateUtility } from '../../utils'

const UserCard = ({
  onChangeUser,
  avatar_url,
  login,
  html_url,
  selectedUser,
  name,
  bio,
  created
  }) => (
    <div className={styles.userCardWrapper}>
      <div className={cn(styles.userDescription,
        {[styles.singleUserDescription]: selectedUser })}
        onClick={() => !selectedUser && onChangeUser(login)}>
          <img className={styles.userImg} src={avatar_url} alt='user logo'/>
          <div className={styles.userName}>
            {login}
            {name && <div className={styles.info}>{name}</div>}
            {bio && <div className={styles.info}>{bio}</div>}
            {created && <div className={styles.info}>{formatDateUtility(created)}</div>}
          </div>
      </div>
      <Button html_url={html_url} btnText='Кнопка' />
    </div>
  );

PropTypes.UserCard = {
  onChangeUser: PropTypes.func,
  avatar_url: PropTypes.string,
  login: PropTypes.string,
  html_url: PropTypes.string,
  selectedUser: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  created: PropTypes.string
}

export default UserCard;