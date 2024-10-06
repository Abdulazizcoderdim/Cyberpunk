import React from 'react';
import './lang.css';

const Lang = ({ setLang }) => {
  const items = [
    { name: 'АНГЛИЙСКИЙ' }, // English
    { name: 'РОССИЯ' }, // Russia
    { name: 'НЕМЕЦКИЙ' }, // German
    { name: 'ПОЛЬСКИЙ' }, // Polish
    { name: 'ПОРТУГАЛЬСКИЙ (BR)' }, // Portuguese (BR)
    { name: 'ФРАНЦУЗСКИЙ' }, // French
    { name: 'ИСПАНСКИЙ' }, // Spanish
    { name: 'ИСПАНСКИЙ (MX)' }, // Spanish (MX)
    { name: 'ИТАЛЬЯНСКИЙ' }, // Italian
    { name: 'ЯПОНСКИЙ' }, // Japanese
    { name: 'КОРЕЙСКИЙ' }, // Korean
    { name: 'УПРОЩЕННЫЙ К' }, // Simplified Chinese
    { name: 'ТРАДИЦИОННЫЙ К' }, // Traditional Chinese
    { name: 'АРАБСКИЙ' }, // Arabic
  ];

  return (
    <div className="lang-menu-container">
      <div className="lang-menu-nav">
        <div style={{ width: '100%', textAlign: 'end' }}>
          <div
            onClick={() => setLang(false)}
            style={{ cursor: 'pointer', fontSize: '20px' }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                marginTop: '10px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontSize: '25px',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lang;
