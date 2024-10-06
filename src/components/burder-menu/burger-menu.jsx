import React, { useState } from 'react';
import './burger-menu.css';

const BurgerMenu = ({ setBurgerMenu, setIsModalOpen }) => {
  const [first, setFirst] = useState(false);
  const [two, setTwo] = useState(false);

  const handleClose = () => {
    setBurgerMenu(false);
    setIsModalOpen(true);
  };
  return (
    <div className="burger-menu-container">
      <div className="burger-menu-nav">
        <div style={{ width: '100%', textAlign: 'end' }}>
          <div
            onClick={() => setBurgerMenu(false)}
            style={{ cursor: 'pointer', fontSize: '20px' }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <div style={{ marginTop: '10px' }}>
          <h2
            onClick={() => setFirst(prev => !prev)}
            style={{
              display: 'flex',
              alignContent: 'center',
              gap: '5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Игры <i class="fa-solid fa-chevron-down"></i>
          </h2>
          {first ? (
            <ul
              style={{
                textTransform: 'uppercase',
                padding: '10px 50px',
                fontSize: '20px',
              }}
            >
              <li>Киберпанк 2077</li>
              <li>Призрачная свобода</li>
            </ul>
          ) : null}
        </div>
        <div style={{ marginTop: '10px' }}>
          <h2
            onClick={() => setTwo(prev => !prev)}
            style={{
              display: 'flex',
              alignContent: 'center',
              gap: '5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Сообщество <i class="fa-solid fa-chevron-down"></i>
          </h2>
          {two ? (
            <ul
              style={{
                textTransform: 'uppercase',
                padding: '10px 50px',
                fontSize: '20px',
              }}
            >
              <li>Форум</li>
              <li>Discord</li>
              <li>ПОЛЕЗНЫЕ МАТЕРИАЛЫ</li>
              <li>Калькулятор способностей</li>
              <li>Игровой буклет</li>
            </ul>
          ) : null}
        </div>
        <div style={{ marginTop: '10px' }}>
          <h2
            style={{
              display: 'flex',
              alignContent: 'center',
              gap: '5px',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Aккаунт
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <a onClick={handleClose} class="cp-btn cp-btn--yellow h6" id="mybtn">
            <span>КУПИТЬ</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
