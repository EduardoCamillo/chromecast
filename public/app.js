console.warn("CORINTIAS!")
const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

var url = "https://www.eitvplay.com.br/videos/36/playlist.m3u8?format=auto"

function getMediaId(mediaId){
    console.warn(mediaId.id);
}

// $.ajax({
//     url: url,
//     method: 'GET',
//   }).done(function  (data, textStatus, jqXHR) {
//     console.log( "success", data.media.id);
//     console.log( "success textStatus:" , textStatus);
//     console.log( "success jqXHR:" , jqXHR);
//     getMediaId(data.media)
//   }).fail(function(data, textStatus) {
//     if (data.status == 403) {
//       context.stop();
//     }
//   });
playerManager.setMessageInterceptor(cast.framework.messages.MessageType.LOAD, loadRequestData => {
    loadRequestData.media = url


});

console.log(typeof(teste))
//console.warn(teste.data.media.id)

context.start();


