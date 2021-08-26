                            /**         NOTA       */
/*< Si pongo la etiqueta script al principio del body y no al final antes del cierre
    lo recomendable es poner el atributo "defer" antes del src, asi el html carga el DOM 
               completo y luego carga el script al final         >*/
import MediaPlayer from './mediaplayer.js'

const video = document.querySelector('video')
const player = new MediaPlayer({el: video});
const button = document.querySelector('button')

button.onclick = () => {
   player.togglePlay();
}