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
      account: 'Principal',
      money: '100000000.00',
      color: 'linear-gradient(89.96deg, #622EE5 0.06%, #172765 99.94%)',
    },
    {
      account: 'Aluguel',
      money: '1600',
      color: 'linear-gradient(135deg, #778899 0%, #172765 100%)',
    },
    {
      account: 'C.C Ed. Suzano',
      money: '450',
      color: 'linear-gradient(135deg, #FF354E 0%, #172765 100%)',
    },
  ];

  return (
    <div className={styles.balance}>
      <div className={styles.add}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="18" fill="url(#paint0_linear)" />
          <path
            d="M18 27C22.9706 27 27 22.9706 27 18C27 13.0294 22.9706 9 18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27Z"
            stroke="#172765"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M14.25 18H21.75"
            stroke="#172765"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 14.25V21.75"
            stroke="#172765"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="36"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.627682" stop-color="#EFEEED" />
              <stop offset="1" stop-color="#E5E4E2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {data.map((el, index) => (
        <div key={index} className={styles.elDiv}>
          <div style={{ background: `${el.color}` }} className={styles.letter}>
            <p>{el.account.substr(0, 1)}</p>
          </div>
          <div>
            <div className={styles.elP}>
              {el.account}{' '}
              <span>
                <HideNumber id={index} />
              </span>
            </div>
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
