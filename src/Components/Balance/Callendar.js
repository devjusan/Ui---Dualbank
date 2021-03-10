import React, { useState } from 'react';
import styles from './Callendar.module.css';

const Callendar = () => {
  const [date, setDate] = useState('07/12/2020');

  return (
    <div className={styles.date}>
      <div>
        <p className={styles.p1}>Data do Saldo</p>
        <p className={styles.p2}>{date}</p>
      </div>
      <div className={styles.callendar}>
        <input
          value={date}
          onChange={(date) => setDate(date.target.value)}
          type="date"
          name="date"
          id="date"
        />
      </div>
    </div>
  );
};

export default Callendar;
