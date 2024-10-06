import './modal-cbroc.css';

const ModalCbroc = ({ setModalCbroc, setIsModalOpen }) => {
  return (
    <div className="container-cbroc">
      <div className="modal-cbroc">
        <div className="cbroc-btn-container">
          <button
            onClick={() => {
              setModalCbroc(false), setIsModalOpen(false);
            }}
            class="cbroc-btnn"
          >
            ×
          </button>
        </div>
        <div class="cbroc-a-teg">
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
        <h2>Сбросить пароль</h2>
        <p>
          Чтобы получить код безопасности, введите адрес электронной почты вашей
          учетной записи Cybernet Games.
        </p>
        <form className="form-cbroc">
          <input
            className="input-cbroc"
            type="text"
            placeholder="введите свой адрес электронной почты"
          />

          <button className="cbroc-btn" style={{ marginTop: '20px' }}>
            продолжать
          </button>
          <button onClick={() => setModalCbroc(false)} className="cbroc-btn">
            вернуться на страницу входа
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalCbroc;
