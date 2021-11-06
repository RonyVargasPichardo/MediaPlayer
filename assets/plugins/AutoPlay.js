

//creacion de clase prototipal del primer plugin de mediaplayer el auto play
function AutoPlay(){
}

//le agrego funciones al plugin
AutoPlay.prototype.run = function(player){
    player.mute();
    player.play();
}



//exporto mi plugin
export default AutoPlay;