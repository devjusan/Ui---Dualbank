import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './InputDate.module.css';

const InputDate = (props) => {
  const [startDate, setStartDate] = React.useState(new Date(2020, 8, 13));
  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  let theDate =
    startDate &&
    `${
      startDate.getDate() < 10 ? `0` + startDate.getDate() : startDate.getDate()
    } / ${
      startDate.getMonth() < 10
        ? `0` + startDate.getMonth()
        : startDate.getMonth()
    } / ${startDate.getFullYear()}`;

  return (
    <div className={styles.date}>
      {' '}
      <div className={styles.div}>
        <p className={styles.p1}>Data do Saldo</p>
        <p className={styles.p2}>{startDate ? theDate : '07 / 12 / 2020'}</p>
      </div>
      <DatePicker
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        minDate={new Date(2020, 8, 1)}
        maxDate={new Date(2020, 11, 13)}
        customInput={<ExampleCustomInput />}
      />
    </div>
  );
};

export default InputDate;
