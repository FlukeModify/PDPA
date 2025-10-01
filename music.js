window.addEventListener('load', () => {
  const bgm = document.getElementById('bgm');
  bgm.play().catch(() => {
    // ถ้าเบราว์เซอร์บล็อค autoplay
    document.body.addEventListener('click', () => {
      bgm.play();
    }, { once: true });
  });
});