import React from 'react';
import styles from './Header.module.css';
import logo from '../Assets/logo.svg';
import search from '../Assets/search.svg';
import bell from '../Assets/bell.svg';
import chat from '../Assets/chat.svg';
import callendar from '../Assets/callendar.svg';
import user from '../Assets/user.svg';
import HideNumber from './CustomComponents/HideNumber';
import Items from './Items';

const Header = () => {
  const [hideDiv, setHideDiv] = React.useState(false);
  const [hideDiv2, setHideDiv2] = React.useState(false);

  function isCopied() {
    setHideDiv(true);
    setTimeout(() => {
      setHideDiv(false);
    }, 3000);
  }

  function isCopied2() {
    setHideDiv2(true);
    setTimeout(() => {
      setHideDiv2(false);
    }, 3000);
  }

  const data = [
    {
      account: 'Conta Corrente',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 00000000000000000020-1',
    },
    {
      account: 'Conta Poupança',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 01010010001000010000-2',
    },
    {
      account: 'C.C Ed. Suzano',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 000000000000015-1',
    },
    {
      account: 'C.C Condomínio Guilhermo',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 00000000000000017-1',
    },
    {
      account: 'C.C. Residencial Figma Ômega',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 0000000000000000019-1',
    },
    {
      account: 'C.C. Ed. Suzano',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 00000000000000017-1',
    },
    {
      account: 'C.C Condomínio Guilhermo',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 00000000000000017-1',
    },
    {
      account: 'C.C. Residencial Figma Ômega',
      ag: 'Ag. 00005-1',
      cc: 'C.C. 00000000000000017-1',
    },
  ];

  const [hide, setHide] = React.useState(false);

  // mostra ou esconde a div do userAnotherInformations
  function handleClick() {
    setHide(!hide);
  }

  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);

  //para primeira referencia
  function handleEnterMouse1() {
    ref1.current.style.display = 'flex';
  }
  function handleLeaveMouse1() {
    ref1.current.style.display = 'none';
  }
  //para segunda referencia
  function handleEnterMouse2() {
    ref2.current.style.display = 'flex';
  }
  function handleLeaveMouse2() {
    ref2.current.style.display = 'none';
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftContent}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo da página" />
        </div>
        <div className={styles.hr} />
        <div className={styles.user}>
          <div className={styles.userData}>
            <p className={styles.userName}>
              Edmilson Suzano Coutinho Júnior{' '}
              <span
                onClick={handleClick}
                className={styles.userAnotherInformations}
              >
                {hide && (
                  <div className={styles.userAIDiv}>
                    {data.map((el, index) => (
                      <div key={index} className={styles.userAIContent}>
                        <div>
                          <p className={styles.userAIAccount}>{el.account}</p>
                        </div>
                        <div className={styles.userAIP}>
                          <p>{el.ag}</p>
                          <p>{el.cc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </span>
            </p>
            <p className={styles.userAccount}>
              <p
                onMouseEnter={handleEnterMouse1}
                onMouseLeave={handleLeaveMouse1}
              >
                Ag. 00005-1
                <span
                  onClick={isCopied}
                  ref={ref1}
                  className={styles.cloudSpan}
                >
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4997 11.4997V2.49963H4.49923"
                        stroke="#172765"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4995 4.49969H2.49911V13.4997H11.4995V4.49969Z"
                        stroke="#172765"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Copiar</p>{' '}
                </span>
              </p>
              {hideDiv && (
                <div className={styles.hideDiv}>
                  <p>Número da agência copiado.</p>
                </div>
              )}
              <p
                onMouseEnter={handleEnterMouse2}
                onMouseLeave={handleLeaveMouse2}
              >
                C.C. 00000000000000000020-1{' '}
                <span
                  onClick={isCopied2}
                  ref={ref2}
                  className={styles.cloudSpan}
                >
                  <div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4997 11.4997V2.49963H4.49923"
                        stroke="#172765"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4995 4.49969H2.49911V13.4997H11.4995V4.49969Z"
                        stroke="#172765"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <p>Copiar</p>{' '}
                </span>
              </p>
              {hideDiv2 && (
                <div className={styles.hideDiv}>
                  <p>Número da conta copiado.</p>
                </div>
              )}
            </p>
          </div>
          <div className={styles.currentMoney}>
            <p>
              Saldo <HideNumber id="pMoney" />
            </p>
            <p id={'pMoney'} className={styles.money}>
              R$100.000.000,00
            </p>
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navDivUl}>
          <li className={styles.inputText}>
            <input
              placeholder="Pesquisar"
              type="search"
              name="searchContent"
              id="searchContent"
            />
            <img src={search} alt="Pesquisar" />
          </li>
          <li className={styles.userOptions}>
            <div className={styles.userOptionsDiv}>
              <img src={chat} alt="Bate papo" />
              <img src={callendar} alt="Calendário" />
              <img src={bell} alt="Sino" />
            </div>
          </li>
          <li style={{ marginLeft: '2px' }}>
            <img src={user} alt="Usuário" />
          </li>
        </ul>
      </nav>
      <div>
        <Items />
      </div>
    </header>
  );
};

export default Header;
