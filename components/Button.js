import React from 'react';
import styles from './Button.module.scss';

export default function Button({ children, onClick }) {
  return (
    <button className={styles['my-btn']} onClick={onClick}>
      {children}
    </button>
  );
}