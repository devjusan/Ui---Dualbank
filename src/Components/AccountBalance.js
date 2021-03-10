import React from 'react';
import styles from './AccountBalance.module.css';
import HideNumber from './CustomComponents/HideNumber';

const AccountBalance = () => {
  function formatCurrent(current) {
    const number = Number(current);

    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const data = [
    {
      account: 'Conta Corrente',
      money: '100000000.00',
    },
    {
      account: 'Conta Poupança',
      money: '1000',
    },
    {
      account: 'C.C Ed. Suzano',
      money: '1000.20',
    },
    {
      account: 'C.C Condomínio Guilhermo',
      money: '20000.1',
    },
    {
      account: 'C.C. Residencial Figma Ômega',
      money: '-0.06',
    },
    {
      account: 'C.C. Ed. Suzano',
      money: '1000.20',
    },
    {
      account: 'C.C Condomínio Guilhermo',
      money: '20000.1',
    },
    {
      account: 'C.C. Residencial Figma Ômega',
      money: '-0.06',
    },
  ];

  return (
    <div className={styles.balance}>
      {data.map((el, index) => (
        <div key={index} className={styles.elDiv}>
          <div>
            <p className={styles.elP}>
              {el.account}{' '}
              <span>
                <HideNumber id={index} />
              </span>
            </p>
            <p
              id={index}
              style={{
                color: `${Number(el.money) > 0 ? '#69D531' : '#FF354E'}`,
              }}
              className={styles.elNumber}
            >
              {formatCurrent(el.money)}
            </p>
          </div>
          <hr className={styles.separator} />
        </div>
      ))}
    </div>
  );
};

export default AccountBalance;
