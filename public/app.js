window['__onGCastApiAvailable'] = function(isAvailable) {
    if (isAvailable) {
      initializeCastApi();
    }
  };

  function initializeCastApi() {
    const context = cast.framework.CastContext.getInstance();
    context.setOptions({
      receiverApplicationId: '7BE3B01C',
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
  }

  const castButton = document.getElementById("castButton");
  castButton.addEventListener("click", () => {
    const castContext = cast.framework.CastContext.getInstance();
    castContext.requestSession().then(() => {
      console.log("Conectado ao Chromecast!");
    }).catch((error) => {
      console.log("Erro ao conectar:", error);
    });
  });

  function loadMedia() {
    console.warn("botao ativo")
    const mediaInfo = new chrome.cast.media.MediaInfo("https://www.eitvplay.com.br/videos/36", "video/mp4");
    const request = new chrome.cast.media.LoadRequest(mediaInfo);

    cast.framework.CastContext.getInstance().getCurrentSession()
      .loadMedia(request)
      .then(() => {
        console.log("Mídia carregada com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao carregar mídia:", error);
      });
  }

  function pauseMedia() {
    const session = cast.framework.CastContext.getInstance().getCurrentSession();
    if (session) {
      const media = session.getMediaSession();
      media.pause();
    }
  }

  function playMedia() {
    const session = cast.framework.CastContext.getInstance().getCurrentSession();
    if (session) {
      const media = session.getMediaSession();
      media.play();
    }
  }

  function stopCasting() {
    const castContext = cast.framework.CastContext.getInstance();
    castContext.endCurrentSession(true);
  }