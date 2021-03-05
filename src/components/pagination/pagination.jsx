import React from 'react';

import PropTypes from 'prop-types';

import styles from './pagination.module.scss';
import cn from 'classnames';

const Pagination = ({usersPerPage, totalUsers, paginate, currentPage}) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagination__list}>
        {pageNumbers.map(number => (
          <li 
            onClick={() => paginate(number)}
            className={cn(styles.pagination__list_item, {[styles.pagination__list_item_active]: currentPage === number })}
            key={number}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  )
}

PropTypes.Pagination = {
  usersPerPage: PropTypes.number,
  totalUsers: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number
}

export default Pagination;