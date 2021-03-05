import React from 'react'

import PropTypes from 'prop-types';

import styles from './button.module.scss';
import cn from 'classnames';

const Button = ({html_url, btnText, onClick}) => (
  <a 
    onClick={() => btnText === 'Назад' && onClick('')}
    className={cn(styles.button, {[styles.buttonBack]: btnText === 'Назад' })}
    href={html_url}
    target="_blank"
    rel="noreferrer"
  >
  {btnText}
  </a>
);

PropTypes.Button = {
  html_url: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func,
  classname: PropTypes.string
}

export default Button;