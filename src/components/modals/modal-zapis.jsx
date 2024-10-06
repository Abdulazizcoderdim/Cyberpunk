import './modal-zapis.css';

const ModalZapis = ({ setModalZapis, setIsModalOpen }) => {
  return (
    <div className="container-zapis">
      <div className="modal-zapis">
        <div className="zapis-btn-container">
          <button
            onClick={() => {
              setModalZapis(false), setIsModalOpen(false);
            }}
            class="zapis-btnn"
          >
            ×
          </button>
        </div>
        <div className="zapis-cont">
          <div class="zapis-a-teg">
            <a href="https://epicapps.ru/ru/land/steam/?utm_source=direct&amp;utm_medium=cpc&amp;utm_campaign=steam-cis&amp;utm_content=0&amp;utm_term=---autotargeting&amp;yclid=3913537345617919999">
              <img
                width={'25px'}
                height={'25px'}
                src="https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react//global/steam_icon.svg"
                alt="Steam"
              />
              <h2>Играть бесплатно</h2>
            </a>
          </div>
          <h2>Завести аккаунт</h2>
          <form className="form-zapis">
            <input
              className="input-zapis"
              type="text"
              placeholder="Электронная почта"
            />
            <input className="input-zapis" type="text" placeholder="Пароль" />

            <div className="zapis-text">
              <div className="zapis-around" />
              Присылайте мне новости, опросы и специальные предложения от
              Cybernet Games
            </div>
            <div className="zapis-text">
              <div className="zapis-around" />Я прочитал(a) и принимаю условия
              обслуживания
            </div>

            <button className="zapis-btn" style={{ marginTop: '20px' }}>
              продолжать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalZapis;
