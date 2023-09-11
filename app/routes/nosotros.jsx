import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta(){
  return([
      {charset:'utf-8'},
      {title:'GuitarLA - Sobre Nosotros'},
      {viewport:'Venta de Guitarras, blog de musica'}
  ]
  )
}



export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'

    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src= {imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis justo ac massa placerat, in viverra ante accumsan. Vestibulum hendrerit nisl at urna molestie sodales. Praesent placerat mi vitae mauris tincidunt, nec volutpat arcu pharetra. Proin feugiat eu sapien sed lacinia. Integer dignissim congue magna, non lobortis eros mattis at. Pellentesque varius orci est, tristique ultrices eros rhoncus et. Cras vel sagittis magna. Nunc tristique, nunc posuere ultricies feugiat, purus ligula tempus nibh, non bibendum tellus lectus non ligula. Mauris augue velit, imperdiet varius turpis vel, congue dignissim nulla. </p>
        </div>

      </div>
    </main>
  )
}


export default Nosotros
