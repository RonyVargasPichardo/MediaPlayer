const video = document.querySelector('video')
const button = document.querySelector('button')

//creacion de clase 
function MediaPlayer(config) {
    this.media = config.el;
}
MediaPlayer.prototype.play = function(){
    this.media.play();
}
MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

//instancio la clase 
const player = new MediaPlayer({el: video});

button.onclick = () => {
    if(video.paused){
            player.play();
    }else{
            player.pause();
        }
}