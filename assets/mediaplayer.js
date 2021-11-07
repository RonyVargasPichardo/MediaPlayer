
//creacion de clase prototipal
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();//ejecuto la funcion de los plugin automaticamente
}


/* AGREGO FIUNCIONES A MI CLASE MEDIAPLAYER   */

//funciones de play y pausa
MediaPlayer.prototype.play = function(){
    this.media.play();
}
MediaPlayer.prototype.pause = function(){
    this.media.pause();
    console.log(this)
}
MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play();
    } else{
        this.pause();
    }
}

//funciones de mute 
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}
MediaPlayer.prototype.toggleMute = function(){
    if(this.media.muted){
        this.unmute();
    } else {
        this.mute();
    }
}


//inicializo mis plugin con un ciclo 
MediaPlayer.prototype._initPlugins = function (){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}


//exporto mi archivo
export default MediaPlayer;

