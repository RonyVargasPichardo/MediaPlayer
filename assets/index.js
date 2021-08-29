                            /**         NOTA       */
/*< Si pongo la etiqueta script al principio del body y no al final antes del cierre
    lo recomendable es poner el atributo "defer" antes del src, asi el html carga el DOM 
               completo y luego carga el script al final         >*/

import MediaPlayer from './mediaplayer.js'
import AutoPlay from './plugins/AutoPlay.js';


const video = document.querySelector('video')
const player = new MediaPlayer({el: video, plugins: [
   new AutoPlay()
]});
const btnPlay = document.getElementById('btnPlay')
const btnMute = document.getElementById('btnMute')

btnPlay.onclick = () => {
   player.togglePlay();
}

btnMute.onclick = () =>{
   player.toggleMute();
}