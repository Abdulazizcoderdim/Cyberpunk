import '../../App.css';
function Header() {
  return (
    <div className="header__bg">
      <video
        poster="https://i.imgur.com/AZBMOGO.jpeg"
        autoPlay="autoplay"
        loop="loop"
        muted="muted"
        playsInline="playsinline"
      >
        <source
          src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_PhL_KV_Animation_1920x1080_AV1.mp4"
          type="video/mp4; codecs=av01.0.05M.08"
        />
        <source
          src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_PhL_KV_Animation_1920x1080_h264.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Header;
