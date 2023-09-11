import Navegacion from "./navegacion"

function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor contenido"></div>
        <Navegacion/>
          <p className="copyright">Todos los derechos reservados { new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer
