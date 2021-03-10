import React from 'react';
import Account from './Account';
import styles from './Balance.module.css';
import Callendar from './Callendar';
import UpdateBalance from './UpdateBalance';

const Balance = () => {
  return (
    <div className={styles.balance}>
      <Account />
      <Callendar />
      <UpdateBalance />
    </div>
  );
};

export default Balance;
