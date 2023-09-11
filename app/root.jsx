import { useState, useEffect} from 'react'
import{
   Meta,
   Links,
   Outlet,
   Scripts,
   LiveReload,
   useRouteError,
   isRouteErrorResponse,
   Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/_header';
import Footer from '~/components/footer';



//FUNCIONES META
export function meta(){
  return   [ 
    
        { charset: 'utf-8'},
        { title: 'GuitarLA - Remix'},
        { name: "viewport", content: "width=device-width,initial-scale=1"},
       ];
}


//LINKS PARA DARLE ESTILO 
export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin : "true"
        },
        {
            rel: 'stylesheet',
            href : 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap '
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

//APP
export default function App() {
 
    const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];
   const [carrito, setCarrito] = useState(carritoLS);
 
   useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

    const agregarCarrito = guitarra => {
      if(carrito.some(guitarraState => guitarraState.id === guitarra.id) ){
          // Iterar sobre el arreglo, e identificar el elemento duplicado
          const carritoActualizado = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id) {
                //REESCRIBIR LA CANTIDAD
                guitarraState.cantidad = guitarra.cantidad
            }
              return guitarraState
          })
          // AñADIR AL CARRITO
          setCarrito(carritoActualizado)
      }else{
        //  REGISTRO NUEVO, AGREGAR AL CARRITO
        setCarrito([...carrito, guitarra])
      }
    }
    
    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }
        const eliminarGuitarra = id => {
             const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id)
             setCarrito(carritoActualizado)
        }

    return (
        <Document> 
          <Outlet
             context={{
                agregarCarrito,
                carrito,
                actualizarCantidad,
                eliminarGuitarra
             } }
          />
        </Document>   
    )
}

//DOCUMENTOS
function Document({children}){
   
    return (
        <html lang="es">
            <head>
                <Meta /> 
                <Links/>
                
            </head>
           
            <body>
                <Header/> 
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
        
            </body>
        </html>
        
    )
}

/**MANEJO DE ERRORES */
export function ErrorBoundary(){
    const error = useRouteError()
 
    if (isRouteErrorResponse(error)){
        return (
            <Document>
                <p className='error'> {error.status} {error.statusText} </p>
                <Link className='error-enlace' to="/">Tal vez quieras volver a la pagina principal</Link>
            </Document>
        )
    }
}

